import React from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
import { useEffect } from "react";
const Step2= ({post,handleChange,setStepName})=>{

    useEffect(()=>setStepName('stepveh'))

    return(
        <>
        <div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Kilométrage</label>
     <input value={post.kil} name="kil" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="text"/>
       
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Année</label>
     <input value={post.annee} name="annee" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="text"/>
        

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Boite</label>
     <select value={post.boite} name="boite" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Manuelle</option>
        <option>Automatique</option>
     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Energie</label>
     <select value={post.energie} name="energie" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Diesel</option>
        <option>Essence</option>
        <option>Hyride</option>
        <option>Electrique</option>
     </select>

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Marque</label>
     <select value={post.marque} name="marque" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Véhicules</option>
        <option>Immobilier</option>
     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Modele</label>
     <select value={post.modele} name="modele" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Peugeot</option>
        <option>Renaut</option>
     </select>

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Puissance fiscale</label>
     <select value={post.pf} name="pf" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Couleur</label>
     <select value={post.couleur} name="couleur" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Blanc</option>
        <option>Noir</option>
     </select>

    </div>
</div>

        
        </>
    )

}
export default Step2