import { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useLocomotiveScroll = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
        gsap.registerPlugin(ScrollTrigger);

        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
        
        const locoScroll = new LocomotiveScroll({
          el: document.querySelector("#main"),
          smooth: true
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);
        
        // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("#main", {
          scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
          }, // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
          },
          // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
          pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });
        
        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        
        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    }
  }, []);

  return { wrapperRef };
};

export default useLocomotiveScroll;













// import { useRef, useEffect } from 'react';

// const useLocomotiveScroll = () => {
//   const wrapperRef = useRef(null);
//           gsap.registerPlugin(ScrollTrigger);


//   useEffect(() => {
//     const LocomotiveScroll = window.LocomotiveScroll;
//     const gsap = window.gsap;
//     const ScrollTrigger = window.ScrollTrigger;

//     if (wrapperRef.current) {
//       const scroll = new LocomotiveScroll({
//         el: wrapperRef.current,
//         smooth: true,
//       });

//       scroll.on('scroll', ScrollTrigger.update);

//       ScrollTrigger.scrollerProxy(wrapperRef.current, {
//         scrollTop(value) {
//           return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: wrapperRef.current.style.transform ? 'transform' : 'fixed',
//       });

//       ScrollTrigger.addEventListener('refresh', () => scroll.update());
//       ScrollTrigger.refresh();

//       return () => {
//         scroll.destroy();
//         ScrollTrigger.removeEventListener('refresh', () => scroll.update());
//       };
//     }
//   }, []);

//   return { wrapperRef };
// };

// export default useLocomotiveScroll;




