import { Resume } from "../Resume"

export const Blank = ({edit}:{edit:boolean})=>{
    return(
      <Resume>
      <div className="blank">
      <div  data-editable={edit} contentEditable={edit}></div>
      </div>
     </Resume>
    )
  }
  