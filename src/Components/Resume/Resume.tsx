import { ReactNode, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './resume.scss';

const images= {
  female:['/images/avatar/female-1.png', '/images/avatar/female-2.png', '/images/avatar/female-3.png', '/images/avatar/female-4.png', '/images/avatar/female-5.png', '/images/avatar/female-6.png', '/images/avatar/female-7.png' ],
  male:['/images/avatar/male-1.png', '/images/avatar/male-2.png', '/images/avatar/male-3.png', '/images/avatar/male-4.png', '/images/avatar/male-5.png', '/images/avatar/male-6.png', '/images/avatar/male-7.png', '/images/avatar/male-8.png']
}




export const Avatar = (type='male',index=0)=>{
  return (images[type][index])
}

export const Clone = ({children,edit}:{children:JSX.Element,edit:boolean})=>{
  let [cloned, clone] = useState<ReactNode[]>([])
 useEffect(()=>{
console.clear()
 document.querySelectorAll('.cloned [contenteditable]').forEach(element => {
   element.setAttribute('contenteditable',(edit ? 'true' : 'false'));
   element.setAttribute('data-editable',(edit ? 'true' : 'false'));
 });
 },[edit])
  return(
    <div className='cloned-parent'>
 {edit && (
     <>
      
     <div className="add-icon icon--" onClick={()=> clone([...cloned,children])}><FaPlus /></div>
        <div className="remove-icon icon--" onClick={()=>{
           cloned.pop(); clone([...cloned])
        }}><FaMinus /></div>
  
     </>
 )}
    {children}

    <div className='cloned'>
    {
      cloned.map((ClonedElement,i)=> <span key={i}>{ClonedElement}</span> )
    }
    </div>
    </div>
  )
}
export const Resume = ({children}:{children:ReactNode}) => {
  return (
    <section id="resume" className='resume-buillder-template'>
        {children}
    </section>
  )
}
