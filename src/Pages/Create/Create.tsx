import { Resume } from "../../Components/Resume/Resume";
import { IoMdGrid, IoMdColorPalette, IoMdColorFilter } from "react-icons/io";
import { FaEye, FaFilePdf } from "react-icons/fa";
import * as Template from '../../Components/Resume/Templates'
import "./create.scss";

const Create = () => {
//   console.log(Template)
//  let arr:any[] = [];
//  let T ;
//   for(let i of Object.keys(Template)){
//    arr.push(Template[i] as any)
//   // console.log(Template[i])
//   }
  return (
    <section id="resume-create">
      <div className="options-panel">
        <h1 className="logo">
          <p>Resume</p>
          <p>Builder</p>
        </h1>

        <ul id="options">
          <li className="option">
            <span>
              <IoMdGrid />{" "}
            </span>
            <span className="text"> Templates</span>
          </li>

          <li className="option">
            <span>
              <FaEye />{" "}
            </span>
            <span className="text"> Preview </span>
          </li>

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

      <div className="resume-panel">
 
<Template.Minimal edit={false} />

      </div>
    </section>
  );
};

export default Create;
