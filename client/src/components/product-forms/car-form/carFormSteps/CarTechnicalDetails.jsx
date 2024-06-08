import React from "react";
import { TextField } from "@mui/material";

const CarTechnicalDetails = ({ carTechDetails, setCarTechDetails }) => {
  //HANDLE INPUTS
  const handleInputs = (e) => {
    setCarTechDetails((prevdraftUnit) => ({
      ...prevdraftUnit,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7 gap-y-5">
      <TextField
        size="small"
        spellCheck="false"
        name="transmission"
        label={<span className="text-slate-700">Transmission</span>}
        helperText="Please enter transmission"
        value={carTechDetails.transmission}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="engineType"
        label={<span className="text-slate-700">Engine type</span>}
        helperText="Please enter engine type"
        value={carTechDetails.engineType}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="fuelType"
        label={<span className="text-slate-700">Fuel type</span>}
        helperText="Please enter fuel type"
        value={carTechDetails.fuelType}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="driveTrain"
        label={<span className="text-slate-700">Drive train</span>}
        helperText="Please enter drive train"
        value={carTechDetails.driveTrain}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="vinNumber"
        label={<span className="text-slate-700">VIN number</span>}
        helperText="Please enter fuel type"
        value={carTechDetails.vinNumber}
        onChange={handleInputs}
      />
    </form>
  );
};

export default CarTechnicalDetails;
