import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import RealEstate from "./pages/RealEstate";
import SellProperty from "./pages/SellProperty";
import SellForm from "./pages/SellForm";
import Onboarding from "./pages/Onboarding";
import ViewProperty from "./pages/ViewProperty";
import ExitWindows from "./pages/ExitWindows";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./pages/Profile";
import Faq from "./pages/Faq";
import ContactForm from "./components/ContactForm";
import Listings from "./components/profile/Listings";
import Settings from "./components/profile/Settings";
import Investments from "./components/profile/Investments";
import OtherFractions from "./pages/OtherFractions";
import FooterReservedRights from "./pages/FooterReservedRights";

const App = () => {
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories/:category" element={<OtherFractions />} />
            <Route
              path="/categories/:category/:id"
              element={<OtherFractions />}
            />
            <Route
              path="/categories/real-estate/:category"
              element={<RealEstate />}
            />
            <Route
              path="/categories/real-estate/land-parcel/:category"
              element={<RealEstate />}
            />
            <Route
              path="/categories/real-estate/:category/:id"
              element={<ViewProperty />}
            />
            <Route
              path="/categories/real-estate/land-parcel/:category/:id"
              element={<ViewProperty />}
            />
            <Route path="/about-us" element={<About />} />
            <Route path="/sell-property" element={<SellProperty />} />
            <Route path="/sell-property/:category" element={<SellForm />} />
            <Route path="/exit-windows" element={<ExitWindows />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/change-password" element={<ForgotPassword />} />

            <Route element={<Profile />}>
              <Route path="/profile" element={<Listings />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/investments" element={<Investments />} />
            </Route>
            <Route path="/faqs" element={<Faq />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route
              path="/reserved-rights/:param"
              element={<FooterReservedRights />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
