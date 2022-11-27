import React, { useEffect } from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
const Step22= ({post,handleChange,setStepName,errors})=>{

    useEffect (()=>setStepName('stepimmo'))

    return(
        <>
        
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Type</label>
     <select  value={post.type} name="type" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option value="">Type</option>
        <option value="Location">Location</option>
        <option value="Vente">Vente</option>
     </select>
     {errors["type"]&& <p className="text-red-600">{errors["type"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Superficie</label>
    <input  value={post.superficie} name="superficie" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="number"/>
    {errors["superficie"]&& <p className="text-red-600">{errors["superficie"]}</p>}
    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Salles de bains</label>
     <input  value={post.sb} name="sb" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="number"/>
     {errors["sb"]&& <p className="text-red-600">{errors["sb"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Chambres</label>
    <input  value={post.chambre} name="chambre" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="number"/>
    {errors["chambre"]&& <p className="text-red-600">{errors["chambre"]}</p>}
    </div>
</div>


        
        </>
    )

}
export default Step22