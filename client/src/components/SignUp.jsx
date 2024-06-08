import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import axios from "../helper/axios";
import { toast } from "react-hot-toast";

const SignUp = ({ setSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [signupFrom, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    password: "",
    contact: "",
    website: "",
    confirmPassword: "",
  });
  const handleInputs = (e) => {
    setSignupForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handle signup
  const handleSingup = async () => {
    console.log(signupFrom);
    try {
      toast.loading("sigining up");
      const resp = await axios.post("/user-signup", signupFrom);
      console.log(resp);
      toast.success("acocunt created successfully");
      setSignIn((prev) => !prev);
    } catch (err) {
      toast.dismiss();
      console.log(err);
    }
  };

  return (
    <>
      <div className="space-x-0 mui-sm:space-x-5 space-y-5 mui-sm:space-y-0">
        <TextField
          size="small"
          id="firstName"
          label="First name*"
          sx={{ width: { xs: "100%", sm: "230.4px" } }}
          spellCheck="false"
          name="firstName"
          value={signupFrom.firstName}
          onChange={handleInputs}
        />
        <TextField
          size="small"
          id="lastName"
          label="Last name*"
          sx={{ width: { xs: "100%", sm: "230.4px" } }}
          spellCheck="false"
          name="lastName"
          value={signupFrom.lastName}
          onChange={handleInputs}
        />
      </div>
      <div className="space-x-0 mui-sm:space-x-5 space-y-5 mui-sm:space-y-0">
        <TextField
          size="small"
          id="email"
          label="Email address*"
          sx={{ width: "100%" }}
          spellCheck="false"
          name="email"
          value={signupFrom.email}
          onChange={handleInputs}
        />
      </div>
      <div className="space-x-0 mui-sm:space-x-5 space-y-5 mui-sm:space-y-0">
        <FormControl size="small" sx={{ width: { xs: "100%", sm: "230.4px" } }}>
          <InputLabel
            htmlFor="password"
            sx={{ backgroundColor: "transparent" }}
          >
            Password*
          </InputLabel>
          <OutlinedInput
            id="password"
            spellCheck="false"
            type={showPassword ? "text" : "password"}
            name="password"
            value={signupFrom.password}
            onChange={handleInputs}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl size="small" sx={{ width: { xs: "100%", sm: "230.4px" } }}>
          <InputLabel
            htmlFor="confirmPassword"
            sx={{ backgroundColor: "transparent" }}
          >
            Confirm password*
          </InputLabel>
          <OutlinedInput
            id="confirmPassword"
            spellCheck="false"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={signupFrom.confirmPassword}
            onChange={handleInputs}
            endAdornment={
              <InputAdornment>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="flex flex-col">
        <FormControlLabel
          value="end"
          control={<Checkbox color="default" />}
          label={
            <span className="text-xs">
              I have read and understood the Privacy Policy*
            </span>
          }
          labelPlacement="end"
        />
        <FormControlLabel
          className="-mt-3"
          value="end"
          control={<Checkbox color="default" />}
          label={
            <span className="text-xs">
              I wish to receive personalised offers from DuoFraction.
            </span>
          }
          labelPlacement="end"
        />
      </div>
      <div className="mx-auto w-1/2">
        <Button
          sx={{
            width: "100%",
            backgroundColor: "#34d399",
            "&:hover": { backgroundColor: "#10b981" },
          }}
          variant="contained"
          size="medium"
          onClick={handleSingup}
        >
          Sign up
        </Button>
      </div>
      <p className="font-sans text-sm">
        Already have an account?{" "}
        <span
          onClick={() => setSignIn((prev) => !prev)}
          className="font-serif text-blue-700 cursor-pointer underline underline-offset-2"
        >
          Sign in here
        </span>
      </p>
    </>
  );
};

export default SignUp;
