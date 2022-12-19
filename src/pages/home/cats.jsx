import {React} from "react"
import ImmoIcon from "../../assets/immo.svg"
import VehIcon from "../../assets/vehicule.svg"
import HiTechIcon from "../../assets/hitech.svg"
import NautiqueIcon from "../../assets/nautique.svg"
import MeubleIcon from "../../assets/meuble.svg"
import LoisirsIcon from "../../assets/loisirs.svg"

const Cats =()=>{
  // classes css
  const catcss="cursor-pointer rounded-xl flex justify-center items-center w-[60%] lg:w-full bg-gray-100 py-3 lg:py-4 hover:bg-gray-200 px-2 lg:px-4"
  const textcatcss= "flex font-bold justify-center w-[60%] lg:w-full "
  return(<>

       
<div className="grid grid-cols-3 lg:grid-cols-1  w-[100%] px-5 py-2 gap-4">
    <div className="flex-col">
    <div className={catcss}><img className="w-7 lg:w-10"  src={ImmoIcon}/></div>
    <p className={textcatcss}>Immobilier</p>
    </div>
    <div className="flex-col ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={VehIcon}/></div>
    <p className={textcatcss}>Véhicules</p>
    </div>
    <div className="flex-col ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={HiTechIcon}/></div>
    <p className={textcatcss}>Hi-Tech</p>
    </div>
    <div className=" flex-col ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={NautiqueIcon}/></div>
    <p className={textcatcss}>Nautique</p>
    </div>
    <div className="flex-col ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={MeubleIcon}/></div>
    <p className={textcatcss}>Meubles</p>
    </div>
    <div className="flex-col ">

    
    <div className={catcss}><img className="w-7 lg:w-10" src={LoisirsIcon}/></div>
    <p className={textcatcss}>Loisirs</p>
    </div>
</div>
        
        </>
    )
}
export default Cats;