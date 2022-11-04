import React from "react";
import bgImg from '../assets/cyber-bg.png'
 
const Hero=()=>{


    return(
        <div className="w-full h-screen flex flex-col justify-between bg-zinc-200">
        <div className="grid md:grid-cols-2 m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 ">
            <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>

            </div>

            <div className="flex">
                <img className="w-full" src={bgImg}/>
            </div>
        </div>
        
        </div>
    )
}
export default Hero;