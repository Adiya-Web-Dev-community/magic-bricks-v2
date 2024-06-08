import { TextField } from "@mui/material";
import React from "react";

const AdditionalInfo = ({
  additionalDetails,
  setAdditionalDetails,
  err,
  setErr,
}) => {
  const handleInputs = (e) => {
    setAdditionalDetails(e.target.value);
  };

  return (
    <div className="flex flex-col ml-7 mr-6 mt-1.5">
      {err ? (
        <p style={{ color: "red" }}>
          Size should not be greater than 1000 words{" "}
        </p>
      ) : null}
      <TextField
        size="small"
        spellCheck="false"
        name="additionalDetails"
        // label={<span className="text-slate-700">Additional information</span>}
        multiline
        rows={2}
        sx={{ width: "100%" }}
        inputProps={{ style: { fontSize: 15 } }}
        value={additionalDetails}
        onChange={handleInputs}
      />
    </div>
  );
};

export default AdditionalInfo;
