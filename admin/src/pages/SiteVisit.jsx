import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { actions } from "../configs/actions";

import SiteVisitTable from "../components/SiteVisitTable";
// import Cards from "../components/Cards";
import Loading from "../components/Loading";

const SiteVisit = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [siteVisitData, setSiteVisitData] = useState([]);

  const getSiteVisiteData = async () => {
    await axios
      .get(`/site-visit-data`)
      .then((resp) => {
        console.log(resp);
        setIsLoading(true);
        setSiteVisitData(resp.data.list);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getSiteVisiteData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <div className="block 2xl:xl:hidden">
            <Cards data={siteVisitData} />
          </div> */}
          <div>
            <SiteVisitTable data={siteVisitData} />
          </div>
        </>
      )}
      <span className="fixed bottom-[31px] right-20 text-blue-500 font-serif">
        SITE VISIT
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

export default SiteVisit;
