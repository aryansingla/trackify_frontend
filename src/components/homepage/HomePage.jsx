import React from 'react'
import Footer from '../Footer/Footer'
import {useState,useEffect} from 'react';
import { Link,useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase"
import "./HomePage.css"
import Navbar from './Navbar/Navbar'

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
       <Navbar/>
   <div className=' container1'>
 
        <div className="flex flex-col-reverse sm:h-[100vh]  items-center home1 lg:flex-row lg:flex">
            <div className=" lg:w-[60%] justify-center pl-28 pr-16 pt-10 loginLeft flex flex-col">
             <h1 className='flex mb-6 text-5xl font-extrabold'>
                 <p className='text-[#222222] mr-2'> Our</p>  <p className='text-[#F95759] '> Mission</p> </h1>
             <p className='text-lg text-[#444444]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra nulla vel orci rhoncus, eget placerat ligula dapibus. Aliquam id consectetur tellus. Praesent vehicula vestibulum arcu, vitae rhoncus est bibendum sed. Nam vitae lacus turpis. Quisque lacinia magna auctor neque euismod convallis</p>
            </div>
            <div className="loginRight sm:w-[40%]">
                <img src="./homepic.png" alt="loginImage" className='loginImage w-[50%] sm:w-fit 
                lg:w-[80%] mt-16 m-auto' />
            </div>
        </div>

        <div className="grid grid-cols-1 p-10 home2 place-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
  <div className="  sm:w-[70%] m-10 overflow-hidden rounded shadow-lg dark:shadow-gray-800">
    <img
      className="w-full"
      src="./card1.png"
      alt="Mountain" />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">Medical Imaging Analysis</div>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perfe
      </p>
    </div>
   
  </div>
  <div className=" sm:w-[70%] m-10 overflow-hidden rounded shadow-lg dark:shadow-gray-800">
    <img
      className="w-full"
      src="./card2.png"
      alt="Mountain" />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">Decision Support</div>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perfe
      </p>
    </div>
   
  </div>
  <div className=" sm:w-[70%] m-10 overflow-hidden rounded shadow-lg dark:shadow-gray-800">
    <img
      className="w-full"
      src="./card3.png"
      alt="Mountain" />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">Clincal Research</div>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perfe
      </p>
    </div>
  </div>
</div>

<div className='home3 h-[100vh] '>
    {/* <img className='absolute imgDoc' src="./trackIMG.jpg" alt="home3" /> */}
    <div className='relative flex flex-col items-center justify-center h-[100vh] text-white'>
        <div className='flex text-5xl font-extrabold'> <p className='mr-4 mb-7'>TRY</p> <p className=' text-[#F95759]'>IT</p></div>
    <p className='w-1/2 text-xl text-center mb-7'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra nulla vel orci rhoncus, eget placerat ligula dapibus. Aliquam id consectetur tellus</p>
    <div className='flex'>
    <button className='p-2 mr-6 rounded bg-[#0DA8BC]'>Register</button>
    <button className='p-2 rounded bg-[#F95759]'>Login</button>
    </div></div>
   
</div>

    </div>
    <Footer/>
    </>
  )
}

export default HomePage