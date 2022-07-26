import { Resume } from "../Resume"
import './scape.scss';

export const Scape = ({edit}:{edit:boolean})=>{
    return(
      <Resume>
      <div className="scape">
      <div  data-editable={edit} contentEditable={edit}>
          scape
      </div>
      </div>
     </Resume>
    )
  }
  