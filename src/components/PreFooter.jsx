import { useGSAP } from '@gsap/react'
import gsap, { Linear, Power4 } from 'gsap'
import React from 'react'

function PreFooter() {
    useGSAP(()=>{
        gsap.to(".rotimg",{
            rotate:360,
            duration:10,
            // yoyo:true,
            // transformOrigin: "center",
            repeat:-1,
            ease:'none',
            
        })
    })
  return (
    <div data-color="#F5F19C" data-scroll data-scroll-section className='bg-[#F5F19C] text-black section py-14 px-5 md:px-7 lg:px-14'>
        <div className='w-full flex flex-col lg:flex-row justify-between'>
            <div className="headPF font-['PP_Neue_Machina_Inktrap_Medium'] text-[9.7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.7vw] xl:text-[3.3vw]">
                <h1>
                    Significo.
                </h1>
            </div>
            <div className="headPF mt-7 font-['Satoshi_Variable_Bold'] font-medium text-[4.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] xl:text-[1.3vw] flex flex-col lg:flex-row lg:items-center lg:justify-end lg:gap-10 lg:w-2/3">
                <div className='py-5'>    
                    <div>
                        <h1>
                            Find out how Significo’s healthcare
                        </h1>
                    </div>
                    <div>
                        <h1>
                            technology expertise can take your digital
                        </h1>
                    </div>
                    <div>
                        <h1>
                            experience to the next level.
                        </h1>
                    </div>
                </div>
                <div className='items-end justify-end py-7 px-5 hidden min-[490px]:flex'>
                    <div className='relative'>
                        <div className='relative border border-black w-32 h-32 flex justify-center items-center rounded-full z-30'>
                            <svg width="40%" height="40%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" stroke-width="2"></path>
                                <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" stroke-width="2"></path>
                                <path d="M16 0.703125L16 37.2746" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                            <div className='rotimg absolute top-1/2 left-1/2 z-[10] w-[150px] h-[150px]  -translate-x-1/2 -translate-y-1/2'>
                                <img className='h-full w-full' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317c_ScrollUp.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-black text-[#F5F19C] text-center py-2 rounded-md lg:w-1/12'>
            <button>
                Let's Go
            </button>
        </div>
    </div>
  )
}

export default PreFooter