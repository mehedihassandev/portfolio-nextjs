import { Metadata } from "next";
import Image from "next/image";
import ProblemSolution from "./problemSolution";
import DesignPreccess from "./designProccess";
import VisualOutput from "./visualOutput";
import ProjectDetails from "./projectDetails";

export const metadata: Metadata = {
    title: "Case Study",
    description: "Developed by MD. Mehedi Hassan",
    alternates: {
        canonical: "https://www.mehedihassan.me",
    },
};

export default function CaseStudy() {
    return (
        <section className="mt-24">
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div className="flex flex-col overflow-hidden mb-2">
                        <h2 className="text-lg md:text-2xl text-gray">
                            Project
                        </h2>
                        <p className="text-base md:text-xl pt-2 md:pt-4">
                            App Design
                        </p>
                    </div>
                    <h4 className="text-black_primary font-bold text-2xl md:text-6xl">
                        MyCare - Online Wallet App
                    </h4>
                </div>
                <div className="flex justify-center items-center align-middle mt-10">
                    <Image
                        src="/assets/case-study/pages/MyCare_App.png"
                        alt="MyCare"
                        width={1920}
                        height={1080}
                        className="w-full h-auto md:w-[780px] md:h-[915px]"
                    />
                </div>
            </div>

            {/* Project Details */}
            <ProjectDetails />

            <Image
                src="/assets/case-study/pages/Banner.png"
                alt="MyCare"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-[660px]"
            />

            {/* Problem Statement & Solution */}
            <ProblemSolution />

            <Image
                src="/assets/case-study/pages/MyCare_App_2.png"
                alt="MyCare"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-[1280px] object-fill"
            />

            {/* Design Process */}
            <DesignPreccess />

            {/* Visual Output */}
            <VisualOutput />

            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl md:pb-10">
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    <h2 className="text-xl font-semibold text-[#071518] w-full md:w-1/5 mb-3 md:mb-0">
                        Conclusion
                    </h2>
                    <p className="text-base leading-[32px] text-[#323232] w-full md:w-4/5">
                        <span className="text-primary">MyCare App</span> offers
                        a seamless and efficient platform for managing everyday
                        financial transactions. By integrating features such as
                        Top-up, Paybill, and Shop, it provides users with a
                        versatile and convenient tool for handling various
                        payment needs. The app’s user-friendly interface ensures
                        that even those with minimal technical knowledge can
                        navigate and utilize its services effectively. As
                        digital transactions become increasingly prevalent, the
                        Online Wallet App stands out as a reliable and secure
                        solution for modern financial management.
                    </p>
                </div>
            </div>
        </section>
    );
}
