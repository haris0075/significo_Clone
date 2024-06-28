import React from 'react'
import main_vid from '../images/significo-main-hero.mp4'
// import "./Home.css"
import { useGSAP } from '@gsap/react';
import gsap, { Power0, Power3 } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);


function Home() {
    useEffect(() => {
        var clutter = ""
          document.querySelector(".topHometxt")
          .textContent.split("")
          .forEach(function(e){
            if (e === " "){ clutter+=`<span>&nbsp;</span>`}
            else clutter+=`<span>${e}</span>`
          })
          document.querySelector(".topHometxt").innerHTML=clutter;
          gsap.registerPlugin(ScrollTrigger);
          gsap.set(".topHometxt span",{opacity:0})
          gsap.to(".topHometxt span",{
            opacity:1,
            ease:Power3,
            stagger:0.1,
            scrollTrigger:{
                trigger:".textpara",
                start:"top -19%",
                end:"bottom -21%",
                // markers:true,
                // pin:true,
                scrub:3
            }
        })
        })
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(".middleMarq", {scale:13})
        gsap.set(".videodiv",{"--clip":"100%"})
        var tl=gsap.timeline({
            scrollTrigger:{
                trigger:".home",
                start:"top top",
                end:"bottom top",
                // markers:true,
                // pin:true,
                scrub:3
            }
        })
        tl.to(".videodiv",{
            "--clip":"02%",
            // opacity:0,
            ease:Power3,
            // stagger:10,
        },"a")
        tl.to(".videodiv",{
            opacity:0,
            duration:0.03
            // stagger:6,
        },"b")
        .to(".middleMarq",{
            scale:1,
            ease:Power3,
        },"a","b","c")
        .to(".lft",{
          xPercent:10,
          ease:Power3,
          stagger:0.03
        },"c")
        .to(".rght",{
          xPercent:-10,
          ease:Power3,
          stagger:0.03
        },"c")
        
    })
    
  return (
        <div data-color="black" data-scroll data-scroll-section className='section h-[200vh] relative '>
            <div className='h-screen sticky top-0 left-0 overflow-hidden'>
                <div className='home h-screen w-full pt-16 pb-10 relative text-white'>
                        <div style={{"--clip":"100%","clip-path": "circle(var(--clip) at 50% 50%)"}} className='videodiv absolute top-0 left-0 w-full h-screen bg-black overflow-hidden z-[1]'>
                            <video autoPlay loop muted className='h-screen lg:w-[100vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover ' src={main_vid}></video>
                        </div>
                        <div className='h-full w-full'>
                            <div className="textpara h-1/4 w-full font-[Satoshi_Variable_Bold] flex justify-center items-center  text-center text-[24px]  md:text-[27px] leading-10 text-white">
                                <h1 className='topHometxt'>
                                We craft healthcare technology
                                that is more human: 
                                </h1>
                            </div>
                            <div className="middleMarq min-w-full h-[61%] scale-[1.98] sm:scale-[1] font-['PP_Neue_Machina_Inktrap_Medium'] flex justify-center items-center">
                                <div className='w-full overflow-hidden text-[5.8vw] leading-[5.8vw] sm:text-[89px] sm:leading-[89px]'>
                                    <div className="row1 lft -translate-x-[200px] sm:-translate-x-[500px] flex gap-3 md:gap-4 lg:gap-7">
                                        <div className='flex justify-center items-center  gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                useful
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                intuitive
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                useful
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row2 rght -translate-x-[100px] sm:-translate-x-[197px] flex gap-3 md:gap-4 lg:gap-7">
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                useful
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                useful
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317e_Ellipse%20845-7.png" alt="" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row3 lft -translate-x-[200px] sm:-translate-x-[450px] flex gap-3 md:gap-4 lg:gap-7">
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                useful
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                                empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            intuitive
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row4 rght -translate-x-[90px] sm:-translate-x-[150px] flex gap-3 md:gap-4 lg:gap-7">
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            intuitive
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            useful
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center gap-3 md:gap-4 lg:gap-7'>
                                            <h1 className='text-white font-medium'>
                                            empathetic
                                            </h1>
                                            <div className='rounded-full w-[4vw] h-[4vw] sm:w-[44px] sm:h-[44px] md:mb-2'>
                                                <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lastHometxt h-[15%]  px-5 md:px-7 lg:px-14 text-white font-medium flex items-end">
                                <h3 className='z-[3]'>
                                    We build big ideas. <br />
                                    Software. Apps. Tools. <br />
                                    For real people. Real lives.
                                </h3>
                            </div>
                        </div>
                </div>
            </div>
        </div>
  )
}

export default Home