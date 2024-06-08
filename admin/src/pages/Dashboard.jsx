import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { actions } from "../configs/actions";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-serif text-center text-slate-500 text-3xl mt-5 mb-8">
        Manage Categories
      </h1>
      <Outlet />
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

export default Dashboard;
