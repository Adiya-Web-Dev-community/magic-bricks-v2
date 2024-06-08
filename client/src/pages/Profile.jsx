import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiEditAlt, BiPhoneCall } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import EditProfile from "../components/EditProfile";
import axios from "../helper/axios";

const Profile = () => {
  const [editStatus, setEditStatus] = useState(false);
  const [userData, setUserData] = useState([]);

  const token = localStorage.getItem("token");
  //get data
  const getData = async () => {
    try {
      const resp = await axios.get("/get-user-data", {
        headers: {
          authorization: token,
        },
      });
      // console.log(resp);
      setUserData(resp.data.userData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // sub menu
  const [activeTab, setActiveTab] = useState("profile");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-[30rem] py-5 md:px-5 m-2 ">
      <div className="md:px-5 md:w-[75%] m-auto pb-5">
        <section className="flex justify-end md:hidden ">
          <Tooltip title="Edit Profile">
            <button
              onClick={() => {
                setEditStatus(true);
                console.log(userData);
              }}
            >
              <BiEditAlt className="text-xl z-20" />
            </button>
          </Tooltip>
        </section>
        <div className="md:py-3  grid sm:grid-cols-4 md:space-x-10 gap-6">
          <div className=" relative md:col-span-1 mt-4 ">
            <img
              src={userData.profileImg}
              className="h-full  shadow-md rounded-lg sm:w-[20rem] "
            />
          </div>
          <div className="h-full md:col-span-2  md:py-3 md:px-5 space-y-2">
            <section className="md:flex justify-end  hidden ">
              <Tooltip title="Edit Profile">
                <button
                  onClick={() => {
                    setEditStatus(true);
                    console.log(userData);
                  }}
                >
                  <BiEditAlt className="text-xl z-20" />
                </button>
              </Tooltip>
            </section>
            <section className="hidden md:gap-6 md:flex">
              <h2 className="text-2xl mt-1 flex gap-3">
                <span>{userData.firstName || "--"}</span>
                <span>{userData.lastName || "--"}</span>
              </h2>
            </section>
            <section className="flex gap-3 pt-7 ">
              <ImLocation2 className="mt-1  text-gray-600" />
              <span>
                {userData.city || "--"},{userData.country || "--"}
              </span>
            </section>
            <section className="flex gap-3 pt-2">
              <BiPhoneCall className="mt-1 text-gray-600" />
              <span>{userData.contact || "--"}</span>
            </section>
            <section className="flex gap-3 pt-2">
              <AiOutlineMail className="mt-1 text-gray-600" />
              <span>{userData.email || "--"}</span>
            </section>
            <section className="flex gap-3 pt-2">
              <BsGlobe className="mt-1 text-gray-600" />
              <span>{userData.website || "--"}</span>
            </section>
          </div>
        </div>
        <div className="text-lg mt-5 flex gap-2 border-b-[1px] border-blue-200 overflow-x-auto">
          <Link
            to="/profile"
            className={`tracking-wide px-4 py-2  ${
              activeTab === "profile" ? "bg-blue-100 rounded-t-xl" : "null"
            }`}
            onClick={() => handleTabClick("profile")}
          >
            Listings
          </Link>
          <Link
            to="/investments"
            className={`tracking-wide px-4 py-2 ${
              activeTab === "investments" ? "bg-blue-100 rounded-t-xl" : "null"
            }`}
            onClick={() => handleTabClick("investments")}
          >
            Investments
          </Link>
          <Link
            to="/settings"
            className={`tracking-wide px-4 py-2 ${
              activeTab === "settings" ? "bg-blue-100 rounded-t-xl" : "null"
            }`}
            onClick={() => handleTabClick("settings")}
          >
            Settings
          </Link>
        </div>
        <div className="pt-3">
          <Outlet />
        </div>
      </div>
      <EditProfile
        userData={userData}
        editStatus={editStatus}
        getData={getData}
        setEditStatus={setEditStatus}
      />
    </div>
  );
};

export default Profile;
