import React from "react"
import testImg2 from "../../assets/posts/test2.jpg"
import locIcon from "../../assets/location.svg"
const Post=()=>{
return(

    <div className=" h-[400px] w-full sm:w-2/4 lg:w-1/4 inline-block p-2 whitespace-normal">
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
    <span className="px-2 mt-1 mb-2 text-sm text-gray-500 flex items-center">
    <img src={locIcon} className="w-3 h-3"/>
    Ariana , il y a 3 jours 
    </span>
    </div> 

 </div>
)

}
export default Post