import {React,useRef, useState} from "react";
import Navbar from "../../components/navbar";
import Cats from "./cats";
import recentIcon from "../../assets/recent.svg"
import catIcon from "../../assets/category.svg"
import rightIcon from "../../assets/right.svg"
import leftIcon from "../../assets/left.svg"
import starIcon from "../../assets/star.svg"
import downIcon from "../../assets/down.svg"
import upIcon from "../../assets/up.svg"

import Post from "./post";
const Home=()=>{
const slider= useRef()
const immo= useRef()
function scrollRight(ref){
    ref.current.scrollLeft+=500
    
}
function scrollLeft(ref){
    ref.current.scrollLeft-=500
}
const [showCats,setShowCats]= useState(false)
return(<>
<Navbar/>

<div className="flex w-full mt-4 justify-evenly">
    
<div className="hidden lg:flex w-[10%]">
<Cats/>
</div>

<div className="flex flex-col w-[100%] md:w-[80%] ">
    <div className="flex flex-col mb-3 lg:hidden shadow-md">
        <div className="flex relative items-center border-b ">
<div className="flex px-3 mb-3 ">
        <span className="bg-[#eb6b56] flex px-1 py-1 rounded-lg">
    <img src={catIcon} className="w-5"/>
    </span>
    <span className="text-2xl font-bold px-1">Catégories</span>
    </div>
    {!showCats?
    <img onClick={()=>setShowCats(true)} className="absolute right-0 -top-3"src={downIcon}/>:
    <img onClick={()=>setShowCats(false)} className="absolute right-0 -top-3"src={upIcon}/>}
    </div>
    {showCats&& (
    <div className="flex ">
    <Cats/>
    </div>
    )}
    </div>
    <div className="flex px-3">
        <span className="bg-[#eb6b56] flex px-1 py-1 rounded-lg">
    <img src={starIcon} className="w-5"/>
    </span>
    <span className="text-2xl font-bold px-1">A la une</span>
    </div>

    <div className="flex  w-full pr-2 mt-3 px-2">
        <div ref={slider}  className=" relative w-full  h-full  overflow-x-scroll scroll  whitespace-nowrap scroll-smooth scrollbar-hide">
    
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
     
     


    </div>
    <div className="hidden lg:flex absolute     top-[29%] right-14">
    <div onMouseEnter={()=>scrollRight(slider)} onClick={()=>scrollRight(slider)}className="bg-[#eb6b56] rounded-full  px-2 py-2 cursor-pointer ">
     <img className="" src={rightIcon}/>
        </div>
        <div onMouseEnter={()=>scrollLeft(slider)} onClick={()=>scrollLeft(slider)} className="bg-white rounded-full shadow-lg w-[50%] mt-2 ml-4  px-2 py-2 cursor-pointer ">
     <img className="w-5" src={leftIcon}/>
        </div>
        </div>
        
    



</div>


<div className="flex px-3">
        <span className="bg-[#eb6b56] flex px-1 py-1 rounded-lg">
    <img src={recentIcon} className="w-5"/>
    </span>
    <span className="text-2xl font-bold px-1">Les plus récents</span>
    </div>

    <div className="flex  w-full pr-2 mt-3 px-2">
        <div ref={immo} className=" relative w-full  h-full  overflow-x-scroll scroll  whitespace-nowrap scroll-smooth scrollbar-hide">
    
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
     
     


    </div>
    <div className="absolute hidden lg:flex    top-[95%] right-14">
    <div onMouseEnter={()=>scrollRight(immo)} onClick={()=>scrollRight(immo)} className="bg-[#eb6b56] rounded-full  px-2 py-2 cursor-pointer ">
     <img className="" src={rightIcon}/>
        </div>
        <div onMouseEnter={()=>scrollLeft(immo)} onClick={()=>scrollLeft(immo)} className="bg-white rounded-full shadow-lg w-[50%] mt-2 ml-4  px-2 py-2 cursor-pointer ">
     <img className="w-5" src={leftIcon}/>
        </div>
        </div>
        
    



</div>

</div>
</div>



</>)

}
export default Home