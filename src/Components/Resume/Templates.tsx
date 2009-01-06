import React, { useEffect, useRef } from 'react'
import { Clone, Resume } from './Resume'
import './orea.scss';
import './colorful.scss'
import './niko.scss'
import { FaEnvelope, FaIntercom, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaMarker, FaPhone, FaTwitter, FaUser } from 'react-icons/fa';



// Copy : Do not edit Default Component
// export const Default = ()=>{
//   return(
//     <Resume>
//     <div className="test">
//        A new blank Template
//     </div>
//    </Resume>
//   )
// }

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
      <span className="icon --primary-color"><FaMapMarkerAlt /></span>
     <span className="text" data-editable={edit} contentEditable={edit}>Lagos, Nigeria</span> </div>

    <div className="contact">
    <span className="icon --primary-color"><FaEnvelope /></span>
     <span className="text" data-editable={edit} contentEditable={edit}>envelope@email.me</span> </div>



    <div className="contact">
      <span className="icon --primary-color"><FaPhone /></span>
       <span className="text" data-editable={edit} contentEditable={edit}>+234 708 521 8197</span> </div>

    
       <div className="contact">
      <span className="icon --primary-color"><FaTwitter /></span>
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


<SectionRule name='Interest' edit={edit} />




    </div>
   </Resume>
  )
}



const Image = ()=>{
  return(
    <span className='add-image'>
      <input type="file" name="image" id="image" />
    </span>
  )
}

export const Colorful = ({edit}:{edit:boolean})=>{
  return(
    <Resume>
    <div className="colorful">
      <div className="header">
        <div className="avatar">
    <span className="no-image">
      <FaUser />
    </span>
        </div>
        <div className="name">
          <h1 className=' --primary-color' data-editable={edit} contentEditable={edit} >
            Timi- Leyin
          </h1>
          <p className="role" data-editable={edit} contentEditable={edit}>Front end Developer</p>
        </div>
      </div>


      <div className="body">

    <div className="body-side-lt --primary-border-color"></div>


    <div className="body-side-rt"></div>

      </div>
    </div>
   </Resume>
  )
}


export const Niko = ({edit}:{edit:boolean})=>{
  useEffect(()=>{
// window.addEventListener('load',()=> {
 ( document.querySelector('#resume.resume-buillder-template') as HTMLElement).style.background ='rgb(246, 246, 246)'
// })
  },[])
  return(
    <Resume>
      <div className="niko">
        <div className="head">
          <div className="contact">
            <h2 className="title" >Contact Me.</h2>
            <div className="contacts">

              <div className="con">
                <div className="icon">
                  <FaIntercom />
                </div>

                <div className="info">
                  <h5 className="title" ><small>WEB:</small></h5>
                  <p className='c-link'  data-editable={edit} contentEditable={edit} >www.timi.dev#about-me</p>
                  <p className='c-link'  data-editable={edit} contentEditable={edit} >www.github.com/Timi-Leyin</p>
                </div>
              </div>
              <div className="con">
                <div className="icon">
                  <FaPhone />
                </div>

                <div className="info">
                  <h5 className="title" ><small>PHONE:</small></h5>
                  <p className='c-link'  data-editable={edit} contentEditable={edit} >+234 708 521 8197</p>
                  <p className='c-link'  data-editable={edit} contentEditable={edit} >+234 704 989 4034</p>
                </div>
              </div>
              <div className="con">
                <div className="icon">
                  <FaMapMarked />
                </div>

                <div className="info">
                  <h5 className="title" ><small>ADDRESS:</small></h5>
                  <p className='c-link'  data-editable={edit} contentEditable={edit} >NO 34, Laughter Estate, Airport Road, Abuja Nigeria.</p>
                </div>
              </div>
              
            </div>
          </div>


          <div className="about">
          <h2 className="title">about.</h2>
      <div className="about-intro">
      <div className="">
      <h1>
          <p  data-editable={edit} contentEditable={edit}>JAMES KARY</p>
          <p  data-editable={edit} contentEditable={edit}>GRAPHIC DESIGNER</p>
        </h1>
      </div>

      <div className=""  data-editable={edit} contentEditable={edit}>
       <div className="small">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea fuga possimus voluptatem quo doloribus sequi repellat corporis veritatis soluta nihil libero voluptatum cum ut deleniti ipsa, enim, neque in. Est quo eum consequuntur temporibus aliquam?
       </div>
      </div>

      </div>
          </div>
        </div>


<div className="middle">

 <h2 className="title">WORK SKILS</h2>

<div className="head">
  
<div className="work-skills">

<div className="skill">
  <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
  <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
</div>
<div className="skill">
  <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
  <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
</div>

<div className="skill">
  <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
  <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
</div>

</div>

 
<div className="work-skills ">

<div className="skill">
  <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
  <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
</div>
<div className="skill">
  <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
  <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
</div>

<div className="skill">
  <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
  <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
</div>

</div>

  
</div>


</div>



        <div className="body">

    <div className="experience">
      <h2 className="title">EXPERIENCES</h2>
      <div className="exp">

<Clone edit={edit}>
<div className="xp">
      <h3>Graphics Designer</h3>
      <p className='small'>2021</p>
      <h5>Envato</h5>
      <small className='small'>- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, vel cumque.</small>
    </div>

</Clone>

      </div>
    </div>


    <div className="education">
    <h2 className="title">EDUCATION</h2>
    <div className="edu">

<Clone edit={edit}>
  
<div className="ed">
        <h4>COURSE NAME</h4>
        <p className='small'>2019 - 2022</p>
        <h5>SCHOOL OF ART</h5>
        <small className='small'>Bachelor of Science in Computer Science & information Science</small>
        <hr />
      </div>

</Clone>
      
    </div>


    <div className="interests">
      <h2 className="title">INTERESTS</h2>
      <div className="int small" data-editable={edit} contentEditable>
      <li>
      Snowboarding, swimming, traveling,
reading, hiking
      </li>
      </div>
    </div>


    <div className="extra"  data-editable={edit} contentEditable>
      <h2 className="title">Projects</h2>
      <div className="int small">
      <h3>Resume Builder</h3>
      
        <small className='small'>Web app built with React, Node.js, and
Express for visualizing personalized
Spotify data such as top artists, tracks,
recommendations, and audio features</small>
       
      </div>
    </div>

    </div>

        </div>
      </div>
    </Resume>
  )}


  export const Niko2 = ({edit}:{edit:boolean})=>{
    useEffect(()=>{
  // window.addEventListener('load',()=> {
   ( document.querySelector('#resume.resume-buillder-template') as HTMLElement).style.background ='rgb(50, 50, 50)'
  // })
    },[])
    return(
      <Resume>
        <div className="niko niko2">
          <div className="head">
            <div className="contact">
              <h2 className="title" >Contact Me.</h2>
              <div className="contacts">
  
                <div className="con">
                  <div className="icon">
                    <FaIntercom />
                  </div>
  
                  <div className="info">
                    <h5 className="title" ><small>WEB:</small></h5>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >www.timi.dev#about-me</p>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >www.github.com/Timi-Leyin</p>
                  </div>
                </div>
                <div className="con">
                  <div className="icon">
                    <FaPhone />
                  </div>
  
                  <div className="info">
                    <h5 className="title" ><small>PHONE:</small></h5>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >+234 708 521 8197</p>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >+234 704 989 4034</p>
                  </div>
                </div>
                <div className="con">
                  <div className="icon">
                    <FaMapMarked />
                  </div>
  
                  <div className="info">
                    <h5 className="title" ><small>ADDRESS:</small></h5>
                    <p className='c-link'  data-editable={edit} contentEditable={edit} >NO 34, Laughter Estate, Airport Road, Abuja Nigeria.</p>
                  </div>
                </div>
                
              </div>
            </div>
  
  
            <div className="about">
            <h2 className="title">about.</h2>
        <div className="about-intro">
        <div className="">
        <h1>
            <p  data-editable={edit} contentEditable={edit}>JAMES KARY</p>
            <p  data-editable={edit} contentEditable={edit}>GRAPHIC DESIGNER</p>
          </h1>
        </div>
  
        <div className=""  data-editable={edit} contentEditable={edit}>
         <div className="small">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea fuga possimus voluptatem quo doloribus sequi repellat corporis veritatis soluta nihil libero voluptatum cum ut deleniti ipsa, enim, neque in. Est quo eum consequuntur temporibus aliquam?
         </div>
        </div>
  
        </div>
            </div>
          </div>
  
  
  <div className="middle">
  
   <h2 className="title">WORK SKILS</h2>
  
  <div className="head">
    
  <div className="work-skills">
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  </div>
  
   
  <div className="work-skills ">
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  <div className="skill">
    <p  data-editable={edit} contentEditable={edit}>ADOBE PHOTOSHOP</p>
    <p><span  data-editable={edit} contentEditable={edit}>68</span>%</p>
  </div>
  
  </div>
  
    
  </div>
  
  
  </div>
  
  
  
          <div className="body">
  
      <div className="experience">
        <h2 className="title">EXPERIENCES</h2>
        <div className="exp">
  
  <Clone edit={edit}>
  <div className="xp">
        <h3   data-editable={edit} contentEditable={edit}>Graphics Designer</h3>
        <p className='small'   data-editable={edit} contentEditable={edit}>2021 - current</p>
        <h5   data-editable={edit} contentEditable={edit}>Envato</h5>
        <small className='small'   data-editable={edit} contentEditable={edit}>- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, vel cumque.</small>
      </div>
  
  </Clone>
  
        </div>
      </div>
  
  
      <div className="education">
      <h2 className="title">EDUCATION</h2>
      <div className="edu">
  
  <Clone edit={edit}>
    
  <div className="ed">
          <h4   data-editable={edit} contentEditable={edit}>COURSE NAME</h4>
          <p className='small'   data-editable={edit} contentEditable={edit}>2019 - 2022</p>
          <h5   data-editable={edit} contentEditable={edit}>SCHOOL OF ART</h5>
          <small   data-editable={edit} contentEditable={edit} className='small'>Bachelor of Science in Computer Science & information Science</small>
          <hr />
        </div>
  
  </Clone>
        
      </div>
  
  
      <div className="interests">
        <h2 className="title">INTERESTS</h2>
        <div className="int small" data-editable={edit} contentEditable>
        <li>
        Snowboarding, swimming, traveling,
  reading, hiking
        </li>
        </div>
      </div>
  
  
      <div className="extra"  data-editable={edit} contentEditable>
        <h2 className="title">Projects</h2>
        <div className="int small">
        <h3>Resume Builder</h3>
        
          <small className='small'>Web app built with React, Node.js, and
  Express for visualizing personalized
  Spotify data such as top artists, tracks,
  recommendations, and audio features</small>
         
        </div>
      </div>
  
      </div>
  
          </div>
        </div>
      </Resume>
    )}