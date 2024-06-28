import gsap from "gsap";
import React from "react";
import  { useEffect, useRef, useState } from 'react'


function TeamComp({no,name,designation,img}) {
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const bgRef = useRef(null);


    useEffect(() => {
      // Initially hide the image and the background div
      gsap.set(imageRef.current, { autoAlpha: 0, scale:0.2 });
      gsap.set(bgRef.current, { autoAlpha: 0 });
    }, []);

    const handleMouseEnter = (e) => {
      const image = imageRef.current;
      const bg = bgRef.current;
      const rect = containerRef.current.getBoundingClientRect();
      const direction = getDirection(rect, e);
  
      // Set initial position of the background div based on mouse enter direction
      gsap.set(bg, {
        x: direction.x,
        y: direction.y,
        autoAlpha: 1
      });
  
      // Animate the background div to fill the container
      gsap.to(bg, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: 'power2.out'
    });
    gsap.to(image, {
      scale:1,
      autoAlpha: 1, // Make the image visible
      duration: 0.3,
    });
    };

    const handleMouseMove = (e) => {
      const image = imageRef.current;
      const rect = containerRef.current.getBoundingClientRect();
      gsap.to(image, {
        x: gsap.utils.mapRange(0,window.innerWidth,-200,200,e.clientX),
        y: e.clientY - rect.top ,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      const image = imageRef.current;
      const bg = bgRef.current;
  
      gsap.to(image, {
        scale:0.8,
        autoAlpha: 0, // Hide the image
        duration: 0.3,
      });
  
      gsap.to(bg, {
        autoAlpha: 0, // Hide the background div
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    const getDirection = (rect, e) => {
      const { width, height, top, left } = rect;
      const x = (e.clientX - left - width / 2) * (width > height ? (height / width) : 1);
      const y = (e.clientY - top - height / 2) * (height > width ? (width / height) : 1);
      const direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
  
      switch(direction) {
        case 0: return { x: 0, y: -height }; // from top
        case 1: return { x: width, y: 0 };  // from right
        case 2: return { x: 0, y: height }; // from bottom
        case 3: return { x: -width, y: 0 }; // from left
        default: return { x: 0, y: 0 };
      }
    };





  return (
    <div
      ref={containerRef}
      className="border-b boxteam border-black h-[22vh] relative group"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="subboxteam relative overflow-hidden flex justify-between items-center h-full w-full z-[2] py-12 px-2 sm:px-6">
        <div className="wrapper sm:flex justify-between items-center w-full z-30">
          <div className="leftteam flex gap-[1.5vw] sm:justify-center items-center">
            <h1 className="hidden sm:block text-gray-400 text-[30px]">{no}</h1>
            <h1 className="text-[7vw] sm:text-[40px] leading-8 text-[#2544EE] sm:text-black group-hover:text-white ">
              {name}
            </h1>
          </div>
          <div className="rightteam text-[24px] font-[Satoshi_Variable_Bold] group-hover:text-white">
            <h1>{designation}</h1>
          </div>
        </div>
        <div className="imgte h-full w-[13em] flex items-center justify-center sm:hidden">
          <img
            src={img}
            alt=""
          />
        </div>
        <div
          ref={bgRef}
          className="bgrnd absolute inset-0 opacity-0 bg-blue-500 z-[1]"
        ></div>
      </div>
      <div
        ref={imageRef}
        className="imghov h-full w-[22vw] flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-[3]"
      >
        <img
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default TeamComp;
