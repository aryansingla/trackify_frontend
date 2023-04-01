import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import SignUpPage from "./components/SignupPage/SignUpPage";
import UploadImg from "./components/uploadImage/UploadImg";
function App() {
  return (
    <>
    <BrowserRouter>
           <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/login" element={<LoginPage/>} />
             <Route path="/signup" element={<SignUpPage/>} />
             <Route path="/upload" element={<UploadImg/>} />
           </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;