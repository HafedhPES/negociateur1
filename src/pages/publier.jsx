import {React} from "react"
import Navbar from "../components/navbar"
import Step1 from "../components/publishSteps/step1"

const Publier =  ()=>{
return(
<>
<Navbar/>

<div className="bg-gray-100 h-screen w-full">

    <div className=" flex px-3 pt-3 mt-2 bg-white">
        
               <p className=" relative sm:pr-28 top-1 text-lg sm:text-xl  pb-6 border-b-4 border-indigo-500 text-indigo-500 w-max font-bold">Publier une annonce </p>
        
    </div>
    <div className="h-screen bg-white mt-1">
      <div className="flex w-full lg:w-[30%] px-3 flex-col m-auto">
      <div className="flex justify-between">
<p className="text-[#eb6b56] text-lg sm:text-xl font-bold mt-2 sm:mt-0">Etape 1 sur 3</p>
<p className="m-auto"> </p>
</div>

<Step1/>



      </div>

    </div>

</div>

</>
)
}

export default Publier