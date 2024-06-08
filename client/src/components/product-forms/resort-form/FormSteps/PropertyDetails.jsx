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
        select
        size="small"
        spellCheck="false"
        name="propertyAge"
        label="Property Age"
        helperText="Please select property age"
        value={<span className="text-slate-700">Property age</span>}
        onChange={handleInputs}
      >
        {propertyAge.map((i) => (
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
        type="text"
        size="small"
        spellCheck="false"
        name="resortName"
        label={<span className="text-slate-700">Resort name</span>}
        helperText="Please enter resort name"
        value={propertyData.resortName}
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
        name="noOfRooms"
        label={<span className="text-slate-700">Number of rooms</span>}
        helperText="Please enter no of rooms"
        value={propertyData.noOfRooms}
        onChange={handleInputs}
      />

      <TextField
        size="small"
        spellCheck="false"
        type="number"
        name="floorNo"
        label={<span className="text-slate-700">Floor number</span>}
        helperText="Please enter floor number"
        value={propertyData.floorNo}
        onChange={handleInputs}
      />

      <TextField
        select
        size="small"
        spellCheck="false"
        name="furnishing"
        label={<span className="text-slate-700">Furnishing</span>}
        helperText="Please select furnishing"
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
        helperText="Please select possession status"
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
        helperText="Please select electricity status"
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
        helperText="Please select ownership type"
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
        helperText="Please select flooring type"
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
        helperText="Please select water availability"
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
        helperText="Please select facing direction"
        value={propertyData.facing}
        onChange={handleInputs}
      >
        {facing.map((i) => (
          <MenuItem key={i.value} value={i.value}>
            {i.label}
          </MenuItem>
        ))}
      </TextField>

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
    </form>
  );
};

export default PropertyDetails;
