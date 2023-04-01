import React from 'react'
import "./HomePage.css"
const HomePage = () => {
  return (
    <>
   <div className='container1 w-screen'>
        <div className="loginBox flex sm:flex ">
            <div className="loginLeft ">
                <div className='loginLeftTitle text-center  font-semibold mt-16'>
                    <p className='text-4xl loginText'>Trackify</p>
                </div>
                
                <div className="inputDetails sm:mt-20 text-center">
                        <button className=" logInBt mt-4 rounded-xl bg-[#4d70ff] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6581f2] ">
                            Log In
                        </button>
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