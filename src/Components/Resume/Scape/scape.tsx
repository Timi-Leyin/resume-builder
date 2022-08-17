import { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import random from "../../../Utils/random";
import { Clone,Avatar, Resume } from "../Resume"
import './scape.scss';

export const Scape = ({edit}:{edit:boolean})=>{
  const [avatarProps , setAvatar] = useState({
    type:'male',
    index:0
  })
    return(
      <Resume>
      <div className="scape">


      <div>
      <div className="img-avatar " style={{backgroundImage:`url(${Avatar(avatarProps.type,avatarProps.index)})`}}>
        {
          edit && (
            <div className="avatar-control">
              <div className="ctrl" onClick={()=>{
                setAvatar({type:'male', index:random(8)})
              }} title='Male'><FaMale /></div>

              
              <div className="ctrl" title='Female' onClick={()=>{
                setAvatar({type:'female', index:random(7)})
              }}><FaFemale /></div>
            </div>
          )
        }
      </div>
      <h1 className="user-intro"  data-editable={edit} contentEditable={edit}>
        Discover my skills and expertise in creative area
      </h1>



      <div className="skills">
      <div className="s_skills">
        <h4  data-editable={edit} contentEditable={edit}>Software Skills</h4>

        <div className="ss_skills">
         <Clone edit={edit}>
         <p><span  data-editable={edit} contentEditable={edit} >Graphics & Illustration</span> 
          <span  data-editable={edit} contentEditable={edit}>90%</span></p>
         </Clone>
        </div>
      </div>



      <div className="s_skills">
        <h4  data-editable={edit} contentEditable={edit}>Expertise</h4>

        <ul className="ss_skills">
         <Clone edit={edit}>
         <li  data-editable={edit} contentEditable={edit}><span>Sketching</span></li>
         </Clone>
        </ul>
      </div>



      </div>


        <h5  data-editable={edit} contentEditable={edit}>Contact me ~ </h5>
      <div className="contact">

        <p  data-editable={edit} contentEditable={edit}>
      Block 23D5 ipsum dolor sit amet consectetur elit, Consectetur, impedit!, Nigeria
        </p>
       <div>
       <p  data-editable={edit} contentEditable={edit}>email: hello@timi.dev</p>
       <p  data-editable={edit} contentEditable={edit}>call me: (234) 708 521 8197</p>
       </div>
      </div>



      </div>


      <div className="">

     <div className="head">
     <h2 className="name --primary-color" data-editable={edit} contentEditable={edit}>
        Thomas A.Conwell
      </h2>
      <p className="role"  data-editable={edit} contentEditable={edit}>Senior Software Developer</p>

      <p className="about"  data-editable={edit} contentEditable={edit}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium voluptas quas? Numquam, dolores ratione, iure voluptas temporibus incidunt, commodi vel mollitia repudiandae id minus!
      </p>
     </div>

<div className="top">
  <div className="line --primary-bg"></div>
<h1 className="_title"  data-editable={edit} contentEditable={edit}>Education & Certificate</h1>
</div>

<div className='edu'>
<Clone edit={edit}>
  <div className='edu_item'>
    <h5 data-editable={edit} contentEditable={edit}>Bachelors in Visual Arts</h5>
    <p  data-editable={edit} contentEditable={edit}>The School of Art / chicago / 2009 - 2013 </p>
  </div>
</Clone>
</div>


<div className="top">
<div className="line --primary-bg"></div>
<h1 className="_title"  data-editable={edit} contentEditable={edit}>Work Experience</h1>
</div>

<ul className='experience'>

  <Clone edit={edit}>
    <li className="experience_item">
      
      <div className="">
        <p className='title'  data-editable={edit} contentEditable={edit}> Senior<b> Graphics Designer</b></p>
        <p className='loc'>
          <span  data-editable={edit} contentEditable={edit}> Creative Mind inc</span> /
          <span  data-editable={edit} contentEditable={edit}> Canada</span> /
          <span  data-editable={edit} contentEditable={edit}> 2012- 2018</span>
          </p>
      </div>

      <div className="job_desc">
        <p className="t"  data-editable={edit} contentEditable={edit}>Job Description</p>
      </div>

      <div className="job_d"  data-editable={edit} contentEditable={edit}>
        <p>- Lorem ipsum dolor, sit amet hetau aka </p>
        <p>- Lorem ipsum dolor, sit amet hetau aka </p>
      </div>

    </li>
  </Clone>

</ul>

      </div>

      </div>

      <div className="">
        <div className="line-bottom --primary-bg"></div>
        <div className="bottom">
          <p><b  data-editable={edit} contentEditable={edit}>My Resume </b> <span  data-editable={edit} contentEditable={edit}>Behance/Timi-Leyin</span></p>
        
          <p><b  data-editable={edit} contentEditable={edit}>Facebook </b> <span  data-editable={edit} contentEditable={edit}>Facebook/Timi-Leyin</span></p>
        
        </div>
      </div>
    
     </Resume>
    )
  }
  