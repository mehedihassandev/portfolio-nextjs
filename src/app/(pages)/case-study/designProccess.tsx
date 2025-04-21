'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { steps } from '@/app/_constant';

export default function DesignPreccess() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <IoIosArrowForward />,
    // prevArrow: <IoIosArrowBack />,
    afterChange: (index: number) => setCurrentSlide(index), // Update current slide
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const slideIndex = parseInt(event.target.value, 10);
    setCurrentSlide(slideIndex);
    sliderRef.current?.slickGoTo(slideIndex); // Navigate to the selected slide
  };

  return (
    <div className="bg-[#071518] py-20">
      <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
        <h1 className="text-3xl md:text-[120px] font-bold text-white">
          Design{' '}
          <span className="relative top-7 md:top-24 text-[#8D9395]">
            Process
          </span>
        </h1>

        <div className="mt-16 lg:mt-56">
          <Slider ref={sliderRef} {...sliderSettings}>
            {steps.map((step, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <div className="flex w-[30px] h-[30px] bg-primary rounded-full items-center align-middle justify-center mb-3">
                  <h4 className="text-white text-sm">{step.number}</h4>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {step.title}
                </h2>
                <p className="text-base leading-[26px] text-[#8D9395] pr-8">
                  {step.description}
                </p>
              </div>
            ))}
          </Slider>

          {/* Slider Bar */}
          <div className="mt-16 items-center justify-center flex">
            <input
              type="range"
              min="0"
              max={steps.length - 1}
              value={currentSlide}
              onChange={handleSliderChange}
              className="w-[50%] appearance-none h-3 bg-gray-300 rounded-lg cursor-pointer range-slider accent-primary"
              style={{
                background: `linear-gradient(to right, #0DB760 ${
                  (currentSlide / (steps.length - 1)) * 100
                }%, #d1d5db ${(currentSlide / (steps.length - 1)) * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
