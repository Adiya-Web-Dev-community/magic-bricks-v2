import { useRef } from "react";

import { BiSolidStar } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialConfig } from "../../configs/tesimonial.config";

const Testimonial = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <section className="w-11/12 grid place-items-center bg-slate-900 py-10 lg:py-20 mt-[75px] lg:mt-[100px] rounded-xl mx-auto">
        <section className="flex flex-col xl:flex-row items-center space-x-0 xl:space-x-10 space-y-10 xl:space-y-0">
          <h1 className="font-serif text-2xl md:text-3xl xl:text-4xl w-[350px] md:w-[500px] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 animate-pulse text-center xl:text-start">
            Don’t just take our word for it, see what our investors have to
            say...
          </h1>
          <Swiper
            loop={true}
            speed={500}
            slidesPerView={1}
            initialSlide={0}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="w-[350px] md:w-[700px] rounded-lg overflow-hidden"
          >
            {testimonialConfig.map((i, j) => (
              <SwiperSlide key={j} className="p-5 rounded-lg shadow bg-white">
                <div className="h-[270px] md:h-[170px] flex flex-col justify-between">
                  <div className="flex justify-between">
                    <p className="text-lg font-serif text-slate-700">
                      {i.heading}
                    </p>
                    <div className="flex flex-col items-end">
                      <p className="flex space-x-1 text-cyan-400">
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                        <BiSolidStar />
                      </p>
                      <p className="text-sm text-slate-700">{i.date}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">{i.para}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-slate-700">{i.name}</p>
                    <img src={i.img} alt="company-logo" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex items-center justify-center xl:justify-end mt-5 space-x-5">
              <div
                ref={navigationPrevRef}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <BsArrowLeft className="text-xl text-cyan-500" />
              </div>
              <div
                ref={navigationNextRef}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <BsArrowRight className="text-xl text-cyan-500" />
              </div>
            </div>
          </Swiper>
        </section>
      </section>
    </>
  );
};

export default Testimonial;
