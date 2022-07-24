import { Resume, Clone } from "../Resume"
import './minimal.scss';

export const Minimal = ({edit}:{edit:boolean}) => {
    return (      
      <Resume>
   <div className="minimal">
   <div className="r_header">
        <div className="r_basic-info">
          <h1 className="--r r__name --primary-color" data-editable={edit} contentEditable={edit}>
            Osny Netto
          </h1>
          <h5 className="--r r__role" data-editable={edit} contentEditable={edit}>
            Frontend Developer
          </h5>
        </div>
  
        <div className="r_address"  data-editable={edit} contentEditable={edit}>
            <p className="r__address" >Philiaopian 60C, Brazil</p>
            <p className="r__phone">+234 708 521 8197</p>
            <p className="r__web"><b>https://github.me</b></p>
        </div>
      </div>
  
  <div className="r_about" data-editable={edit} contentEditable={edit}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi enim quis reprehenderit quae? Earum reprehenderit, esse iusto vel necessitatibus sint iure quo debitis nihil recusandae temporibus fugit minus alias asperiores dolorem ea
  Earum reprehenderit, esse iusto vel necessitatibus sint iure quo debitis nihil recusandae temporibus fugit minus alias asperiores dolorem ea
  </div>
  
      <div className="r_body">
  
         <div className="r_skills">
             <h5  data-editable={edit} contentEditable={edit}>Technical Skills</h5>
  
             <small  data-editable={edit} contentEditable={edit}>
        HTML
             </small>
  
  <div className="r_oth-s">
    <h5 data-editable={edit} contentEditable={edit}>Other Skills</h5>
  
    <small  data-editable={edit} contentEditable={edit}>
      Comminication
             </small>
  </div>
  
      
  <div className='r-edu'>
             <h5  data-editable={edit} contentEditable={edit}>Education</h5>
  <Clone edit={edit}>
        <div className='r__education'>
       <div className="r_edu_head">
       <h6  data-editable={edit} contentEditable={edit}>
           - Front End Mentor
         </h6>
         <div className="year"  data-editable={edit} contentEditable={edit}>
          <small> 2012 </small>
         </div>
       </div>
       <div className="r_education_body"  data-editable={edit} contentEditable={edit}>
         Responsive web designing
       </div>
        </div>
  </Clone>
         </div>
  
  
  
  
         <div>
             <h5  data-editable={edit} contentEditable={edit}>Interests</h5>
         <h6  data-editable={edit} contentEditable={edit}>
           - Playing Football
           
         </h6>
         </div>
         </div>
  
  
         <div className="r_xp">
         <h5 data-editable={edit} contentEditable={edit}>   Work Exprience</h5>
     <div>
          
  
  
  <Clone edit={edit}>
  <div className="xp-group"  data-add-data>
  
  <div className="r_xp_head">
        <h6 className="company" >
          <span data-editable={edit} contentEditable={edit}>
      Google - User Onboarding
          </span>
      <p data-editable={edit} contentEditable={edit}><small> Frontend Developer </small></p>
        </h6>
  
        <p className="date"data-editable={edit} contentEditable={edit}>
      Dec 2010 - current
        </p>
      </div>
  
      <div className="r_xp_body">
        <p data-editable={edit} contentEditable={edit} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, enim cupiditate. Fugit, quasi rem. Non quia pariatur exercitationem impedit beatae!</p>
      </div>
  
  </div>
  
  </Clone>
  
  
     </div>
  
  
         </div>
  
  
      </div>
   </div>
    </Resume>
    )
  }