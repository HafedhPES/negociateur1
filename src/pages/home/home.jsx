import {React,useRef} from "react";
import Navbar from "../../components/navbar";
import Cats from "./cats";
import recentIcon from "../../assets/recent.svg"
import testImg2 from "../../assets/posts/test2.jpg"
import rightIcon from "../../assets/right.svg"
import leftIcon from "../../assets/left.svg"
import starIcon from "../../assets/star.svg"

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
return(<>
<Navbar/>

<div className="flex w-full mt-4 justify-evenly">
<div className="hidden lg:flex w-[10%]">
<Cats/>
</div>
<div className="flex lg:hidden w-[20%]">

</div>
<div className="flex flex-col w-[80%] md:w-[80%] ">
    <div className="flex px-3">
        <span className="bg-[#eb6b56] flex px-1 py-1 rounded-lg">
    <img src={starIcon} className="w-5"/>
    </span>
    <span className="text-2xl font-bold px-1">A la une</span>
    </div>

    <div className="flex  w-full pr-10 mt-3 px-2">
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
    <div className="absolute  top-[38%] right-10  sm:top-[29%] sm:right-14">
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

    <div className="flex  w-full pr-10 mt-3 px-2">
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
    <div className="absolute  top-[110%] right-10  sm:top-[105%] md:top-[95%] sm:right-14">
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