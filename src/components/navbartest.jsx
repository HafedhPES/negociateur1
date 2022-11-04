import React, { useState } from "react";
//import { MenuIcon } from '@heroicons/react/outline'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
 const Navbartest= ()=>{
    const [nav,setNav]=useState(false)
    const handleClick=()=>{
        setNav(!nav)
    }
return(
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center h-full w-full">
            <div className="flex items-center ">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Negociateur.tn</h1>
                <ul className="hidden md:flex">

                    <li>Accueil</li>
                    <li>A propos</li>
                    <li>Prix</li>
                    <li>support</li>
                </ul>
            </div>
            <div className="hidden md:flex pr-4">
                <button className="p-2 border-none bg-transparent text-black mr-4">S'inscrire</button>
                <button className="px-4 py-1">Connexion</button>

            </div>
            <div className="md:hidden" onClick={handleClick}>
                {!nav?
            <Bars3Icon className="w-5"/>
                :(<XMarkIcon className="w-5"/>)}


            </div>
        </div>
    
        {nav&&(
        <ul className={!nav? "hidden" :"absolute w-full bg-zinc-200 px-8"}>
        <li className="border-b-2 border-zinc-300">Accueil</li>
        <li className="border-b-2 border-zinc-300">A propos</li>
        <li className="border-b-2 border-zinc-300">Prix</li>
        <li className="border-b-2 border-zinc-300">support</li>

        <div className="flex flex-col my-4">
        <button className="p-2 bg-transparent text-indigo-600 px-8 py-3 mb-4">S'inscrire</button>
        <button className="px-8 py-3">Connexion</button>
        </div>
        </ul>
        )}
        

        
    
    </div>
)
 }
 export default Navbartest