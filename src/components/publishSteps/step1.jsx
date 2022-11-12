import React from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
const Step1= ()=>{


    return(
        <>
        <div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Catégorie</label>
     <select className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Véhicules</option>
        <option>Immobilier</option>
     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Sous catégorie</label>
     <select className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Véhicules</option>
        <option>Immobilier</option>
     </select>

    </div>
</div>
<label className="mt-4 text-gray-500 font-bold">Titre</label>
<input  type="text" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
<label className="mt-4 text-gray-500 font-bold">Description</label>
<textarea  type="text" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
<label className="mt-4 text-gray-500 font-bold">Prix</label>
<input  type="text" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
<div className="grid grid-cols-2 gap-3 mt-2">
    <button className="bg-[#eb6b56]  py-3 font-bold rounded-lg flex items-center justify-evenly">
    <img className="w-4 px-1 py-1 bg-white rounded-3xl" src={BackIcon}/>
        Retour

    </button>
    <button className="bg-indigo-500 py-3 font-bold rounded-lg flex items-center justify-evenly">
    <img className="w-4 bg-white rounded-3xl" src={NextIcon}/>
        Suivant
        </button>
</div>
        
        </>
    )

}
export default Step1