import {React,useRef} from "react"
import ImmoIcon from "../../assets/immo.svg"
import VehIcon from "../../assets/vehicule.svg"
import HiTechIcon from "../../assets/hitech.svg"
import NautiqueIcon from "../../assets/nautique.svg"
import MeubleIcon from "../../assets/meuble.svg"
import LoisirsIcon from "../../assets/loisirs.svg"


const Cats =({selectedCat,setSelectedCat})=>{
 const cats=useRef()
  // classes css
  const catcss="cursor-pointer rounded-full  flex justify-center items-center w-full h-[60px] lg:w-full bg-gray-100  lg:py-4 hover:bg-gray-200  lg:px-4"
  const textcatcss= " flex font-bold justify-center w-full lg:w-full "
  const handleCat=({currentTarget})=>{
   const cat= currentTarget.children[1].innerHTML.trim().toLowerCase()
   setSelectedCat(cat)
  // Bordure sur la catégorie sélectionnée
   const all= cats.current.children
   
   for ( let i=0;i< all.length;i++){
    const currentCat=all[i].children[1].innerHTML.trim().toLowerCase()
  
    if(cat==currentCat)
    all[i].children[0].className+=" border-2 border-[#eb6b56]"
    else
    all[i].children[0].className=catcss
   }
   
  }
  return(<>

       
<div ref={cats} className="sm:flex  whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide    w-full px-5 py-2   justify-evenly">
    <div className="flex-col  w-[60px] mr-7 inline-block" onClick={handleCat}>
    <div className={catcss}><img className="w-7 lg:w-10"  src={ImmoIcon}/></div>
    <p className={textcatcss}> Accueil</p>
    </div>
    <div onClick={handleCat} className="flex-col  w-[60px] mr-7 inline-block ">
    <div className={catcss}><img className="w-7 lg:w-10"  src={ImmoIcon}/></div>
    <p className={textcatcss}>Immobilier</p>
    </div>
    <div onClick={handleCat} className="flex-col   w-[60px] inline-block mr-7  ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={VehIcon}/></div>
    <p className={textcatcss}>Véhicules</p>
    </div>
    <div onClick={handleCat} className="flex-col  w-[60px] inline-block mr-7  ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={HiTechIcon}/></div>
    <p className={textcatcss}>Hi-Tech</p>
    </div>
    <div onClick={handleCat} className=" flex-col  w-[60px] inline-block mr-7 ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={NautiqueIcon}/></div>
    <p className={textcatcss}>Nautique</p>
    </div>
    <div onClick={handleCat} className="flex-col  w-[60px] inline-block mr-7  ">
    <div className={catcss} ><img className="w-7 lg:w-10" src={MeubleIcon}/></div>
    <p className={textcatcss}>Meubles</p>
    </div>
    <div onClick={handleCat} className="flex-col  w-[60px] inline-block ">

    
    <div className={catcss}><img className="w-7 lg:w-10" src={LoisirsIcon}/></div>
    <p className={textcatcss}>Loisirs</p>
    </div>
</div>
        
        </>
    )
}
export default Cats;