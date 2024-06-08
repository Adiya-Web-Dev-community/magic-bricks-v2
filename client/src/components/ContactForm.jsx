import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../helper/axios";
import { MenuItem, TextField } from "@mui/material";

const ContactForm = () => {
  const options = [
    {
      value: "login-related",
      label: "Login related",
    },
    {
      value: "product-related",
      label: "Product related",
    },
    {
      value: "service-related",
      label: "Service related",
    },
    {
      value: "purchase-related",
      label: "Purchase related",
    },
    {
      value: "other",
      label: "Other",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    category: "",
    message: "",
  });

  //handle change
  const handleChange = (param) => (e) => {
    setFormData({ ...formData, [param]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Please wait...");
      const resp = await axios.post("/contact-form", formData);
      console.log(resp);
      toast.dismiss();
      toast.success("We'll get back to you soon");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center flex items-center justify-center">
      <form className="bg-white/95 p-5 rounded-xl w-96" onSubmit={handleSubmit}>
        <div className="mb-5">
          <TextField
            size="small"
            type="text"
            variant="outlined"
            sx={{ width: "100%" }}
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange("name")}
            required
            spellCheck="false"
          />
        </div>
        <div className="mb-5">
          <TextField
            size="small"
            type="number"
            variant="outlined"
            sx={{ width: "100%" }}
            id="contact"
            name="contact"
            label="Contact number"
            value={formData.contact}
            onChange={handleChange("contact")}
            required
            spellCheck="false"
          />
        </div>
        <div className="mb-5">
          <TextField
            size="small"
            type="text"
            variant="outlined"
            sx={{ width: "100%" }}
            id="email"
            name="email"
            label="Email address"
            value={formData.email}
            onChange={handleChange("email")}
            required
            spellCheck="false"
          />
        </div>
        <div className="mb-5">
          <TextField
            select
            size="small"
            variant="outlined"
            sx={{ width: "100%" }}
            id="category"
            name="category"
            label="Select category"
            value={formData.category}
            onChange={handleChange("category")}
            required
            spellCheck="false"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="mb-7">
          <TextField
            size="small"
            type="text"
            variant="outlined"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            id="message"
            name="message"
            label="Query"
            value={formData.message}
            onChange={handleChange("message")}
            required
            spellCheck="false"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 duration-200 px-8 pt-[7px] pb-[7px] rounded-md text-white w-full border-b-2 border-b-cyan-500 hover:border-b-cyan-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
