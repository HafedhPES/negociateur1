import React from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
import options from "../../services/options";

const Step1= ({post,handleChange})=>{


    return(

        <>
  
        <div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Catégorie</label>
     <select name="cat" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
       <option>Sélectionner catégorie</option> 
     {options.catOptions.map((v,i)=><option  key={i} value={v}>{v}</option>)}

     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Sous catégorie</label>
     <select name="sousCat" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option>Sous Catégorie </option>
     {options.sousCatOptions(post.cat).map((v,i)=><option value={v} key={i}>{v}</option>)}
    
     </select>

    </div>
</div>
<label className="mt-4 text-gray-500 font-bold">Titre</label>
<input  type="text" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
<label className="mt-4 text-gray-500 font-bold">Description</label>
<textarea  type="text" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
<label className="mt-4 text-gray-500 font-bold">Prix</label>
<input  type="text" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>

        
        </>
    )

}
export default Step1