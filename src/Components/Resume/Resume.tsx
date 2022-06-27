import { ReactNode } from 'react';
import './resume.scss';

export const Resume = ({children}:{children:ReactNode}) => {
  return (
    <section id="resume" className='resume-buillder-template'>
        {children}
    </section>
  )
}
