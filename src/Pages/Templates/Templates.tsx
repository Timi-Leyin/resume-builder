import React from 'react'
import { Panel } from '../Create/Create'
import * as Template from '../../Components/Resume/Templates'
import './templates.scss'
import { Link } from 'react-router-dom'
const Templates = () => {
  //   console.log(Template)
 let arr:any[] = [];
  for(let i of Object.keys(Template)){
   arr.push(Template[i] as any)
  // console.log(Template[i])
  }
  return (
     <section id="resume-create">
       <Panel />

       <div className="resume-templates">
    {
      arr.map((Temp,i)=>(
<div>
<Link to={'/create/' + arr[i].name}  >
        <Temp key={i}/>
      </Link>
</div>
  ))
    }
       </div>

     </section>
    )
}

export default Templates