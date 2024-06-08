import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ReservedSharesDataTable from "../components/ReservedSharesDataTable";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import { actions } from "../configs/actions";

const ReservedSharesData = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [sharesData, setSharesData] = useState([]);

  const getVerificationData = async () => {
    await axios
      .get(`/reserve-share-data`)
      .then((data) => {
        setSharesData(data.data.list);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getVerificationData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <div className="block 2xl:xl:hidden">
            <Cards data={sharesData} />
          </div> */}
          <div>
            <ReservedSharesDataTable data={sharesData} />
          </div>
        </>
      )}
      <span className="fixed bottom-[31px] right-20 text-blue-500 font-serif">
        RESERVED SHARES
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

export default ReservedSharesData;
