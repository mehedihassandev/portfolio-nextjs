import { projectDetails } from "@/app/_constant";

export default function ProjectDetails() {
    return (
        <div className="py-10 md:py-20 bg-[#071518] mt-5">
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-around align-middle pb-10 border-b border-gray gap-5">
                    {projectDetails.map((detail, index) => (
                        <div className="flex flex-col gap-1" key={index}>
                            <h2 className="text-sm text-[#8D9395] uppercase">
                                {detail.title}
                            </h2>
                            {Array.isArray(detail.content) ? (
                                detail.content.map((item, idx) => (
                                    <p
                                        className="text-base text-white"
                                        key={idx}
                                    >
                                        {item}
                                    </p>
                                ))
                            ) : (
                                <a
                                    className={`text-base text-white ${
                                        detail.underline ? "underline" : ""
                                    }`}
                                    href={detail.link}
                                    target="_blank"
                                >
                                    {detail.content}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="pt-10">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <h2 className="text-3xl text-white w-full md:w-1/5 mb-5 md:mb-0">
                            About Project
                        </h2>
                        <p className="text-base leading-[32px] text-white w-full md:w-4/5">
                            MyCare is a fintech app that allows users to manage
                            their money and make payments. It is designed to
                            help users keep track of their finances and make
                            informed decisions about their spending. The app is
                            designed to be user-friendly and intuitive, with a
                            clean and modern design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
