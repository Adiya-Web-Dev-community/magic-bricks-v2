import { TextField } from "@mui/material";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "../helper/axios";
import Calendar from "./Calendar";

const AppointmentForm = ({ openPopup, setOpenPopup, sellerId, propertyId }) => {
  const [booknowForm, setBookNowForm] = useState({
    name: "",
    email: "",
    contact: "",
  });
  //handle inputs
  const handleInputs = (param) => (e) => {
    setBookNowForm({ ...booknowForm, [param]: e.target.value });
  };

  // // handle book now
  // const handleBookNow = async (e) => {
  //   e.preventDefault();
  //   console.log(booknowForm);

  //   const data = {
  //     ...booknowForm,
  //     sellerId: sellerId,
  //     propertyId: propertyId,
  //   };
  //   console.log(data);
  //   try {
  //     toast.loading("Please wait");
  //     const resp = await axios.post("/book-site-visit", data);
  //     if (resp.data.success) {
  //       toast.dismiss();
  //       setOpenPopup(false);
  //       toast.success(resp.data.message);
  //     } else {
  //       toast.dismiss();
  //       console.log(resp.data.message);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <main
      className={`${
        openPopup ? "visible" : "invisible"
      } z-20 fixed top-0 left-0 w-full h-full bg-black/75 grid place-items-center`}
    >
      <section
        className={`md:w-[40rem] h-[35rem] overflow-y-auto bg-[url('https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1838/1000px_main_9kHJwMO4Q7mRt5rx39Ft6sn3x5wyyAJJeOJ2SLA1.jpeg')] bg-cover bg-center rounded-xl overflow-hidden text-slate-700 duration-200 w-full sm:w-96 ${
          openPopup ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <section className="p-5 bg-white/75">
          <h1 className="text-center text-lg mb-5 flex justify-between">
            <span className="text-xl">Book appointment</span>
            <FaWindowClose
              className="text-2xl cursor-pointer text-red-500 hover:text-red-600 duration-200"
              onClick={() => setOpenPopup(!openPopup)}
            />
          </h1>
          <div className="space-y-5">
            <section>
              <TextField
                size="small"
                type="text"
                variant="outlined"
                sx={{ width: "100%" }}
                id="name"
                name="name"
                label="Full name"
                value={booknowForm.name}
                onChange={handleInputs("name")}
                spellCheck="false"
              />
            </section>
            <section>
              <TextField
                size="small"
                type="text"
                variant="outlined"
                sx={{ width: "100%" }}
                id="email"
                name="email"
                label="Email address"
                value={booknowForm.email}
                onChange={handleInputs("email")}
                spellCheck="false"
              />
            </section>
            <section>
              <TextField
                size="small"
                type="number"
                variant="outlined"
                sx={{ width: "100%" }}
                id="contact"
                name="contact"
                label="Contact number"
                value={booknowForm.contact}
                onChange={handleInputs("contact")}
                spellCheck="false"
              />
            </section>
            <section className="flex space-x-2.5">
              <Calendar
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                sellerId={sellerId}
                propertyId={propertyId}
                booknowForm={booknowForm}
                setBookNowForm={setBookNowForm}
              />
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AppointmentForm;
