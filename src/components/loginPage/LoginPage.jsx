import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
const LoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if (values.email === "" || values.pass === "") {
      setErrMsg("Please fill all the fields");
      console.log(errMsg);
      return;
    }
    setSubmitButtonDisabled(true);
    console.log(values);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/upload");
      })
      .catch((err) => {
        console.log(err);
        setSubmitButtonDisabled(false);
      });
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        navigate("/upload");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <img src="./trackIMG.jpg" className="bgImage" alt="" />
      <div className="loginform inputDetails sm:mt-20 text-center">
        <div className="loginTitle text-center   font-semibold mt-2">
          <p className="text-[3rem] text-[red] loginText">
            Login &nbsp;
            <span className="text-[3rem] text-[white] loginText">
              to Continue...
            </span>
            <img src="./humanicon.png" className="m-auto h-16" alt="" />
          </p>
        </div>
        <input
          class="flex h-10 w-6/12 mt-8 m-auto rounded-md border border-[white] bg-transparent py-2 px-3 text-sm placeholder:text-[#fff] focus:outline-none focus:ring-1 focus:ring-white-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-[#fff] "
          type="email"
          name="email"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Email"
        ></input>
        <input
          class="flex h-10 w-6/12 mt-8 m-auto rounded-md border border-[white] bg-transparent py-2 px-3 text-sm placeholder:text-[#fff] focus:outline-none focus:ring-1 focus:ring-white-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  text-[#fff]"
          type="password"
          name="pass"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Password"
        ></input>
        <div className="forgotText w-6/12  mt-16 m-auto text-left">
          <a href="/forgotPassword" className="text-[#ffffff] hover:underline">
            Forgot Password ?
          </a>
        </div>
        <div className="forgotText w-6/12  mt-6 m-auto text-left text-[#ffffff]">
        Not a member?
          <a href="/signup" className=" hover:underline">
        Create new account
          </a>
        </div>
        <button
          className=" logInBt mt-4 rounded-xl bg-[#0da8bc] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6799a0] "
          onClick={handleSubmission}
          disabled={submitButtonDisabled}
        >
          Log In
        </button>
        <div className="SignInGoogle" onClick={handleGoogle}>
          <button className="googleBtn inline-flex justify-evenly rounded-xl items-center w-4/12 mt-16 bg-[#ffffff] sm:px-3.5 py-1.5 text-base font-semibold leading-7 text-[#000]">
            Sign in with Google
            <img src="./googleLogo.png" alt="google logo" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
