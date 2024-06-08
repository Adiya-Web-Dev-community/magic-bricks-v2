import { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "../helper/axios";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // inputs
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // status
  const [emailVerified, setEmailVerified] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // handle send otp
  const handleSendOTP = async () => {
    try {
      toast.loading("Verifying your account...");
      const resp = await axios.post("/send-otp", { email: email });
      toast.dismiss();
      if (resp.data.success) {
        setShowOtp(true);
        setEmailVerified(true);
        toast.success(resp.data.msg);
      } else {
        toast.error(resp.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //otp
  // handle verify otp
  const handleVerifyOTP = async () => {
    try {
      toast.loading("Verifiying OTP...");
      const resp = await axios.post("/verify-otp", { email: email, otp: OTP });
      toast.dismiss();
      if (resp.data.success) {
        setOtpVerified(true);
        setShowOtp(false);
        toast.success(resp.data.msg);
      } else {
        toast.error(resp.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // handle set new password
  const handleSetNewPassword = async () => {
    try {
      toast.loading("Settingup new password...");
      const resp = await axios.post("/set-new-password", {
        email: email,
        newPassword: newPassword,
      });
      toast.dismiss();
      if (resp.data.success) {
        toast.success(resp.data.msg);
        navigate("/onboarding");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className=" ">
      <div className="h-[calc(100vh-4rem)] w-full bg-slate-900 bg-[url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center"></div>
      <section className="absolute top-[20%] left-[7%] md:left-[30%] bg-white/90 rounded-md w-[20rem] md:w-[30rem]">
        <div className="flex px-8 pt-5 gap-5 mb-4">
          <AiOutlineArrowLeft
            className="mt-1  cursor-pointer"
            onClick={() => navigate("/onboarding")}
          />
          <h1>Change Password</h1>
        </div>
        <div>
          <div className="py-7 px-5 rounded-md">
            {/* email*/}
            <div className="space-y-5">
              <TextField
                size="small"
                id="email"
                label="Email address*"
                sx={{ width: { xs: "100%" } }}
                spellCheck="false"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={emailVerified === true}
                className="disabled:cursor-not-allowed"
              />
            </div>
            {/* otp box */}
            {showOtp ? (
              <div className="mt-5">
                <TextField
                  size="small"
                  label="OTP*"
                  sx={{ width: { xs: "100%" } }}
                  spellCheck="false"
                  name="OTP"
                  value={OTP}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            ) : null}

            {/* new password box */}
            {otpVerified ? (
              <div className="mt-5">
                <FormControl size="small" sx={{ width: { xs: "100%" } }}>
                  <InputLabel
                    htmlFor="password"
                    sx={{ backgroundColor: "transparent" }}
                  >
                    Set New Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    spellCheck="false"
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
            ) : null}

            <div className="mx-auto w-1/2 mt-8">
              {showOtp ? (
                <Button
                  sx={{
                    width: "100%",
                    backgroundColor: "#34d399",
                    "&:hover": { backgroundColor: "#10b981" },
                  }}
                  variant="contained"
                  size="medium"
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </Button>
              ) : otpVerified ? (
                <Button
                  sx={{
                    width: "100%",
                    backgroundColor: "#34d399",
                    "&:hover": { backgroundColor: "#10b981" },
                  }}
                  variant="contained"
                  size="medium"
                  onClick={handleSetNewPassword}
                >
                  Set Password
                </Button>
              ) : (
                <Button
                  sx={{
                    width: "100%",
                    backgroundColor: "#34d399",
                    "&:hover": { backgroundColor: "#10b981" },
                  }}
                  variant="contained"
                  size="medium"
                  onClick={handleSendOTP}
                  disabled={email === ""}
                  className="disabled:cursor-not-allowed"
                >
                  Send OTP
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
