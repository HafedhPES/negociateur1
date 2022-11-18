import React from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
const Step22= ()=>{


    return(
        <>
        
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Type</label>
     <select className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Location</option>
        <option>Vente</option>
     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Superficie</label>
    <input className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="number"/>

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Salles de bains</label>
     <input className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="number"/>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Chambres</label>
    <input className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="number"/>
    </div>
</div>


        
        </>
    )

}
export default Step22