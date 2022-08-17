import React from 'react'

import './templates.scss'

import { Link } from 'react-router-dom';
import Panel from '../../Layouts/Panel';


const Templates = () => {
  return (
     <section id="resume-create">
       <Panel />

       <div className="resume-templates">
<div>
<Link to={'/create/orea'} > <img src='/images/orea.png' alt="Orea" /> </Link>
<Link to={'/create/niko'} >  <img src='/images/niko.png' alt="Niko" />  </Link>
<Link to={'/create/blank'} > <img src='/images/blank.png'  alt="Blank" /> </Link>
<Link to={'/create/nikoDark'} >  <img src='/images/niko2.png' alt="Niko2" />  </Link>
<Link to={'/create/minimal'} >  <img src='/images/minimal.png' alt="Minimal" />  </Link>
<Link to={'/create/scape'} >  <img src='/ima' alt="Scape" />  </Link>
</div>
       </div>

     </section>
    )
}

export default Templates
