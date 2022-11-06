import React from "react";
import { UserIcon } from '@heroicons/react/24/outline'

const Navbar= ()=>{
return(
    <div className=" drop-shadow-md flex  justify-between items-center w-full h-[65px] bg-white border-b border-gray-100">
    <div className="hidden sm:flex sm:w-3/12    px-2">
    <h1 className=" sm:text-3xl text-[#eb6b56] font-bold">Negociateur</h1>
    </div>
    <div className="flex justify-center w-3/12 sm:hidden     px-2">
    <h1 className="  sm:text-3xl text-[#eb6b56] font-bold">Negociateur</h1>
    </div>
    <div className="flex justify-center  w-4/12 "> 
    <input type="text" className="w-3/6 focus:w-5/6  text-black placeholder:text-gray-300 text-lg border border-[#eb6b56] outline-none rounded-lg px-2 py-2" placeholder="Recherche"/>
    </div>
    <div className="hidden sm:flex w-3/12  ">
        <button className="px-4 py-2 rounded-lg hover:text-[#eb6b56]"> + Déposer une annonce </button>
    </div>
    <div className="hidden sm:flex justify-center w-2/12">
        <button className="bg-transparent text-black px-2 py-2 hover:px-3 hover:py-3"><UserIcon className="w-5 inline mr-2"/>
        Se connecter </button></div>
    
    </div>
)

}
export default Navbar