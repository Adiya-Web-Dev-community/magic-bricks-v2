import axios from "axios";
import TextField from "@mui/material/TextField";

const Locality = ({ locality, setLocality }) => {
  const getPinDetails = async (pin) => {
    setLocality({ ...locality, pin });
    await axios
      .get(`https://api.postalpincode.in/pincode/${pin}`)
      .then((res) => {
        const { Block, State } = res.data[0].PostOffice[0];
        setLocality({ ...locality, pin, city: Block, state: State });
      })
      .catch((err) => console.log(err));
  };
  // HANDLER
  const handleInputs = (param) => (e) => {
    const val = e.target.value;
    param === "pin"
      ? val.length === 6
        ? getPinDetails(val)
        : setLocality({ ...locality, [param]: val, city: "", state: "" })
      : setLocality({ ...locality, [param]: val });
  };

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-x-7 gap-y-5">
      <TextField
        size="small"
        spellCheck="false"
        label={<span className="text-slate-700">Street</span>}
        helperText="Please enter street"
        value={locality.street}
        onChange={handleInputs("street")}
      />
      <TextField
        size="small"
        spellCheck="false"
        label={<span className="text-slate-700">Landmark</span>}
        helperText="Please enter landmark"
        value={locality.landmark}
        onChange={handleInputs("landmark")}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        label={<span className="text-slate-700">Pincode</span>}
        helperText="Please enter pincode"
        value={locality.pin}
        onChange={handleInputs("pin")}
      />
      <TextField
        disabled
        size="small"
        spellCheck="false"
        label={<span className="text-slate-700">City</span>}
        helperText="Please enter city"
        value={locality.city}
        onChange={handleInputs("city")}
      />
      <TextField
        disabled
        size="small"
        spellCheck="false"
        label={<span className="text-slate-700">State</span>}
        helperText="Please enter state"
        value={locality.state}
        onChange={handleInputs("state")}
      />
      <TextField
        size="small"
        spellCheck="false"
        label={<span className="text-slate-700">Nearby places</span>}
        helperText="Please enter nearby places"
        value={locality.nearbyPlaces}
        onChange={handleInputs("nearbyPlaces")}
      />
    </form>
  );
};

export default Locality;
