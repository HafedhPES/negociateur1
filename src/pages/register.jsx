import {React} from "react"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
const Register=()=>{
//css
const inputcss="border border-gray-300 mt-2 outline-none rounded-md px-1 py-2 focus:border focus:border-indigo-500 focus:shadow-md"
    return(
        <>
        <Navbar/>
        <div className="flex py-3 bg-gray-100 w-full h-full sm:h-screen justify-center">
      
  <div className=' flex flex-col w-[80%]   h-min rounded-md bg-white px-3 py-3'>
  <h1 className="text-lg font-bold">S'inscrire</h1>
   <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
<div className="mt-1 flex flex-col">
    <label>Nom </label>
    <input className={inputcss} type="text"/>
</div>
<div className="mt-1 flex flex-col">
    <label>Prénom</label>
    <input className={inputcss} type="text"/>
</div>
<div className="mt-1 flex flex-col">
    <label>Email</label>
    <input className={inputcss} type="text"/>
</div>
<div className="mt-1 flex flex-col">
    <label>Tel</label>
    <input className={inputcss} type="number"/>
</div>
<div className="mt-1 flex flex-col">
    <label>Mot de passe</label>
    <input className={inputcss} type="text"/>
</div>
<div className="mt-1 flex flex-col">
    <label>Confirmer mot de passe</label>
    <input className={inputcss} type="text"/>
</div>
</div>

<button className="flex rounded-sm w-[50%] justify-center m-auto mt-8 py-2 font-bold">S'inscrire</button>
<p className="mt-8 flex justify-center">Vous avez un compte ?</p>
<Link to="/login"><p className="flex mt-5 text-indigo-500 justify-center cursor-pointer">Se connecter</p></Link>
  </div>

 </div>
        </>
    )
}
export default Register