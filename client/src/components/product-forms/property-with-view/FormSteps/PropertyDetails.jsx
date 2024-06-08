import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

// OPTIONS
const sellerType = [
  {
    value: "owner",
    label: "Owner",
  },
  {
    value: "broker",
    label: "Broker",
  },
  {
    value: "builder",
    label: "Builder",
  },
];
const propertyAge = [
  {
    value: "New",
    label: "New",
  },
  {
    value: "1-2years",
    label: "1-2years",
  },
  {
    value: "2-4years",
    label: "2-4years",
  },
];
const furnishing = [
  {
    value: "fully-furnished",
    label: "Fully Furnished",
  },
  {
    value: "semi-furnished",
    label: "Semi Furnished",
  },
  {
    value: "unfurnished",
    label: "Unfurnished",
  },
];
const possessionStatus = [
  {
    value: "ready to move",
    label: "Ready to move",
  },
  {
    value: "under construction",
    label: "Under construction",
  },
];

const typeOfOwnership = [
  {
    value: "freehold",
    label: "Freehold",
  },
  {
    value: "lease",
    label: "Lease",
  },
];

const PropertyDetails = ({ propertyData, setPropertyData }) => {
  // HOOKS
  const [rentStatus, setRentStatus] = useState(false);
  const [sellerTypeStatus, setSellerTypeStatus] = useState(false);

  // HANDLERS
  const handleInputs = (e) => {
    setPropertyData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (propertyData.propertyAdType === "rent") {
      setRentStatus(true);
    } else {
      console.log("you selected sell ad type");
      setRentStatus(false);
    }
  }, [propertyData.propertyAdType]);
  //conditional rendering for seller type for reraId
  useEffect(() => {
    if (
      propertyData.sellerType === "broker" ||
      propertyData.sellerType === "builder"
    ) {
      console.log(propertyData.sellerType);
      setSellerTypeStatus(true);
    } else {
      setSellerTypeStatus(false);
    }
  }, [propertyData.sellerType]);

  return (
    <form className="ml-7 mr-6 mt-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7 gap-y-5">
      <TextField
        select
        size="small"
        spellCheck="false"
        name="sellerType"
        label={<span className="text-slate-700">Seller type</span>}
        helperText="Please select seller type"
        value={propertyData.sellerType}
        onChange={handleInputs}
      >
        {sellerType.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        spellCheck="false"
        name="sellerName"
        label={<span className="text-slate-700">Seller name</span>}
        helperText="Please enter seller name"
        value={propertyData.sellerName}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="Project Name"
        label={<span className="text-slate-700">Project name</span>}
        helperText="Please enter project name"
        value={propertyData.projectName}
        onChange={handleInputs}
      />
      {sellerTypeStatus ? (
        <TextField
          size="small"
          spellCheck="false"
          id="reraId"
          label={<span className="text-slate-700">Rera ID</span>}
          helperText="Please enter rera id"
          value={propertyData.reraId}
          name="reraId"
          onChange={handleInputs}
        />
      ) : null}
      {!rentStatus ? (
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          id="totalShares"
          name="totalShares"
          label={<span className="text-slate-700">Total shares</span>}
          helperText="Please enter total shares"
          value={propertyData.totalShares}
          onChange={handleInputs}
        />
      ) : null}
      {!rentStatus ? (
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          id="availableShares"
          name="availableShares"
          label={<span className="text-slate-700">Available shares</span>}
          helperText="Please enter available shares"
          value={propertyData.availableShares}
          onChange={handleInputs}
        />
      ) : null}
      {!rentStatus ? (
        <TextField
          size="small"
          type="number"
          spellCheck="false"
          id="perSharePrice"
          name="perSharePrice"
          label={<span className="text-slate-700">Price per share</span>}
          helperText="Please enter price/share"
          value={propertyData.perSharePrice}
          onChange={handleInputs}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
      ) : null}
      {rentStatus ? (
        <TextField
          size="small"
          spellCheck="false"
          id="rentPrice"
          name="rentPrice"
          label={<span className="text-slate-700">Rent price</span>}
          helperText="Please enter rent price"
          value={propertyData.rentPrice}
          onChange={handleInputs}
        />
      ) : null}

      <TextField
        size="small"
        spellCheck="false"
        name="propertyId"
        label={<span className="text-slate-700">Unique property ID</span>}
        helperText="Please enter unique property id"
        value={propertyData.propertyId}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="area"
        label={<span className="text-slate-700">Property area</span>}
        helperText="Please enter property area"
        value={propertyData.area}
        onChange={handleInputs}
        InputProps={{
          endAdornment: <InputAdornment position="end">sqft</InputAdornment>,
        }}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="carpetArea"
        label={<span className="text-slate-700">Carpet area</span>}
        helperText="Please enter carpet area"
        value={propertyData.carpetArea}
        onChange={handleInputs}
        InputProps={{
          endAdornment: <InputAdornment position="end">sqft</InputAdornment>,
        }}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="totalBalconies"
        label={<span className="text-slate-700">Total balconies</span>}
        helperText="Please enter total balconies"
        value={propertyData.totalBalconies}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="floorsPlan"
        label={<span className="text-slate-700">Total floors</span>}
        helperText="Please enter total floors"
        value={propertyData.floorsPlan}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="paymentPlans"
        label={<span className="text-slate-700">Payment Plans</span>}
        helperText="Please enter payment plans"
        value={propertyData.paymentPlans}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="noOfBeds"
        label={<span className="text-slate-700">Bedrooms</span>}
        helperText="Please enter number of bedrooms"
        value={propertyData.noOfBeds}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="noOfBaths"
        label={<span className="text-slate-700">Bathrooms</span>}
        helperText="Please enter number of bathrooms"
        value={propertyData.noOfBaths}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="noOfUnits"
        label={<span className="text-slate-700">Total Units</span>}
        helperText="Please enter total floors"
        value={propertyData.noOfUnits}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="maintenanceFees"
        label={<span className="text-slate-700">MaintenanceFees</span>}
        helperText="Please enter maintenance fees"
        value={propertyData.maintenanceFees}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="date"
        name="projectExptComptDate"
        label={
          <span className="text-slate-700">
            Project expected completion date
          </span>
        }
        helperText="Project expected completion date"
        value={propertyData.projectExptComptDate}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="date"
        name="projectExptComptDate"
        label={<span className="text-slate-700">Total floors</span>}
        helperText="Please enter total floors"
        value={propertyData.projectExptComptDate}
        onChange={handleInputs}
      />
    </form>
  );
};

export default PropertyDetails;
