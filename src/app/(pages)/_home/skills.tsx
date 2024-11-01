import Image from "next/image";

export default function Skills() {
    return (
        <>
            <Image
                src="/assets/shap/square-shape.png"
                alt="ellipse"
                width={132}
                height={36}
                className="relative top-64 right-0 w-[36px] h-[132px] z-10 ml-auto"
            />
            <div
                className="px-5 lg:px-24 mx-auto max-w-screen-2xl m-auto"
                id="skills"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-[40px] font-bold text-black md:leading-[54px]">
                            Why Hire Me For Your <br />
                            Next <span className="text-primary">Project?</span>
                        </h2>
                        <p className="text-[16px] leading-[24px] pt-2 md:pr-60 pb-10">
                            I’m specialist in UI/UX Designer. My passion is
                            designing & solving problems through user experience
                            and research.
                        </p>
                        <a className="bg-[#0DB760] text-white text-[16px] font-medium leading-[24px] px-[3.5rem] py-3 rounded-lg">
                            Hire Me
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="p-6 bg-[#fafafa] rounded-md">
                            <Image
                                src="/assets/skill/diamond.png"
                                alt="diamond"
                                width={28}
                                height={28}
                                className="w-[28px] h-[28px]"
                            />
                            <h5 className="mb-2 mt-4 text-[20px] leading-[20px] font-semibold tracking-tight text-black">
                                Visual Design
                            </h5>
                            <p className="mb-3 font-normal text-black text-[14px] leading-[21px]">
                                Create user interface design with unique &
                                modern ideas
                            </p>
                        </div>
                        <div className="p-6 bg-[#fafafa] rounded-md relative top-28 left-0">
                            <Image
                                src="/assets/skill/pulse.png"
                                alt="diamond"
                                width={28}
                                height={28}
                                className="w-[28px] h-[28px]"
                            />
                            <h5 className="mb-2 mt-4 text-[20px] leading-[20px] font-semibold tracking-tight text-black">
                                Design Prototype
                            </h5>
                            <p className="mb-3 font-normal text-black text-[14px] leading-[21px]">
                                Create advance design prototype with Figma apps.
                            </p>
                        </div>
                        <div className="p-6 bg-[#fafafa] rounded-md">
                            <Image
                                src="/assets/skill/school.png"
                                alt="diamond"
                                width={28}
                                height={28}
                                className="w-[28px] h-[28px]"
                            />
                            <h5 className="mb-2 mt-4 text-[20px] leading-[20px] font-semibold tracking-tight text-black">
                                UX Research
                            </h5>
                            <p className="mb-3 font-normal text-black text-[14px] leading-[21px]">
                                Create digital user products with updated ideas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
