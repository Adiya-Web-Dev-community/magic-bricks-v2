import React, { useEffect, useState } from "react";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
// OPTIONS
const propertyAdType = [
  {
    value: "rent",
    label: "Rent",
  },
  {
    value: "sell",
    label: "Sell",
  },
];

const YachtDetails = ({ yachtData, setYachtData }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setYachtData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [rentStatus, setRentStatus] = useState(false);
  useEffect(() => {
    if (yachtData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [yachtData.propertyAdType]);

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7 gap-y-5">
      <TextField
        select
        size="small"
        spellCheck="false"
        name="propertyAdType"
        label={<span className="text-slate-700">Property ad type</span>}
        helperText="Please select ad type"
        value={yachtData.propertyAdType}
        onChange={handleInputs}
      >
        {propertyAdType.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        spellCheck="false"
        name="manufacturer"
        label={<span className="text-slate-700">Manufacturer</span>}
        helperText="Please enter manufacturer name"
        value={yachtData.manufacturer}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="model"
        label={<span className="text-slate-700">Model</span>}
        helperText="Please enter model name"
        value={yachtData.model}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="year"
        label={<span className="text-slate-700">Year</span>}
        helperText="Please enter year"
        value={yachtData.year}
        onChange={handleInputs}
      />
      {!rentStatus && (
        <TextField
          size="small"
          type="number"
          spellCheck="false"
          name="totalShares"
          label={<span className="text-slate-700">Total shares</span>}
          helperText="Please enter total shares"
          value={yachtData.totalShares}
          onChange={handleInputs}
        />
      )}
      {!rentStatus && (
        <TextField
          size="small"
          type="number"
          spellCheck="false"
          name="availableShares"
          label={<span className="text-slate-700">Available shares</span>}
          helperText="Please enter available shares"
          value={yachtData.availableShares}
          onChange={handleInputs}
        />
      )}
      {!rentStatus && (
        <TextField
          size="small"
          type="number"
          spellCheck="false"
          name="perSharePrice"
          label={<span className="text-slate-700">Price per share</span>}
          helperText="Please enter price/share"
          value={yachtData.perSharePrice}
          onChange={handleInputs}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
      )}
      {rentStatus ? (
        <TextField
          size="small"
          type="number"
          spellCheck="false"
          id="rentPrice"
          name="rentPrice"
          label={<span className="text-slate-700">Rent price</span>}
          helperText="Please enter rent price"
          value={yachtData.rentPrice}
          onChange={handleInputs}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
      ) : null}
    </form>
  );
};

export default YachtDetails;
