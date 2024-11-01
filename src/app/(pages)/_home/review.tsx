"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReviewCard from "@/app/_components/review-card";

export default function Review() {
    const sliderRef = useRef<Slider>(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 2,
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

    return (
        <>
            <div className="mx-auto px-5 lg:px-24 max-w-screen-2xl pt-28 pb-10">
                <div className="items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                    <div>
                        <h3 className="text-primary text-xl pb-3">
                            Testimonial
                        </h3>
                        <h2 className="text-[40px] leading-[54px] font-semibold">
                            Our Customers Say <br /> Something{" "}
                            <span className="text-primary">About Us</span>
                        </h2>
                    </div>
                    <div className="lg:flex gap-4 hidden md:block">
                        <button
                            className="text-black"
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <IoIosArrowBack size={22} />
                        </button>
                        <button
                            className="text-black"
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <IoIosArrowForward size={22} />
                        </button>
                    </div>
                </div>
                <Slider ref={sliderRef} {...sliderSettings} className="mt-10">
                    <ReviewCard
                        imageSrc="/assets/review/review-1.png"
                        name="Mirza Showvik"
                        position="Programming Hero"
                        review="We were very pleased to work with him. He did an excellent job and fulfilled every need. Everything was delivered on time. I would highly recommend him for his work."
                        rating={5}
                    />
                    <ReviewCard
                        imageSrc="/assets/review/review-2.png"
                        name="Julio"
                        position="WebX Digital Media  Ltd."
                        review="I worked with Shihab on the Easywax Cryptocurrency Website project, where his designs greatly improved the site's usability. He delivered high-quality work quickly and efficiently, demonstrating strong design skills and expertise in Figma."
                        rating={5}
                    />
                    <ReviewCard
                        imageSrc="/assets/review/review-3.png"
                        name="Sabbir Ahmed Sabbu"
                        position="Product Designer "
                        review="I highly recommend Shihab as a UX/UI designer. I had the pleasure of working with him on several projects, and he consistently impressed me with his skills and work ethic."
                        rating={5}
                    />
                </Slider>
            </div>
        </>
    );
}
