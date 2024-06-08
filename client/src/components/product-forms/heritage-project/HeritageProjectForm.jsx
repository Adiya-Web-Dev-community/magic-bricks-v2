import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";
import axios from "../../../helper/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";

import Locality from "./FormSteps/Locality";
import Amenities from "./FormSteps/Aminities";
import WhyInvest from "./FormSteps/WhyInvest";
import Approvals from "./FormSteps/Approvals";
import AdditionalInfo from "./FormSteps/AdditiionalInfo";
import PropertyDetails from "./FormSteps/PropertyDetails";
import AdditionalRooms from "./FormSteps/AdditionalRooms";
import RealEstatePreviewPage from "../real-estate-previewpage/real-estate-previewpage";

import { Box, Modal } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100vh",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const formList = [
  "property details",
  "locality",
  "amenities",
  "property images",
  "additional information",
];

const Form = ({ category }) => {
  const token = localStorage.getItem("token");
  // {{{{{{{{{{ HOOKS START
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("property details");
  //PROPERTY DETAILS
  const [propertyData, setPropertyData] = useState({
    propertyAdType: "",
    propertyName: "",
    propertyId: "",
    sellerType: "",
    sellerName: "",
    historicalSignificance: "",
    yearBuilt: "",
    archStyle: "",
    restorationEfforts: "",
    landSize: "",
    propertySize: "",
    heritageDesignations: "",
    uniqueFeatures: "",
    ownerHistory: "",
    renovationPlans: "",
    financingOptions: "",
    maintenanceCosts: "",
    sustainorConservationEfforts: "",
    inspectionReports: "",
    sustainorConservationGroups: "",
    heritagePropertyCouncilApprovals: "",
    historicalDoc: "",
    landmarks: "",
    noOfBedroom: null,
    noOfBathroom: null,
    pricingInfo: "",
    contactInfo: "",
    reraId: "",
    totalShares: null,
    availableShares: null,
    perSharePrice: null,
  });
  //LOCALITY
  const [locality, setLocality] = useState({
    street: "",
    landmark: "",
    city: "",
    pin: "",
    state: "",
    nearbyPlaces: "",
  });
  //AMINTIES
  const [aminities, setAminities] = useState([]);
  const [newAminity, setNewAminity] = useState("");
  //APPROVALS
  const [approvals, setApprovals] = useState([]);
  const [newApprovals, setNewApprovals] = useState("");
  //ADDITIONAL ROOMS
  const [additionalRooms, setAdditionalRooms] = useState([]);
  const [newAdditionalRooms, setNewAdditionalRooms] = useState("");
  //WHY INVEST IN THIS PROJECT
  const [whyInvest, setWhyInvest] = useState([]);
  const [whyInvestFactors, setWhyInvestFactors] = useState("");
  //UPLOAD PROPERTY IMAGES
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [finalImgArr, setFinalImgArr] = useState([]);
  //UPLOAD 360 VIEW IMAGES
  const [img360Url, setImg360Url] = useState(false);
  const [view360images, setView360images] = useState([]);
  const [final360ImgArr, setFinal360ImgArr] = useState([]);
  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState("");
  // HOOKS END }}}}}}}}}}

  // {{{{{{{{{{ HANDLERS START
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };
  const handleFile360Change = (e) => {
    setView360images([...view360images, ...e.target.files]);
  };
  //HANDLE SUBMIT
  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      toast.error("Add property images !");
      return;
    }
    if (view360images.length === 0) {
      toast.error("Add 360degree view image of property !");
      return;
    }
    toast.loading("Uploading images. Please wait");
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
      imgData.append("file", images[i]);
      await axios
        .post(import.meta.env.VITE_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          console.log(resp);
          arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }
    console.log(arr);
    setFinalImgArr(arr);
    // 360 view images
    let images360arr = [];
    for (let i = 0; i < view360images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
      imgData.append("file", view360images[i]);
      await axios
        .post(import.meta.env.VITE_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          console.log(resp);
          images360arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }
    console.log(images360arr);
    setFinal360ImgArr(images360arr);
    toast.dismiss();
    if (arr.length !== 0) {
      setImgUrl(true);
      setImg360Url(true);
    }
  };
  const handlePost = async () => {
    const uniqueId = nanoid(5);
    const data = {
      ...propertyData,
      ...locality,
      aminities: aminities,
      additionalRooms: additionalRooms,
      approvals: approvals,
      whyInvestHere: whyInvest,
      imgArr: finalImgArr,
      additionalDetails: additionalDetails,
      view360ImgArr: final360ImgArr,
      uniqueId: uniqueId,
    };
    console.log("data before posting", data);
    try {
      toast.loading("Posting data. Please wait");
      const response = await axios.post("/heritage-form", data, {
        headers: {
          authorization: token,
        },
      });
      if (response.data.success) {
        console.log("data saved in db", response);
        toast.dismiss();
        handleClose();
        toast.success("Property posted successfully");
        navigate("/profile");
      } else {
        toast.dismiss();
        toast.error("Please signin to your account to post your property");
      }
    } catch (err) {
      console.log(err);
    }
    setImgUrl(false);
  };
  useEffect(() => {
    if (imgUrl) {
      handlePost();
    }
  }, [imgUrl]);
  // HANDLERS END }}}}}}}}}}

  return (
    <main className="relative h-[calc(100vh-64px)] text-slate-700">
      <main className="h-full w-full flex flex-col xl:flex-row overflow-hidden bg-white shadow">
        <main className="group w-full xl:w-[25%] border-r">
          <section className="h-14 bg-slate-100 border-b flex items-center px-[18px] space-x-1">
            <span
              onClick={() => navigate(-1)}
              className="cursor-pointer hover:text-cyan-500"
            >
              Sell Property
            </span>
            <RxChevronRight />
            <span className="capitalize text-cyan-500">{category}</span>
          </section>
          <section className="text-sm xl:text-base bg-slate-100 xl:bg-transparent border-b xl:border-b-0 h-auto xl:h-[calc(100%-56px)] py-2.5 xl:py-0 px-[18px] xl:px-0 flex flex-row xl:flex-col overflow-y-scroll scrollbar scrollbar-w-0 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full scrollbar-h-0">
            {formList.map((form) => (
              <div
                key={form}
                onClick={() => setActiveForm(form)}
                className={`h-8 xl:h-16 flex items-center px-2.5 cursor-pointer rounded-full xl:rounded-none space-x-2 whitespace-nowrap ${
                  form === activeForm ? "bg-cyan-200" : "hover:bg-slate-100"
                }`}
              >
                <span className="capitalize">{form}</span>
              </div>
            ))}
          </section>
        </main>
        <main
          style={{ backgroundSize: "500px auto" }}
          className="group w-full xl:w-[75%] h-[calc(100%-108.8px)] xl:h-auto bg-[url(https://web.telegram.org/a/chat-bg-pattern-light.ee148af944f6580293ae.png)] bg-center"
        >
          <main className="w-full h-full bg-white/75">
            <div className="bg-transparent h-3.5"></div>
            {activeForm === "property details" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <PropertyDetails
                  propertyData={propertyData}
                  setPropertyData={setPropertyData}
                />
              </div>
            )}
            {activeForm === "locality" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <Locality locality={locality} setLocality={setLocality} />
              </div>
            )}
            {activeForm === "amenities" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <Amenities
                  aminities={aminities}
                  setAminities={setAminities}
                  newAminity={newAminity}
                  setNewAminity={setNewAminity}
                />
              </div>
            )}
            {activeForm === "why invest" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <WhyInvest
                  whyInvest={whyInvest}
                  setWhyInvest={setWhyInvest}
                  whyInvestFactors={whyInvestFactors}
                  setWhyInvestFactors={setWhyInvestFactors}
                />
              </div>
            )}
            {activeForm === "approvals" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <Approvals
                  newApprovals={newApprovals}
                  setNewApprovals={setNewApprovals}
                  approvals={approvals}
                  setApprovals={setApprovals}
                />
              </div>
            )}
            {activeForm === "additional rooms" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <AdditionalRooms
                  newAdditionalRooms={newAdditionalRooms}
                  setNewAdditionalRooms={setNewAdditionalRooms}
                  additionalRooms={additionalRooms}
                  setAdditionalRooms={setAdditionalRooms}
                />
              </div>
            )}
            {activeForm === "property images" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <div className="ml-7 mr-4 mt-1.5">
                  <form>
                    <input
                      type="file"
                      name="images"
                      multiple
                      onChange={handleFileChange}
                    />
                  </form>
                  <div className="images-wrapper">
                    {images.map((image) => (
                      <div className="uploaded-images" key={image}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt=""
                          width="100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeForm === "360° view images" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <div className="ml-7 mr-4 mt-1.5">
                  <form>
                    <input
                      type="file"
                      name="view360images"
                      multiple
                      onChange={handleFile360Change}
                    />
                  </form>
                  <div className="images-wrapper">
                    {view360images.map((image) => (
                      <div className="uploaded-images" key={image}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt=""
                          width="100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeForm === "additional information" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <AdditionalInfo
                  additionalDetails={additionalDetails}
                  setAdditionalDetails={setAdditionalDetails}
                />
              </div>
            )}
            <div className="bg-transparent h-3.5"></div>
          </main>
        </main>
      </main>
      <button
        className="absolute bottom-5 right-5 bg-cyan-300 hover:bg-cyan-400 duration-200 px-3 pt-[3px] pb-1 rounded-md text-white text-sm"
        onClick={handleOpen}
      >
        Preview
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="preview-form-modal"
      >
        <Box sx={style}>
          <RealEstatePreviewPage
            property_type="shop"
            propertyData={propertyData}
            locality={locality}
            images={images}
            aminities={aminities}
            additionalDetails={additionalDetails}
            handleClose={handleClose}
            handleUploadImages={handleUploadImages}
            whyInvest={whyInvest}
            approvals={approvals}
            additionalRooms={additionalRooms}
            propertyType="Apartment"
          />
        </Box>
      </Modal>
    </main>
  );
};

export default Form;
