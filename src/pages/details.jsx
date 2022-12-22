import {React,createRef,useRef} from "react"
import Navbar from "../components/navbar"
import locIcon from "../assets/location.svg"
import immIcon from "../assets/immo.svg"
import shareIcon from "../assets/share.svg"
import callIcon from "../assets/call.svg"
import chatIcon from "../assets/chat.svg"
import avatarImg from "../assets/users/avatar.jpeg"
import rightIcon from "../assets/right.svg"
import leftIcon from "../assets/left.svg"

const Details =()=>{
 const slider=useRef() 
 const test=useRef() 
 
 const images=["test2.jpg","test3.jpg","test.jpg"] 
 const imagesRefs = useRef(images.map(() => createRef()));
 function scrollRight(ref){
    ref.current.scrollLeft+=540
    
}
function scrollLeft(ref){
    ref.current.scrollLeft-=540
}
return(
    <>
    <Navbar/>
    <div className="flex flex-col lg:flex-row px-2 w-full py-2">
  <div className="flex flex-col w-full lg:w-2/5 ">
    <div ref={slider} className=" w-full  overflow-x-scroll scroll  whitespace-nowrap scroll-smooth scrollbar-hide">
      {images.map((im,i)=>{
     return    <img key={i} ref={imagesRefs.current[i]} className="h-[350px] inline-block w-full" src={require("../assets/posts/"+im)}/>
      })}
      
     
     </div>
     <div className="hidden lg:flex lg:flex-col absolute     top-[29%] left-[37%]">
    <div onClick={()=>scrollRight(slider)}className="bg-[#eb6b56] rounded-full  px-2 py-2 cursor-pointer ">
     <img className="" src={rightIcon}/>
        </div>
        <div  onClick={()=>scrollLeft(slider)} className="bg-white rounded-full shadow-lg w-[50%] mt-2 ml-4  px-2 py-2 cursor-pointer ">
     <img className="w-5" src={leftIcon}/>
        </div>
        </div>
     <div className="flex mt-1  gap-1   flex-wrap">
    
     {images.map((im,i)=>{
     return    <img key={i} ref={test} onClick={()=>imagesRefs.current[i].current.scrollIntoView()} className="h-[100px] w-1/5 cursor-pointer" src={require("../assets/posts/"+im)}/>
      })}
     
     
     </div>

  </div>
  <div className="flex flex-col lg:flex-row w-full lg:w-3/5">
  <div className="flex flex-col px-1 mt-3 lg:mt-0 lg:px-7 w-full  lg:w-4/6">
    <span className="text-xl text-gray-500 font-bold">S+2 de 96 m² - Zone Baghdedi</span>
    <span className="text-xl mt-4 text-[#eb6b56] font-bold">113000 DT</span>
    <span className=" mt-4 text-sm text-gray-500 flex gap-2 items-center">
    <img src={immIcon} className="w-3 h-3"/>
    <p className="text-sm">Immobilier</p>
    </span>
    <span className="mt-1 mb-2 text-sm text-gray-500 flex gap-2 items-center">
    <img src={locIcon} className="w-3 h-3"/>
    <p className="text-sm">Ariana , il y a 3 jours </p>
    </span>
    <hr className="mt-4"/>
    <span className="text-xl text-gray-500 mt-4"> Description </span>
    <p className="text-gray-500 mt-4 text-sm">Cet appartement occupe le premier étage d'une résidence érigé sur trois niveaux et situé à cinq minutes de la plage. L’entrée abrite une pièce de vie revêtue de marbre blanc et qui baigne dans une luminosité naturelle grâce à ses ouvertures. La cuisine est </p>
      <hr className="mt-4"/>
      <span className="text-xl text-gray-500 mt-4"> Critères</span>
      <div className="mt-4 flex gap-2 flex-wrap">
        <span className="w-1/4 rounded-lg border border-gray-200 bg-gray-100 flex flex-col px-5 py-2 text-gray-500">
            <h1 className="text-xs">Type</h1>
            <h1 className="text-sm">Vente</h1>
        </span>
        <span className="w-1/4 bg-gray-100 rounded-lg border border-gray-200 flex flex-col px-5 py-2 text-gray-500">
            <h1 className="text-xs">Type</h1>
            <h1 className="text-sm">Vente</h1>
        </span>
        <span className="w-1/4 bg-gray-100 rounded-lg border border-gray-200 flex flex-col px-5 py-2 text-gray-500">
            <h1 className="text-xs">Type</h1>
            <h1 className="text-sm">Vente</h1>
        </span>
        <span className="w-1/4 bg-gray-100 rounded-lg border border-gray-200 flex flex-col px-5 py-2 text-gray-500">
            <h1 className="text-xs">Type</h1>
            <h1 className="text-sm">Vente</h1>
        </span>
      </div>
  </div>
  <div className="mt-2 flex flex-col lg:m-auto">

    <span className="bg-blue-100 px-2 py-1 rounded-lg text-blue-500 flex gap-2 items-center justify-center" > 
    <img src={shareIcon} className="w-5"/>
   <h1> Partager l'annonce</h1>
    </span>
    <div className="flex flex-col bg-gray-100 border border-blue-200  rounded-lg mt-4  w-[50%] lg:w-full m-auto">
        <div className="w-[70px] h-[80px] border m-auto border-white mt-6 rounded-2xl">
        <img src={avatarImg} className="w-full rounded-2xl h-full object-fill"/>
        </div>
        <span className="text-gray-500  m-auto">Selmi Thouraya</span>
        <span className="text-gray-400 text-xs m-auto">20 annonces</span>
        
        <span className="cursor-pointer text-gray-500 border-b border-t py-2 hover:bg-blue-100 border-blue-200 flex gap-1 mt-2 px-2 items-center">
            <img src={callIcon} className="w-6"/>
            <h1>28815451</h1>
        </span>
        
        <span className="cursor-pointer text-gray-500 py-2 hover:bg-blue-100  flex gap-1  px-2 items-center">
            <img src={chatIcon} className="w-6"/>
            <h1>Discuter</h1>
        </span>
        

    </div>
  </div>

  </div>
  
    </div>
    </>
)

}
export default Details