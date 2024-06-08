import React from "react";
import { TextField } from "@mui/material";

const YachtTechnicalDetails = ({ yachtTechDetails, setYachtTechDetails }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setYachtTechDetails((prevdraftUnit) => ({
      ...prevdraftUnit,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7 gap-y-5">
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="length"
        label={<span className="text-slate-700">Length</span>}
        helperText="Please enter length"
        value={yachtTechDetails.length}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="lengthUnit"
        label={<span className="text-slate-700">Length unit</span>}
        helperText="Please enter length unit"
        value={yachtTechDetails.lengthUnit}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="beam"
        label={<span className="text-slate-700">Beam</span>}
        helperText="Please enter beam detail"
        value={yachtTechDetails.beam}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="draft"
        label={<span className="text-slate-700">Draft</span>}
        helperText="Please enter draft"
        value={yachtTechDetails.draft}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="draftUnit"
        label={<span className="text-slate-700">Draft unit</span>}
        helperText="Please enter draft unit"
        value={yachtTechDetails.draftUnit}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="hullMaterial"
        label={<span className="text-slate-700">Hull material</span>}
        helperText="Please enter hull material detail"
        value={yachtTechDetails.hullMaterial}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="engineType"
        label={<span className="text-slate-700">Engine type</span>}
        helperText="Please enter engine type"
        value={yachtTechDetails.engineType}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="engineHours"
        label={<span className="text-slate-700">Engine hours</span>}
        helperText="Please enter engine hours"
        value={yachtTechDetails.engineHours}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="fuelType"
        label={<span className="text-slate-700">Fuel type</span>}
        helperText="Please enter fuel type"
        value={yachtTechDetails.fuelType}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="fuelCapacity"
        label={<span className="text-slate-700">Fuel capacity</span>}
        helperText="Please enter fuel capacity"
        value={yachtTechDetails.fuelCapacity}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="fuelCapacityUnit"
        label={<span className="text-slate-700">Fuel capacity unit</span>}
        helperText="Please enter fuel capacity unit"
        value={yachtTechDetails.fuelCapacityUnit}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="waterCapacity"
        label={<span className="text-slate-700">Water capacity</span>}
        helperText="Please enter water capacity"
        value={yachtTechDetails.waterCapacity}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="waterCapacityUnit"
        label={<span className="text-slate-700">Water capacity unit</span>}
        helperText="Please enter water capacity unit"
        value={yachtTechDetails.waterCapacityUnit}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="accommodationsQty"
        label={<span className="text-slate-700">Accommodations quntity</span>}
        helperText="Please enter accommodations quntity"
        value={yachtTechDetails.accommodationsQty}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="numberOfCabins"
        label={<span className="text-slate-700">Number of cabins</span>}
        helperText="Please enter number of cabins"
        value={yachtTechDetails.numberOfCabins}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="numberOfHeads"
        label={<span className="text-slate-700">Number of heads</span>}
        helperText="Please enter number of heads"
        value={yachtTechDetails.numberOfHeads}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="generator"
        label={<span className="text-slate-700">Generator</span>}
        helperText="Please enter generator detail"
        value={yachtTechDetails.generator}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="airConditioning"
        label={<span className="text-slate-700">Air conditioning</span>}
        helperText="Please enter air conditioning detail"
        value={yachtTechDetails.airConditioning}
        onChange={handleInputs}
      />
    </form>
  );
};

export default YachtTechnicalDetails;
