import {React,useState} from "react"
import Navbar from "../components/navbar"
import NextIcon from "../assets/next.svg"
import BackIcon from "../assets/back.svg"
import Step1 from "../components/publishSteps/step1"
import Step2 from "../components/publishSteps/step2"
import Step3 from "../components/publishSteps/step3"
import Step4 from "../components/publishSteps/step4"
import Step22 from "../components/publishSteps/step22"
 


const Publier =  ()=>{
    const [step,setStep]= useState(1)
    const [maxStep,setMaxStep]= useState(3)
    const [post,setPost]=useState(
        {cat:"",
         sousCat:""  
        })
    const [sousCatOptions,setSousCatsOptions]=useState([])
    const handleChange=({currentTarget})=>{
        const {name,value}= currentTarget;
        
        setPost({...post,[name]:value}) 
        
    }
const renderSteps=()=>{
    
         
        if ((post.cat=='Véhicules') && ((post.sousCat=="Voitures")|| (post.sousCat=='Camions'))){
      
      return(<>
      {step==2&&
<Step2 /> }
{step==3&&
<Step4 /> }
{step==4&&
<Step3 /> }
      </>)
      }
      else if (post.cat=="Immobilier"){
        return(<>
            {step==2&&
<Step22 /> }
{step==3&&
<Step4 /> }
{step==4&&
<Step3 /> }
      </>
        )

      }
      else {
        
        return(<>
            
            {step==2&&
<Step4 /> }
{step==3&&
<Step3 /> }

      </>)
      
      }
        
    

}
return(
<>

<Navbar/>

<div className="bg-gray-100 h-screen w-full">

    <div className=" flex px-3 pt-3 mt-2 bg-white">
        
               <p className=" relative sm:pr-28 top-1 text-lg sm:text-xl  pb-6 border-b-4 border-indigo-500 text-indigo-500 w-max font-bold">Publier une annonce </p>
        
    </div>
    <div className="h-screen bg-white mt-1">
      <div className="flex w-full lg:w-[35%] px-3 flex-col m-auto">
      <div className="flex justify-between">
<p className="text-[#eb6b56] text-lg sm:text-xl font-bold mt-2 sm:mt-0">Etape {step} sur {maxStep}</p>
<p className="m-auto"> </p>
</div>

{step==1 &&
<Step1 post={post} handleChange={handleChange}/> }
{renderSteps()}
<div className="grid grid-cols-2 gap-3 mt-2">
    <button onClick={()=>setStep(step-1)} className="bg-[#eb6b56]  py-3 font-bold rounded-lg flex items-center justify-evenly">
    <img className="w-4 px-1 py-1 bg-white rounded-3xl" src={BackIcon}/>
        Retour

    </button>
    <button className="bg-indigo-500 py-3 font-bold rounded-lg flex items-center justify-evenly" onClick={()=>setStep(step+1)}>
    <img className="w-4 bg-white rounded-3xl" src={NextIcon}/>
        Suivant
        </button>
</div>


      </div>

    </div>

</div>

</>
)
}

export default Publier