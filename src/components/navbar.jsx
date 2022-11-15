import {React,useState} from "react";
import { UserIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import publishIcon from "../assets/publish.svg"
import menuIcon from "../assets/menu.svg"
import homeIcon from "../assets/home.svg"
import personIcon from "../assets/person.svg"
import publish2Icon from "../assets/publish2.svg"

const Navbar= ()=>{
    const [nav,setNav]= useState(false);
    const handleClick=()=>{
        setNav(!nav)
    }
return(<>
    <div className="hidden drop-shadow-md md:flex  justify-between items-center w-full h-[65px] bg-white border-b border-gray-100">
    <div className="flex w-3/12  px-2">
    <Link to="/"><h1 className=" sm:text-3xl text-[#eb6b56] font-bold">Negociateur</h1></Link>
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
    <div className="flex justify-center w-2/12">
    <Link to="/login">  <button className="bg-transparent text-black px-2 py-2 hover:px-3 hover:py-3"><UserIcon className="w-5 inline  mr-2"/>
        Se connecter </button>
        </Link>
        </div>
    
    </div>
    <div className="flex md:hidden justify-between drop-shadow-md    items-center w-full h-[65px] bg-white border-b border-gray-100">
    <Link to="/"><h1 className="text-3xl text-[#eb6b56] font-bold px-4 cursor-pointer">Negociateur</h1></Link>
    <img src={menuIcon} onClick={handleClick}/>
    </div>
    {nav&&
    <ul className="bg-white absolute w-full z-10 font-bold text-gray-500">
   <Link to="/"> <li className="flex items-center border-b border-[#eb6b56]">
        <img className="w-8" src={homeIcon} />
      <h1 className="px-3"> Accueil </h1>
    </li>   </Link>
    <Link to="/login"><li className="flex items-center border-b border-[#eb6b56]">
        <img className="w-8" src={personIcon} />
      <h1 className="px-3"> Se connecter </h1>
    </li> </Link>
    <Link to="/publier"> <li className="flex items-center border-b  border-[#eb6b56]">
        <img className="w-8" src={publish2Icon} />
      <h1 className="px-3"> Publier une annonce </h1>
    </li> </Link>
    </ul>}
    </>
)

}
export default Navbar