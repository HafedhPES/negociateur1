import {React} from "react"
import uoploaderIcon from "../assets/uploader.svg"

const Uploader =({setFiles,uploadRef})=>{
    const hanldeDrogOver=(e)=>{
        e.preventDefault();
        
    }
    const handleDrop=(e)=>{
        e.preventDefault();
        setFiles(e.dataTransfer.files)
    }
    return(
        <div className="flex items-center cursor-pointer mt-4 px-4 bg-gray-50  h-[150px]  border-dashed border-gray-200 border-8"
        onDragOver={hanldeDrogOver}
        onDrop={handleDrop}
        onClick={()=>uploadRef.current.click()}
        >     
        <div className="flex w-full items-center justify-evenly">
             
            <img className="grid-cols-1 " src={uoploaderIcon}  />
            <p className="text-lg   justify-center text-gray-500">Parcourir ou glisser vos images</p>
            </div>
            <input type="file" multiple hidden ref={uploadRef} onChange={(e)=>{setFiles(e.target.files)}}/>
        </div>
    )
}
export default Uploader