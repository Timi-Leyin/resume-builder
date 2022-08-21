import { Resume, Clone } from "../Resume";
import './scoop.scss';

export const Scoop = ({edit }:{edit:boolean}) => {
  return (
    <Resume>
    <div className="scoop">

    <div className="intro">
       <div className="about text-center">
       <h1 className="name">Great Malone</h1>
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
        {/* <b>Abeokuta <k></Uk>: </b> */}
        <span> Lagos State, NG </span>
    </p>
    <p>
        <b>Linkedln: </b>
        <span> timmi-9128b239 </span>
    </p>

    </div>

    </div>




    </div>
    </Resume>
  )
}
