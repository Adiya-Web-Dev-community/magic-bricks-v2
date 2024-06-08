import { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import axios from "../../helper/axios";
import { toast } from "react-hot-toast";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Settings = () => {
  const token = localStorage.getItem("token");

  // unsubcribe toggle button
  const [isOn, setIsOn] = useState(true);
  const [toggle, setToggle] = useState(false);

  const handleSwitchChange = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    setToggle(true);
  };

  // handle email status
  const handleEmailStatuChange = async () => {
    const data = {
      toggleSwitch: isOn,
    };

    try {
      const resp = await axios.post("/email-status", data, {
        headers: { authorization: token },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (toggle) {
      handleEmailStatuChange();
    }
  }, [handleSwitchChange]);

  return (
    <div className="">
      <table className=" w-3/4 ">
        <tr className="border-b-[1px] border-b-gray-200 ">
          <td className="pr-3 py-6 flex flex-col">
            <span className="text-lg">
              {isOn ? "Unsubscribe from emails" : "Subscribe to emails"}
            </span>
            <span className="text-sm text-gray-400">
              Easily unsubscribe from emails eg. marketing, newsletters.
            </span>
          </td>
          <td className="">
            <div>
              <Switch
                {...label}
                checked={isOn}
                onChange={handleSwitchChange}
                color="primary"
              />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Settings;
