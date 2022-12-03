import {React} from "react"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
const Register=()=>{
//css
const inputcss="border border-gray-300 mt-2 outline-none rounded-md px-1 py-2 focus:border focus:border-indigo-500 focus:shadow-md"
    return(
        <>
        <Navbar/>
        <div className="container">
        <div className="title-container">
        
               <p className="title">Créer un compte </p>
        
    </div>
        <div className="form-container">
      
  <div className=' flex flex-col'>
  
  <div className="mt-4 flex gap-2">
    <div className="flex flex-col">
    <label className="form-label">Nom</label>
    <input className="form-text" type="text" name="name"/>
    </div>
    <div className="flex flex-col">
    <label className="form-label">prénom</label>
    <input className="form-text" type="text"/>
    </div>
  </div>
  <div className="mt-2 flex gap-2">
    <div className="flex flex-col">
    <label className="form-label">Email</label>
    <input className="form-text" type="text" name="email"/>
    </div>
    <div className="flex flex-col">
    <label className="form-label">Tel</label>
    <input type="number" name="tel" className="form-text"/>
    </div>
  </div>
  <div className="mt-2 flex gap-2">
    <div className="flex flex-col">
    <label className="form-label">Mot de passe</label>
    <input type="password" className="form-text" name="pwd"/>
    </div>
    <div className="flex flex-col">
    <label className="form-label">Confirmer mot de passe</label>
    <input className="form-text" type="password" name="cpwd"/>
    </div>
  </div>
   

<button className="flex bg-indigo-500 rounded-sm w-full justify-center m-auto mt-8 py-2 font-bold">S'inscrire</button>
<p className="mt-8 flex justify-center">Vous avez un compte ?</p>
<Link to="/login"><p className="flex mt-5 text-[#eb6b56] justify-center cursor-pointer">Se connecter</p></Link>
  </div>

 </div>
 </div>
        </>
    )
}
export default Register