import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const Amenities = ({ newAminity, setNewAminity, aminities, setAminities }) => {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  const aminityArr = [
    "lift",
    "wifi",
    "24*7 water availability",
    "intercom",
    "secured neighbour",
    "electricity backup",
    "gym",
    "pool",
    "clubhouse",
    "gas pipeline",
    "servant quarter",
    "firefighting system",
  ];

  // handle checkbox change
  const handleCheckboxChange = (aminity) => {
    if (aminities.includes(aminity)) {
      setAminities(aminities.filter((item) => item !== aminity));
    } else {
      setAminities([...aminities, aminity]);
    }
  };

  // handle other aminities
  const handleAminityarray = () => {
    setAminities([...aminities, newAminity]);
    setNewAminity("");
    setStatus(false);
  };

  // handle save
  const handleSave = () => {
    console.log(aminities);
    setMsg("Saved");
    setStatus(true);
  };

  return (
    <form className="ml-7 mr-6">
      <div className="flex flex-wrap">
        {aminityArr.map((aminity, i) => {
          return (
            <section
              key={i}
              className="border border-slate-300 p-1 rounded-md mr-2.5 mt-2.5"
            >
              <FormControlLabel
                sx={{
                  textTransform: "capitalize",
                }}
                control={
                  <Checkbox
                    size="small"
                    onChange={() => handleCheckboxChange(aminity)}
                    checked={aminities.includes(aminity)}
                  />
                }
                label={<span className="text-sm">{aminity}</span>}
              />
            </section>
          );
        })}
      </div>
      <div className="mt-5">
        <TextField
          type="text"
          size="small"
          name="aminities"
          label={<span className="text-slate-700">Other</span>}
          value={newAminity}
          sx={{ width: "250px" }}
          onChange={(e) => setNewAminity(e.target.value)}
        />
        <Button onClick={handleAminityarray}>Add</Button>
        <div>
          {aminities.map((item, i) => {
            return (
              <li key={i + 1} className="capitalize">
                {item}
              </li>
            );
          })}
        </div>
        {status && <Typography>{msg}</Typography>}
        <Button onClick={handleSave}>save</Button>
      </div>
    </form>
  );
};

export default Amenities;
