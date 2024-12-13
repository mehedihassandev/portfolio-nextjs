"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReviewCard from "@/app/_components/review-card";
import { reviews } from "@/app/_constant/review";

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
                        <h2 className="text-[40px] leading-[54px] font-bold">
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
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            imageSrc={review.imageSrc}
                            name={review.name}
                            position={review.position}
                            review={review.review}
                            rating={review.rating}
                        />
                    ))}
                </Slider>
            </div>
        </>
    );
}
