import Image from "next/image";

export default function VisualOutput() {
    return (
        <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl py-10">
            <div>
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    <h2 className="text-xl font-semibold text-[#071518] w-full md:w-1/5 mb-3 md:mb-0">
                        Visual Output
                    </h2>
                    <p className="text-base leading-[32px] text-[#323232] w-full md:w-4/5">
                        MyCare’s visual output combined aesthetics and
                        usability. A user-friendly interface, fresh color
                        scheme, custom illustrations, and consistency resulted
                        in an engaging shopping experience.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10">
                <Image
                    src="/assets/case-study/pages/phone.png"
                    alt="MyCare"
                    width={1920}
                    height={1080}
                    className="w-full h-auto md:h-[900px] object-fill"
                />
                <Image
                    src="/assets/case-study/pages/app.png"
                    alt="MyCare"
                    width={1920}
                    height={1080}
                    className="w-full h-auto md:h-[900px] object-cover"
                />
            </div>
            <div className="md:mt-10 mt-5">
                <Image
                    src="/assets/case-study/pages/myCareApp.png"
                    alt="MyCare"
                    width={1920}
                    height={1080}
                    className="w-full h-auto md:h-[600px] object-cover"
                />
            </div>
        </div>
    );
}
