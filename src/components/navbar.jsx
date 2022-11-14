import React from "react";
import { UserIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import publishIcon from "../assets/publish.svg"

const Navbar= ()=>{
return(
    <div className=" drop-shadow-md flex  justify-between items-center w-full h-[65px] bg-white border-b border-gray-100">
    <div className="hidden sm:flex sm:w-3/12    px-2">
    <Link to="/"><h1 className=" sm:text-3xl text-[#eb6b56] font-bold">Negociateur</h1></Link>
    </div>
    <div className="flex justify-center w-3/12 sm:hidden     px-2">
    <Link to="/"><h1 className="sm:text-3xl text-[#eb6b56] font-bold">Negociateur</h1></Link>
    </div>
    <div className="flex justify-center  w-4/12 "> 
    <input type="text" className="w-3/6 focus:w-5/6  text-black placeholder:text-gray-300 text-lg border border-[#eb6b56] outline-none rounded-lg px-2 py-2" placeholder="Recherche"/>
    </div>
    <div className="hidden sm:flex w-3/12  ">
        <Link to="/publier"><button className=" flex justify-between items-center px-4 py-2 rounded-lg"> 
          
        <img className="w-7" src={publishIcon}/>
        <p className="text-md font-bold">Déposer une annonce </p>
        </button> </Link>
    </div>
    <div className="hidden sm:flex justify-center w-2/12">
    <Link to="/login">  <button className="bg-transparent text-black px-2 py-2 hover:px-3 hover:py-3"><UserIcon className="w-5 inline mr-2"/>
        Se connecter </button>
        </Link>
        </div>
    
    </div>
)

}
export default Navbar