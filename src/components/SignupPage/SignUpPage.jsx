import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (values.name === "" || values.email === "" || values.pass === "") {
      setErrMsg("Please fill all the fields");
      console.log(errMsg);
      return;
    }
    setSubmitButtonDisabled(true);
    console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setSubmitButtonDisabled(false);
      });
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        // const user = res.user;
        // await updateProfile(user, {
        //     displayName: values.name,
        // });
        navigate("/");
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <img src="./trackIMG.jpg" className="bgImage" alt="" />
      <div className="loginform inputDetails sm:mt-6 text-center">
        <div className=" text-center text-[#0da8bc]  font-semibold mt-16">
          <p className="text-[3rem] text-[red] loginText">
            Register &nbsp;
            <span className="text-[3rem] text-[white] loginText">Yourself</span>
          </p>
          <img src="./humanicon.png" className="m-auto h-16" alt="" />

        </div>
        <input
          className="flex h-10 w-6/12 mt-8 m-auto rounded-md border border-[white] bg-transparent py-2 px-3 text-sm placeholder:text-[#fff] focus:outline-none focus:ring-1 focus:ring-white-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-[#fff]"
          type="text"
          name="name"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Name"
        ></input>
        <input
          className="flex h-10 w-6/12 mt-8 m-auto rounded-md border border-[white] bg-transparent py-2 px-3 text-sm placeholder:text-[#fff] focus:outline-none focus:ring-1 focus:ring-white-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-[#fff] "
          type="email"
          name="email"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Email"
        ></input>
        <input
          className="flex h-10 w-6/12 mt-8 m-auto rounded-md border border-[white] bg-transparent py-2 px-3 text-sm placeholder:text-[#fff] focus:outline-none focus:ring-1 focus:ring-white-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-[#fff]"
          type="password"
          name="pass"
          required
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Password"
        ></input>

        <button
          className=" logInBt mt-4 rounded-xl bg-[#0da8bc] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6799a0] "
          onClick={handleSubmission}
          disabled={submitButtonDisabled}
        >
          Sign Up
        </button>
        <div className="forgotText w-6/12  mt-6 m-auto text-left text-[#ffffff]">
          Already a member?
          <a href="/login" className=" hover:underline">
            Login here
          </a>
        </div>
        <div className="SignInGoogle">
          <button
            className="googleBtn inline-flex justify-evenly rounded-xl items-center w-6/12 mt-16 bg-[#ffffff] sm:px-3.5 py-1.5 text-base font-semibold leading-7 text-[#000]"
            onClick={handleGoogle}
          >
            Sign up with Google
            <img src="./googleLogo.png" alt="google logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
