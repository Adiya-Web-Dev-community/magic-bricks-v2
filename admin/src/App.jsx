import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import View from "./pages/View";
import SiteVisit from "./pages/SiteVisit";
import SellerAccounts from "./pages/SellerAccounts";
import ReservedSharesData from "./pages/ReservedSharesData";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import ManageCategories from "./pages/ManageCategories";
import HelpDesk from "./components/HelpDesk";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/view/:id" element={<View />}></Route>
          <Route path="/site-visit" element={<SiteVisit />}></Route>
          <Route path="/seller-accounts" element={<SellerAccounts />}></Route>
          <Route
            path="/reserved-shares"
            element={<ReservedSharesData />}
          ></Route>
          <Route path="/help-desk" element={<HelpDesk />}></Route>
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<ManageCategories />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
