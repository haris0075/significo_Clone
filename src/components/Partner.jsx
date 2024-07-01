import { useGSAP } from '@gsap/react'
import gsap, { Elastic, Power4 } from 'gsap'
import React from 'react'

function Partner() {

    useGSAP(()=>{
        let slide_box = gsap.utils.toArray(".slide")
        let t1= gsap.timeline({
            scrollTrigger:{
                trigger:".maincont",
                start:"top top",
                end:"bottom 70%",
                scrub:2.5,
                // markers:true
            }
        })
        t1.to(slide_box,{
            xPercent:-100*(slide_box.length-1),
            ease:Power4,
        },"a")
        .to(".picright",{
            right:"-290px",
            ease:Power4,
        },"a")
        .to(".picleft",{
            x:"-290px",
            ease:Power4,
        },"a")
        .to(".picrights3",{
            x:"70px",
            ease:Power4,
        },"a")
        .to(".piclefts3",{
            x:"-190px",
            ease:Power4,
        },"a")
        .to(".picrights4",{
            x:"50px",
            ease:Power4,
        },"a")
        gsap.to(".picopcont",{
            opacity:0,
            ease:Power4,
            scrollTrigger:{
                trigger:".maincont",
                start:"top -390%",
                end:"bottom 30%",
                scrub:2.5,
                // markers:true
            }
        },)

    })
  return (
    <div data-color="#EF9D71" data-scroll data-scroll-section className='section maincont w-full h-[450vh] relative'>
        <div className=' sticky -top-4 left-0 h-[140vh] overflow-hidden'>
            <div className=" main w-fit h-screen pt-[10vh] flex flex-row gap-2  shrink-0 relative">
                <div className="slide slide1 flex justify-center items-center h-full w-[90%] flex-shrink-0  relative mr-32">
                    <div className='w-fit h-fit  font-["PP_Neue_Machina_Inktrap_Medium"] text-[8vw] leading-[9.2vw] font-thin selection:text-white'>
                        <h1>
                            Real Talk, <br />
                            Real Impact
                        </h1>
                    </div>
                    <div className='picright w-[35vw] sm:w-[28vw] md:w-[20vw] absolute -right-[28.8vw] sm:-right-28 lg:-right-40 top-3/4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden'>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ed8426a9be08870acb09_1.jpg" alt="" />
                    </div>
                </div>
                <div className="slide slide2 flex justify-center items-center h-full w-[90%] flex-shrink-0  relative ">
                    <div className='font-["PP_Neue_Machina_Inktrap_Medium"] flex flex-col justify-center items-center z-[2] mix-blend-multiply'>
                        <h1 className='text-[18vw] leading-[18vw] sm:text-[10vw] sm:leading-[10vw]'>
                            20.4M
                        </h1>
                        <h1 className='sm:text-[2.4vw] text-[4vw]'>
                            Real people — real lives — we have <br /> built products and solutions for.
                        </h1>
                    </div>
                    <div className='absolute top-14 left-0 w-1/2 sm:w-1/3 md:w-[200px] lg:w-[310px] sm:text-left text-[3.1vw] sm:text-[1.55vw] text-justify'>
                        <h1>
                            We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.
                        </h1>
                    </div>
                    <div className='picleft w-[20vw] sm:w-[12vw] rounded-full overflow-hidden absolute bottom-10 left-[17vw] sm:left-0 '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edafe67e88c12db2d78b_2.jpg" alt="" />
                    </div>
                    <div className='picleft w-[20vw] sm:w-[14vw]  rounded-full overflow-hidden absolute -top-20 md:-top-20 left-[17vw] md:left-[39%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9edd08cc0ac13ed6995bd_4.jpg" alt="" />
                    </div>
                    <div className='picleft w-[32vw] sm:w-[14vw] md:w-[17vw] lg:w-[15vw]  rounded-full overflow-hidden absolute bottom-24 md:bottom-0 left-[50%] md:left-[39%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee19cb5203ee12c21ba3_3.jpg" alt="" />
                    </div>
                    <div className='picright w-[32vw] sm:w-[14vw] md:w-[17vw]  rounded-full overflow-hidden absolute top-[10%] sm:top-[30%] right-0 z-[20] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ee2e5e80fe8ace7a1ff3_5.jpg" alt="" />
                    </div>


                </div>
                <div className="slide slide3 flex justify-center items-center h-full w-[90%] flex-shrink-0  relative">
                    <div className='font-["PP_Neue_Machina_Inktrap_Medium"] flex flex-col justify-center items-center'>
                        <h1 className='text-[18vw] leading-[18vw] sm:text-[10vw] sm:leading-[10vw]'>
                            49%
                        </h1>
                        <h1 className='sm:text-[2.4vw] text-[4vw]'>
                                Expert Women in Tech.
                        </h1>
                    </div>
                    <div className='absolute top-8 left-0 w-1/2 sm:w-1/3 md:w-[200px] lg:w-[310px] sm:text-left text-[3.1vw] sm:text-[1.55vw] text-justify'>
                        <h1>
                            Our team is global and diverse, because our individual experiences make us stronger.
                        </h1>
                    </div>
                    <div className='piclefts3 w-[30vw] sm:w-[23vw] rounded-full overflow-hidden absolute -top-16 md:-top-24 left-[39%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png" alt="" />
                    </div>
                    <div className='piclefts3 w-[32vw] sm:w-[23vw] rounded-full overflow-hidden absolute top-[55%]  left-[25%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png" alt="" />
                    </div>
                    <div className='picrights3 w-[32vw] sm:w-[24vw]  rounded-full overflow-hidden absolute top-[30%] right-0 '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.png" alt="" />
                    </div>
                </div>
                <div className="slide slide4 flex justify-center items-center h-full w-[90%] flex-shrink-0  relative">
                    <div className='font-["PP_Neue_Machina_Inktrap_Medium"] flex flex-col justify-center items-center text-center w-[60%] md:w-full'>
                        <h1 className='text-[18vw] leading-[18vw] sm:text-[10vw] sm:leading-[10vw]'>
                            13
                        </h1>
                        <h1 className='sm:text-[2.4vw] text-[4vw]'>
                            Nationalities Represented on Our Team.
                        </h1>
                    </div>
                    <div className='picopcont w-[32vw] sm:w-[17vw] md:w-[20vw] xl:w-[29vw] rounded-full overflow-hidden absolute bottom-[4%] lg:bottom-0 xl:-bottom-[35vh] left-[0] sm:left-[20%] lg:left-[5%]'>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef723a7cfee7941b52f3_6.jpg" alt="" />
                    </div>
                    <div className='w-[20vw] sm:w-[14vw]  rounded-full overflow-hidden absolute -top-16 md:-top-28 left-[19%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef82bb0daca6843ce305_7.jpg" alt="" />
                    </div>
                    <div className='picopcont w-[8vw]  lg:w-[15vw] xl:w-[10vw]   rounded-full overflow-hidden absolute bottom-[6%] right-[20%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9ef9463d57ead8406a444_8.jpg" alt="" />
                    </div>
                    <div className='picrights4  w-[32vw] sm:w-[14vw] md:w-[17vw] xl:w-[21vw]  rounded-full overflow-hidden absolute -top-[10%] right-[0%] '>
                        <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65e9efa87b272d53118849fa_9.jpg" alt="" />
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner