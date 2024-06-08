import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded } from "react-icons/bi";
import SellerAccountsTable from "../components/SellerAccountsTable";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import { actions } from "../configs/actions";

const SellerAccounts = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [sellerAccounts, setSellerAccounts] = useState([]);

  const getSellerAccountsData = async () => {
    try {
      const resp = await axios.get("/user-accounts");
      if (resp.data.success) {
        setIsLoading(true);
        setSellerAccounts(resp.data.list);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSellerAccountsData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <div className="block 2xl:xl:hidden">
            <Cards data={sellerAccounts} />
          </div> */}
          <div>
            <SellerAccountsTable data={sellerAccounts} />
          </div>
        </>
      )}
      <span className="fixed bottom-[31px] right-20 text-blue-500 font-serif">
        SELLER ACCOUNTS
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

export default SellerAccounts;
