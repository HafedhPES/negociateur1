import {React} from "react"
import ImmoIcon from "../../assets/immo.svg"
import VehIcon from "../../assets/vehicule.svg"
import HiTechIcon from "../../assets/hitech.svg"
import NautiqueIcon from "../../assets/nautique.svg"
import MeubleIcon from "../../assets/meuble.svg"
import LoisirsIcon from "../../assets/loisirs.svg"

const Cats =()=>{
  // classes css
  const catcss="cursor-pointer rounded-full lg:rounded-xl flex justify-center items-center w-full h-[60px] lg:w-full bg-gray-100  lg:py-4 hover:bg-gray-200  lg:px-4"
  const textcatcss= " flex font-bold justify-center w-full lg:w-full "
  return(<>

       
<div className="lg:grid  whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide  lg:grid-cols-1  w-full px-5 py-2  lg:gap-4 justify-center">
    <div className="flex-col lg:w-full w-[60px] mr-7 inline-block ">
    <div className={catcss}><img className="w-7 lg:w-10"  src={ImmoIcon}/></div>
    <p className={textcatcss}>Immobilier</p>
    </div>
    <div className="flex-col lg:w-full  w-[60px] inline-block mr-7  ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={VehIcon}/></div>
    <p className={textcatcss}>Véhicules</p>
    </div>
    <div className="flex-col lg:w-full w-[60px] inline-block mr-7  ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={HiTechIcon}/></div>
    <p className={textcatcss}>Hi-Tech</p>
    </div>
    <div className=" flex-col lg:w-full w-[60px] inline-block mr-7 ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={NautiqueIcon}/></div>
    <p className={textcatcss}>Nautique</p>
    </div>
    <div className="flex-col lg:w-full w-[60px] inline-block mr-7  ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={MeubleIcon}/></div>
    <p className={textcatcss}>Meubles</p>
    </div>
    <div className="flex-col lg:w-full w-[60px] inline-block ">

    
    <div className={catcss}><img className="w-7 lg:w-10" src={LoisirsIcon}/></div>
    <p className={textcatcss}>Loisirs</p>
    </div>
</div>
        
        </>
    )
}
export default Cats;