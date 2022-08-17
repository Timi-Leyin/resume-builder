import { Clone, Resume } from "../Resume"
import './scape.scss';

export const Scape = ({edit}:{edit:boolean})=>{
    return(
      <Resume>
      <div className="scape">


      <div>
      <div className="img-avatar"></div>
      <h1 className="user-intro"  data-editable={edit} contentEditable={edit}>
        Discover my skills and expertise in creative area
      </h1>



      <div className="skills">
      <div className="s_skills">
        <h4>Software Skills</h4>

        <div className="ss_skills">
         <Clone edit={edit}>
         <p><span>Graphics & Illustration</span> 
          <span>90%</span></p>
         </Clone>
        </div>
      </div>



      <div className="s_skills">
        <h4>Expertise</h4>

        <ul className="ss_skills">
         <Clone edit={edit}>
         <li><span>Sketching</span></li>
         </Clone>
        </ul>
      </div>



      </div>


        <h5>Contact me ~ </h5>
      <div className="contact">

        <p>
      Block 23D5 ipsum dolor sit amet consectetur elit, Consectetur, impedit!, Nigeria
        </p>
       <div>
       <p>email: hello@timi.dev</p>
       <p>call me: (234) 708 521 8197</p>
       </div>
      </div>



      </div>


      <div className="">

     <div className="head">
     <h2 className="name --primary-color">
        Thomas A.Conwell
      </h2>
      <p className="role">Senior Software Developer</p>

      <p className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium voluptas quas? Numquam, dolores ratione, iure voluptas temporibus incidunt, commodi vel mollitia repudiandae id minus!
      </p>
     </div>

<div className="top">
  <div className="line --primary-bg"></div>
<h1 className="_title">Education & Certificate</h1>
</div>

<div className='edu'>
<Clone edit={edit}>
  <div className='edu_item'>
    <h5>Bachelors in Visual Arts</h5>
    <p>The School of Art / chicago / 2009 - 2013 </p>
  </div>
</Clone>
</div>


<div className="top">
<div className="line --primary-bg"></div>
<h1 className="_title">Work Experience</h1>
</div>

<ul className='experience'>

  <Clone edit={edit}>
    <li className="experience_item">
      
      <div className="">
        <p className='title'> Senior<b> Graphics Designer</b></p>
        <p className='loc'>Creative Mind inc / Canada / 2012- 2018</p>
      </div>

      <div className="job_desc">
        <p className="t">Job Description</p>
      </div>

      <div className="job_d">
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
          <p><b>My Resume </b> <span>Behance/Timi-Leyin</span></p>
        
          <p><b>Facebook </b> <span>Facebook/Timi-Leyin</span></p>
        
        </div>
      </div>
    
     </Resume>
    )
  }
  