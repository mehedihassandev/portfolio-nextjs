import { problemSolutionData } from "@/app/_constant";
import Image from "next/image";

export default function ProblemSolution() {
    return (
        <div className="relative">
            {/* Background Image with Filter */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url('/assets/case-study/problemSolution/bg.png')",
                    filter: "grayscale(0.8)", // Apply filter only to the background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    zIndex: -1, // Ensure it stays behind the content
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-15 z-0"></div>

            {/* Content */}
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl py-20 relative">
                <h1 className="text-2xl md:text-[48px] font-bold text-primary text-center mb-16">
                    Problem <span className="text-black">Statement &</span>{" "}
                    Solution
                </h1>
                {problemSolutionData.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-12 gap-5 md:gap-24 items-center justify-between"
                    >
                        {item.reverse ? (
                            <>
                                <Image
                                    src={item.image}
                                    alt="MyCare"
                                    width={400}
                                    height={400}
                                    className="col-span-12 md:col-span-5 w-[450px] h-auto md:h-[390px]"
                                />
                                <h2 className="col-span-12 md:col-span-7 text-xl md:text-2xl font-normal text-black leading-relaxed bg-[#FBFBFB] p-10 rounded-lg">
                                    {item.text}
                                </h2>
                            </>
                        ) : (
                            <>
                                <h2 className="col-span-12 md:col-span-7 text-xl md:text-2xl font-normal text-black leading-relaxed bg-[#FBFBFB] p-10 rounded-lg">
                                    {item.text}
                                </h2>
                                <Image
                                    src={item.image}
                                    alt="MyCare"
                                    width={400}
                                    height={400}
                                    className="col-span-12 md:col-span-5 w-[200px] h-auto md:h-[400px]"
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
