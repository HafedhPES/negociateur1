import React from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
import { useEffect } from "react";
const Step2= ({post,handleChange,setStepName,errors})=>{

    useEffect(()=>setStepName('stepveh'))

    return(
        <>
        <div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Kilométrage</label>
     <input value={post.kil} name="kil" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="text"/>
     {errors["kil"]&& <p className="text-red-600">{errors["kil"]}</p>}  
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Année</label>
     <input value={post.annee} name="annee" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm" type="text"/>
     {errors["annee"]&& <p className="text-red-600">{errors["annee"]}</p>}  

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Boite</label>
     <select value={post.boite} name="boite" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Boite</option>
        <option value="Manuelle">Manuelle</option>
        <option value="Automatique">Automatique</option>
     </select>
     {errors["boite"]&& <p className="text-red-600">{errors["boite"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Energie</label>
     <select value={post.energie} name="energie" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Energie</option>
        <option value="Diesel">Diesel</option>
        <option value="Essence">Essence</option>
        <option value="Hybride">Hybride</option>
        <option value="Electrique">Electrique</option>
     </select>
     {errors["energie"]&& <p className="text-red-600">{errors["energie"]}</p>}

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Marque</label>
     <select value={post.marque} name="marque" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
       <option value="">Marque</option>
        <option value="Renault">Renault</option>
        <option value="Peugeot">Peugeot</option>
     </select>
     {errors["marque"]&& <p className="text-red-600">{errors["marque"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Modele</label>
     <select value={post.modele} name="modele" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Modele</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Renault">Renault</option>
     </select>
     {errors["modele"]&& <p className="text-red-600">{errors["modele"]}</p>}

    </div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Puissance fiscale</label>
     <select value={post.pf} name="pf" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Puissance fiscale</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
     </select>
     {errors["pf"]&& <p className="text-red-600">{errors["pf"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Couleur</label>
     <select value={post.couleur} name="couleur" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Couleur</option>
        <option value="Blanc">Blanc</option>
        <option value="Noir">Noir</option>
     </select>
     {errors["couleur"]&& <p className="text-red-600">{errors["couleur"]}</p>}

    </div>
</div>

        
        </>
    )

}
export default Step2