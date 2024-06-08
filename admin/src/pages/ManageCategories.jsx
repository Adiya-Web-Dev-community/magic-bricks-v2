import { useEffect, useState } from "react";
import axios from "../axios";
// import Loading from "../components/Loading";
import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { MdPlaylistAdd } from "react-icons/md";
import { toast } from "react-hot-toast";

const ManageCategories = () => {
  const token = localStorage.getItem("adminToken");
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    propertyType: "",
  });
  const propertyType = [
    {
      value: "real-estate",
      label: "Real estate",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  // get categories
  const getCategories = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get("/get-categories", {
        headers: { authorization: token },
      });
      console.log("=>", resp);
      setCategories(resp.data?.data?.categories);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  //handleInputs
  const handleInputs = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/add-category", form, {
      headers: { authorization: token },
    });
    getCategories();
    setForm({ name: "", description: "", propertyType: "" });
    toast.success("Added");
  };

  // to show or not to show categories
  const handleCheckbox = async (id, name, checked) => {
    console.log(id, name, checked);
    try {
      toast.loading("Updating...");
      await axios.put(
        `change-category-status/${id}`,
        {
          checked: checked,
        },
        { headers: { authorization: token } }
      );
      toast.success("Status updated");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(form);

  return (
    <section className="text-slate-300 flex flex-col items-center space-y-10">
      <form
        onSubmit={handleAdd}
        className="flex flex-col items-center bg-slate-100 rounded-xl p-5"
      >
        <div className="space-y-2.5 flex flex-col">
          <TextField
            select
            size="small"
            variant="standard"
            id="propertyType"
            name="propertyType"
            label="Select property type"
            value={form.propertyType}
            onChange={handleInputs}
            sx={{ width: "250px" }}
          >
            {propertyType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            variant="standard"
            id="name"
            name="name"
            label="Category name"
            value={form.name}
            onChange={handleInputs}
            sx={{ width: "250px" }}
            spellCheck="false"
          />
          {/* <TextField
          size="small"
          variant="standard"
          id="description"
          name="description"
          label="Description"
          value={form.description}
          onChange={handleInputs}
          sx={{ width: "250px" }}
        /> */}
        </div>
        <div className="mt-5">
          <LoadingButton
            variant="contained"
            // sx={{ width: "100%" }}
            type="submit"
            size="small"
            color="primary"
            onClick={handleAdd}
            loadingPosition="start"
            startIcon={<MdPlaylistAdd />}
          >
            Add
          </LoadingButton>
        </div>
      </form>

      <section className="space-y-10 w-11/12 bg-slate-800 p-5 rounded-xl">
        <div>
          <h1 className="text-slate-300 text-xl font-light">
            Real estate categories
          </h1>
          <div className="flex flex-wrap items-center">
            {console.log(categories)}
            {categories
              ?.filter((obj) => obj.propertyType === "real-estate")
              .map((ele, i) => {
                return (
                  <li
                    key={i}
                    className="flex mr-2.5 mt-2.5 border border-slate-500 pl-3.5 rounded-md"
                  >
                    <FormControlLabel
                      sx={{
                        textTransform: "capitalize",
                        color: "#cbd5e1",
                      }}
                      control={
                        <Checkbox
                          size="small"
                          sx={{ color: "#cbd5e1" }}
                          defaultChecked={ele.showStatus}
                          onChange={(e) => {
                            handleCheckbox(ele._id, ele.name, e.target.checked);
                          }}
                        />
                      }
                      label={ele.name}
                    />
                  </li>
                );
              })}
          </div>
        </div>
        <div>
          <h1 className="text-slate-300 text-xl font-light">
            Other categories
          </h1>
          <div className="flex flex-wrap">
            {categories
              ?.filter((obj) => {
                if (obj.propertyType === "other") {
                  return obj;
                }
              })
              .map((ele, i) => {
                return (
                  <li
                    key={i}
                    className="flex mr-2.5 mt-2.5 border border-slate-500 pl-3.5 rounded-md"
                  >
                    <FormControlLabel
                      sx={{
                        textTransform: "capitalize",
                        color: "#cbd5e1",
                      }}
                      control={
                        <Checkbox
                          size="small"
                          sx={{ color: "#cbd5e1" }}
                          defaultChecked={ele.showStatus}
                          onChange={(e) => {
                            handleCheckbox(ele._id, ele.name, e.target.checked);
                          }}
                        />
                      }
                      label={ele.name}
                    />
                  </li>
                );
              })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ManageCategories;
