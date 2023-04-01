import React from 'react'
import "./UploadImg.css"
const UploadImg = () => {
  
  return (
    <div className='uploadContainer'>
        <div className="uploadImage text-center text-[1.5rem] ">
            <div className="uploadImageTitle  m-auto">
            <p className="text-[3rem] text-[red] loginText">
            Upload Image  &nbsp;
            <span className="text-[3rem] text-[white] loginText">
             of X-RAY
            </span>
          </p>
            </div>
            <div className="uploadImageBody">

            </div>
        </div>
    </div>
  )
}

export default UploadImg