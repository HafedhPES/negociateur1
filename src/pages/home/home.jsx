import {React} from "react";
import Navbar from "../../components/navbar";
import Cats from "./cats";
import testImg from "../../assets/posts/test.jpg"
import testImg2 from "../../assets/posts/test2.jpg"
const Home=()=>{

return(<>
<Navbar/>
<Cats/>
<div className="flex w-full mt-4">
<div className="w-[20%]"></div>
<div className="flex flex-col w-[80%]">

    <div className="title text-3xl flex">
    
        A la une 
    </div>

    <div className="grid grid-cols-1 w-[80%] sm:w-full sm:grid-cols-4 mt-4 gap-4  ">
     <div className="h-[400px]">
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
    

     <div className="h-[400px]">
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



</div>
</div>



</>)

}
export default Home