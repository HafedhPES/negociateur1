import {React,useEffect,useState} from "react";

const Step3= ({post,handleChange,setStepName,errors})=>{
    useEffect(()=>setStepName('stepinfo'))

const [numStatus,setNumStatus]=useState(true)
const handleChecked= e=>{
setNumStatus(e.target.checked)

console.log(numStatus)
}
    return(
        <>
        
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Ville</label>
     <select value={post.ville} name="ville" onChange={handleChange} className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Ville</option>
        <option value="Nabeul">Nabeul</option>
        <option value="Ville">Tunis</option>
     </select>
     {errors["ville"]&& <p className="text-red-600">{errors["ville"]}</p>}
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Délégation</label>
     <select  value={post.del} name="del" onChange={handleChange}  className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
     <option value="">Délégation</option>
        <option value="Gromalia">Grombalia</option>
        <option value="Kilibia">Klibia</option>
        <option value="Korba">Korba</option>
        <option value="Hammamet">Hammamet</option>
     </select>
     {errors["del"]&& <p className="text-red-600">{errors["del"]}</p>}
    </div>
</div>


<div className="mt-4  grid grid-cols-2 gap-2">
    <p className="text-sm text-gray-500">Utiliser mon numéro principal ?</p>
    <div className="flex justify-end">
    <label flex for="checked-toggle" className="inline-flex relative items-center cursor-pointer">
  <input onChange={handleChecked} type="checkbox"  checked={numStatus} id="checked-toggle" class="sr-only peer"  />
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#eb6b56]"></div>
  
</label>

</div>
</div>
{ !numStatus &&<>
<label className="mt-4 text-gray-500 font-bold">Tel</label>
<input  value={post.tel} name="tel" onChange={handleChange}  type="number" className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm"/>
{errors["tel"]&& <p className="text-red-600">{errors["tel"]}</p>}
</>
 }
        </>
    )

}
export default Step3