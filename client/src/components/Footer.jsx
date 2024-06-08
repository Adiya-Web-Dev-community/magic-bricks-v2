import { MdKeyboardArrowDown } from "react-icons/md";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [openDuoFraction, setOpenDuoFraction] = useState(false);
  const [openLearn, setOpenLearn] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white flex flex-col space-y-10 p-5 sm:p-8 md:p-16 lg:p-24 border-t border-t-slate-700">
        <section className="flex justify-between">
          <div className="space-y-2">
            <h1
              onClick={() => navigate("/")}
              className="text-lg cursor-pointer"
            >
              <span className="text-2xl text-cyan-500 font-serif">D</span>
              <span className="font-serif">uo</span>
              <span className="text-xl text-cyan-500 font-serif">F</span>
              <span className="font-serif">raction</span>
            </h1>
            <address className="text-sm text-slate-500">
              Office 182, Level 1, Gate Avenue, DIFC, Dubai
            </address>
          </div>
          <a
            href="#"
            className="p-1 rounded-md w-fit h-fit bg-slate-700 hover:bg-cyan-500 duration-200 hidden sm:block cursor-pointer"
          >
            <MdKeyboardArrowDown className="rotate-180 text-3xl" />
          </a>
        </section>
        <section className="space-y-1.5 md:space-y-0 md:space-x-32 block md:flex items-start">
          <div>
            <p
              onClick={() => setOpenDuoFraction(!openDuoFraction)}
              className="flex items-center justify-between"
            >
              <span>DuoFraction</span>
              <span
                className={`border border-slate-500 p-px rounded-full inline md:hidden`}
              >
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    openDuoFraction ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <ul
              className={`text-slate-500 border-l md:border-l-0 border-l-slate-500 pl-3 md:pl-0 overflow-hidden duration-200 h-0 md:h-[calc(74.4px)] mt-1.5 ${
                openDuoFraction ? "h-[calc(74.4px)]" : "h-0"
              }`}
            >
              <li
                onClick={() => navigate("/about-us")}
                className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-cyan-400 w-fit"
              >
                About us
              </li>
              <li
                onClick={() => navigate("/contact-us")}
                className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-cyan-400 w-fit"
              >
                Contact us
              </li>
              <li
                onClick={() => navigate("/sell-property")}
                className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-cyan-400 w-fit"
              >
                Sell your property
              </li>
            </ul>
          </div>
          <div>
            <p
              onClick={() => setOpenLearn(!openLearn)}
              className="flex items-center justify-between"
            >
              <span>Learn</span>
              <span
                className={`border border-slate-500 p-px rounded-full inline md:hidden`}
              >
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    openLearn ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <ul
              className={`text-slate-500 border-l md:border-l-0 border-l-slate-500 pl-3 md:pl-0 overflow-hidden duration-200 h-0 md:h-[calc(74.4px)] mt-1.5 ${
                openLearn ? "h-[calc(74.4px)]" : "h-0"
              }`}
            >
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-cyan-400 w-fit">
                Blog
              </li>
              <li
                onClick={() => navigate("/faqs")}
                className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-cyan-400 w-fit"
              >
                FAQs
              </li>
              <li className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-cyan-400 w-fit">
                Glossary
              </li>
            </ul>
          </div>
          <div>
            <p>Connect with us</p>
            <p className="text-slate-500 border-b border-b-transparent hover:border-b-cyan-400 w-fit duration-200 cursor-pointer hover:text-white text-sm mt-0.5">
              <a href="mailto: test@fractional.properties.com">
                test@fractional.properties.com
              </a>
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <p className="bg-slate-700 hover:bg-cyan-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoFacebookCircle className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-cyan-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoTwitter className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-cyan-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoInstagram className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-cyan-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoLinkedin className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-cyan-500 duration-200 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoYoutube className="text-lg" />
              </p>
            </div>
          </div>
        </section>
        <section className="text-slate-500 space-y-1 md:space-y-0 text-sm md:flex items-center md:divide-x">
          <p className="md:pr-3">© 2023 DuoFraction. All rights reserved</p>
          <p
            onClick={() => navigate("/reserved-rights/terms-&-conditions")}
            className="border-b border-b-transparent hover:border-b-cyan-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3"
          >
            Terms of Use
          </p>
          <p
            onClick={() => navigate("/reserved-rights/key-risks")}
            className="border-b border-b-transparent hover:border-b-cyan-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3"
          >
            Key Risks
          </p>
          <p
            onClick={() => navigate("/reserved-rights/privacy-policy")}
            className="border-b border-b-transparent hover:border-b-cyan-500 duration-200 w-fit cursor-pointer hover:text-white md:pl-3"
          >
            Privacy Policy
          </p>
          {/* <p className="border-b border-b-transparent hover:border-b-cyan-500 duration-200 w-fit cursor-pointer hover:text-white md:pl-3">
            Cookies Notice
          </p> */}
        </section>
        <div className="h-px bg-slate-700"></div>
        <p className="text-slate-500 text-xs">
          DuoFraction Properties Limited (DuoFraction) is regulated by the Dubai
          Financial Services Authority (DFSA) as an Operator of a Property
          Investment Crowdfunding Platform. The DuoFraction platform consists of
          the website, web platform and mobile app. By using DuoFraction, you
          agree to be bound by the Terms & Conditions, Cookie Notice and Privacy
          Policy. All investments through DuoFraction carry risk and are not
          guaranteed. Please read Key Risks before investing. DuoFraction
          Properties Limited does not have Islamic Finance endorsement from the
          DFSA.
        </p>
      </footer>
    </>
  );
};

export default Footer;
