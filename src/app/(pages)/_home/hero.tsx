import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div
                className="px-5 lg:px-24 flex flex-col justify-center items-center h-screen max-w-screen-2xl mx-auto relative top-0 left-0 right-0 z-40"
                id="about"
            >
                <Image
                    src="/assets/hero/hello.png"
                    alt="ellipse"
                    width={515}
                    height={244}
                    className="absolute w-[515px] h-[244px] top-[20%] lg:left-[20%] z-20"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
                    <div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-black pt-8 leading-[3rem] lg:leading-[4.375rem]">
                            I have
                            <span className="text-primary">
                                Creative
                                <br />
                                Design
                            </span>
                            Experience
                        </h1>
                        <p className="text-[16px] leading-[24px] pt-5 lg:pr-52">
                            An Enthusiastic UX/UI Designer dedicated to creating
                            user-focused digital experiences. Elevate your
                            business with custom design solutions that drive
                            engagement and growth.
                        </p>
                        <div className="flex items-center gap-14">
                            <a className="bg-[#0DB760] text-white text-[16px] font-medium leading-[24px] px-[3rem] py-3 rounded-lg mt-10 ">
                                Download CV
                            </a>
                            {/* <a className="flex gap-2 text-black text-[16px] font-medium leading-[24px] px-6 py-3 rounded-lg mt-10">
                            View Portfolio
                            <img
                                src="public/assets/arrow-icon.png"
                                alt="arrow"
                                className="w-[24px] h-[24px]"
                            />
                        </a> */}
                        </div>
                    </div>
                    <Image
                        src="/assets/hero/about.png"
                        alt="about"
                        layout="responsive"
                        width={515}
                        height={244}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <Image
                src="/assets/shap/shape.png"
                alt="ellipse"
                width={660}
                height={860}
                className="absolute top-[550px] lg:top-[75px] left-[80px] w-[660px] h-[800px] z-10 hidden md:block"
            />
        </>
    );
}
