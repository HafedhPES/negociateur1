import {React,useState,useEffect } from "react"
import Navbar from "../components/navbar"
import Step1 from "../components/publishSteps/step1"
import Stepper from "../components/publishSteps/stepper"
import Buttons from "../components/publishSteps/buttons"

 const Publier =  ()=>{
  


    
    const [step,setStep]= useState(1)
    const [stepName,setStepName]=useState('stepcommun')
    const [errors,setErrors]= useState({})
    const [formIsValid,setFormIsValid]=useState(false)
    const [maxStep,setMaxStep]= useState(null)
    const [post,setPost]=useState(
        {cat:"",
         sousCat:"" ,
         titre:"" ,
         description:"",
         prix:"",
         kil:"",
         annee:"",
         boite:"",
         energie:"",
         marque:"",
         modele:"",
         pf:"",
         couleur:"",
         ville:"",
         del:"",
         tel:"",
         type:"",
         superficie:'',
         chambre:"",
         sb:""
        })
    const handleValidation=()=>{
      if(post.titre.length==0){
        setErrors({...errors,['titre']:"saisir un titre"})
        setFormIsValid(false);
      }
      else{
        setErrors({...errors,['titre']:""})
        setFormIsValid(true);
      }
      

    }
    const handleMaxStep=()=>{
    
      if (((post.cat=='Véhicules') && ((post.sousCat=="Voitures")|| (post.sousCat=='Camions')))||(post.cat=="Immobilier")){
       
        setMaxStep(4)
    }
    else{
      setMaxStep(3)
    }
  }
    const handleChange=({currentTarget})=>{
        const {name,value}= currentTarget;
        
       setPost({...post,[name]:value}) 
      
      

        
    }
   
   
    useEffect(()=>{handleMaxStep()},[post.cat,post.sousCat])

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
<Step1 post={post} handleChange={handleChange}  errors={errors} setStepName={setStepName}/> }
<Stepper post={post} handleChange={handleChange} step={step} setStepName={setStepName}/>
<Buttons step={step} post={post} maxStep={maxStep} setStep={setStep} setErrors={setErrors} stepName={stepName}/>

      </div>

    </div>

</div>

</>
)
}

export default Publier