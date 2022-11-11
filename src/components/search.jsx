import {React} from "react"
import ImmoIcon from "../assets/immo.svg"
import VehIcon from "../assets/vehicule.svg"
import HiTechIcon from "../assets/hitech.svg"
import NautiqueIcon from "../assets/nautique.svg"
import MeubleIcon from "../assets/meuble.svg"
import LoisirsIcon from "../assets/loisirs.svg"
import Navbar from "./navbar"
const Search =()=>{
  // classes css
  const catcss="cursor-pointer rounded-xl flex justify-center items-center bg-gray-100 py-4 hover:bg-gray-200 px-4"
  const textcatcss= "flex font-bold justify-center"
  return(<>
  <Navbar/>
        <div className= "flex text-black justify-center  w-full">
<div className="grid  grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-6 px-6 py-5">
    <div className="flex-col">
    <div className={catcss}><img className="w-10" src={ImmoIcon}/></div>
    <p className={textcatcss}>Immobilier</p>
    </div>
    <div className="flex-col">
    <div className={catcss} ><img className="w-10" src={VehIcon}/></div>
    <p className={textcatcss}>Véhicules</p>
    </div>
    <div className="flex-col">
    <div className={catcss} ><img className="w-10" src={HiTechIcon}/></div>
    <p className={textcatcss}>Hi-Tech</p>
    </div>
    <div className="flex-col">
    <div className={catcss} ><img className="w-10" src={NautiqueIcon}/></div>
    <p className={textcatcss}>Nautique</p>
    </div>
    <div className="flex-col">
    <div className={catcss} ><img className="w-10" src={MeubleIcon}/></div>
    <p className={textcatcss}>Meubles</p>
    </div>
    <div className="flex-col">

    
    <div className={catcss}><img className="w-10" src={LoisirsIcon}/></div>
    <p className={textcatcss}>Loisirs</p>
    </div>
</div>
        </div>
        </>
    )
}
export default Search;