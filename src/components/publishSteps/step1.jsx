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
     <label className=" form-label">Catégorie</label>
     <select name="cat" onChange={handleChange} value={post.cat} className="form-text">
       <option value="">Catégorie</option> 
     {options.catOptions.map((v,i)=><option  key={i} value={v}>{v}</option>)}

     </select>
     {errors["cat"]&& <p className="text-red-600">{errors["cat"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" form-label">Sous catégorie</label>
     <select name="sousCat" onChange={handleChange} value={post.sousCat} className="form-text">
     <option value="">Sous Catégorie </option>
     {options.sousCatOptions(post.cat).map((v,i)=><option value={v} key={i}>{v}</option>)}
    
     </select>
     {errors["sousCat"]&& <p className="text-red-600">{errors["sousCat"]}</p>}

    </div>
</div>
<label className="mt-4 form-label">Titre</label>
<input  type="text"  value={post.titre} name="titre" onChange={handleChange}  className="form-text"/>
{errors["titre"]&& <p className="text-red-600">{errors["titre"]}</p>}
<label className="mt-4 form-label">Description</label>
<textarea  type="text" value={post.description} name="description" onChange={handleChange} className="form-text"/>
{errors["description"]&& <p className="text-red-600">{errors["description"]}</p>}
<label className="mt-4 form-label">Prix</label>
<input  type="number" value={post.prix} name="prix"  onChange={handleChange} className="form-text"/>
{errors["prix"]&& <p className="text-red-600">{errors["prix"]}</p>}
        
        </>
    )

}
export default Step1