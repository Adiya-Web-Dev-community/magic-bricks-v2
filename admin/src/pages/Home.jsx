import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded } from "react-icons/bi";
import VerifyPropertyTable from "../components/VerifyPropertyTable";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import { toast } from "react-hot-toast";
import { actions } from "../configs/actions";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationData, setVerificationData] = useState([]);

  // get data to verify
  const getData = async () => {
    try {
      const resp = await axios.get("/data-for-verification");
      if (resp.data.success) {
        console.log(resp.data.DocsList);
        setIsLoading(true);
        setVerificationData(resp.data.DocsList);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "3rem",
            letterSpacing: "2px",
            color: "yellow",
          }}
        >
          Please wait. Fetching Data...
        </h1>
      ) : null}

      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {/* <div className="block 2xl:xl:hidden">
            <Cards data={verificationData} />
          </div> */}
          <div /* className=" 2xl:block" code for below div*/>
            <VerifyPropertyTable data={verificationData} />
          </div>
        </>
      )}
      <span className="fixed bottom-[31px] right-20 text-blue-500  font-serif">
        UNVERIFIED PROPERTIES
      </span>
      <SpeedDial
        ariaLabel=""
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<BiDotsVerticalRounded className="text-xl" />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              navigate(action.navigate);
              action.name === "Logout" && localStorage.clear();
            }}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Home;
