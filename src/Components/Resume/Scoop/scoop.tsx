import { Resume, Clone } from "../Resume";
import './scoop.scss';

export const Scoop = ({edit }:{edit:boolean}) => {
  return (
    <Resume>
    <div className="scoop">

    <div className="intro">
       <div className="about text-center">
       <h1 className="name">Great Ihevueme</h1>
        <h5 className='role'>Senior Odogwu Developer</h5>
       </div>

    <div className="contacts">

    <p>
        <b>PHONE: </b>
        <span> +234 708 521 8197</span>
    </p>

    <p>
        <b>EMAIL: </b>
        <span> great@Odogwu.com</span>
    </p>
    <p>
        <span> Lagos State, NG </span>
    </p>
    <p>
        <b>Linkedln: </b>
        <span> timmi-9128b239 </span>
    </p>

    </div>

    </div>


    <div className="container-grid">

    <div className="grid-col-1">
       <div className="xp">
       <h3 className='title'>Work Experience</h3>


        <Clone edit={edit}>
        <div className="exp">
           <div className="info">
               <h5 className='year'>Year</h5>
               <p>2010 - 2022 </p>
           </div>

           <div className="full">
               <h4 className="job_title">JOB TITLE HERE | COMPANY</h4>
               <div className="job_desc">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos inventore voluptatum nam vel minima maiores animi deleniti amet accusamus?
               </div>
           </div>
       </div>
        </Clone>


       </div>


       <div className="edu">
<div className="xp">
       <h3 className='title'>Education</h3>
      <Clone edit={edit}>
      <div className="exp">
           <div className="info">
               <h5 className='year'>Year</h5>
               <p>2010 - 2022 </p>
           </div>

           <div className="full">
               <h4 className="job_title">JOB TITLE HERE | COMPANY</h4>
               <div className="job_title sch">
               <h5> UNIVERSITY OF ODOGWU</h5>
               <h5 className=''> UX DESIGN & DEVELOPMENT</h5>
               </div>
               <div className="job_desc">
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
       <h3 className='title'>Skills</h3>
       <div className="interest">
           <h5 className='i_title'>Software</h5>
           <ul>
               <li>Video Games</li>
               <li>Video Games</li>
           </ul>
       </div>
    </div>


    <div className="ref">
        <h3 className="title">Reference</h3>
       <Clone edit={edit}>
       <div className="REF">
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
