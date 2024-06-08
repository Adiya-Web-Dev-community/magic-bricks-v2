import { toast } from "react-hot-toast";
import axios from "../../../helper/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";

import CarDetails from "./carFormSteps/CarDetails";
import CarTechnicalDetails from "./carFormSteps/CarTechnicalDetails";
import AdditionalInfo from "./carFormSteps/AdditionalInfo";

const formList = ["car details", "technical details", "car images"];

const Form = ({ category }) => {
  const [activeForm, setActiveForm] = useState("car details");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //PROPERTY DETAILS
  const [carData, setCarData] = useState({
    propertyAdType: "",
    manufacturer: "",
    model: "",
    year: "",
    mileage: "",
    exteriorColor: "",
    interiorColor: "",
    rentPrice: "",
    totalShares: "",
    availableShares: "",
    perSharePrice: "",
  });

  //Technical DETAILS
  const [carTechDetails, setCarTechDetails] = useState({
    transmission: "",
    engineType: "",
    fuelType: "",
    driveTrain: "",
    vinNumber: "",
  });

  //UPLOAD PHOTOS
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [finalImgArr, setFinalImgArr] = useState([]);
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  //ADDITIONL INFORMATION
  const [additionalDetails, setAdditionalDetails] = useState("");

  const token = localStorage.getItem("token");
  //HANDLE SUBMIT
  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      toast.error("No Image Chosen !");
      return;
    }
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
      imgData.append("file", images[i]);
      await axios
        .post(import.meta.env.VITE_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          // console.log(resp);
          arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }
    console.log(arr);
    setFinalImgArr(arr);

    if (arr.length !== 0) {
      setImgUrl(true);
    }
  };

  const handlePost = async () => {
    const data = {
      ...carData,
      ...carTechDetails,
      imgArr: finalImgArr,
      // additionalDetails: additionalDetails,
    };
    console.log("data before posting", data);

    try {
      toast.loading("Uploading images. Please wait");

      const response = await axios.post("/car-form", data, {
        headers: {
          authorization: token,
        },
      });

      if (response.data.success) {
        console.log("data saved in db", response);
        toast.dismiss();
        toast.success("Property posted successfully");
        navigate("/profile");
      } else {
        toast.error();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (imgUrl) {
      handlePost();
    }
    // eslint-disable-next-line
  }, [imgUrl]);

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
            {activeForm === "car details" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <CarDetails carData={carData} setCarData={setCarData} />
              </div>
            )}
            {activeForm === "technical details" && (
              <div className="h-[calc(100%-14px-14px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <CarTechnicalDetails
                  carTechDetails={carTechDetails}
                  setCarTechDetails={setCarTechDetails}
                />
              </div>
            )}
            {activeForm === "car images" && (
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
        className="absolute bottom-5 right-5 bg-cyan-300 hover:bg-cyan-400 duration-200 px-3 pt-[3px] pb-1 rounded-md text-white text-base"
        onClick={handleUploadImages}
      >
        Post
      </button>
    </main>
  );
};

export default Form;
