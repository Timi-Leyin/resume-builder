import React from 'react'
import { Panel } from '../Create/Create'
import './templates.scss'
import { Link } from 'react-router-dom'
const Templates = () => {
  return (
     <section id="resume-create">
       <Panel />

       <div className="resume-templates">
<div>
<Link to={'/create/Orea'} > Orea </Link>
<Link to={'/create/Colorful'} > ColorFul </Link>
<Link to={'/create/Minimal'} > Minimal </Link>
</div>
       </div>

     </section>
    )
}

export default Templates