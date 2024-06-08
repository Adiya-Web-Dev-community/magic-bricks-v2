import React, { useState } from "react";
// import "./stylesheet/Aminities.css";
import { Button, TextField, Typography } from "@mui/material";

const ApartmentAdditionalRooms = ({
  newAdditionalRooms,
  setNewAdditionalRooms,
  additionalRooms,
  setAdditionalRooms,
}) => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);

  const handleAminityarray = () => {
    setAdditionalRooms([...additionalRooms, newAdditionalRooms]);
    setNewAdditionalRooms("");
    setStatus(false);
  };
  const handleSave = () => {
    console.log(additionalRooms);
    setMsg("Saved");
    setStatus(true);
  };

  return (
    <div className="additionalRooms-wrapper">
      <div>
        <TextField
          type="text"
          size="small"
          name="additionalRooms"
          sx={{ width: "250px" }}
          value={newAdditionalRooms}
          onChange={(e) => setNewAdditionalRooms(e.target.value)}
          label="Additional Rooms"
        />
        <Button onClick={handleAminityarray}>Add</Button>
        <div>
          {additionalRooms.map((item, i) => {
            return <li key={i + 1}>{item}</li>;
          })}
        </div>
        {status && <Typography>{msg}</Typography>}
        <Button onClick={handleSave}>save</Button>
      </div>
    </div>
  );
};

export default ApartmentAdditionalRooms;
