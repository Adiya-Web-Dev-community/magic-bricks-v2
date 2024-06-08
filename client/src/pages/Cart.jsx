// https://www.magicbricks.com/owner-property-for-sale-in-pune-pppfs
import { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import axios from "../helper/axios";

const Cart = ({ setOpenCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  // get data
  const [cart, setCart] = useState([]);
  const getCartData = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get("/get-cart-data", {
        headers: { authorization: token },
      });
      console.log("resp=>", resp);
      setCart(resp?.data?.cart || []);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <main>
      <section className="h-16 shadow flex items-center justify-between px-5 lg:px-10 text-slate-700 sticky z-20 top-0 bg-white">
        <div className="flex items-center text-xl">
          <PiShoppingCartSimpleLight className="text-3xl mr-1" />
          <span>Cart</span>
        </div>
        <FaWindowClose
          onClick={() => setOpenCart(false)}
          className="text-red-500 text-3xl cursor-pointer"
        />
      </section>
      <main className="py-10 space-y-5 flex flex-col items-center lg:items-start">
        {isLoading ? (
          <div className="w-full flex justify-center">
            <ImSpinner9 className="animate-spin text-9xl text-gray-200 mt-10" />
          </div>
        ) : cart.length ? (
          <>
            {cart.map((property, j) => (
              <section
                key={j}
                className="flex shadow rounded-xl w-fit ml-0 lg:ml-10 bg-white overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row p-5 space-x-0 space-y-5 lg:space-x-5 lg:space-y-0">
                  <div className="relative">
                    <Swiper
                      loop={true}
                      speed={500}
                      slidesPerView={1}
                      initialSlide={0}
                      spaceBetween={0}
                      modules={[Navigation]}
                      navigation={true}
                      className="w-72 h-52 bg-slate-300 rounded-xl"
                    >
                      {property.imgArr.map((i, j) => (
                        <SwiperSlide
                          key={j}
                          style={{ backgroundImage: `url(${i})` }}
                          className="bg-cover"
                        ></SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="block lg:hidden absolute bottom-2.5 right-2.5 z-10 space-x-2">
                      <button className="px-3 py-1 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm">
                        Contact owner
                      </button>
                      <button className="px-3 py-1 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm">
                        Buy now
                      </button>
                    </div>
                    <p className="absolute top-2.5 right-2.5 z-10 flex flex-col lg:hidden text-center backdrop-blur-sm bg-white/25 p-2.5 rounded-xl">
                      <span>
                        ₹
                        {new Intl.NumberFormat("en-in", {
                          notation: "compact",
                        }).format(
                          property.totalShares * property.perSharePrice
                        )}
                      </span>
                      <span className="text-sm">
                        ₹{new Intl.NumberFormat("en").format(property.area)} /
                        sqft
                      </span>
                    </p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-5 space-y-2.5 w-72 h-fit">
                    <p className="text-sm flex items-center justify-between text-slate-500">
                      <span className="">Area</span>
                      <span className="text-slate-700">
                        {new Intl.NumberFormat("en").format(property.area)}
                        <span className="text-xs">sqft</span>
                      </span>
                    </p>
                    <p className="text-sm flex items-center justify-between text-slate-500">
                      <span className="">Carpet area</span>
                      <span className="text-slate-700">
                        {new Intl.NumberFormat("en").format(
                          property.carpetArea
                        )}
                        <span className="text-xs">sqft</span>
                      </span>
                    </p>
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
                  </div>
                </div>
                <div className="h-[248px] bg-cyan-100 px-5 hidden lg:flex flex-col items-center justify-center space-y-2.5">
                  <p className="flex flex-col text-center">
                    <span>
                      ₹
                      {new Intl.NumberFormat("en-in", {
                        notation: "compact",
                      }).format(property.totalShares * property.perSharePrice)}
                    </span>
                    <span className="text-sm">
                      ₹{new Intl.NumberFormat("en").format(property.area)} /
                      sqft
                    </span>
                  </p>
                  <button className="px-3 py-1 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm">
                    Contact owner
                  </button>
                  <button className="px-3 py-1 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm">
                    Buy now
                  </button>
                </div>
              </section>
            ))}
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <img src="/empty-cart.png" alt="empty-cart" className="w-80" />
            <h1 className="text-xl font-light">Your cart is empty!</h1>
          </div>
        )}
      </main>
    </main>
  );
};

export default Cart;
