import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGraphUpArrow, BsInfoCircle } from "react-icons/bs";
import axios from "../helper/axios";
import AppointmentForm from "../components/AppointmentForm";
import MapLocation from "../components/MapLocation";
import MoreDetails from "../components/MoreDetails.jsx";
import ReserveShares from "../components/ReserveShares";

const ViewProperty = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { id } = useParams();
  const [property, setProperty] = useState([]);

  const getPropertyData = async () => {
    try {
      const resp = await axios.get(`/property-data/${id}`);
      setProperty(resp.data.propertyData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPropertyData();
  }, []);
  // oppointment form popup
  const [openPopup, setOpenPopup] = useState(false);
  // reserve shares modal
  const [reserveSharesModal, setReserveSharesModal] = useState(false);

  // add to cart
  const handleAddToCart = async (id) => {
    const resp = await axios.post(
      "/add-to-cart",
      { propertyId: id },
      { headers: { authorization: token } }
    );
  };

  // get cart data
  const getCartData = async () => {
    try {
      const resp = await axios.get("/get-cart-data", {
        headers: { authorization: token },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCartData();
  }, []);

  return (
    <main className="w-11/12 mx-auto">
      <section className="mt-5 mb-[calc(20px+24px+10px)]">
        <div className="mb-2.5">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-cyan-400 hover:text-cyan-500 font-semibold duration-200"
          >
            <MdKeyboardArrowDown className="rotate-90 text-xl" />
            <span>Back to listing</span>
          </button>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-0 md:gap-2.5 w-full h-[50vh]">
          <div
            style={{
              backgroundImage: `url(https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1838/1000px_main_9kHJwMO4Q7mRt5rx39Ft6sn3x5wyyAJJeOJ2SLA1.jpeg)`,
            }}
            className="bg-cover bg-center w-full h-full rounded-lg col-span-2 row-span-2"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/118/images/1895/1067px_main_L9AgXo91mhgWq5YfFiD1haXldWAwe20CnJmLzuv5.jpeg)`,
            }}
            className="bg-cover bg-center w-full h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1839/1000px_main_IbWY4CPRwLkoP8Ex2DQxiDeVSfNCQRjuvaaoRgxI.jpeg)`,
            }}
            className="bg-cover bg-center w-full h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1839/1000px_main_IbWY4CPRwLkoP8Ex2DQxiDeVSfNCQRjuvaaoRgxI.jpeg)`,
            }}
            className="bg-cover bg-center w-full h-full rounded-lg"
          ></div>
          <div
            style={{
              backgroundImage: `url(https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/118/images/1895/1067px_main_L9AgXo91mhgWq5YfFiD1haXldWAwe20CnJmLzuv5.jpeg)`,
            }}
            className="bg-cover bg-center w-full h-full rounded-lg"
          ></div>
        </section>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-5 mb-[calc(20px+24px+10px)]">
        <section className="col-span-3 w-full space-y-10">
          <section className="divide-y w-full lg:w-11/12">
            <div className="pb-5">
              <h1 className="font-serif text-slate-700 text-2xl">
                {property.city || "Plam Beach, Navi Mumbai"}
              </h1>
              <p className="divide-x divide-black text-slate-700 text-sm">
                <span className="pr-2">{property.bedroom || "---"} bed</span>
                <span className="px-2">{property.bathroom || "---"} bath</span>
                <span className="px-2">
                  {new Intl.NumberFormat("en").format(property.area)} sq.ft
                </span>
                <span className="pl-2">
                  {(property.street, property.landmark || "Business Bay")}
                </span>
              </p>
            </div>
            <div className="py-5 space-y-2.5">
              <div className="flex items-center space-x-2.5">
                <svg width="30" height="30" viewBox="0 0 66 66" fill="none">
                  <path
                    fill="#5B9D3B"
                    d="M63.15405,21.6983C58.70056,9.06049,46.66138,0,32.5,0c-3.37939,0-6.63782,0.5166-9.70184,1.47375V21.6983H63.15405z"
                  ></path>
                  <path
                    fill="#FFFFFF"
                    d="M22.79816,21.6983v21.68567h40.32806C64.33588,39.98053,65,36.31842,65,32.5c0-3.7879-0.65472-7.42133-1.84595-10.8017H22.79816z"
                  ></path>
                  <path
                    fill="#121C30"
                    d="M22.79816,63.52625C25.86218,64.4834,29.12061,65,32.5,65c14.13086,0,26.14966-9.02087,30.62622-21.61603H22.79816V63.52625z"
                  ></path>
                  <path
                    fill="#B81942"
                    d="M22.79816,21.6983V1.47375C9.58795,5.60034,0,17.93011,0,32.5s9.58795,26.89966,22.79816,31.02625V43.38397V21.6983z"
                  ></path>
                </svg>
                <p className="flex flex-col leading-tight text-slate-700">
                  <span>Dubai, United Arab Emirates</span>
                  <span className="text-sm text-slate-500">
                    A mature real estate market with a high return on investment
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2.5">
                <BsGraphUpArrow className="w-[25px] h-[25px]" />
                <p className="flex flex-col leading-tight text-slate-700">
                  <span>7.37% annual gross yield</span>
                  <span className="text-sm text-slate-500">
                    With a net yield of 5.59% and a price per square foot of INR
                    2,320
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-5">
              <div className="border border-slate-300 p-2.5 rounded-md flex items-center space-x-2.5 w-fit">
                <span className="text-white bg-slate-900 rounded-md p-2.5">
                  <BsInfoCircle />
                </span>
                <p className="text-slate-500 text-xs">
                  All information on this page is from the date that the
                  property closed funding
                </p>
              </div>
            </div>
          </section>
          <section className="text-slate-700 space-y-2 w-full lg:w-11/12">
            <h1 className="text-xl font-serif">Property Overview</h1>
            <p className="text-sm leading-snug break-all">
              DuoFraction is offering an opportunity to invest in a 1-bedroom
              apartment in The Pad, a sought-after complex in Business Bay.
              Business Bay has confirmed Dubai’s stature as the region’s
              business capital since its first towers were handed over in 2008.
              Built around the Dubai Water Canal, the district now consists of
              160+ towers from commercial and residential towers, to 4- and
              5-star hotels. The Pad is located in the heart of Business Bay, on
              the Burj Khalifa side of the Dubai Water Canal. The development
              was handed over in 2021 by Omniyat and features smart-home and
              automation systems.
            </p>
          </section>
          <section className="text-slate-700 space-y-2 w-full lg:w-11/12">
            <h1 className="text-xl font-serif">Financials</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
              <div className="space-y-1.5">
                <p>Property cost</p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Property price</span>
                  <span className="text-slate-800">
                    <span className="text-xs font-semibold">INR</span> 1,547,492
                  </span>
                </p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Transaction costs</span>
                  <span className="text-slate-800">
                    <span className="text-xs font-semibold">INR</span> 200,661
                  </span>
                </p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>DuoFraction fee</span>
                  <span className="text-slate-800">1.5%</span>
                </p>
                <div className="w-full h-px bg-slate-300"></div>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Investment cost</span>
                  <span className="text-cyan-500 font-semibold">
                    <span className="text-xs">INR</span> 1,748,153
                  </span>
                </p>
              </div>
              <div className="space-y-1.5">
                <p>Rental income</p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Projected gross rent</span>
                  <span className="text-slate-800">
                    <span className="text-xs font-semibold">INR</span> 114,000
                  </span>
                </p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Service charges</span>
                  <span className="text-slate-800">
                    <span className="text-xs font-semibold">INR</span> 10,006
                  </span>
                </p>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Mgmt. and maintenance</span>
                  <span className="text-slate-800">
                    <span className="text-xs font-semibold">INR</span> 17,550
                  </span>
                </p>
                <div className="w-full h-px bg-slate-300"></div>
                <p className="text-sm flex items-center justify-between text-slate-500">
                  <span>Annual net income</span>
                  <span className="text-cyan-500 font-semibold">
                    <span className="text-xs">INR</span> 86,444
                  </span>
                </p>
              </div>
            </div>
          </section>
          <section className="text-slate-700 w-full lg:w-11/12">
            <h1 className="text-xl font-serif">Amenities</h1>
            <div className="flex flex-wrap">
              {(
                (property.aminities?.length && property.aminities) || [
                  "Gym",
                  "Restaurant",
                  "Pool",
                  "Supermarket",
                ]
              ).map((i, j) => (
                <p
                  key={j}
                  className="flex items-center w-fit mr-2 mt-2 space-x-1"
                >
                  <span className="bg-cyan-100 border border-cyan-200 rounded-md px-2 py-1">
                    {i[0].toUpperCase() + i.substring(1).toLowerCase()}
                  </span>
                </p>
              ))}
            </div>
          </section>
          <section className="text-slate-700 w-full lg:w-11/12">
            <h1 className="text-xl font-serif mb-2">More details</h1>
            <MoreDetails data={property} />
          </section>
          <section>
            <h1 className="text-xl font-serif mb-2">Additional Details</h1>
            <p className="p-3">{property.additionalDetails || "---"}</p>
          </section>
          <section>
            <h1 className="text-xl font-serif mb-2">Why Invest Here</h1>
            <p className="p-3">
              {"---" ||
                property?.whyInvestHere.map((ele, i) => {
                  return <li key={i}>{ele}</li>;
                })}
            </p>
          </section>
          <section>
            {/* {console.log(property.nearbyPlaces)} */}
            <h1 className="text-xl font-serif mb-2">Near By Places</h1>
            <p className="p-3">{property?.nearbyPlaces || "---"}</p>
          </section>
          <MapLocation />
        </section>

        <section className="col-span-2 w-full -order-1 lg:order-none mb-[calc(20px+24px+10px)] lg:mb-0">
          <section className="sticky top-[calc(20px+24px+10px+64px)] ml-0 lg:ml-auto w-full lg:w-11/12 p-5 flex flex-col items-center border border-slate-200 text-slate-700 space-y-2.5 rounded-lg">
            <div className="text-center">
              <p className="font-serif">Price/Share</p>
              <p className="text-cyan-500 font-semibold">
                Price
                <span className="text-xl ml-1 font-normal">
                  ₹{new Intl.NumberFormat("en").format(property.perSharePrice)}
                  <span className="text-base">/share</span>
                </span>
              </p>
            </div>
            <div className="w-full text-sm space-y-1">
              <p className="w-full h-1.5 bg-cyan-400 rounded-full"></p>
              <p>100% funded</p>
            </div>
            <div className="bg-slate-100 rounded-md p-2.5 space-y-2.5 w-full">
              <p className="text-sm flex items-center justify-between text-slate-500">
                <span className="">Seller type</span>
                <span className="text-slate-700 capitalize">
                  {property.sellerType || "---"}
                </span>
              </p>
              <p className="text-sm flex items-center justify-between text-slate-500">
                <span className="">Seller name</span>
                <span className="text-slate-700 capitalize">
                  {property.sellerName || "---"}
                </span>
              </p>
              <p className="text-sm flex items-center justify-between text-slate-500">
                <span className="">Total shares</span>
                <span className="text-slate-700">
                  {property.totalShares || "---"}
                </span>
              </p>
              <p className="text-sm flex items-center justify-between text-slate-500">
                <span className="">Available shares</span>
                {property.availableShares <= 0 ? (
                  <span className="text-red-500">Out Of Stock</span>
                ) : (
                  <span className="text-slate-700">
                    {property.availableShares || "---"}
                  </span>
                )}
              </p>
              <p className="text-sm flex items-center justify-between text-slate-500">
                <span className="">Posted on</span>
                <span className="text-slate-700">
                  {property?.postedOn || "--/--/--"}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center space-x-0 sm:space-x-2.5 w-full">
              <button
                onClick={() => setOpenPopup(!openPopup)}
                className="px-5 py-1 mt-2.5 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm"
              >
                Book site visit
              </button>
              {
                <button
                  onClick={() => setReserveSharesModal(!reserveSharesModal)}
                  className="px-5 py-1 mt-2.5 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm disabled:cursor-not-allowed"
                  disabled={property.availableShares <= 0}
                >
                  Reserve shares
                </button>
              }
              <button
                className="px-5 py-1 mt-2.5 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm"
                onClick={() => {
                  handleAddToCart(property._id);
                }}
              >
                Add to cart
              </button>
            </div>
          </section>
        </section>
      </section>
      <AppointmentForm
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        sellerId={property.sellerId}
        propertyId={property._id}
      />
      <ReserveShares
        reserveSharesModal={reserveSharesModal}
        setReserveSharesModal={setReserveSharesModal}
        getPropertyData={getPropertyData}
        property={property}
        totalShares={property.totalShares}
        availableShares={property.availableShares}
        perSharePrice={property.perSharePrice}
      />
    </main>
  );
};

export default ViewProperty;
