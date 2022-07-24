import { useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTwitter } from "react-icons/fa";
import { Resume, Clone } from "../Resume";
import './orea.scss'


const SectionRule = ({name,edit}:{name:string,edit:boolean})=>(
    <div className="section-rule --primary-color">
    <div className="section-id" data-editable={edit} contentEditable={edit}>{name}</div>
    <hr className='--primary-bg' />
  </div>
  )
  
  export const Orea = ({edit }:{edit:boolean})=>{
    let el = useRef(null);
    useEffect(()=>{
      // console.log(el)
    },[el])
    return(
      <Resume>
      <div className="orea" ref={el} >
  
       <div className="header">
         <h1 className="head --primary-color" data-editable={edit} contentEditable={edit}>Keyur Vadher</h1>
         <p className="role" data-editable={edit} contentEditable={edit}>Graphic Designer</p>
       </div>
  
  
  
      <SectionRule name='Introduction' edit={edit} />
  
  <div className="introduction-section">
    <div className="intro-contact">
      <div className="contact">
        <span className="icon --primary-color"><FaMapMarkerAlt className='--icon-color' color='red' /></span>
       <span className="text" data-editable={edit} contentEditable={edit}>Lagos, Nigeria</span> </div>
  
      <div className="contact">
      <span className="icon --primary-color"><FaEnvelope className='--icon-color' color='red' /></span>
       <span className="text" data-editable={edit} contentEditable={edit}>envelope@email.me</span> </div>
  
  
  
      <div className="contact">
        <span className="icon --primary-color"><FaPhone className='--icon-color' color='red' /></span>
         <span className="text" data-editable={edit} contentEditable={edit}>+234 708 521 8197</span> </div>
  
      
         <div className="contact">
        <span className="icon --primary-color"><FaTwitter className='--icon-color' color='red' /></span>
         <span className="text" data-editable={edit} contentEditable={edit}>@originalTimi</span></div>
  
  
    </div>
  
  
    <div className="intro-about" data-editable={edit} contentEditable={edit}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad cupiditat e, 
  
      <span className="_block">
      consectetur totam incidunt harum, aliquam veritatis laborum illo eos fuga praesentium deserunt?
      </span>
      <span className="_block">
      consectetur totam incidunt harum, aliquam
      </span>
    </div>
  </div>
  
    <SectionRule name='Education' edit={edit} />
  
      <div className="education-section">
  
      <Clone edit={edit}>
        
      <div className="edu">
        <h3 className="year --primary-color --primary-border-color" >
          <span data-editable={edit} contentEditable={edit} className='_block'>2019</span>
        </h3>
        <div className="course" data-editable={edit} contentEditable={edit}>
          Information & Technology Engineerring [ Diploma ] Nigeria
        </div>
      </div>
  
      </Clone>
  
      </div>
  
  
      <SectionRule name='Exprience' edit={edit} />
  
  
  <div className="exprience-section education-section">
  
  <Clone edit={edit}>
  <div className="edu">
        <h3 className="year --primary-color --primary-border-color" >
          <span data-editable={edit} contentEditable={edit} className='_block'>Dec</span>
          <span data-editable={edit} contentEditable={edit} className='_block'>2019</span>
        </h3>
        <div className="course">
          <h4 data-editable={edit} contentEditable={edit}>Freelance Developer</h4>
          <p data-editable={edit} contentEditable={edit}>I've been working on building a freelancing business,servicing a range of clients with graphics,logos and brand design.</p>
        </div>
      </div>
  </Clone>
  
  
  </div>
  
  
  <SectionRule name='skills' edit={edit} />
      <div className='skills' data-editable={edit} contentEditable={edit}>
        <p className='--primary-border-color'>Typescript</p>
      </div>
  
  
  
      </div>
     </Resume>
    )
  }
  