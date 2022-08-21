import { Resume, Clone } from "../Resume";
import './scoop.scss';

export const Scoop = ({edit }:{edit:boolean}) => {
  return (
    <Resume>
    <div className="scoop">

    <div className="intro">
       <div className="about text-center">
       <h1 className="name --primary-color" data-editable={edit} contentEditable={edit}>Great Ihevueme</h1>
        <h5 className='role' data-editable={edit} contentEditable={edit}>Senior Odogwu Developer</h5>
       </div>

    <div className="contacts">

    <p data-editable={edit} contentEditable={edit}>
        <b>PHONE: </b>
        <span> +234 708 521 8197</span>
    </p>

    <p data-editable={edit} contentEditable={edit}>
        <b>EMAIL: </b>
        <span> great@Odogwu.com</span>
    </p>
    <p data-editable={edit} contentEditable={edit}>
        <span> Lagos State, NG </span>
    </p>
    <p data-editable={edit} contentEditable={edit}>
        <b>Linkedln: </b>
        <span> timmi-9128b239 </span>
    </p>

    </div>

    </div>


    <div className="container-grid">

    <div className="grid-col-1">
       <div className="xp">
       <h3 className='title --primary-color' data-editable={edit} contentEditable={edit}>Work Experience</h3>


        <Clone edit={edit}>
        <div className="exp">
           <div className="info">
               <h5 className='year' data-editable={edit} contentEditable={edit}>Year</h5>
               <p data-editable={edit} contentEditable={edit}>2010 - 2022 </p>
           </div>

           <div className="full">
               <h4 className="job_title --primary-color" data-editable={edit} contentEditable={edit}>JOB TITLE HERE | COMPANY</h4>
               <div className="job_desc" data-editable={edit} contentEditable={edit}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos inventore voluptatum nam vel minima maiores animi deleniti amet accusamus?
               </div>
           </div>
       </div>
        </Clone>


       </div>


       <div className="edu">
<div className="xp">
       <h3 className='title --primary-color' data-editable={edit} contentEditable={edit}>Education</h3>
      <Clone edit={edit}>
      <div className="exp">
           <div className="info">
               <h5 className='year' data-editable={edit} contentEditable={edit}>Year</h5>
               <p data-editable={edit} contentEditable={edit}>2010 - 2022 </p>
           </div>

           <div className="full">
               <h4 className="job_title --primary-color" data-editable={edit} contentEditable={edit}>JOB TITLE HERE | COMPANY</h4>
               <div className="job_title sch">
               <h5 data-editable={edit} contentEditable={edit}> UNIVERSITY OF ODOGWU</h5>
               <h5 className='' data-editable={edit} contentEditable={edit}> UX DESIGN & DEVELOPMENT</h5>
               </div>
               <div className="job_desc" data-editable={edit} contentEditable={edit}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </div>
           </div>
       </div>
      </Clone>
</div>
      


       </div>




    </div>





    <div className="grid-col-2">

    <div className="interests">
       <h3 className='title --primary-color' data-editable={edit} contentEditable={edit}>Skills</h3>
       <div className="interest" data-editable={edit} contentEditable={edit}>
           <h5 className='i_title'>Software</h5>
           <ul>
               <li>Video Games</li>
               <li>Video Games</li>
           </ul>
       </div>
    </div>


    <div className="ref">
        <h3 className="title --primary-color" data-editable={edit} contentEditable={edit}>Projects</h3>
       <Clone edit={edit}>
       <div className="REF" data-editable={edit} contentEditable={edit}>
            <h4 className="r_name">RESUME BUILDER</h4>
            <p className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste.
            </p>
        </div>
       </Clone>
    </div>

    </div>







    </div>

    </div>
    </Resume>
  )
}
