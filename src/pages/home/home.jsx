import {React,useRef} from "react";
import Navbar from "../../components/navbar";
import Cats from "./cats";
import testImg from "../../assets/posts/test.jpg"
import testImg2 from "../../assets/posts/test2.jpg"
import rightIcon from "../../assets/right.svg"
import leftIcon from "../../assets/left.svg"
import starIcon from "../../assets/star.svg"
const Home=()=>{
const slider= useRef()
const scrollRight=()=>{
    slider.current.scrollLeft+=500
}
const scrollLeft=()=>{
    slider.current.scrollLeft-=500
}
return(<>
<Navbar/>

<div className="flex w-full mt-4 justify-evenly">
<div className="w-[10%]">
<Cats/>
</div>
<div className="flex flex-col w-[80%] ">
    <div className="flex">
        <span className="bg-[#eb6b56] flex px-1 py-1 rounded-lg">
    <img src={starIcon} className="w-5"/>
    </span>
    <span className="text-2xl font-bold px-1">A la une</span>
    </div>

    <div className="flex relative pr-10 mt-3">
        <div ref={slider}  className="w-full h-full  overflow-x-scroll scroll  whitespace-nowrap scroll-smooth scrollbar-hide">
     <div className="w-[25%] h-[400px] inline-block p-2 whitespace-normal">
        <div className="h-[50%]">
            <img src={testImg2} className="w-full h-[100%] object-cover"/>
        </div>
        <div className="flex flex-col bg-gray-100 h-[20%]" >
        <span className="mt-1 text-lg text-[#eb6b56] font-bold px-2">
            99 DT
        </span>
        <span className="px-2 text-md text-black">
        JEUX SWITCH dispo chez GAME ZONE ariana
        </span>
        </div>
        <div className="h-[15%] bg-gray-100 flex flex-col">
        <p className=" px-2 m-auto w-[92%] m-l-2 border border-b-2"></p>
        <span className="px-2 mt-1 text-sm text-gray-500">
        Jeux vidéos
        </span>
        <span className="px-2 mt-1 mb-2 text-sm text-gray-500">
        Ariana , il y a 3 jours 
        </span>
        </div> 

     </div>

     <div className="w-[25%] h-[400px] inline-block p-2">
        <div className="h-[50%]">
            <img src={testImg} className="w-full h-[100%] object-cover"/>
        </div>
        <div className="flex flex-col bg-gray-100 h-[20%]" >
        <span className="mt-1 text-lg text-[#eb6b56] font-bold px-2">
            99 DT
        </span>
        <span className="px-2 text-md text-black">
        JEUX SWITCH dispo chez GAME ZONE ariana
        </span>
        </div>
        <div className="h-[15%] bg-gray-100 flex flex-col">
        <p className=" px-2 m-auto w-[92%] m-l-2 border border-b-2"></p>
        <span className="px-2 mt-1 text-sm text-gray-500">
        Jeux vidéos
        </span>
        <span className="px-2 mt-1 mb-2 text-sm text-gray-500">
        Ariana , il y a 3 jours 
        </span>
        </div> 

     </div>


     <div className="w-[25%] h-[400px] inline-block p-2">
        <div className="h-[50%]">
            <img src={testImg} className="w-full h-[100%] object-cover"/>
        </div>
        <div className="flex flex-col bg-gray-100 h-[20%]" >
        <span className="mt-1 text-lg text-[#eb6b56] font-bold px-2">
            99 DT
        </span>
        <span className="px-2 text-md text-black">
        JEUX SWITCH dispo chez GAME ZONE ariana
        </span>
        </div>
        <div className="h-[15%] bg-gray-100 flex flex-col">
        <p className=" px-2 m-auto w-[92%] m-l-2 border border-b-2"></p>
        <span className="px-2 mt-1 text-sm text-gray-500">
        Jeux vidéos
        </span>
        <span className="px-2 mt-1 mb-2 text-sm text-gray-500">
        Ariana , il y a 3 jours 
        </span>
        </div> 

     </div>


     <div className="w-[25%] h-[400px] inline-block p-2">
        <div className="h-[50%]">
            <img src={testImg} className="w-full h-[100%] object-cover"/>
        </div>
        <div className="flex flex-col bg-gray-100 h-[20%]" >
        <span className="mt-1 text-lg text-[#eb6b56] font-bold px-2">
            99 DT
        </span>
        <span className="px-2 text-md text-black">
        JEUX SWITCH dispo chez GAME ZONE ariana
        </span>
        </div>
        <div className="h-[15%] bg-gray-100 flex flex-col">
        <p className=" px-2 m-auto w-[92%] m-l-2 border border-b-2"></p>
        <span className="px-2 mt-1 text-sm text-gray-500">
        Jeux vidéos
        </span>
        <span className="px-2 mt-1 mb-2 text-sm text-gray-500">
        Ariana , il y a 3 jours 
        </span>
        </div> 

     </div>
    

     <div className="w-[25%] h-[400px] inline-block p-2">
        <div className="h-[50%]">
            <img src={testImg2} className="w-full h-[100%] object-cover"/>
        </div>
        <div className="flex flex-col bg-gray-100 h-[20%]" >
        <span className="mt-1 text-lg text-[#eb6b56] font-bold px-2">
            99 DT
        </span>
        <span className="px-2 text-md text-black">
        JEUX SWITCH dispo chez 
        </span>
        </div>
        <div className="h-[15%] bg-gray-100 flex flex-col">
        <p className=" px-2 m-auto w-[92%] m-l-2 border border-b-2"></p>
        <span className="px-2 mt-1 text-sm text-gray-500">
        Jeux vidéos
        </span>
        <span className="px-2 mt-1 mb-2 text-sm text-gray-500">
        Ariana , il y a 3 jours 
        </span>
        </div>
        

   
     
      
        

     </div>
    


   
   

     

    </div>
    
        <div onClick={scrollRight}className="bg-[#eb6b56] rounded-full absolute right-7 top-[15%] px-2 py-2 cursor-pointer ">
     <img className="w-10" src={rightIcon}/>
        </div>
        <div onClick={scrollLeft} className="bg-white rounded-full shadow-lg absolute right-9 top-[30%] px-2 py-2 cursor-pointer ">
     <img className="w-5" src={leftIcon}/>
        </div>
    



</div>
</div>
</div>



</>)

}
export default Home