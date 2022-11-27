import {React} from "react"
import NextIcon from "../../assets/next.svg"
import BackIcon from "../../assets/back.svg"
import { useEffect } from "react"
import validation from "../../services/validation"
const Buttons=({step,setStep,maxStep,stepName,setErrors,post})=>{
//useEffect(()=>{},[formIsValid])
const onSumit=(e)=>{
    const errors=validation.validatePost(post,stepName);
     console.log(errors)
     setErrors(errors)
     if(Object.keys(errors).length==0){
        console.log('valide')
     }

}
const submitStep=(e)=>{
      
    
    const errors=validation.validatePost(post,stepName);
     console.log(errors)
     setErrors(errors)
     if(Object.keys(errors).length==0){
        setStep(step+1)
     }
}
return(

<div className={step>1 ?"grid grid-cols-2 gap-3 mt-2":"grid gap-3 mt-2"}>
    {step>1&&
    
    <button   onClick={()=>setStep(step-1)} className="bg-[#eb6b56]   py-3 font-bold rounded-lg flex items-center justify-evenly">
    <img className="w-4 px-1 py-1 bg-white rounded-3xl" src={BackIcon}/>
        Retour

    </button>
    
    
    }
    {step==maxStep?
    <button   onClick={()=>onSumit()} className="bg-indigo-500 py-3 font-bold rounded-lg flex items-center justify-evenly">
   
        Envoyer
        </button>: 
        <button   className="bg-indigo-500 py-3 font-bold rounded-lg flex items-center justify-evenly" onClick={()=>submitStep()}>
        <img className="w-4 bg-white rounded-3xl" src={NextIcon}/>
            Suivant
            </button>
        
        
        }
</div>



)


}
export default Buttons