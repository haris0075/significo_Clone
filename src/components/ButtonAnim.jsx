// src/components/ButtonAnim.js
import React, { useRef } from 'react';
import { gsap } from 'gsap';
// import './ButtonAnim.css';

const ButtonAnim = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const textRef1 = useRef(null);

  const handleMouseEnter = () => {
    let t1 = gsap.timeline()
    t1.fromTo(
      textRef.current,
      { y: '0%', opacity: 1, duration: 0.5, stagger: 0.05 },
      { y: '-100%', opacity: 0 },
    )
    .fromTo(
      textRef1.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.5, stagger: 0.05 },
    );
  };

  const handleMouseLeave = () => {
    // gsap.to(textRef.current, { y: '0%', opacity: 1, duration: 0.5 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden px-6 py-2 bg-blue-500 text-white font-bold rounded"
    >
      <span ref={textRef} className="absolute inset-0 flex items-center justify-center">
        Hover Me
      </span>
      <span ref={textRef1} className="opacity-0">Hover Me</span>
    </button>
  );
};

export default ButtonAnim;
