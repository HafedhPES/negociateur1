import {React, useState} from "react"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import validation from "../services/validation"
const Register=()=>{
const [user,setUser]= useState(
  {nom:'',
   prenom:'',
   email:'',
   tel:'',
   pwd:'',
   cpwd:''
})
const [errors,setErrors]= useState({})
const hanldeChange=({currentTarget})=>{
const {value,name}=currentTarget
setUser({...user,[name]:value})
const err=validation.validateUser({...user,[name]:value});
      
       setErrors({...errors,[name]:err[name]})   
}
const handleSubmit=()=>{
  const err= validation.validateUser(user)
  setErrors(err)
  console.log(err)
}


    return(
        <>
        <Navbar/>
        <div className="container">
        <div className="title-container">
        
               <p className="title">Créer un compte </p>
        
    </div>
        <div className="form-container px-2  ">
      
  <div className='flex flex-col'>
  
  <div className="mt-4 flex gap-2">
    <div className="flex flex-col">
    
    <input className="form-text" type="text" value={user.nom} onChange={hanldeChange} name="nom" placeholder="NOM"/>
    {errors["nom"]&& <p className="text-red-600">{errors["nom"]}</p>}
    </div>
    <div className="flex flex-col">
    
    <input className="form-text" type="text" name="prenom" value={user.prenom} onChange={hanldeChange} placeholder="PRENOM"/>
    {errors["prenom"]&& <p className="text-red-600">{errors["prenom"]}</p>}
    </div>
  </div>
  <div className="mt-2 flex gap-2">
    <div className="flex flex-col">
    
    <input className="form-text" type="text" name="email" value={user.email} onChange={hanldeChange} placeholder="EMAIL"/>
    {errors["email"]&& <p className="text-red-600">{errors["email"]}</p>}
    </div>
    <div className="flex flex-col">
    
    <input type="number" name="tel" value={user.tel} onChange={hanldeChange} className="form-text" placeholder="TEL"/>
    {errors["tel"]&& <p className="text-red-600">{errors["tel"]}</p>}
    </div>
  </div>
  <div className="mt-2 flex gap-1">
    <div className="flex flex-col">
    
    <input type="password" className="form-text" name="pwd" value={user.pwd} onChange={hanldeChange} placeholder="MOT DE PASSE"/>
    {errors["pwd"]&& <p className="text-red-600">{errors["pwd"]}</p>}
    </div>
    <div className="flex flex-col">
    
    <input className="form-text" type="password" name="cpwd" value={user.cpwd} onChange={hanldeChange} placeholder="CONFIRMER MOT DE PASSE"/>
    {errors["cpwd"]&& <p className="text-red-600">{errors["cpwd"]}</p>}
    </div>
  </div>
   

<button onClick={handleSubmit} className="flex bg-indigo-500 rounded-sm w-full justify-center m-auto mt-8 py-2 font-bold">S'inscrire</button>
<p className="mt-8 flex justify-center">Vous avez un compte ?</p>
<Link to="/login"><p className="flex mt-5 text-[#eb6b56] justify-center cursor-pointer">Se connecter</p></Link>
  </div>

 </div>
 </div>
        </>
    )
}
export default Register