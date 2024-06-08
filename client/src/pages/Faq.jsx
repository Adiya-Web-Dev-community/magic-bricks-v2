import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { faqs } from "../configs/faq.config";

const Faq = () => {
  const [openAns, setOpenAns] = useState(false);
  const [index, setIndex] = useState("");

  // handle open ans
  const handleOpenAns = (i) => {
    if (index === i) {
      setIndex("");
    } else {
      setOpenAns(true);
      setIndex(i);
    }
  };

  return (
    <div className=" pb-5 ">
      <section className="py-10">
        <h1 className="px-3 md:px-10 pb-5 md:text-xl flex gap-3  animate-pulse">
          <AiFillQuestionCircle className="mt-1 text-xl" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </h1>
        <section className="md:mt-4 space-y-6 w-[94%] m-auto md:m-0 md:w-[60%] md:pl-10">
          {faqs.map((ele, i) => {
            return (
              <div
                className="border-b-2 border-b-gray-300 rounded-md shadow-lg shadow-gray-300 bg-blue-50/50"
                key={i}
              >
                <p
                  className="flex justify-between px-3 py-3"
                  onClick={() => handleOpenAns(i)}
                >
                  <span className="font-bold ">{ele.que}</span>
                  {openAns ? (
                    <IoIosArrowUp className="mt-1" />
                  ) : (
                    <IoIosArrowDown className="mt-1" />
                  )}
                </p>
                {i === index && openAns ? (
                  <p className="px-3  pt-2 pb-3 bg-white/50">
                    <span>{ele.ans}</span>
                  </p>
                ) : null}
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Faq;
