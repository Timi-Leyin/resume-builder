import React from 'react'

import './templates.scss'

import { Link } from 'react-router-dom';

import orea from '../../Assets/orea.png'
import niko from '../../Assets/niko.png'
import niko2 from '../../Assets/niko2.png'
import blank from '../../Assets/blank.png'
import minimal from '../../Assets/minimal.png'
import Panel from '../../Layouts/Panel';


const Templates = () => {
  return (
     <section id="resume-create">
       <Panel />

       <div className="resume-templates">
<div>
<Link to={'/create/orea'} > <img src={orea} alt="Orea" /> </Link>
<Link to={'/create/niko'} >  <img src={niko} alt="Niko" />  </Link>
<Link to={'/create/blank'} > <img src={blank} alt="Blank" /> </Link>
<Link to={'/create/nikoDark'} >  <img src={niko2} alt="Niko2" />  </Link>
<Link to={'/create/minimal'} >  <img src={minimal} alt="Minimal" />  </Link>
</div>
       </div>

     </section>
    )
}

export default Templates