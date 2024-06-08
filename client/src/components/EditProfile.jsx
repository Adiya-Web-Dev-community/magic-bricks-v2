import { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { toast } from "react-hot-toast";
import axios from "../helper/axios";
import { FaWindowClose } from "react-icons/fa";
import { TextField } from "@mui/material";
import Loader from "../Preloader/Loader";
import { useNavigate } from "react-router-dom";

const EditProfile = ({
  userData,
  editStatus,
  setEditStatus,
  setUpdatedChanges,
  getData,
}) => {
  const navigate = useNavigate();
  // console.log("userData==>", userData);
  const token = localStorage.getItem("token");
  //set data
  // editForm

  const [editForm, setEditForm] = useState([]);
  useEffect(() => {
    setEditForm(userData);
  }, [editStatus]);

  // set images
  const [image, setImage] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [newImage, setNewImage] = useState(false);

  // handle image
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setNewImage(true);
  };

  // handle photo upload
  const handleUploadImage = async (e) => {
    e.preventDefault();
    // console.log(newImage);
    toast.loading("uploading image...");
    if (newImage) {
      const imgData = new FormData();
      imgData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
      imgData.append("file", image);
      await axios
        .post(import.meta.env.VITE_APP_CLOUDINARY_URL, imgData)
        .then((resp) => {
          console.log(resp.data.secure_url);
          setImgUrl(resp.data.secure_url);
          handleSave(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    } else {
      handleSave();
    }
    setEditForm([]);
    setEditStatus(false);
    toast.dismiss();
    toast.success("Updated data successfully");
  };

  //  handle inputs
  const handleInputs = (e) => {
    setEditForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // handle save
  const handleSave = async (img) => {
    // console.log("editForm", editForm);
    const dataObj = {
      firstName: editForm.firstName,
      lastName: editForm.lastName,
      email: editForm.email,
      contact: editForm.contact,
      city: editForm.city,
      country: editForm.country,
      website: editForm.website,
      profileImg: img,
    };
    try {
      const resp = await axios.put("/edit-profile", dataObj, {
        headers: {
          authorization: token,
        },
      });
      // console.log(resp);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [handleSave]);

  return (
    <main
      className={`${
        editStatus ? "visible" : "invisible"
      } z-20 fixed top-0 left-0 w-full h-[100vh] overflow-y-auto bg-black/75 grid place-items-center`}
    >
      {editStatus ? (
        <section
          className={`bg-[url('https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/114/images/1838/1000px_main_9kHJwMO4Q7mRt5rx39Ft6sn3x5wyyAJJeOJ2SLA1.jpeg')] bg-cover bg-center rounded-xl overflow-hidden text-slate-700 duration-200 w-full sm:w-[500px]  ${
            editStatus ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <section className="p-5 bg-white/75 ">
            <form className="space-y-5" onSubmit={handleUploadImage}>
              <div className="">
                <h1 className="flex items-center justify-between">
                  <button className="flex items-center space-x-2">
                    <BiSolidUser className="text-xl text-slate-500 mt-0.5" />
                    <span className="text-xl">Profile details</span>
                  </button>
                  <FaWindowClose
                    className="text-2xl cursor-pointer text-red-500 hover:text-red-600 duration-200"
                    onClick={() => {
                      setEditStatus(!editStatus);
                      setImage("");
                    }}
                  />
                </h1>
              </div>
              <div>
                <section>
                  <div className=" h-[10rem] w-[10rem] md:h-1/2 md:w-1/2 m-auto relative mb-5">
                    {newImage ? <img src={URL.createObjectURL(image)} /> : null}
                  </div>
                  <div>
                    <input type="file" onChange={handleImage} name="image" />
                  </div>
                </section>
              </div>
              <section className="space-y-5">
                <div className="flex flex-col sm:flex-row space-y-5 space-x-0 sm:space-x-2.5 sm:space-y-0">
                  <TextField
                    size="small"
                    type="text"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    id="firstName"
                    name="firstName"
                    label="First name"
                    defaultValue={`${editForm.firstName}`}
                    value={editForm.firstName}
                    onChange={handleInputs}
                    spellCheck="false"
                  />
                  <TextField
                    size="small"
                    type="text"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    defaultValue={`${editForm.lastName}`}
                    value={editForm.lastName}
                    onChange={handleInputs}
                    spellCheck="false"
                  />
                </div>
                <TextField
                  size="small"
                  type="text"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  id="email"
                  name="email"
                  label="Email address"
                  defaultValue={`${editForm.email}`}
                  value={editForm.email}
                  onChange={handleInputs}
                  spellCheck="false"
                />
                <TextField
                  size="small"
                  type="num"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  id="contact"
                  name="contact"
                  label="Contact number"
                  defaultValue={`${editForm.contact}`}
                  value={editForm.contact}
                  onChange={handleInputs}
                  spellCheck="false"
                />
                <div className="flex flex-col sm:flex-row space-y-5 space-x-0 sm:space-x-2.5 sm:space-y-0">
                  <TextField
                    size="small"
                    type="text"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    id="city"
                    name="city"
                    label="City"
                    defaultValue={`${editForm.city}`}
                    value={editForm.city}
                    onChange={handleInputs}
                    spellCheck="false"
                  />
                  <TextField
                    size="small"
                    type="text"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    id="country"
                    name="country"
                    label="Country"
                    defaultValue={`${editForm.country}`}
                    value={editForm.country}
                    onChange={handleInputs}
                    spellCheck="false"
                  />
                </div>
                <TextField
                  size="small"
                  type="text"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  id="website"
                  name="website"
                  label="Website link"
                  defaultValue={`${editForm.website}`}
                  value={editForm.website}
                  onChange={handleInputs}
                  spellCheck="false"
                />
              </section>
              <section className="flex justify-center items-center">
                <button className="bg-cyan-400 hover:bg-cyan-500 duration-200 px-8 pt-1.5 pb-[7px] rounded-md text-white w-full border-b-2 border-b-cyan-500 hover:border-b-cyan-600">
                  Save
                </button>
              </section>
            </form>
          </section>
        </section>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default EditProfile;
