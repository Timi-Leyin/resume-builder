import { Resume } from "../../Components/Resume/Resume";
import { IoMdGrid, IoMdColorPalette, IoMdColorFilter } from "react-icons/io";
import { FaEye, FaFilePdf, FaPen } from "react-icons/fa";
import * as Template from '../../Components/Resume/Templates'
import "./create.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";



export const Panel = ({changePreview,preview}:{changePreview?:any,preview?:boolean})=>{

  return(
    <div className="options-panel">
    <h1 className="logo">
      <p>Resume</p>
      <p>Builder</p>
    </h1>

    <ul id="options">
      <li className="option">
         <Link to='/templates'>
        <span>
          <IoMdGrid />{" "}
        </span>
        <span className="text"> Templates</span>
        </Link>
      </li>

    {
     typeof preview !== 'undefined' && (
        <li className="option" onClick={()=> changePreview &&  changePreview() }>
        <span>
          {!preview ?  <FaPen/> : <FaEye />} {" "}
        </span>
        <span className="text"> {!preview ? 'Edit': 'Preview'} </span>
      </li>
      )
    }

      <li className="option">
        <span>
          <IoMdColorPalette />{" "}
        </span>
        <span className="text"> Colors</span>
      </li>

      <li>
        <button id="export">
          <FaFilePdf />
          <span> Export PDF</span>
        </button>
      </li>

      {/* <li className="me">
             <p>Made by <b>Timi-Leyin with love. React </b></p>
         </li> */}
    </ul>
  </div>
  )
} 
const Create = () => {
  const {name} = useParams() as unknown as any ;
  let Resume_Template = Template[name]

  let [preview, setPreview] = useState(false)
  return (
    <section id="resume-create">
<Panel changePreview={()=> setPreview(!preview)} preview={preview} />

      <div className="resume-panel">
 
<Resume_Template edit={preview} />

     </div>
    </section>
  );
};

export default Create;
