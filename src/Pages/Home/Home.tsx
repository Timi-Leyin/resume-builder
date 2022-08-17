import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import'./home.scss';

import gsap from 'gsap';
import {FaStar, FaGithub } from 'react-icons/fa'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);



interface WheelCardProps{
src:string
}

const WheelCard = ({src}:WheelCardProps)=>{
  return(
		<div className="wheel__card">
			<img src={src} />
		</div>
  )
}


const Home = () => {
    const {pathname} = useLocation()
    console.log(location);
    
    useEffect(()=>{
    let wheel = document.querySelector(".wheel") as HTMLElement;
    let images = gsap.utils.toArray(".wheel__card");


    

function setup() {
	let radius = wheel.offsetWidth / 2;
	let center = wheel.offsetWidth / 2;
	let total = images.length;
	let slice = (2 * Math.PI) / total;

	images.forEach((item:any, i) => {
		let angle = i * slice;

		let x = center + radius * Math.sin(angle);
		let y = center - radius * Math.cos(angle);

		gsap.set(item, {
			rotation: angle + "_rad",
			xPercent: -50,
			yPercent: -50,
			x: x,
			y: y
		});
	});
}

setup();


window.addEventListener("resize", setup);

gsap.to(".wheel", {
	rotate: () => -360,
	ease: "none",
	duration: images.length,
	scrollTrigger: {
		start: 0,
		end: "max",
		scrub: 1,
		snap: 1 / images.length,
		invalidateOnRefresh: true
	}
});

  },[-1])


    // useEffect(()=>{
    //   if(pathname == '/') document.body.style.background = '#fff'
    // },[])
  return (
    <section id='home'>
       <header id="header">
           <div className="header_logo">
               <h2>
                   <span className="_block">Resume</span>
                   <span className="_block s-2">Builder</span>
               </h2>
           </div>

          <a href='https://github.com/Timi-Leyin/resume-builder'> <div className="star">
           <FaStar /> Star on Github <FaGithub />
            </div> </a>
       </header>



       <section id="hero">

      <h1 className='heading'>
        <span className='_block'>Take a hit, let's make</span>
        <span className='_block'>a noise in the industry</span>
      </h1>

     <p className='sub-heading'>A Web app built with React,Typescript for creating resume easily with different templates and export to pdf easily.</p>
  <Link to='/templates'><button className='cta'>Get Started</button></Link>
       </section>


       
       <section id="spinner">
         <div className='wheel'>

     
      <WheelCard src='/images/avatar/female-1.png' />
      <WheelCard src='/images/avatar/male-1.png' />

      <WheelCard src='/images/avatar/male-2.png' />
      <WheelCard src='/images/avatar/female-2.png' />

      <WheelCard src='/images/avatar/male-3.png' />
      <WheelCard src='/images/avatar/female-3.png' />

      <WheelCard src='/images/avatar/male-4.png' />
      <WheelCard src='/images/avatar/female-4.png' />

      <WheelCard src='/images/avatar/male-5.png' />
      <WheelCard src='/images/avatar/female-5.png' />

      <WheelCard src='/images/avatar/male-6.png' />
      <WheelCard src='/images/avatar/female-6.png' />

      <WheelCard src='/images/avatar/male-7.png' />
      <WheelCard src='/images/avatar/female-7.png' />
      
      {/* male */}


      <WheelCard src='/images/avatar/male-8.png' />

      <WheelCard src='/images/avatar/male-2.png' />
      <WheelCard src='/images/avatar/male-2.png' />


         </div>
       </section>
<div className="scroll-down">Scroll down<div className="arrow"></div></div>

    </section>
  )
}

export default Home
