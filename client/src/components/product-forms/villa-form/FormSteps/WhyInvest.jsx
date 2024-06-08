import React, { useState } from "react";
// import "./stylesheet/Aminities.css";
import { Button, TextField, Typography } from "@mui/material";

const WhyInvestInThisApartment = ({
  whyInvestFactors,
  setWhyInvestFactors,
  whyInvest,
  setWhyInvest,
}) => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);

  const handleUtilityarray = () => {
    setWhyInvest([...whyInvest, whyInvestFactors]);
    setWhyInvestFactors("");
    setStatus(false);
  };
  const handleSave = () => {
    console.log(whyInvest);
    setMsg("Saved");
    setStatus(true);
  };

  return (
    <form className="flex flex-col ml-7 mr-6 mt-1.5">
      <div>
        <TextField
          type="text"
          size="small"
          name="whyInvest"
          sx={{ width: "250px" }}
          value={whyInvestFactors}
          onChange={(e) => setWhyInvestFactors(e.target.value)}
          label={<span className="text-slate-700">Investment factors</span>}
        />
        <Button onClick={handleUtilityarray}>Add</Button>
        <div>
          {whyInvest.map((item, i) => {
            return <li key={i + 1}>{item}</li>;
          })}
        </div>
        {status && <Typography>{msg}</Typography>}
        <Button onClick={handleSave}>save</Button>
      </div>
    </form>
  );
};

export default WhyInvestInThisApartment;
