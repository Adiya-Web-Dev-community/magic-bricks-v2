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
import { useNavigate } from "react-router-dom";
import axios from "../helper/axios";
import { toast } from "react-hot-toast";

const SignIn = ({ setSignIn, openForgotPassword, setOpenForgotPassword }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // forms inputs
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (params) => (e) => {
    setSigninForm((prevState) => ({ ...prevState, [params]: e.target.value }));
  };
  //handle singin
  const handleSignin = async () => {
    try {
      toast.loading("Signing In");
      const resp = await axios.post("/user-signin", signinForm);
      console.log(resp);
      if (resp.data.success) {
        toast.dismiss();
        toast.success(resp.data.message);
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("userName", resp.data.account.firstName);
        navigate("/sell-property");
      } else {
        toast.dismiss();
        toast.error(resp.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="space-y-5">
        <TextField
          size="small"
          id="email"
          label="Email address*"
          sx={{ width: { xs: "100%" } }}
          spellCheck="false"
          name="firstname"
          value={signinForm.email}
          onChange={handleInputs("email")}
        />
        <FormControl size="small" sx={{ width: { xs: "100%" } }}>
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
            value={signinForm.password}
            onChange={handleInputs("password")}
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
          onClick={handleSignin}
        >
          Sign in
        </Button>
      </div>
      <div className="flex justify-between">
        <p className="font-sans text-sm ">
          Don't have an account?
          <span
            onClick={() => setSignIn((prev) => !prev)}
            className="font-serif text-blue-700 cursor-pointer underline underline-offset-2 ml-1  "
          >
            Sign up here
          </span>
        </p>
        <p
          className="text-sm cursor-pointer underline underline-offset-2 hover:text-blue-700"
          onClick={() => navigate("/change-password")}
        >
          Forgot Password
        </p>
      </div>
    </>
  );
};

export default SignIn;
