import axios from "../../../helper/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { dummyData } from "./dummyData";

const Yacht = ({ category, id }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    await axios
      .post("/get-propertycategory-data", { propertyCategory: category })
      .then((res) => {
        setIsLoading(true);
        console.log(res);
        setProperties(
          res?.data?.DocsList?.length ? res.data.DocsList : dummyData
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setProperties(dummyData);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProperties();
    setIsLoading(true);
  }, [category]);

  return (
    <main>
      <section className="bg-[url(https://images.unsplash.com/photo-1523496922380-91d5afba98a3?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover h-[calc(100vh-64px)] w-full grid place-items-center">
        <h1 className="text-slate-100 text-4xl md:text-6xl font-extralight w-full mx-5 text-center flex flex-col items-center space-y-2.5">
          <span className="font-montserrat">Upgrade your lifestyle!</span>
          <span className="font-montserrat">Buy your dream yacht now!</span>
        </h1>
      </section>
      <main className="bg-slate-100 py-10 flex justify-center">
        <main className="grid lg:grid-cols-2 2xl:grid-cols-3 w-fit gap-10">
          {isLoading ? (
            <>
              {Array(3)
                .fill(0)
                .map((i, j) => (
                  <section
                    key={j}
                    className="shadow rounded-xl w-fit bg-white overflow-hidden"
                  >
                    <div className="flex flex-col p-5 space-x-0 space-y-5">
                      <div className="relative">
                        <div className="w-80 sm:w-96 h-52 bg-slate-200 rounded-xl animate-pulse"></div>
                        <div className="block absolute bottom-2.5 right-2.5 z-10 space-x-2">
                          <button className="w-16 h-8 rounded-md bg-slate-300 animate-pulse"></button>
                        </div>
                      </div>
                      <div className="bg-slate-100 rounded-xl p-5 space-y-2.5 w-80 sm:w-96">
                        <p className="text-sm flex items-center justify-between text-slate-500">
                          <span className="w-20 h-5 rounded-md bg-slate-300 animate-pulse"></span>
                          <span className="w-20 h-5 rounded-md bg-slate-300 animate-pulse"></span>
                        </p>
                        <p className="text-sm flex items-center justify-between text-slate-500">
                          <span className="w-20 h-5 rounded-md bg-slate-300 animate-pulse"></span>
                          <span className="w-20 h-5 rounded-md bg-slate-300 animate-pulse"></span>
                        </p>
                      </div>
                    </div>
                  </section>
                ))}
            </>
          ) : (
            <>
              {properties.map((i, j) => (
                <section
                  key={j}
                  className="shadow rounded-xl w-fit bg-white overflow-hidden"
                >
                  <div className="flex flex-col p-5 space-x-0 space-y-5">
                    <div className="relative">
                      <Swiper
                        loop={true}
                        speed={500}
                        slidesPerView={1}
                        initialSlide={0}
                        spaceBetween={0}
                        modules={[Navigation]}
                        navigation={true}
                        className="w-80 sm:w-96 h-52 bg-slate-300 rounded-xl"
                      >
                        {i.imgArr.map((i, j) => (
                          <SwiperSlide
                            key={j}
                            style={{ backgroundImage: `url(${i})` }}
                            className="bg-cover bg-center"
                          ></SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="block absolute bottom-2.5 right-2.5 z-10 space-x-2">
                        <button
                          onClick={() =>
                            navigate(`/categories/${category}/${i._id}`)
                          }
                          className="px-3 py-1 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 border-b-2 border-b-cyan-500 hover:border-b-cyan-600 duration-200 text-sm"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="bg-slate-100 rounded-xl p-5 space-y-2.5 w-80 sm:w-96">
                      <p className="text-sm flex items-center justify-between text-slate-500">
                        <span className="">Model</span>
                        <span>{i.model || "---"}</span>
                      </p>
                      <p className="text-sm flex items-center justify-between text-slate-500">
                        <span className="">Price</span>
                        <span>
                          {i.price ? "₹" : ""}
                          {new Intl.NumberFormat("en-in", {
                            notation: "compact",
                          }).format(i.totalShares + i.perSharePrice)}
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </>
          )}
        </main>
      </main>
    </main>
  );
};

export default Yacht;
