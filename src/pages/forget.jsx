import {React} from "react"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"

const Forget=()=>{
//css
const inputcss="border border-gray-300 mt-2 outline-none rounded-md px-1 py-2 focus:border focus:border-indigo-500 focus:shadow-md"
    return(
        <>
        <Navbar/>
        <div className="flex py-3 bg-gray-100 w-full h-screen   justify-center">
  <div className='flex flex-col w-[80%] sm:w-[60%]  md:w-[50%] lg:w-[30%]   rounded-md bg-white px-3 py-3 h-min pb-5'>
   <h1 className="text-lg font-bold">Mot de passe oublié</h1>
<div className="mt-8 flex flex-col">
    <label>Email</label>
    <input className={inputcss} type="text"/>
</div>

<button className="rounded-sm mt-8 py-2 font-bold">Envoyer</button>
<p className="mt-8 flex justify-center">Vous n'avez pas de compte ?</p>
<Link to="/register"><p className="flex mt-5 text-indigo-500 justify-center cursor-pointer">Créer un compte</p> </Link>
  </div>

 </div>
        </>
    )
}
export default Forget