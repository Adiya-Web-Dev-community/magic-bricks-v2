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
export const dimensionsUnit = [
  {
    value: "sq-m",
    label: "sq-m",
  },
  {
    value: "sq-ft",
    label: "sq-ft",
  },
];

const ArtDetails = ({ artData, setArtData }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setArtData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [rentStatus, setRentStatus] = useState(false);
  useEffect(() => {
    if (artData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [artData.propertyAdType]);

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7 gap-y-5">
      <TextField
        select
        size="small"
        spellCheck="false"
        name="propertyAdType"
        label={<span className="text-slate-700">Property ad type</span>}
        helperText="Please select ad type"
        value={artData.propertyAdType}
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
        name="artistName"
        label={<span className="text-slate-700">Artist name</span>}
        helperText="Please enter artist name"
        value={artData.artistName}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="artworkTitle"
        label={<span className="text-slate-700">Artwork title</span>}
        helperText="Please enter artwork title"
        value={artData.artworkTitle}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="medium"
        label={<span className="text-slate-700">Medium</span>}
        helperText="Please enter medium"
        value={artData.medium}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="year"
        label={<span className="text-slate-700">Year</span>}
        helperText="Please enter year"
        value={artData.year}
        onChange={handleInputs}
      />
      <TextField
        select
        size="small"
        spellCheck="false"
        name="dimensionsUnit"
        label={<span className="text-slate-700">Unit of dimension</span>}
        helperText="Please select unit type"
        value={artData.dimensionsUnit}
        onChange={handleInputs}
      >
        {dimensionsUnit.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="dimensions"
        label={<span className="text-slate-700">Dimension</span>}
        helperText="Please enter dimension"
        value={artData.dimensions}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="framed"
        label={<span className="text-slate-700">Framed</span>}
        helperText="Please enter framed detail"
        value={artData.framed}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="condition"
        label={<span className="text-slate-700">Condition</span>}
        helperText="Please enter condition detail"
        value={artData.condition}
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
          value={artData.totalShares}
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
          value={artData.availableShares}
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
          value={artData.perSharePrice}
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
          value={artData.rentPrice}
          onChange={handleInputs}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
      ) : null}
    </form>
  );
};

export default ArtDetails;
