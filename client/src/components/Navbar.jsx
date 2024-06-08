import { useState, forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesLoading, viewCategories } from "../store/appSlice";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImSpinner8 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { PiShoppingCartSimpleLight, PiChatLight } from "react-icons/pi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { propertiesCategoryConfig } from "../configs/propertiesCategory.config";
import { Dialog, Slide, Tooltip } from "@mui/material";
import axios from "../helper/axios";
import Cart from "../pages/Cart";
import Chat from "../pages/Chat";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = ({ auth, setAuth, name, setName }) => {
  const dispatch = useDispatch();
  const { categoriesLoading } = useSelector((store) => store.app);
  // save data in loclastorage after successful signin
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  // get categories
  const [categories, setCategories] = useState([]);
  const handleGetCategories = async () => {
    try {
      dispatch(setCategoriesLoading(true));
      const resp = await axios.get("/get-categories");
      console.log(resp);
      const categoriesList = resp?.data?.data?.categories?.filter(
        (i) => i.showStatus
      );
      setCategories(categoriesList);
      dispatch(viewCategories(categoriesList));
      dispatch(setCategoriesLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setCategoriesLoading(false));
    }
  };
  useEffect(() => {
    handleGetCategories();
  }, []);

  useEffect(() => {
    if (token) {
      setAuth(token);
    }
  }, [token]);
  useEffect(() => {
    if (userName && token) {
      setName(userName);
    }
  }, [userName]);
  //

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openCart, setOpenCart] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const onboarding = pathname.includes("onboarding");
  const [openMenu, setOpenMenu] = useState(false);
  const [openList, setOpenList] = useState({
    properties: false,
    sell: false,
    learn: false,
  });
  const [openSubList, setOpenSubList] = useState(false);
  const [openSubSubList, setOpenSubSubList] = useState(false);

  const handleRouteRedirect = (name) => {
    if (name.includes(" ")) name = name.split(" ").join("-");
    if (name.includes("resort")) name = "resort";
    navigate(`/categories/real-estate/${name}`);
    setOpenMenu(false);
    setOpenList(false);
    setOpenSubList(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav
        className={`h-16 shadow flex items-center justify-between px-5 lg:px-10 sticky top-0 z-20 text-slate-700 ${
          onboarding
            ? "bg-slate-900 text-slate-300 border-b border-b-slate-700"
            : "bg-white"
        }`}
      >
        <section className="flex items-center space-x-7">
          <h1
            onClick={() => navigate("/")}
            className="text-lg cursor-pointer -mt-1.5"
          >
            <span className="text-2xl text-cyan-500 font-serif">M</span>
            <span className="font-serif">agic</span>
            <span className="text-xl text-cyan-500 font-serif">B</span>
            <span className="font-serif">ricks</span>
          </h1>
          <div className="hidden md:flex items-center space-x-5">
            <div className="relative z-10">
              {categoriesLoading ? (
                <span className="relative flex items-center text-slate-300 cursor-default">
                  <span className="font-quicksand">Categories</span>
                  <IoIosArrowDown className="-mb-0.5 ml-0.5" />
                  <ImSpinner8 className="absolute top-[4.5px] left-0 right-0 mx-auto text-lg animate-spin text-slate-400" />
                </span>
              ) : (
                <span
                  onMouseEnter={() =>
                    setOpenList({ ...openList, properties: true })
                  }
                  onMouseLeave={() =>
                    setOpenList({ ...openList, properties: false })
                  }
                  className={`flex items-center hover:text-cyan-500 duration-200 cursor-pointer ${
                    openList.properties ? "text-cyan-500" : ""
                  }`}
                >
                  <span className="font-quicksand">Categories</span>
                  <IoIosArrowDown
                    className={`text-cyan-500 -mb-0.5 ml-0.5 duration-300 ${
                      openList.properties ? "-rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              )}
              <ul
                onMouseEnter={() =>
                  setOpenList({ ...openList, properties: true })
                }
                onMouseLeave={() =>
                  setOpenList({ ...openList, properties: false })
                }
                className={`absolute text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md capitalize ${
                  openList.properties ? "visible" : "invisible"
                }`}
              >
                <li
                  onMouseEnter={() => setOpenSubList(true)}
                  onMouseLeave={() => setOpenSubList(false)}
                  className={`hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer ${
                    openSubList ? "bg-slate-100 text-cyan-500" : ""
                  }`}
                >
                  Real Estate
                </li>
                {/* {categories
                  ?.filter((i) => i.propertyType === "other")
                  .map((i) => (
                    <li
                      key={i.name}
                      onClick={() => {
                        navigate(`/categories/${i.name}`);
                        setOpenList({ ...openList, properties: false });
                      }}
                      className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                    >
                      {i.name}
                    </li>
                  ))} */}
              </ul>
              <ul
                onMouseEnter={() => {
                  setOpenList({ ...openList, properties: true });
                  setOpenSubList(true);
                }}
                onMouseLeave={() => {
                  setOpenList({ ...openList, properties: false });
                  setOpenSubList(false);
                }}
                className={`absolute top-[calc(24px)] left-[calc(105px)] text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md capitalize ${
                  openSubList ? "visible" : "invisible"
                }`}
              >
                {categories
                  ?.filter((i) => i.propertyType === "real-estate")
                  .map((i) => (
                    <li
                      key={i.name}
                      onClick={() =>
                        i.name !== "land parcel"
                          ? handleRouteRedirect(i.name)
                          : null
                      }
                      onMouseEnter={() => {
                        i.name === "land parcel"
                          ? setOpenSubSubList(true)
                          : null;
                      }}
                      onMouseLeave={() => {
                        i.name === "land parcel"
                          ? setOpenSubSubList(false)
                          : null;
                      }}
                      className={`hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer ${
                        i.name === "land parcel" && openSubSubList
                          ? "bg-slate-100 text-cyan-500"
                          : ""
                      }`}
                    >
                      {i.name}
                    </li>
                  ))}
              </ul>
              <ul
                onMouseEnter={() => {
                  setOpenList({ ...openList, properties: true });
                  setOpenSubList(true);
                  setOpenSubSubList(true);
                }}
                onMouseLeave={() => {
                  setOpenList({ ...openList, properties: false });
                  setOpenSubList(false);
                  setOpenSubSubList(false);
                }}
                className={`absolute z-10 top-[calc(24px)] left-[calc(105px+105px)] text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md ${
                  openSubSubList ? "visible" : "invisible"
                }`}
              >
                {propertiesCategoryConfig[0].subCategories.map((i) => (
                  <li
                    key={i.category}
                    onClick={() => {
                      setOpenList(false);
                      setOpenSubList(false);
                      setOpenSubSubList(false);
                      navigate(
                        `/categories/real-estate/land-parcel/${i.categoryRoute}`
                      );
                    }}
                    className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                  >
                    {i.category}
                  </li>
                ))}
              </ul>
            </div>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 underline underline-offset-4"
                  : "hover:text-cyan-500 duration-200"
              }
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 underline underline-offset-4"
                  : "hover:text-cyan-500 duration-200"
              }
            >
              Contact
            </NavLink>
            <div className="relative z-10">
              <span
                onMouseEnter={() =>
                  setOpenList({ sell: true, properties: false, learn: false })
                }
                onMouseLeave={() => setOpenList({ ...openList, sell: false })}
                className={`flex items-center hover:text-cyan-500 duration-200 cursor-pointer ${
                  openList.sell ? "text-cyan-500" : ""
                }`}
              >
                <span className="font-quicksand">Sell</span>
                <IoIosArrowDown
                  className={`text-cyan-500 -mb-0.5 ml-0.5 duration-300 ${
                    openList.sell ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
              <ul
                onMouseEnter={() => setOpenList({ ...openList, sell: true })}
                onMouseLeave={() =>
                  setOpenList({ ...openList, sell: false, properties: false })
                }
                className={`absolute text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md ${
                  openList.sell ? "visible" : "invisible"
                }`}
              >
                <li
                  onClick={() => {
                    setOpenList({ ...openList, sell: false });
                    navigate("/sell-property");
                  }}
                  className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                >
                  Sell your property
                </li>
                <li
                  onClick={() => {
                    setOpenList({ ...openList, sell: false });
                    navigate("/exit-windows");
                  }}
                  className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                >
                  Exit windows
                </li>
              </ul>
            </div>
            <div className="relative z-10">
              <span
                onMouseEnter={() =>
                  setOpenList({
                    ...openList,
                    learn: true,
                    properties: false,
                    sell: false,
                  })
                }
                onMouseLeave={() => setOpenList({ ...openList, learn: false })}
                className={`flex items-center hover:text-cyan-500 duration-200 cursor-pointer ${
                  openList.learn ? "text-cyan-500" : ""
                }`}
              >
                <span className="font-quicksand">Learn</span>
                <IoIosArrowDown
                  className={`text-cyan-500 -mb-0.5 ml-0.5 duration-300 ${
                    openList.learn ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
              <ul
                onMouseEnter={() => setOpenList({ ...openList, learn: true })}
                onMouseLeave={() => setOpenList({ ...openList, learn: false })}
                className={`absolute text-slate-500 bg-white border border-slate-100 shadow w-[171.79px] py-2 rounded-md ${
                  openList.learn ? "visible" : "invisible"
                }`}
              >
                <li
                  // onClick={() => navigate("/blog")}
                  className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                >
                  Blog
                </li>
                <li
                  className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                  onClick={() => {
                    setOpenList({ ...openList, learn: false });
                    navigate("/faqs");
                  }}
                >
                  FAQs
                </li>
                <li className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer">
                  Glossary
                </li>
              </ul>
            </div>

            {auth ? (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-500 underline underline-offset-4"
                    : "hover:text-cyan-500 duration-200"
                }
              >
                Profile
              </NavLink>
            ) : null}
          </div>
        </section>
        <section className="flex items-center mr-0">
          {auth ? (
            <Tooltip title="SignOut">
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                  setAuth(null);
                  setName(null);
                }}
                className={`px-3 pt-1 pb-1.5 rounded-md text-white font-medium text-sm duration-200 w-max mr-2.5 ${
                  onboarding
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "bg-cyan-400 hover:bg-cyan-500"
                }`}
              >
                <p className="flex items-center space-x-1">
                  <span className="capitalize">{name}</span>
                  <span className="text-base">
                    <AiOutlineLogout />
                  </span>
                </p>
              </button>
            </Tooltip>
          ) : (
            <Tooltip title="SignIn">
              <button
                onClick={() => navigate("/onboarding")}
                className={`px-3 pt-1 pb-1.5 rounded-md text-white font-medium text-sm duration-200 w-max mr-2.5 ${
                  onboarding
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "bg-cyan-400 hover:bg-cyan-500"
                }`}
              >
                Get Started
              </button>
            </Tooltip>
          )}
          {auth ? (
            <button
              onClick={() => setOpenCart(true)}
              className="p-1.5 hover:bg-slate-200 rounded-md duration-200  flex gap-1"
            >
              <PiShoppingCartSimpleLight className="text-2xl" />
            </button>
          ) : null}
          {auth ? (
            <button
              onClick={() => setOpenChat(true)}
              className="p-2 hover:bg-slate-200 rounded-md duration-200  flex gap-1"
            >
              <PiChatLight className="text-xl" />
            </button>
          ) : null}

          <button
            onClick={() => setOpenMenu(true)}
            className="p-1.5 hover:bg-slate-200 rounded-md duration-200 block sm:hidden"
          >
            <HiMenuAlt1 className="text-xl text-slate-500" />
          </button>
        </section>
      </nav>

      {/* OPEN MENU (RESPONSIVE) */}
      <section
        className={`fixed z-20 top-0 left-0 w-full h-full bg-slate-900 duration-100 block md:hidden select-none ${
          openMenu ? "-ml-0" : "-ml-[100%]"
        }`}
      >
        <nav className="w-full h-16 border-b border-b-slate-700 flex items-center justify-between px-5">
          <section>
            <img
              onClick={() => {
                navigate("/");
                setOpenMenu(false);
              }}
              src="https://getstake.com/assets/stake-white.svg"
              alt="logo"
              className="w-16 cursor-pointer"
            />
          </section>
          <section className="flex items-center space-x-5">
            <button
              onClick={() => setOpenMenu(false)}
              className="p-1.5 hover:bg-slate-800 rounded-md duration-200"
            >
              <HiMenuAlt1 className="text-2xl text-slate-500" />
            </button>
          </section>
        </nav>

        <div className="flex flex-col space-y-5 text-slate-300 p-5">
          <div className="relative z-30">
            {categoriesLoading ? (
              <span className="relative flex items-center text-slate-300 w-fit">
                <span className="font-quicksand">Categories</span>
                <IoIosArrowDown className="-mb-0.5 ml-0.5" />
                <ImSpinner8 className="absolute top-[4.5px] left-0 right-0 mx-auto text-lg animate-spin text-slate-400" />
              </span>
            ) : (
              <span
                onMouseEnter={() =>
                  setOpenList({ ...openList, properties: true })
                }
                onMouseLeave={() =>
                  setOpenList({ ...openList, properties: false })
                }
                className={`flex items-center hover:text-cyan-500 duration-200 cursor-pointer w-fit ${
                  openList.properties ? "text-cyan-500" : ""
                }`}
              >
                <span className="font-quicksand">Categories</span>{" "}
                <IoIosArrowDown
                  className={`text-cyan-500 -mb-0.5 ml-0.5 duration-300 ${
                    openList.properties ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            )}
            <ul
              onMouseEnter={() =>
                setOpenList({ ...openList, properties: true })
              }
              onMouseLeave={() =>
                setOpenList({ ...openList, properties: false })
              }
              className={`absolute z-10 text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md capitalize ${
                openList.properties ? "visible" : "invisible"
              }`}
            >
              <li
                onMouseEnter={() => setOpenSubList(true)}
                onMouseLeave={() => setOpenSubList(false)}
                className={`hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer ${
                  openSubList ? "bg-slate-100 text-cyan-500" : ""
                }`}
              >
                Real estate
              </li>
              {categories
                ?.filter((i) => i.propertyType === "other")
                .map((i) => (
                  <li
                    key={i.name}
                    onClick={() => {
                      navigate(`/categories/${i.name}`);
                      setOpenMenu(false);
                    }}
                    className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                  >
                    {i.name}
                  </li>
                ))}
            </ul>
            <ul
              onMouseEnter={() => {
                setOpenList({ ...openList, properties: true });
                setOpenSubList(true);
              }}
              onMouseLeave={() => {
                setOpenList({ ...openList, properties: false });
                setOpenSubList(false);
              }}
              className={`absolute top-[calc(24px)] left-[calc(105px)] z-10 text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md capitalize ${
                openSubList ? "visible" : "invisible"
              }`}
            >
              {categories
                ?.filter((i) => i.propertyType === "real-estate")
                .map((i) => (
                  <li
                    key={i.name}
                    onClick={() =>
                      i.name !== "land parcel"
                        ? handleRouteRedirect(i.name)
                        : null
                    }
                    onMouseEnter={() => {
                      i.name === "land parcel" ? setOpenSubSubList(true) : null;
                    }}
                    onMouseLeave={() => {
                      i.name === "land parcel"
                        ? setOpenSubSubList(false)
                        : null;
                    }}
                    className={`hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer ${
                      i.name === "land parcel" && openSubSubList
                        ? "bg-slate-100 text-cyan-500"
                        : ""
                    }`}
                  >
                    {i.name}
                  </li>
                ))}
            </ul>
            <ul
              onMouseEnter={() => {
                setOpenList({ ...openList, properties: true });
                setOpenSubList(true);
                setOpenSubSubList(true);
              }}
              onMouseLeave={() => {
                setOpenList({ ...openList, properties: false });
                setOpenSubList(false);
                setOpenSubSubList(false);
              }}
              className={`absolute z-10 top-[calc(24px)] left-[calc(105px+105px)] text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md ${
                openSubSubList ? "visible" : "invisible"
              }`}
            >
              {propertiesCategoryConfig[0].subCategories.map((i) => (
                <li
                  key={i.category}
                  onClick={() => {
                    setOpenMenu(false);
                    navigate(
                      `/categories/real-estate/land-parcel/${i.categoryRoute}`
                    );
                  }}
                  className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                >
                  {i.category}
                </li>
              ))}
            </ul>
          </div>

          <NavLink
            onClick={() => setOpenMenu(false)}
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 underline underline-offset-4 w-fit"
                : "hover:text-cyan-500 duration-200 w-fit"
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpenMenu(false)}
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 underline underline-offset-4 w-fit"
                : "hover:text-cyan-500 duration-200 w-fit"
            }
          >
            Contact
          </NavLink>
          <div className="relative z-20">
            <span
              onMouseEnter={() => {
                setOpenList({ properties: false, sell: true, learn: false });
              }}
              onMouseLeave={() => {
                setOpenList({ properties: false, sell: false, learn: false });
              }}
              className={`flex items-center hover:text-cyan-500 duration-200 cursor-pointer w-fit ${
                openList.sell ? "text-cyan-500" : ""
              }`}
            >
              <span className="font-quicksand">Sell</span>{" "}
              <IoIosArrowDown
                className={`text-cyan-500 -mb-0.5 ml-0.5 duration-300 ${
                  openList.sell ? "-rotate-180" : "rotate-0"
                }`}
              />
            </span>
            <ul
              onMouseEnter={() => {
                setOpenList({ properties: false, sell: true, learn: false });
              }}
              onMouseLeave={() => {
                setOpenList({ properties: false, sell: false, learn: false });
              }}
              className={`absolute z-10 text-slate-500 bg-white border border-slate-100 shadow w-max py-2 rounded-md ${
                openList.sell ? "visible" : "invisible"
              }`}
            >
              <li
                onClick={() => {
                  navigate("/sell-property");
                  setOpenMenu(false);
                }}
                className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
              >
                Sell us you property
              </li>
              <li
                onClick={() => {
                  navigate("/exit-windows");
                  setOpenMenu(false);
                }}
                className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
              >
                Exit windows
              </li>
            </ul>
          </div>
          <div className="relative z-10">
            <span
              onMouseEnter={() => {
                setOpenList({ properties: false, sell: false, learn: true });
              }}
              onMouseLeave={() => {
                setOpenList({ properties: false, sell: false, learn: false });
              }}
              className={`flex items-center hover:text-cyan-500 duration-200 cursor-pointer w-fit ${
                openList.learn ? "text-cyan-500" : ""
              }`}
            >
              <span className="font-quicksand">Learn</span>{" "}
              <IoIosArrowDown
                className={`text-cyan-500 -mb-0.5 ml-0.5 duration-300 ${
                  openList.learn ? "-rotate-180" : "rotate-0"
                }`}
              />
            </span>
            <ul
              onMouseEnter={() => {
                setOpenList({ properties: false, sell: false, learn: true });
              }}
              onMouseLeave={() => {
                setOpenList({ properties: false, sell: false, learn: false });
              }}
              className={`absolute z-10 text-slate-500 bg-white border border-slate-100 shadow w-[171.79px] py-2 rounded-md ${
                openList.learn ? "visible" : "invisible"
              }`}
            >
              <li className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer">
                Blog
              </li>
              <li
                className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer"
                onClick={() => {
                  navigate("/faqs");
                }}
              >
                FAQs
              </li>
              <li className="hover:bg-slate-100 hover:text-cyan-500 px-3 py-1 cursor-pointer">
                Glossary
              </li>
            </ul>
          </div>
          {auth ? (
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 underline underline-offset-4"
                  : "hover:text-cyan-500 duration-200"
              }
            >
              Profile
            </NavLink>
          ) : null}
        </div>
      </section>
      <Dialog
        fullScreen
        open={openCart}
        onClose={() => setOpenCart(false)}
        TransitionComponent={Transition}
      >
        <Cart setOpenCart={setOpenCart} />
      </Dialog>
      <Dialog
        fullScreen
        open={openChat}
        onClose={() => setOpenChat(false)}
        TransitionComponent={Transition}
      >
        <Chat setOpenChat={setOpenChat} />
      </Dialog>
    </>
  );
};

export default Navbar;
