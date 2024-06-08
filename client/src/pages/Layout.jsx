import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [auth, setAuth] = useState();
  const [name, setName] = useState();
  return (
    <div className="">
      <Navbar auth={auth} setAuth={setAuth} name={name} setName={setName} />
      <Outlet auth={auth} setAuth={setAuth} />
      <Footer />
    </div>
  );
};

export default Layout;
