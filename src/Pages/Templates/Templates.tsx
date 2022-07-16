import React from 'react'
import { Panel } from '../Create/Create'
import './templates.scss'
import { Link } from 'react-router-dom';

import orea from '../../Assets/orea.png'
import niko from '../../Assets/niko.png'
import niko2 from '../../Assets/niko2.png'
import blank from '../../Assets/blank.png'
import minimal from '../../Assets/minimal.png'


const Templates = () => {
  return (
     <section id="resume-create">
       <Panel />

       <div className="resume-templates">
<div>
<Link to={'/create/Orea'} > <img src={orea} alt="Orea" /> </Link>
<Link to={'/create/Niko'} >  <img src={niko} alt="Niko" />  </Link>
<Link to={'/create/Blank'} > <img src={blank} alt="Blank" /> </Link>
<Link to={'/create/Niko2'} >  <img src={niko2} alt="Niko2" />  </Link>
<Link to={'/create/Minimal'} >  <img src={minimal} alt="Minimal" />  </Link>
</div>
       </div>

     </section>
    )
}

export default Templates