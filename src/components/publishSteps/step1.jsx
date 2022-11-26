import React, { useEffect } from "react";
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
import options from "../../services/options";

const Step1= ({post,handleChange,setStepName,errors})=>{
    useEffect(()=>setStepName('stepcommun'),[])


    return(

        <>
  
        <div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Catégorie</label>
     <select name="cat" onChange={handleChange} value={post.cat} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
       <option value="">Catégorie</option> 
     {options.catOptions.map((v,i)=><option  key={i} value={v}>{v}</option>)}

     </select>
     {errors["cat"]&& <p className="text-red-600">{errors["cat"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Sous catégorie</label>
     <select name="sousCat" onChange={handleChange} value={post.sousCat} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Sous Catégorie </option>
     {options.sousCatOptions(post.cat).map((v,i)=><option value={v} key={i}>{v}</option>)}
    
     </select>
     {errors["sousCat"]&& <p className="text-red-600">{errors["sousCat"]}</p>}

    </div>
</div>
<label className="mt-4 text-gray-500 font-bold">Titre</label>
<input  type="text" value={post.titre} name="titre" onChange={handleChange}className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
{errors["titre"]&& <p className="text-red-600">{errors["titre"]}</p>}
<label className="mt-4 text-gray-500 font-bold">Description</label>
<textarea  type="text" value={post.description} name="description" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
{errors["description"]&& <p className="text-red-600">{errors["description"]}</p>}
<label className="mt-4 text-gray-500 font-bold">Prix</label>
<input  type="number" value={post.prix} name="prix" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
{errors["prix"]&& <p className="text-red-600">{errors["prix"]}</p>}
        
        </>
    )

}
export default Step1