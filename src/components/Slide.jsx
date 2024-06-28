import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "./slideStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  
  const slides = [
    { id: 1, paratxt:"Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism.",name:"Emek Altun",role:"CEO @ Vitaservices", image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg' },
    { id: 2, paratxt:"Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all of the areas we lack internally. I would personally be lost without this team, their ability to problem solve, their openness to feedback and desire to build the product like it is their own.",name:"Miranda Ernst",role:"Product Manager @ HealthCheck360", image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832e5_MirandaErnst.webp' },
    { id: 3, paratxt:"They tackled the complexities of our requirements with ease, ensuring the final product was not just functional but also fully compliant with relevant regulations. Significo's contribution has fast-tracked our timeline and had a positive ripple effect on HelloTeam's growth and innovation. Their partnership has been fundamental, securing a promising pathway for our future initiatives.",name:"The Team",role:"", image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/6632574997113b038e4c7bdc_image%20368.webp' },
    
    
  ];

  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  
  const handlePrevClick = () => {
    swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiper.slideNext();
  };

  return (
    <div data-color="white" data-scroll data-scroll-section className="h-screen section px-5 md:px-7 lg:px-14">
      <Swiper
        slidesPerView={'auto'}
        onSwiper={(s) => {
          setSwiper(s);}}
        ref={swiperRef}
        centeredSlides={true}
        spaceBetween={295}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination", // Use a valid DOM element here
          type: "bullets",
          clickable: true,
          bulletClass: " bullet",
          bulletActiveClass: "active",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[78%] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="border border-black w-full lg:w-[60%] h-[97%] flex flex-col justify-between items-center py-4 sm:py-8">
            <div className="upper px-5 w-[80%] lg:[60%]">
              <p className="text-[3.2vw] sm:text-[15px] md:text-[1.2vw]">
                  <span className="text-orange-600 sm:text-[30px]">"</span>{slide.paratxt}<span className="text-orange-600 sm:text-[30px] leading-3">"</span>
              </p>
            </div>
            <div className="lower flex flex-col gap-2 items-center">
                <div className="img w-[90px] sm:w-[6vw] rounded-full overflow-hidden">
                  <img src={slide.image} alt={slide.name} />
                </div>
                <h1 className="text-[18px] sm:text-[25px] leading-8 font-medium">
                  {slide.name}
                </h1>
                <h1 className="text-[15px] sm:text-[20px] text-gray-400">
                  {slide.role}
                </h1>
            </div>

          </SwiperSlide>
        ))}
        

      </Swiper>
        <div className="border border-black w-full sm:w-[55%] h-14 sm:h-20 m-auto flex">
          <div className="left border-r border-black w-1/5 bg-orange-600 hover:bg-[#F5ED98] flex justify-center items-center"
          onClick={handlePrevClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[30%]" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
          </div>
          <div className="middle border border-black w-3/5 relative flex justify-center items-center">
            <div className="swiper-pagination custom-pagination flex justify-center items-center gap-4 w-full h-full">
              
            </div>
          </div>
          <div className="right border-l border-black w-1/5 bg-orange-600 hover:bg-[#F5ED98] flex justify-center items-center"
          onClick={handleNextClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[30%]" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
          </div>
        </div>
    </div>
  );
}
