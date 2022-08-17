import { ReactNode, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './resume.scss';

const images= {
  female:['/images/avatar/female-1.png', '/images/avatar/female-2.png', '/images/avatar/female-3.png', '/images/avatar/female-4.png' ],
  male:['/images/avatar/male-1.png', '/images/avatar/male-2.png', '/images/avatar/male-3.png']
}


const random = (max:number)=> Math.floor(Math.random() * max - 0 + 0)

// console.log(random(10))

export const Avatar = (type='male',index?:number)=>{
  const _rand = random(images[type].length)
  console.log(_rand)
  return (images[type][index || _rand])
}

export const Clone = ({children,edit}:{children:JSX.Element,edit:boolean})=>{
  let [cloned, clone] = useState<ReactNode[]>([])
 useEffect(()=>{
  //  console.log(document.querySelectorAll(".cloned [contenteditable]"),'all')
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
