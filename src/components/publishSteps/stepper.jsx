import {React} from "react"
import Step2 from "./step2";
import Step22 from "./step22";
import Step3 from "./step3";
import Step4 from "./step4";
const Stepper=({post,step,handleChange,setStepName,errors})=>{
    if ((post.cat=='Véhicules') && ((post.sousCat=="Voitures")|| (post.sousCat=='Camions'))){
      
     return(<>
       {step==2&&
         <Step2 post={post} handleChange={handleChange} setStepName={setStepName} errors={errors}/> }
       {step==3&&
         <Step4 setStepName={setStepName} errors={errors} /> }
       {step==4&&
         <Step3 post={post} errors={errors} handleChange={handleChange} setStepName={setStepName} /> }
      </>);
      
      }
      else if (post.cat=="Immobilier"){
       return(<>
        {step==2&&
         <Step22 post={post} errors={errors} handleChange={handleChange} setStepName={setStepName} /> }
        {step==3&&
         <Step4 post={post} errors={errors} handleChange={handleChange} setStepName={setStepName} /> }
        {step==4&&
         <Step3 post={post} errors={errors} handleChange={handleChange}  setStepName={setStepName}/> }
      </>
        )

      }
      else {
        
        return(<>
            
            {step==2&&
<Step4 post={post} handleChange={handleChange} errors={errors} setStepName={setStepName}/> }
{step==3&&
<Step3 post={post} errors={errors} handleChange={handleChange} setStepName={setStepName} /> }

      </>)
      
      }
        
    

}
export default Stepper