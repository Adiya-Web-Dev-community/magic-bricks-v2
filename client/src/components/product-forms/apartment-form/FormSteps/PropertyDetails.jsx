import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import {
  sellerType,
  propertyAge,
  furnishing,
  possessionStatus,
  statusOfElectricity,
  waterAvailability,
  typeOfOwnership,
  flooringType,
  facing,
} from "../../data";
import { InputAdornment } from "@mui/material";

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
        size="small"
        spellCheck="false"
        name="sellerName"
        label={<span className="text-slate-700">Seller name</span>}
        helperText="Enter seller name"
        value={propertyData.sellerName}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="apartmentName"
        label={<span className="text-slate-700">Apartment name</span>}
        helperText="Enter apartment name"
        value={propertyData.apartmentName}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        name="propertyId"
        label={<span className="text-slate-700">Unique property ID</span>}
        helperText="Enter unique property id"
        value={propertyData.propertyId}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="area"
        label={<span className="text-slate-700">Property area</span>}
        helperText="Enter property area"
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
        name="bedroom"
        label={<span className="text-slate-700">Bedrooms</span>}
        helperText="Enter bedrooms"
        value={propertyData.bedroom}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="bathroom"
        label={<span className="text-slate-700">Bathrooms</span>}
        helperText="Enter bathrooms"
        value={propertyData.bathroom}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="carpetArea"
        label={<span className="text-slate-700">Carpet area</span>}
        helperText="Enter carpet area"
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
        helperText="Enter total balconies"
        value={propertyData.totalBalconies}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="totalFloors"
        label={<span className="text-slate-700">Total floors</span>}
        helperText="Enter total floors"
        value={propertyData.totalFloors}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="floorNo"
        label={<span className="text-slate-700">Floor number</span>}
        helperText="Enter floor number"
        value={propertyData.floorNo}
        onChange={handleInputs}
      />
      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="totalLifts"
        label={<span className="text-slate-700">Total lifts</span>}
        helperText="Enter total lifts"
        value={propertyData.totalLifts}
        onChange={handleInputs}
      />
      <TextField
        select
        size="small"
        spellCheck="false"
        name="sellerType"
        label={<span className="text-slate-700">Seller type</span>}
        helperText="Select seller type"
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
        select
        size="small"
        spellCheck="false"
        name="propertyAge"
        label={<span className="text-slate-700">Property age</span>}
        helperText="Select property age"
        value={propertyData.propertyAge}
        onChange={handleInputs}
      >
        {propertyAge.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="furnishing"
        label={<span className="text-slate-700">Furnishing</span>}
        helperText="Select furnishing"
        value={propertyData.furnishing}
        onChange={handleInputs}
      >
        {furnishing.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="possessionStatus"
        label={<span className="text-slate-700">Possession status</span>}
        helperText="Select possession status"
        value={propertyData.possessionStatus}
        onChange={handleInputs}
      >
        {possessionStatus.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="statusOfElectricity"
        label={<span className="text-slate-700">Electricity status</span>}
        helperText="Select electricity status"
        value={propertyData.statusOfElectricity}
        onChange={handleInputs}
      >
        {statusOfElectricity.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="typeOfOwnership"
        label={<span className="text-slate-700">Ownership type</span>}
        helperText="Select ownership type"
        value={propertyData.typeOfOwnership}
        onChange={handleInputs}
      >
        {typeOfOwnership.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="flooringType"
        label={<span className="text-slate-700">Flooring type</span>}
        helperText="Select flooring type"
        value={propertyData.flooringType}
        onChange={handleInputs}
      >
        {flooringType.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="waterAvailability"
        label={<span className="text-slate-700">Water availability</span>}
        helperText="Select water availability"
        value={propertyData.waterAvailability}
        onChange={handleInputs}
      >
        {waterAvailability.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        spellCheck="false"
        name="facing"
        label={<span className="text-slate-700">Facing direction</span>}
        helperText="Select facing direction"
        value={propertyData.facing}
        onChange={handleInputs}
      >
        {facing.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        spellCheck="false"
        name="overlooking"
        label={<span className="text-slate-700">Property overlooking</span>}
        helperText="Property Overlooking"
        value={propertyData.overlooking}
        onChange={handleInputs}
      />
      {sellerTypeStatus ? (
        <TextField
          size="small"
          spellCheck="false"
          id="reraId"
          name="reraId"
          label={<span className="text-slate-700">Rera ID</span>}
          helperText="Enter rera id"
          value={propertyData.reraId}
          onChange={handleInputs}
        />
      ) : null}
      {/* {!rentStatus ? (
        <TextField
          size="small"
          spellCheck="false"
          type="number"
          id="totalShares"
          name="totalShares"
          label={<span className="text-slate-700">Total shares</span>}
          helperText="Enter total shares"
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
          helperText="Enter available shares"
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
          helperText="Enter price/share"
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
          helperText="Enter rent price"
          value={propertyData.rentPrice}
          onChange={handleInputs}
        />
      ) : null} */}
      <TextField
        size="small"
        spellCheck="false"
        id="rentPrice"
        name="rentPrice"
        label={<span className="text-slate-700">Price</span>}
        helperText="Enter rent price"
        value={propertyData.rentPrice}
        onChange={handleInputs}
      />
    </form>
  );
};

export default PropertyDetails;
