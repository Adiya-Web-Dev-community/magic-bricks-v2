import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const Public = (authToken, setAuthToken) => {
  const adminToken = localStorage.getItem("adminToken");
  useEffect(() => {
    setAuthToken(adminToken);
  });
  return <>{authToken ? <Navigate to="/home" /> : <Outlet />}</>;
};

export default Public;
