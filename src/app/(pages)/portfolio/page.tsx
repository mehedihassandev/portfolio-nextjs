import { portfolioPageItems } from "@/app/_constant";
import Image from "next/image";
import React from "react";

export default function PortfolioPage() {
    return (
        <>
            <Image
                src="/assets/shap/shape.png"
                alt="ellipse"
                width={660}
                height={860}
                className="absolute top-[550px] lg:top-[280px] right-[80px] w-[660px] h-[860px] -z-10"
            />
            <section id="portfolio">
                <Image
                    src="/assets/shap/square-shape.png"
                    alt="ellipse"
                    width={36}
                    height={132}
                    className="absolute top-[50%] left-0 w-[36px] h-[132px] z-10"
                />
                <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                    <div className="mt-20 lg:mt-28 mb-7 lg:mb-20">
                        <h2 className="text-4xl lg:text-[96px] text-black font-black text-center font-inter leading-[45px] lg:leading-[104px]">
                            <span className="text-[#8D939547]">My Recent </span>{" "}
                            Visual <br />
                            Explorations
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
                        {portfolioPageItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col overflow-hidden"
                            >
                                <a href={item.link} target="_blank">
                                    <div className="group m-0 flex">
                                        <div className="z-10 overflow-hidden rounded-xl transition duration-300 ease-in-out">
                                            <Image
                                                src={item.src}
                                                className="animate-fade-in block w-full h-full scale-100 transform object-cover object-center transition duration-300 group-hover:scale-105"
                                                alt={item.alt}
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </a>
                                <div className="pt-5 pl-3">
                                    <h3 className="text-xl font-semibold text-[#07140E]">
                                        {item.title}
                                    </h3>
                                    <h2 className="text-sm font-semibold text-[#323433] pt-2">
                                        {item.subtitle}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
