import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

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
        name="propertyAdType"
        label={<span className="text-slate-700">Property ad type</span>}
        helperText="Please select ad type"
        value={propertyData.propertyAdType}
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
        name="shopName"
        label={<span className="text-slate-700">Property name</span>}
        helperText="Please enter project name"
        value={propertyData.propertyName}
        onChange={handleInputs}
      />
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
        name="historicalSignificance"
        label={<span className="text-slate-700">Historical significance</span>}
        helperText="Please enter historical significance"
        value={propertyData.historicalSignificance}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="yearBuilt"
        label={<span className="text-slate-700">Year built</span>}
        helperText="Please enter year built"
        value={propertyData.yearBuilt}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="archStyle"
        label={<span className="text-slate-700">Arch style</span>}
        helperText="Please enter arch style"
        value={propertyData.archStyle}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="restorationEfforts"
        label={<span className="text-slate-700">Restoration efforts</span>}
        helperText="Please enter restoration efforts"
        value={propertyData.restorationEfforts}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="landSize"
        label={<span className="text-slate-700">Land size</span>}
        helperText="Please enter land size"
        value={propertyData.landSize}
        onChange={handleInputs}
        InputProps={{
          endAdornment: <InputAdornment position="end">sqft</InputAdornment>,
        }}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="propertySize"
        label={<span className="text-slate-700">Property size</span>}
        helperText="Please enter property size"
        value={propertyData.propertySize}
        onChange={handleInputs}
        InputProps={{
          endAdornment: <InputAdornment position="end">sqft</InputAdornment>,
        }}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="heritageDesignations"
        label={<span className="text-slate-700">Heritage designations</span>}
        helperText="Please enter heritage designations"
        value={propertyData.heritageDesignations}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="uniqueFeatures"
        label={<span className="text-slate-700">Unique features</span>}
        helperText="Please enter unique features"
        value={propertyData.uniqueFeatures}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="ownerHistory"
        label={<span className="text-slate-700">Owner history</span>}
        helperText="Please enter owner history"
        value={propertyData.ownerHistory}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="renovationPlans"
        label={<span className="text-slate-700">Renovation plans</span>}
        helperText="Please enter renovation plans"
        value={propertyData.renovationPlans}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="financingOptions"
        label={<span className="text-slate-700">Financing options</span>}
        helperText="Please enter financing options"
        value={propertyData.financingOptions}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="maintenanceCosts"
        label={<span className="text-slate-700">Maintenance costs</span>}
        helperText="Please enter maintenance costs"
        value={propertyData.maintenanceCosts}
        onChange={handleInputs}
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
        }}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="sustainorConservationEfforts"
        label={
          <span className="text-slate-700">Sustainor conservation efforts</span>
        }
        helperText="Please enter sustainor conservation efforts"
        value={propertyData.sustainorConservationEfforts}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="inspectionReports"
        label={<span className="text-slate-700">Inspection reports</span>}
        helperText="Please enter inspection reports"
        value={propertyData.inspectionReports}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="sustainorConservationGroups"
        label={
          <span className="text-slate-700">Sustainor conservation groups</span>
        }
        helperText="Please enter sustainor conservation groups"
        value={propertyData.sustainorConservationGroups}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="heritagePropertyCouncilApprovals"
        label={
          <span className="text-slate-700">
            Heritage property council approvals
          </span>
        }
        helperText="Please enter heritage property council approvals"
        value={propertyData.heritagePropertyCouncilApprovals}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="historicalDoc"
        label={<span className="text-slate-700">Historical doc</span>}
        helperText="Please enter historical doc"
        value={propertyData.historicalDoc}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="landmarks"
        label={<span className="text-slate-700">landmarks</span>}
        helperText="Please enter landmarks"
        value={propertyData.landmarks}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="noOfBedroom"
        label={<span className="text-slate-700">Bedrooms</span>}
        helperText="Please enter number of bedrooms"
        value={propertyData.noOfBedroom}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="noOfBathroom"
        label={<span className="text-slate-700">Bathrooms</span>}
        helperText="Please enter number of bathrooms"
        value={propertyData.noOfBathroom}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="pricingInfo"
        label={<span className="text-slate-700">Price</span>}
        helperText="Please enter price"
        value={propertyData.pricingInfo}
        onChange={handleInputs}
        InputProps={{
          startAdornment: <InputAdornment position="start">₹</InputAdornment>,
        }}
      />
      <TextField
        size="small"
        type="number"
        spellCheck="false"
        name="contactInfo"
        label={<span className="text-slate-700">Contact</span>}
        helperText="Please enter contact number"
        value={propertyData.contactInfo}
        onChange={handleInputs}
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}
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
      {/* {rentStatus ? (
        <TextField
          size="small"
          type="number"
          spellCheck="false"
          id="rentPrice"
          name="rentPrice"
          label={<span className="text-slate-700">Rent price</span>}
          helperText="Please enter rent price"
          value={propertyData.rentPrice}
          onChange={handleInputs}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
      ) : null} */}
    </form>
  );
};

export default PropertyDetails;
