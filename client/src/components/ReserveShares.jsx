import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { TextField } from "@mui/material";
import axios from "../helper/axios";
import { loadStripe } from "@stripe/stripe-js";
import { ImSpinner3 } from "react-icons/im";

const ReserveShares = ({
  reserveSharesModal,
  setReserveSharesModal,
  getPropertyData,
  property,
  perSharePrice,
}) => {
  const token = localStorage.getItem("token");
  // form
  const [reserveShareForm, setReserveShareForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    noOfShares: "",
  });

  // payment button status
  const [paymentStatus, setPaymentStatus] = useState(false);

  //handle inputs
  const handleInputs = (param) => (e) => {
    setReserveShareForm({ ...reserveShareForm, [param]: e.target.value });
  };

  // //update shares
  const updateShares = async (id) => {
    console.log(reserveShareForm);
    const sharesData = { noOfShares: reserveShareForm.noOfShares };
    // console.log(reserveShareForm.noOfShares);
    await axios
      .patch(`/update-shares/${id}`, sharesData)
      .then((response) => {
        console.log("response => ", response);
        getPropertyData();
        setReserveSharesModal(false);
      })
      .catch((err) => {
        console.log("err => ", err);
        getPropertyData();
      });
  };

  // payment handler
  const [redirectLoading, setRedirectLoading] = useState(false);
  const paymentHandler = async (e, id) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_STRIPE_PUBLISHED_KEY);

    try {
      setRedirectLoading(true);
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHED_KEY
      );
      console.log(stripe);
      const amount = perSharePrice * reserveShareForm.noOfShares;
      console.log(amount);
      const response = await axios.post("/create-payment", { amount: amount });
      console.log("stripe response", response);

      if (response.data.urlToRedirect) {
        window.location.href = response.data.urlToRedirect;
        setRedirectLoading(false);
        updateShares(id);
      } else {
        setReserveSharesModal(!reserveSharesModal);
        setReserveShareForm({
          noOfShares: "",
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
        });
        setPaymentStatus(false);
      }

      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error);
      }
      setRedirectLoading(false);
    } catch (err) {
      console.log("err", err);
      setRedirectLoading(false);
    }
  };

  useEffect(() => {
    getPropertyData();
  }, [updateShares]);

  useEffect(() => {
    getPropertyData();
  }, [updateShares]);

  if (!property) {
    return <p>.</p>;
  }
  return (
    <main
      className={`${
        reserveSharesModal ? "visible" : "invisible"
      } z-20 fixed top-0 left-0 w-full h-full bg-black/75 grid place-items-center`}
    >
      <section
        className={` bg-[url('https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1838/1000px_main_9kHJwMO4Q7mRt5rx39Ft6sn3x5wyyAJJeOJ2SLA1.jpeg')] bg-cover bg-center rounded-xl overflow-hidden text-slate-700 duration-200 w-100 ${
          reserveSharesModal ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <section className="p-5 bg-white/75">
          <header className="flex justify-between gap-10 mb-5">
            <span className="text-xl">Reserve shares</span>
            <FaWindowClose
              className="text-2xl cursor-pointer text-red-500 hover:text-red-600 duration-200"
              onClick={() => {
                setReserveSharesModal(!reserveSharesModal);
                setReserveShareForm({
                  noOfShares: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  contact: "",
                });
                setPaymentStatus(false);
              }}
            />
          </header>
          <form className="space-y-5">
            <div className="flex space-x-2.5">
              <TextField
                size="small"
                type="text"
                variant="outlined"
                sx={{ width: "100%" }}
                id="firstName"
                name="firstName"
                label="First name"
                value={reserveShareForm.firstName}
                onChange={handleInputs("firstName")}
                spellCheck="false"
              />
              <TextField
                size="small"
                type="text"
                variant="outlined"
                sx={{ width: "100%" }}
                id="lastName"
                name="lastName"
                label="Last name"
                value={reserveShareForm.lastName}
                onChange={handleInputs("lastName")}
                spellCheck="false"
              />
            </div>
            <TextField
              size="small"
              type="text"
              variant="outlined"
              sx={{ width: "100%" }}
              id="email"
              name="email"
              label="Email address"
              value={reserveShareForm.email}
              onChange={handleInputs("email")}
              spellCheck="false"
            />
            <TextField
              size="small"
              type="number"
              variant="outlined"
              sx={{ width: "100%" }}
              id="contact"
              name="contact"
              label="Contact number"
              value={reserveShareForm.contact}
              onChange={handleInputs("contact")}
              spellCheck="false"
            />
            <div className="space-y-5">
              <p className="text-slate-900 mb-1.5">
                How many shares do you want to reserve?*
              </p>
              <TextField
                size="small"
                type="number"
                variant="outlined"
                sx={{ width: "100%" }}
                id="noOfShares"
                name="noOfShares"
                label="Number of shares"
                value={reserveShareForm.noOfShares}
                onChange={handleInputs("noOfShares")}
                spellCheck="false"
                disabled={paymentStatus === true}
              />
            </div>

            <section className="flex justify-center items-center">
              <button
                className="bg-cyan-400 hover:bg-cyan-500 duration-200 px-8 pt-1.5 pb-[7px] rounded-md text-white w-full border-b-2 border-b-cyan-500 hover:border-b-cyan-600"
                onClick={(e) => paymentHandler(e, property._id)}
              >
                {redirectLoading ? (
                  <p>
                    <ImSpinner3 className="animate-spin m-auto text-black text-2xl" />
                  </p>
                ) : (
                  <p>Proceed to payment</p>
                )}
              </button>
            </section>
          </form>
        </section>
      </section>
    </main>
  );
};

export default ReserveShares;
