import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

function Footer() {
    
    useEffect(() => {
        var clutter = ""
          document.querySelector(".txttitle")
          .textContent.split("")
          .forEach(function(e){
            if (e === " "){ clutter+=`<span>&nbsp;</span>`}
            else clutter+=`<span>${e}</span>`
          })
          document.querySelector(".txttitle").innerHTML=clutter;
          gsap.registerPlugin(ScrollTrigger);
        //   gsap.set(".txttitle ",{y:"100px"})
          let t1 = gsap.timeline({scrollTrigger:{
            trigger:".frstcontfoot",
            start:"top 50%",
            end:"bottom 60%",
            // markers:true,
            // pin:true,
            scrub:3
        }})
        // gsap.set(".txttitle",{y:"50px"})
        gsap.set(".txttitle span",{opacity:0,y:"200px"})
        t1.to(".txttitle span ",{
            opacity:1,
            ease:Power3,
            stagger:0.1,
        })
    
        })
  return (
    <div data-color="black" data-scroll data-scroll-section className=" py-10 lg:pt-16 px-5 md:px-7 lg:px-14 bg-black text-white font-['PP_Neue_Machina_Inktrap_Medium'] footcont">
        <div className='frstcontfoot flex flex-col gap-4'>
            <div className='flex flex-col lg:hidden'>
                <div className="emailSec font-['PP_Neue_Machina_Inktrap_Medium'] text-[4.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw]">
                    <div>
                        <h1>
                            Join our mailing list for
                        </h1>
                        <h1>
                            the latest updates.
                        </h1>
                    </div>
                </div>
                <div className="w-full font-['PP_Neue_Machina_Inktrap_Medium'] flex flex-col sm:flex-row my-7 gap-4 text-[4.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.4vw]">
                        <div className='w-full sm:w-10/12 rounded-md'>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email Address...' className='w-full py-3 px-6'/>
                        </div>
                        <div className=' flex bg-[#F5F19C] justify-center items-center w-full sm:w-4/12 text-black font-medium py-3'>
                            <button>
                                Subscribe
                            </button>
                        </div>
                </div>
            </div>
            <div className='flex justify-between items-start'>
                <div className="leftFT">
                    {["home","Solutions","About","team"].map((val,index)=>{
                        return(
                            <div key={index} className='text-[5.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] capitalize'>{val}</div>
                        )
                    })}
                </div>
                <div className='hidden flex-col lg:flex w-1/2'>
                    <div className="emailSec font-['PP_Neue_Machina_Inktrap_Medium'] text-[4.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw]">
                        <div>
                            <h1>
                                Join our mailing list for
                            </h1>
                            <h1>
                                the latest updates.
                            </h1>
                        </div>
                    </div>
                    <div className="w-full font-['PP_Neue_Machina_Inktrap_Medium'] flex flex-col sm:flex-row my-7 gap-4 text-[4.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.4vw]">
                            <div className='w-full sm:w-10/12 rounded-md'>
                                <input type="email" name="email" id="email" placeholder='Enter Your Email Address...' className='w-full py-3 px-2'/>
                            </div>
                            <div className=' flex bg-[#F5F19C] justify-center items-center w-full sm:w-4/12 text-black font-medium py-3'>
                                <button>
                                    Subscribe
                                </button>
                            </div>
                    </div>
                </div>
                <div className="rightFT">
                    {["insight","Newsrooms","resorces","Contact","Careers"].map((val,index)=>{
                        return(
                            <div key={index} className='text-[5.3vw] min-[490px]:text-[3.7vw] md:text-[2.3vw] lg:text-[1.7vw] capitalize'>{val}</div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="midFT flex justify-center items-end text-[19vw] leading-3 h-40 overflow-hidden">
            <h1 className='txttitle'>
                Significo
            </h1>
        </div>
        <div className='flex flex-col-reverse gap-7 justify-between lg:flex-row pt-14 border-t border-white'>
            <div className="left flex flex-col lg:flex-row gap-5 lg:w-1/4">
                <h1 className='text-[15px] underline underline-offset-4 hover:text-[#F5F19C] cursor-pointer w-fit'>
                    Privacy Policy
                </h1>
                <h1 className='text-[15px] underline underline-offset-4 hover:text-[#F5F19C] cursor-pointer w-fit'>
                    Terms of Use
                </h1>
            </div>
            <div className="middle lg:w-2/4 flex justify-start lg:justify-center items-center">
                <h1>
                    © 2024 Significo. All rights reserved.
                </h1>
            </div>
            <div className="left flex justify-between items-center w-full min-[500px]:w-1/2 md:w-3/5 lg:w-1/5 ">
                <div className='w-1/12 hover:text-[#F5F19C] cursor-pointer'>
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4531 3.03711H8.45312C5.6917 3.03711 3.45312 5.27569 3.45312 8.03711V16.0371C3.45312 18.7985 5.6917 21.0371 8.45312 21.0371H16.4531C19.2145 21.0371 21.4531 18.7985 21.4531 16.0371V8.03711C21.4531 5.27569 19.2145 3.03711 16.4531 3.03711ZM19.7031 16.0371C19.6976 17.8297 18.2457 19.2816 16.4531 19.2871H8.45312C6.66048 19.2816 5.20861 17.8297 5.20312 16.0371V8.03711C5.20861 6.24446 6.66048 4.7926 8.45312 4.78711H16.4531C18.2457 4.7926 19.6976 6.24446 19.7031 8.03711V16.0371ZM17.2031 8.28711C17.7554 8.28711 18.2031 7.83939 18.2031 7.28711C18.2031 6.73483 17.7554 6.28711 17.2031 6.28711C16.6508 6.28711 16.2031 6.73483 16.2031 7.28711C16.2031 7.83939 16.6508 8.28711 17.2031 8.28711ZM12.4531 7.53711C9.96784 7.53711 7.95312 9.55183 7.95312 12.0371C7.95312 14.5224 9.96784 16.5371 12.4531 16.5371C14.9384 16.5371 16.9531 14.5224 16.9531 12.0371C16.9558 10.8428 16.4825 9.69668 15.638 8.85219C14.7935 8.0077 13.6474 7.53445 12.4531 7.53711ZM9.70312 12.0371C9.70312 13.5559 10.9343 14.7871 12.4531 14.7871C13.9719 14.7871 15.2031 13.5559 15.2031 12.0371C15.2031 10.5183 13.9719 9.28711 12.4531 9.28711C10.9343 9.28711 9.70312 10.5183 9.70312 12.0371Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className='w-1/12 hover:text-[#F5F19C] cursor-pointer'>
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.95312 3.2793C4.1247 3.2793 3.45312 3.95087 3.45312 4.7793V19.7793C3.45312 20.6077 4.1247 21.2793 4.95312 21.2793H19.9531C20.7815 21.2793 21.4531 20.6077 21.4531 19.7793V4.7793C21.4531 3.95087 20.7815 3.2793 19.9531 3.2793H4.95312ZM8.97388 7.28202C8.97951 8.23827 8.26373 8.82749 7.41435 8.82327C6.61419 8.81905 5.9167 8.18202 5.92092 7.28343C5.92514 6.43827 6.5931 5.75905 7.46076 5.77874C8.34107 5.79843 8.97951 6.4439 8.97388 7.28202ZM12.7328 10.0411H10.2128H10.2114V18.6009H12.8748V18.4012C12.8748 18.0213 12.8745 17.6413 12.8742 17.2612C12.8734 16.2474 12.8725 15.2325 12.8777 14.219C12.8791 13.9729 12.8903 13.717 12.9536 13.4821C13.1912 12.6046 13.9802 12.0379 14.8605 12.1772C15.4258 12.2657 15.7998 12.5934 15.9573 13.1264C16.0544 13.4596 16.098 13.8182 16.1022 14.1656C16.1136 15.2132 16.112 16.2608 16.1104 17.3085C16.1098 17.6783 16.1092 18.0483 16.1092 18.4181V18.5995H18.7811V18.3942C18.7811 17.9422 18.7809 17.4903 18.7806 17.0384C18.7801 15.9089 18.7795 14.7794 18.7825 13.6495C18.7839 13.139 18.7291 12.6356 18.6039 12.142C18.4169 11.4079 18.0302 10.8004 17.4016 10.3617C16.9558 10.0495 16.4664 9.8484 15.9194 9.8259C15.8571 9.82331 15.7943 9.81992 15.7312 9.81651C15.4515 9.80139 15.1672 9.78603 14.8998 9.83996C14.1348 9.99324 13.4627 10.3434 12.955 10.9607C12.896 11.0315 12.8383 11.1034 12.7522 11.2107L12.7328 11.235V10.0411ZM6.13477 18.6037H8.78555V10.0466H6.13477V18.6037Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className='w-1/12 hover:text-[#F5F19C] cursor-pointer'>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.88 3.099C20.147 2.366 19.265 2 18.233 2H5.746C4.714 2 3.832 2.366 3.099 3.099C2.366 3.832 2 4.714 2 5.746V18.233C2 19.265 2.366 20.147 3.099 20.88C3.832 21.613 4.714 21.979 5.746 21.979H8.66C8.85 21.979 8.993 21.972 9.089 21.959C9.20069 21.9366 9.30151 21.877 9.375 21.79C9.47 21.69 9.518 21.545 9.518 21.355L9.511 20.47C9.507 19.906 9.505 19.46 9.505 19.13L9.205 19.182C9.015 19.217 8.775 19.232 8.484 19.228C8.18069 19.2224 7.87834 19.192 7.58 19.137C7.2624 19.0784 6.96343 18.9446 6.708 18.747C6.44049 18.5446 6.24097 18.2656 6.136 17.947L6.006 17.647C5.89643 17.4104 5.75877 17.1878 5.596 16.984C5.41 16.741 5.221 16.577 5.03 16.49L4.94 16.425C4.87724 16.3801 4.82016 16.3277 4.77 16.269C4.72209 16.2145 4.68265 16.1532 4.653 16.087C4.627 16.026 4.649 15.976 4.718 15.937C4.788 15.897 4.913 15.878 5.096 15.878L5.356 15.918C5.529 15.952 5.744 16.056 5.999 16.229C6.25706 16.4049 6.47263 16.6362 6.63 16.906C6.83 17.261 7.07 17.532 7.352 17.719C7.634 17.905 7.918 17.999 8.204 17.999C8.49 17.999 8.737 17.977 8.946 17.934C9.14811 17.8922 9.34451 17.8264 9.531 17.738C9.609 17.158 9.821 16.71 10.168 16.398C9.71838 16.3539 9.27276 16.2757 8.835 16.164C8.40779 16.0466 7.99694 15.8763 7.612 15.657C7.20924 15.4377 6.8535 15.1414 6.565 14.785C6.288 14.438 6.06 13.983 5.882 13.42C5.705 12.856 5.616 12.205 5.616 11.468C5.616 10.419 5.958 9.526 6.643 8.788C6.323 8 6.353 7.115 6.734 6.136C6.986 6.057 7.359 6.116 7.853 6.311C8.347 6.506 8.709 6.673 8.939 6.811C9.169 6.951 9.353 7.068 9.492 7.163C10.305 6.93675 11.1451 6.82303 11.989 6.825C12.848 6.825 13.68 6.938 14.487 7.163L14.981 6.851C15.361 6.62285 15.7618 6.43133 16.178 6.279C16.638 6.105 16.988 6.058 17.232 6.136C17.622 7.116 17.656 8 17.335 8.789C18.02 9.526 18.363 10.419 18.363 11.469C18.363 12.206 18.274 12.859 18.096 13.426C17.919 13.994 17.689 14.449 17.407 14.792C17.1134 15.1439 16.7562 15.4373 16.354 15.657C15.934 15.891 15.526 16.06 15.131 16.164C14.6933 16.2761 14.2477 16.3546 13.798 16.399C14.248 16.789 14.474 17.404 14.474 18.245V21.355C14.474 21.502 14.495 21.621 14.539 21.712C14.5592 21.7558 14.5881 21.7952 14.6238 21.8276C14.6595 21.8601 14.7014 21.8851 14.747 21.901C14.843 21.935 14.927 21.957 15.001 21.965C15.075 21.975 15.181 21.978 15.319 21.978H18.233C19.265 21.978 20.147 21.612 20.88 20.879C21.612 20.147 21.979 19.264 21.979 18.232V5.746C21.979 4.714 21.613 3.832 20.88 3.099Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className='w-1/12 hover:text-[#F5F19C] cursor-pointer'>
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0445 7.24012C21.9306 6.81752 21.708 6.43212 21.3989 6.12228C21.0897 5.81245 20.7048 5.58898 20.2825 5.47412C18.7165 5.04412 12.4515 5.03712 12.4515 5.03712C12.4515 5.03712 6.1875 5.03012 4.6205 5.44112C4.19843 5.56126 3.81432 5.78789 3.50507 6.09925C3.19581 6.41061 2.97179 6.79624 2.8545 7.21912C2.4415 8.78512 2.4375 12.0331 2.4375 12.0331C2.4375 12.0331 2.4335 15.2971 2.8435 16.8471C3.0735 17.7041 3.7485 18.3811 4.6065 18.6121C6.1885 19.0421 12.4365 19.0491 12.4365 19.0491C12.4365 19.0491 18.7015 19.0561 20.2675 18.6461C20.69 18.5315 21.0752 18.3085 21.3852 17.9993C21.6951 17.6901 21.9189 17.3054 22.0345 16.8831C22.4485 15.3181 22.4515 12.0711 22.4515 12.0711C22.4515 12.0711 22.4715 8.80612 22.0445 7.24012ZM10.4475 15.0421L10.4525 9.04212L15.6595 12.0471L10.4475 15.0421Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className='w-1/12 hover:text-[#F5F19C] cursor-pointer'>
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4512 12.3414C22.4512 6.78478 17.9741 2.28027 12.4512 2.28027C6.92832 2.28027 2.45117 6.78478 2.45117 12.3414C2.45117 17.3631 6.10801 21.5255 10.8887 22.2803V15.2497H8.34961V12.3414H10.8887V10.1248C10.8887 7.60323 12.3817 6.21039 14.6658 6.21039C15.76 6.21039 16.9043 6.4069 16.9043 6.4069V8.88288H15.6434C14.4012 8.88288 14.0137 9.65849 14.0137 10.4542V12.3414H16.7871L16.3438 15.2497H14.0137V22.2803C18.7944 21.5255 22.4512 17.3633 22.4512 12.3414Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className='w-1/12 hover:text-[#F5F19C] cursor-pointer'>
                    <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6292 4.28027H20.3893L14.3592 11.0577L21.4531 20.2803H15.8987L11.5482 14.6869L6.57035 20.2803H3.80856L10.2583 13.0311L3.45312 4.28027H9.14857L13.081 9.39289L17.6292 4.28027ZM16.6604 18.6557H18.1899L8.31753 5.81955H6.67632L16.6604 18.6557Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer