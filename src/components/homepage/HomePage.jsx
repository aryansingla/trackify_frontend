import Footer from '../Footer/Footer'
import {useState,useEffect} from 'react';
import { Link,useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase"
import "./HomePage.css"
import Navbar from '../Navbar/Navbar'

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
  const loginHere=()=>{
    navigate("/login");
  }
  const signUpHere=()=>{
    navigate("/signUp");
  }
  return (
    <>
       <Navbar/>
   <div id="home" className=' container1'>
 
        <div className="flex flex-col-reverse sm:h-[100vh]  items-center home1 lg:flex-row lg:flex">
            <div className=" lg:w-[60%] justify-center pl-28 pr-16 pt-10 loginLeft flex flex-col">
             <h1 className='flex mb-6 text-5xl font-extrabold'>
                 <p className='text-[#222222] mr-2'> Our</p>  <p className='text-[#F95759] '> Mission</p> </h1>
             <p className='text-lg text-[#444444]'>Our Mission is to give X-Ray report result as soon as possible and to help the laboratories to decrease the time of generating report and to give reports of tests to their customers ASAP.This will help laboratories to give services to more customers in lesser time.</p>
            </div>
            <div className="loginRight sm:w-[40%]">
                <img src="./homepic.png" alt="loginImage" className='loginImage w-[50%] sm:w-fit 
                lg:w-[80%] mt-16 m-auto' />
            </div>
        </div>

        <div  id="cards" className="grid grid-cols-1 p-10 home2 place-items-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
  <div className="  sm:w-[70%] m-10 overflow-hidden rounded shadow-lg dark:shadow-gray-800">
    <img
      className="w-full"
      src="./card1.png"
      alt="Mountain" />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">Medical Imaging Analysis</div>
      <p className="text-base text-gray-700 ">
        Labs generally give reports next day or after 2 days due to the time taken in generating reports. It's a time consuming process. This project will help labs to decrease the time of generating reports and to give reports of tests to their customers ASAP.

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
      <p className="text-base text-gray-700 ">
        It will help doctor(radiologist) who basically reads each and every report and an assistant was also there who write the report.So this software will help to decrease the time of reading the sample and generating the report.
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
      <p className="text-base text-gray-700 ">
        Currently it give 99.3% accuracy. It can be used for research purpose. It can be used to find out the disease of a person by just giving the X-Ray image of the person. By the time it will be improved and it will give 100% accuracy.
      </p>
    </div>
  </div>
</div>

<div className='home3 h-[100vh] '>
    {/* <img className='absolute imgDoc' src="./trackIMG.jpg" alt="home3" /> */}
    <div className='relative flex flex-col items-center justify-center h-[100vh] text-white'>
        <div className='flex text-5xl font-extrabold'> <p className='mr-4 mb-7'>TRY</p> <p className=' text-[#F95759]'>IT</p></div>
    <p className='w-1/2 text-2xl text-center mb-7'>There are approximately 1 lakh diagonstic centers in India.This pathlab industry is of around USD14796.21 million.
    Nowadays thousands of xrays are done daily.
    <br/><span className='text-[#F95759] text-3xl font-extrabold' >Now Labs can save their money by taking subscription of Trackify</span> so that they can save on expenditure of doctor and assistant working and they can improve more on infrastructure.</p>
    <div className='flex'>
    <button onClick={signUpHere} className='p-2 mr-6 rounded bg-[#0DA8BC]'>Register</button>
    <button onClick={loginHere} className='p-2 rounded bg-[#F95759]'>Login</button>
    </div></div>
   
</div>

    </div>
    <Footer/>
    </>
  )
}

export default HomePage