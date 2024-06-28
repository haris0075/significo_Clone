import React, { useState } from 'react';

const Slide = () => {
  const slides = [
    { id: 1, heading:"A Digital Platform to <br> Unify Employee Health <br/> And Wellbeing Tools" ,paratxt:"Significo created a unified, user-centric platform that streamlines health management and enhances employee well-being.", image: "url('https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6642796850b7b15735eb52fd_Untitled%20design-9.png')" },
    { id: 2, heading:"Stop Smoking App For A <br> Major Insurance Provider" ,paratxt:"Significo built an app for a major insurance company designed to help insured users in quitting smoking.", image: "url('https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6644f38f222464945e3f8a39_Untitled%20design-11.png')" },
    { id: 3, 
      heading:"Digital Engagement <br> Platform for Mid-Sized <br> Health Insurance <br> Company" ,
      paratxt:"Significo helped an insurance partner to offer a personalized experience and boost engagement with their digital platform by integrating personalized health recommendation content.", 
      image: "url('https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6644f414a0342488fb689d24_Untitled%20design-12.png')" },
    { id: 4, 
      heading:"A Smart Health And <br> Wellness Coach For A <br> Large Insurance Company" ,
      paratxt:"Significo developed a digital personal coach providing tailored fitness, nutrition, and relaxation advice, all based on scientific principles to enhance health and wellbeing.", 
      image: "url('https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6644f35fe5aead2d9d274917_Untitled%20design-10.png')" },
    
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div data-color="white" data-scroll data-scroll-section className="section relative w-full mx-auto min-h-screen px-5 md:px-7 lg:px-14">
      {/* Slides */}
      <div className=" relative overflow-hidden h-[91.5vh] w-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute border border-black h-[80vh] overflow-hidden w-full flex flex-col md:flex-row justify-between items-center py-4 sm:py-8 px-5 md:px-7 lg:px-14 gap-6 md:gap-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="upper w-full md:w-1/2 pr-[7vw] flex flex-col gap-4 sm:gap-[2vw]">
              <h1 dangerouslySetInnerHTML={{ __html: slide.heading }} className='font-["PP_Neue_Machina_Inktrap_Medium"] text-[4.2vw] leading-[5vw] md:text-[2.8vw] md:leading-[3.4vw]'>
              </h1>
              <p className="text-[3.2vw] sm:text-[15px] md:text-[1.4vw] font-[Satoshi_Variable_Bold]">
                  {slide.paratxt}
              </p>
              <button className='px-4 py-2 bg-[#FF6014] text-[22px] w-[180px] font-medium rounded-md'>
                Click Me
              </button>
            </div>
            <div className="lower flex flex-col gap-2 h-full justify-center items-center md:w-1/2">
                <div className={`img overflow-hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-cover`}style={{ backgroundImage: slide.image }}>
                </div>
            </div>
          </div>
        ))}
        {/* Navigation */}
        <div className="absolute bottom-0 border border-black sm:border-t-0 w-full h-14 sm:h-20 m-auto flex">
            <div className="left w-1/5  hover:bg-[#eaeaea] flex justify-center items-center"
            onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[20%]" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
            </div>
            <div className="middle border-x border-black w-3/5 relative flex justify-center items-center">
              <div className="absolute top-1/2 w-full flex justify-center items-center">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`mx-2 w-4 h-4 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="right w-1/5 hover:bg-[#eaeaea] flex justify-center items-center"
            onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20%]" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>          
            </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
