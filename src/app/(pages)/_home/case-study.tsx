import { caseStudies } from "@/app/_constant/case-study-constant";
import Image from "next/image";

export const CaseStudy = () => {
    return (
        <section>
            <Image
                src="/assets/square-shape.png"
                alt="ellipse"
                width={36}
                height={132}
                className="relative top-64 right-0 w-[36px] h-[132px] z-50 ml-auto"
            />

            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <h3 className="text-[40px] text-black font-bold leading-[66px]">
                    My <span className="text-primary">Case Studies</span>
                </h3>

                {caseStudies.map((caseStudy, index) => (
                    <div
                        key={index}
                        className="relative flex bg-clip-border rounded-xl bg-case_study text-gray-700 shadow-lg w-full flex-row mt-10"
                    >
                        <div className="py-10 w-full px-16">
                            <h6 className="block leading-[32px] text-gray-700 text-[16px] pb-1">
                                UX Case Study
                            </h6>
                            <h4 className="block mb-2 text-2xl antialiased font-bold leading-snug tracking-normal text-[#2F2A4B]">
                                {caseStudy.title}
                            </h4>
                            <p className="block mb-8 text-base antialiased leading-[30px] text-[#2F2A4B]">
                                {caseStudy.description}
                            </p>
                            <a
                                href={caseStudy.link}
                                className="flex items-center gap-4 py-3 text-sm font-bold text-center uppercase transition-all rounded-lg text-primary"
                            >
                                Click to Visit{" "}
                                <Image
                                    alt="arrow"
                                    width={20}
                                    height={20}
                                    src="/assets/arrow-right.png"
                                />
                            </a>
                        </div>

                        <div className="relative w-2/5">
                            <img
                                src={caseStudy.imageUrl}
                                alt="card-image"
                                className="object-cover w-full h-full rounded-r-xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudy;
