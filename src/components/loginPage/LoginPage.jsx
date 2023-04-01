import React , {useState} from 'react'
import "./LoginPage.css"
import { Link,useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword,signInWithPopup} from "firebase/auth"
import {auth,provider} from "../../firebase"
const LoginPage = () => {
    const navigate=useNavigate();
  const[values,setValues]=useState({
    email:"",
    pass:"",
  })
  const[errMsg,setErrMsg]=useState("");
  const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
  const handleSubmission=()=>{
    if(values.email==="" || values.pass===""){
      setErrMsg("Please fill all the fields");
      console.log(errMsg);
      return;
    }
    setSubmitButtonDisabled(true);
    console.log(values);
    signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
      setSubmitButtonDisabled(false);
      navigate("/");
    }).catch((err)=>{
      console.log(err);
      setSubmitButtonDisabled(false);
    });
  }
  const handleGoogle=()=>{
    signInWithPopup(auth,provider).then(async(res)=>{
      navigate("/");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
    <img src="./trackIMG.jpg" className='bgImage' alt="" />
    <div className="loginform inputDetails sm:mt-20 text-center">
    <div className=' text-center text-[red]  font-semibold mt-16'>
                    <p className='text-[3rem] loginText'>Login</p>
                </div>
                        <input className="flex h-10 mt-4 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                            type="email"
                            name="email" required onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))}
                            placeholder="Email"></input>
                        <input className="flex h-10 mt-12 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50"
                            type="password"
                            name="pass" required onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}
                            placeholder="Password"></input>
                            <div className="forgotText w-6/12  mt-4 m-auto text-left">
                            <a href="/forgotPassword" className='text-[#ffffff] hover:underline'>Forgot Password ?</a>
                            </div>
                        <button className=" logInBt mt-4 rounded-xl bg-[#4d70ff] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6581f2] "
                        onClick={handleSubmission} disabled={submitButtonDisabled}>
                            Log In
                            </button>
                <div className='SignInGoogle' onClick={handleGoogle}>
                    <button className="googleBtn inline-flex justify-evenly rounded-xl items-center w-6/12 mt-16 bg-[#ffffff] sm:px-3.5 py-1.5 text-base font-semibold leading-7 text-[#000]">
                        Sign in with Google
                        <img src="./googleLogo.png" alt="google logo" />
                    </button>
                </div>
                <div className="newMember text-center sm:text-left w-[80%]  mt-4 m-auto flex">
                <p class="mt-2 text-base  dark:text-gray-300"> Not a member?</p>
                    <a href="/signup"  class="font-medium text-[#5f7fff] transition-all duration-200 hover:underline mt-2 px-2">Create a free account
                    </a>
                </div>
            </div> 
    </div>
  )
}

export default LoginPage