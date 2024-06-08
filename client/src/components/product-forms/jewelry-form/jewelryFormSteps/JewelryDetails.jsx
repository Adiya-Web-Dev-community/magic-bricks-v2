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

const weightUnit = [
  {
    value: "gram",
    label: "gram",
  },
  {
    value: "carat",
    label: "carat",
  },
  {
    value: "tola",
    label: "tola",
  },
];

const JewelryDetails = ({ jewelryData, setJewelryData }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setJewelryData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [rentStatus, setRentStatus] = useState(false);
  useEffect(() => {
    if (jewelryData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [jewelryData.propertyAdType]);

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7 gap-y-5">
      <TextField
        select
        size="small"
        spellCheck="false"
        name="propertyAdType"
        label={<span className="text-slate-700">Property ad type</span>}
        helperText="Please select ad type"
        value={jewelryData.propertyAdType}
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
        name="jewelryType"
        label={<span className="text-slate-700">Jewellery type</span>}
        helperText="Please enter jewelry type"
        value={jewelryData.jewelryType}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="metalType"
        label={<span className="text-slate-700">Metal type</span>}
        helperText="Please enter metal type"
        value={jewelryData.metalType}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="gemstones"
        label={<span className="text-slate-700">Gem stones</span>}
        helperText="Please enter gem stones"
        value={jewelryData.gemstones}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="weight"
        label={<span className="text-slate-700">Weight</span>}
        helperText="Please enter weight"
        value={jewelryData.weight}
        onChange={handleInputs}
      />
      <TextField
        select
        size="small"
        spellCheck="false"
        name="weightUnit"
        label={<span className="text-slate-700">Weight unit</span>}
        helperText="Please select weight unit"
        value={jewelryData.weightUnit}
        onChange={handleInputs}
      >
        {weightUnit.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        spellCheck="false"
        name="cut"
        label={<span className="text-slate-700">Cut</span>}
        helperText="Please enter cut detail"
        value={jewelryData.cut}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="clarity"
        label={<span className="text-slate-700">Clarity</span>}
        helperText="Please enter clarity detail"
        value={jewelryData.clarity}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="color"
        label={<span className="text-slate-700">Color</span>}
        helperText="Please enter color"
        value={jewelryData.color}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="certification"
        label={<span className="text-slate-700">Certification</span>}
        helperText="Please enter certification detail"
        value={jewelryData.certification}
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
          value={jewelryData.totalShares}
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
          value={jewelryData.availableShares}
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
          value={jewelryData.perSharePrice}
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
          value={jewelryData.rentPrice}
          onChange={handleInputs}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
      ) : null}
    </form>
  );
};

export default JewelryDetails;
