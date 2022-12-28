import {React,useRef} from "react"
import Navbar from "../components/navbar"
import Cats from "./home/cats"
import Post from "./home/post"
import starIcon from "../assets/star.svg"
import filterIcon from "../assets/filter.svg"
import locIcon from "../assets/location.svg"

const Category=({selectedCat,setSelectedCat})=>{

const maxInput=useRef()
const minInput=useRef()
const maxSpan=useRef()
const minSpan=useRef()
const villeRef=useRef()
const delRef=useRef()
const catRef=useRef()
const scatRef=useRef()
const handleFocus=(e,ref)=>{
    const {name}= e.currentTarget
  
    if(name=="min")
    ref.current.className="absolute  text-gray-400 top-3  left-3 text-xs"
    else if (name=="max")
    ref.current.className="absolute text-gray-400 top-3  left-[55%] text-xs"
    
}  
const handlBlur=(e,ref)=>{
    const {value,name}= e.currentTarget
    
    if(name=="min" && value.length==0)
    
    ref.current.className="absolute text-gray-400 top-6  left-4 text-sm"
    else if (name=="max" && value.length==0)
 
    ref.current.className="absolute text-gray-400 top-6  left-[55%] text-sm"
    
}  

const handleChange=(e,ref)=>{
  if(e.currentTarget.value.length!=0){
   ref.current.children[1].className="absolute -top-12 left-9 text-xs"
   e.currentTarget.className="mt-2 bg-gray-100 text-[#eb6b56] h-[50px] pl-8 pt-4 outline-none rounded-lg"
  }else{
   ref.current.children[1].className="absolute -top-10 left-10 text-sm"
   e.currentTarget.className="mt-2 bg-gray-100 text-gray-500 h-[50px] pl-8 pt-4 outline-none rounded-lg"
   }

}
    return(<>
    <Navbar/>
    
    <div className="flex flex-col mb-3 mt-4   shadow-md">
       
    
       <div className="flex">
       <Cats selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
       </div>


      
       </div>
       <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[25%] lg:flex flex-col px-4 py-2 border border-gray-100 h-[350px] ml-2 rounded-sm">
            <span className="text-gray-500 text-lg flex items-center gap-2">
            <img src={filterIcon} className="w-5"/>
                <h1>Filtre avancé</h1>
                </span>
           <span className="text-gray-500 text-sm mt-4">Prix (DT)</span>
          <div className=" relative grid grid-cols-2 gap-2">
            <input ref={maxInput} name="min" type="text" onFocus={(e)=>handleFocus(e,minSpan)} onBlur={(e)=>handlBlur(e,minSpan)} className="form-text rounded-lg pt-4 px-3 text-md text-[#eb6b56] h-[50px]"/>
            <input ref={minInput} name="max" type="text" onFocus={(e)=>handleFocus(e,maxSpan)} onBlur={(e)=>handlBlur(e,maxSpan)} className="form-text rounded-lg pt-4 text-md text-[#eb6b56] px-3"/>
            <h1 ref={minSpan} onClick={()=>maxInput.current.focus()} className="absolute inline text-gray-400 top-6  left-4 text-sm">Minimum</h1>
            <span ref={maxSpan} onClick={()=>minInput.current.focus()} className="absolute text-gray-400 top-6  left-[55%] text-sm">Maximum</span>
          </div>
          
          <div className=" relative grid grid-cols-2 gap-2">
            
         
          <select onChange={(e)=>handleChange(e,villeRef)}   className="mt-2 h-[50px]  bg-gray-100 text-gray-500 px-8 pt-4   outline-none rounded-lg">
     <option value=""></option>
     
        <option value="Gromalia">Grombalia</option>
        <option value="Kilibia">Klibia</option>
        <option value="Korba">Korba</option>
        <option value="Hammamet">Hammamet</option>
     </select>
     <select onChange={(e)=>handleChange(e,delRef)}   className="mt-2 h-[50px]  bg-gray-100 text-gray-500 px-8 pt-4   outline-none rounded-lg">
     <option value=""></option>
     
        <option value="Gromalia">Grombalia</option>
        <option value="Kilibia">Klibia</option>
        <option value="Korba">Korba</option>
        <option value="Hammamet">Hammamet</option>
     </select>
           
            <span ref={villeRef} className=" flex items-center gap-2 relative text-gray-400">
               
               <img  className="w-5 h-5 absolute -top-10 left-3" src={locIcon}/>
               <h1 className="absolute -top-10 left-10 text-sm">Ville</h1>
               </span>
               <span ref={delRef} className=" flex items-center gap-2 relative text-gray-400">
               
               <img  className="w-5 h-5 absolute -top-10 left-3" src={locIcon}/>
               <h1 className="absolute -top-10 left-10 text-sm">Délégation</h1>
               </span>
               
          </div>


          <div className=" relative grid grid-cols-2 gap-2">
            
         
            <select onChange={(e)=>handleChange(e,catRef)}   className="mt-2 h-[50px]  bg-gray-100 text-gray-500 px-8 pt-4   outline-none rounded-lg">
       <option value=""></option>
       
          <option value="Immobilier">Immobilier</option>
          <option value="Véhicules">Véhicules</option>
          <option value="Loisirs">Loisirs</option>
          <option value="Meuble">Meuble</option>
       </select>
       <select onChange={(e)=>handleChange(e,scatRef)}   className="mt-2 h-[50px]  bg-gray-100 text-gray-500 px-8 pt-4   outline-none rounded-lg">
       <option value=""></option>
       
          <option value="Gromalia">Grombalia</option>
          <option value="Kilibia">Klibia</option>
          <option value="Korba">Korba</option>
          <option value="Hammamet">Hammamet</option>
       </select>
             
              <span ref={catRef} className=" flex items-center gap-2 relative text-gray-400">
                 
                 <img  className="w-5 h-5 absolute -top-10 left-3" src={locIcon}/>
                 <h1 className="absolute -top-10 left-10 text-sm">Catégorie</h1>
                 </span>
                 <span ref={scatRef} className=" flex items-center gap-2 relative text-gray-400">
                 
                 <img  className="w-5 h-5 absolute -top-10 left-3" src={locIcon}/>
                 <h1 className="absolute -top-10 left-10 text-sm">Sous Catégorie</h1>
                 </span>
                 
            </div>
            <button className="mt-4 w-full rounded-sm h-[35px]"> Filtrer</button>


        </div>
        <div className="flex flex-col w-full lg:w-[75%]">
       <div className="flex px-3">
        <span className="bg-[#eb6b56] flex px-1 py-1 rounded-lg">
    <img src={starIcon} className="w-5"/>
    </span>
    <span className="text-2xl font-bold px-1">{selectedCat.toUpperCase()}</span>
    </div>

    <div className="flex  w-full pr-2 mt-3">
        <div   className="w-full  h-full">
    
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
     
     


    </div>
    </div>
       </div>
       </div>
    </>)
}
export default Category