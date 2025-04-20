import { steps } from "@/app/_constant";

export default function DesignPreccess() {
    return (
        <div className="bg-[#071518] py-20">
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <h1 className="text-3xl md:text-[120px] font-bold text-white">
                    Design{" "}
                    <span className="relative top-7 md:top-24 text-[#8D9395]">
                        Process
                    </span>
                </h1>

                <div className="mt-16 lg:mt-40 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
                    {steps.map((step, index) => (
                        <div className="flex flex-col gap-3" key={index}>
                            <div className="flex w-[30px] h-[30px] bg-primary rounded-full items-center align-middle justify-center mb-3">
                                <h4 className="text-white text-sm">
                                    {step.number}
                                </h4>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">
                                {step.title}
                            </h2>
                            <p className="text-base leading-[26px] text-[#8D9395]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
