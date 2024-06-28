import { useEffect, useRef, useState } from "react";
import "./App.css";
import { About, ButtonAnim, CaseStudy, Footer, Home, InsightsSection, Navbar, Partner, PreFooter, Slide, Team } from "./components";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function App() {
  const wrapperRef = useRef(null);
  const [bgcolor, setbgcolor] = useState("black")

  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll({
  //           el: document.querySelector('[data-scroll-container]'),
  //           smooth: true,
  //           multiplier:1,
  //       });
  //     }
  //   )()
  // }, [])
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    console.log(document.querySelectorAll(".section"));
    document.querySelectorAll(".section")
    .forEach(function(e){
      ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        onEnter:function() {
          wrapperRef.current.setAttribute("theme",e.dataset.color)
          setbgcolor(e.dataset.color)
          // console.log('Wrapper div attributes:', wrapperRef.current.attributes);
        },
        onEnterBack:function(){
          wrapperRef.current.setAttribute("theme",e.dataset.color)
          setbgcolor(e.dataset.color)
        }
      })
    })
  })
  return (
    <>
      <div ref={wrapperRef} data-scroll-container id="main" theme="white"  className="relative w-full font-[Satoshi_Variable_Bold]">
        <Navbar bgcolor={bgcolor}/>
        <Home/>
        {/* <ButtonAnim/> */}
        <About/>
        <Partner/>
        <Team/>
        <Slide/>
        <CaseStudy/>
        <InsightsSection/>
        <PreFooter/> 
        <Footer/>
      </div>
    </>
  );
}

export default App;
