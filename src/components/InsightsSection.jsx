import { useGSAP } from '@gsap/react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'

function InsightsSection() {
    const [fontSize, setFontSize] = useState('16px');
    const parentRef = useRef(null);
    const box = useRef(null);


    useGSAP(()=>{
        // gsap.killTweensOf(".boxanim");
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            // mobile setup code here...
            gsap.set(".boxanim",{y:"240px"})
            gsap.to(".boxanim",{
                y:0,
                duration:3,
                ease:Power3.easeInOut,
                scrollTrigger:{
                    trigger:box.current,
                    start:"top 120%",
                    end:"bottom bottom",
                    // markers:true,
                    scrub:true
                }
            })
        });
    })
  
    useEffect(() => {
      const handleResize = () => {
        if (parentRef.current) {
          const parentWidth = parentRef.current.offsetWidth;
          const newFontSize = `${parentWidth * 0.08}px`; // Adjust the multiplier as needed
          setFontSize(newFontSize);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Call it initially to set the font size
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div data-color="white" data-scroll data-scroll-section ref={box} className='section maincont min-h-screen py-48 flex flex-col lg:flex-row gap-5 px-5 md:px-7 lg:px-14'>
        <div className="left sm:h-full flex flex-col justify-between w-full lg:w-1/3 lg:h-[100vh]">
            <h1 className='font-["Satoshi_Variable_Bold"] text-[5vw] leading-[5.5vw] sm:text-[2.3vw] sm:leading-[2.7vw] md:text-[1.3vw] md:leading-[1.7vw] xl:text-[1.9vw] xl:leading-[2.2vw] font-medium md:font-semibold order-2 md:order-1'>
                Stay up-to-date on the <br />
                latest healthcare <br />
                innovations and thought <br />
                leadership. <br />
            </h1>
            <h1 className="font-['PP_Neue_Machina_Inktrap_Medium'] text-[12vw] min-[400px]:text-[9vw] min-[400px]:leading-[9vw] sm:text-[6vw] sm:leading-[6vw] md:text-[4vw] md:leading-[4vw] xl:text-[4.5vw] xl:leading-[5.2vw] order-1 md:order-2">
                Explore <br />
                Our Insights <br />
            </h1>
        </div>
        <div className=" right lg:w-[58%] flex flex-col justify-center items-center min-[600px]:flex-row gap-5 md:gap-10 xl:gap-20">
            <div ref={parentRef} className='.subright border border-black h-[110vh] w-full min-[400px]:w-[90%] min-[500px]:w-[80%] sm:w-1/2 max-w-[350px] px-5 py-5 pb-20 flex justify-between items-center flex-col relative left-0 rounded-full gap-7 lg:-rotate-[20deg]'>
                <div className='relative w-full' style={{paddingBottom:"100%"}}>
                    <div className=' w-full absolute top-0 flex justify-center ' style={{paddingBottom:"100%"}}>
                        <div className="subrightimg absolute rounded-full bg-cover  overflow-hidden h-full w-full" >
                            <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp" alt=""  className='h-full w-full object-cover'/>
                            </div>
                    </div>
                </div>
                <div className="textbox font-['PP_Neue_Machina_Inktrap_Medium'] text-center font-semibold" style={{fontSize}}>
                    <h1>
                        Digital Therapeutics <br />
                        Decoded: A Guide to <br />
                        Understanding DTx  <br />
                        and Why They're <br />
                        Worth Your Attention <br />
                    </h1>
                </div>
            </div>
            <div ref={parentRef} className='boxanim .subright border border-black h-[110vh] w-full min-[400px]:w-[90%] min-[500px]:w-[80%] sm:w-1/2 max-w-[350px] px-7 pt-24 py-7 flex justify-start items-center flex-col relative left-0 rounded-full gap-7 lg:-rotate-[20deg]'>
                <div className='absolute bottom-5 w-[90%] order-2' style={{paddingBottom:"100%"}}>
                    <div className=' w-full absolute bottom-0 flex justify-center ' style={{paddingBottom:"100%"}}>
                        <div className="subrightimg absolute rounded-full bg-cover  overflow-hidden h-full w-full" >
                            <img src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.png" alt=""  className='h-full w-full object-cover'/>
                            </div>
                    </div>
                </div>
                <div className="textbox font-['PP_Neue_Machina_Inktrap_Medium'] text-center gap-6 flex flex-col font-semibold " style={{fontSize:fontSize}}>
                    <h1>
                        5 Key Takeaways  <br />
                        from the Reuters  <br />
                        Digital Health   <br />
                        ‘24 Summit  <br />
                    </h1>
                    <h1 className='text-[59%] text-justify'>
                        The Reuters Digital Health 24 event in San 
                        Diego brought together over 300 digital  
                        leaders from across healthcare to discuss the 
                        future of digitally enabled care.
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsightsSection