import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const Protected = (authToken, setAuthToken) => {
  const adminToken = localStorage.getItem("adminToken");
  useEffect(() => {
    setAuthToken(adminToken);
  });

  return <>{authToken ? <Outlet /> : <Navigate to="/" />}</>;
};

export default Protected;
