import React from "react";

const Step3= ()=>{


    return(
        <>
        
<div className="mt-2 grid grid-cols-2 gap-2">
    <div className="flex flex-col mt-3">
     <label className=" text-gray-500 font-bold">Ville</label>
     <select className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Manuelle</option>
        <option>Automatique</option>
     </select>
    </div>
    <div className="flex flex-col mt-3">
    <label className=" text-gray-500 font-bold">Delegation</label>
     <select className="mt-2 bg-gray-100 text-gray-500 px-4 py-3 outline-none rounded-sm">
        <option>Diesel</option>
        <option>Essence</option>
        <option>Hyride</option>
        <option>Electrique</option>
     </select>

    </div>
</div>

<div className="mt-4 mb-4 grid grid-cols-2 gap-2">
    <p className="text-sm text-gray-500">Utiliser mon numéro principal ?</p>
    <div className="flex justify-end">
    <label flex for="checked-toggle" className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" defaultChecked value="" id="checked-toggle" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#eb6b56]"></div>
  
</label>
</div>
</div>

        
        </>
    )

}
export default Step3