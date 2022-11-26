import React, { useEffect, useState } from "react";

import addIcon from "../../assets/add.svg"
import { useRef } from "react";
import Uploader from "../uploader";
const Step4= ({setStepName})=>{
    const [files,setFiles]=useState(null)
    const uploadRef= useRef()
    useEffect(()=>setStepName('stepuploads'))


    return(
        <>
        <div className="flex flex-col ">
            <p className="text-lg flex justify-center text-gray-500">Photos (Maximum 10)</p>
        <Uploader setFiles={setFiles} uploadRef={uploadRef} />
        <div className="grid grid-cols-4 justify-center items-center mb-4 mt-4 gap-2">
          <div onClick={()=>uploadRef.current.click()} className="cursor-pointer py-2 flex justify-center items-center text-blue-500  bg-gray-50  border-2 border-gray-200">
           <img src={addIcon}/>
          </div>
          
          
          

            {//Array.from(files).map((file)=><li>{file.name}</li>)
            }
        </div>
        </div>
        
        
        </>
    )

}
export default Step4