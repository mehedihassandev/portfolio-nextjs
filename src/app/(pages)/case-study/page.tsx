import Image from "next/image";

export default function CaseStudy() {
    return (
        <section className="mt-24">
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col overflow-hidden">
                        <h2 className="text-5xl text-gray">Project</h2>
                        <p className="text-2xl pt-4">App Design</p>
                    </div>
                    <h4 className="text-black_primary font-bold text-6xl">
                        MyCare - Online Wallet App
                    </h4>
                </div>
                <div className="flex justify-center items-center align-middle mt-10">
                    <Image
                        src="/assets/case-study/pages/MyCare_App.png"
                        alt="MyCare"
                        width={1920}
                        height={1080}
                        className="w-[780px] h-[915px]"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-between mt-20">
                <div className="grid grid-cols-5 justify-start">
                    <div>
                        <h2 className="text-5xl text-gray">Client</h2>
                        <p className="text-2xl pt-4">UI/UX Designer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
