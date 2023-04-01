import React ,{useState,useEffect} from 'react';
import { Link,useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase"
import "./HomePage.css"
const HomePage = () => {
    const navigate=useNavigate();
    const[userName,setUserName] = useState("");
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          setUserName(user.displayName)
        } else {
          setUserName("")
        }
      })
    },[])

  const handleSubmission=()=>{
    signOut(auth).then(()=>{
        navigate("/login");

      return true;

    }).catch((err)=>{
      console.log(err);
      return false;
    })
  }
  return (
    <>
   <div className='container1 w-screen'>
        <div className="loginBox flex sm:flex ">
            <div className="loginLeft ">
                <div className='loginLeftTitle text-center  font-semibold mt-16'>
                    <p className='text-4xl loginText'>Trackify</p>
                </div>
                
                <div className="inputDetails sm:mt-20 text-center">
                    {userName ? (
                        <button className=" logInBt mt-4 rounded-xl bg-[#4d70ff] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6581f2] " onClick={handleSubmission}>
                        SignOut
                    </button>
                    ):(
                        <button className=" logInBt mt-4 rounded-xl bg-[#4d70ff] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6581f2] ">
                         Log In
                     </button>

                    )}
                      
                </div> 
            </div>
            <div className="loginRight">
                <img src="./homepic.png" alt="loginImage" className='loginImage w-[50%] sm:w-[70%] m-auto mt-16 ' />
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage