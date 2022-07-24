import * as Template from '../../Components/Resume'

import { useParams } from "react-router-dom";
import { useState } from "react";
import  Panel  from "../../Layouts/Panel";
import PageNotFound from '../PageNotFound';



const Create = () => {
  const {name} = useParams() as unknown as any ;
  const fil = name[0].toUpperCase() + name.slice(1,name.length)

  let ResumeTemplate;
  try{
    ResumeTemplate = Template[fil]
  }catch(err){
    console.log('an error occured')
  }
  
  let [preview, setPreview] = useState(false)

 
  return (
    <section id="resume-create">
<Panel changePreview={()=> setPreview(!preview)} preview={preview} />

      <div className="resume-panel">
 
    {ResumeTemplate ? (
      <ResumeTemplate edit={preview}  />
    ): (
      <PageNotFound />
    )}

     </div>
    </section>
  );
};

export default Create;


