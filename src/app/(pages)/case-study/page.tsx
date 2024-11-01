import Image from "next/image";

export default function CaseStudy() {
    const sections = [
        {
            title: "Problems",
            content:
                "From the survey we found user struggles, which are customized plans, inconvenience of visiting multiple Apps for unavailable plans, and missing pay Bills option.",
        },
        {
            title: "Challenges",
            content:
                "We faced various design challenges, including creating effective filters for accurate results, optimizing thumb patterns for ease of use, and ensuring that the app is visually appealing while providing detailed information.",
        },
        {
            title: "Our Solutions",
            content:
                "We designed a reliable Wallet system to boost Top-up Plans, accurate Plans descriptions, shop updates, and user-selected their customized plans so that users can find this app more reliable for purchases.",
        },
    ];

    const steps = [
        {
            number: "1",
            title: "Research",
            description:
                "In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews and data analysis to inform the design process effectively.",
        },
        {
            number: "2",
            title: "Design",
            description:
                "During the design phase, we create wireframes and prototypes, visually conceptualizing solutions. These serve as blueprints for the user interfaces structure, layout, and functionality.",
        },
        {
            number: "3",
            title: "Testing",
            description:
                "In the testing phase, we gather user feedback on prototypes, assess usability, and refine designs. This iterative process ensures the final product meets user expectations and needs.",
        },
    ];

    const projectDetails = [
        { title: "Client", content: "cwseychelles" },
        { title: "CATEGORY", content: "Fintech" },
        {
            title: "LIVE View",
            content: "Visit Playstore/AppStore",
            underline: true,
        },
        { title: "TIMELINES", content: "6 Months" },
        {
            title: "Service we provide",
            content: [
                "User Research",
                "UI Design",
                "Development",
                "Maintenance",
            ],
        },
    ];

    return (
        <section className="mt-24">
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <div className="flex-col lg:flex items-center justify-between gap-3">
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
                                    <p
                                        className={`text-base text-white ${
                                            detail.underline ? "underline" : ""
                                        }`}
                                    >
                                        {detail.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="pt-10">
                        <div className="flex-col md:flex gap-5">
                            <h2 className="text-3xl text-white w-full md:w-1/5 mb-5 md:mb-0">
                                About Project
                            </h2>
                            <p className="text-base leading-[32px] text-white w-full md:w-4/5">
                                MyCare is a fintech app that allows users to
                                manage their money and make payments. It is
                                designed to help users keep track of their
                                finances and make informed decisions about their
                                spending. The app is designed to be
                                user-friendly and intuitive, with a clean and
                                modern design.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Image
                src="/assets/case-study/pages/Banner.png"
                alt="MyCare"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-[660px]"
            />

            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl py-10">
                {sections.map((section, index) => (
                    <div
                        className={`pt-10 ${index === 0 ? "pt-0" : ""}`}
                        key={index}
                    >
                        <div className="flex-col md:flex gap-5 items-center">
                            <h2 className="text-xl font-semibold text-[#071518] w-full md:w-1/5">
                                {section.title}
                            </h2>
                            <p className="text-base leading-[32px] text-[#323232] w-full md:w-4/5">
                                {section.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Image
                src="/assets/case-study/pages/MyCare_App_2.png"
                alt="MyCare"
                width={1920}
                height={1080}
                className="w-full h-auto md:h-[1280px] md:mt-10"
            />

            <div className="bg-[#071518] mt-14 py-20">
                <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                    <h1 className="text-3xl md:text-[120px] font-bold text-white">
                        Design{" "}
                        <span className="relative top-7 md:top-24 text-[#8D9395]">
                            Process
                        </span>
                    </h1>

                    <div className="mt-16 lg:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
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

            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl py-10">
                <div className="pt-0 md:pt-10">
                    <div className="flex-col md:flex gap-5 items-center">
                        <h2 className="text-xl font-semibold text-[#071518] w-full md:w-1/5 mb-3 md:mb-0">
                            Visual Output
                        </h2>
                        <p className="text-base leading-[32px] text-[#323232] w-full md:w-4/5">
                            MyCare’s visual output combined aesthetics and
                            usability. A user-friendly interface, fresh color
                            scheme, custom illustrations, and consistency
                            resulted in an engaging shopping experience.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 md:gap-10 mt-10 md:mt-20">
                    <Image
                        src="/assets/case-study/pages/Phone Display.png"
                        alt="MyCare"
                        width={1920}
                        height={1080}
                        className="w-full h-auto md:h-[900px]"
                    />
                    <Image
                        src="/assets/case-study/pages/App Poster.png"
                        alt="MyCare"
                        width={1920}
                        height={1080}
                        className="w-full h-auto md:h-[900px]"
                    />
                </div>
                <div className="md:mt-10 mt-5">
                    <Image
                        src="/assets/case-study/pages/MyCare App Mockups.png"
                        alt="MyCare"
                        width={1920}
                        height={1080}
                        className="w-full h-auto md:h-[900px]"
                    />
                </div>
            </div>

            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl md:pb-10">
                <div className="md:pt-10">
                    <div className="flex-col md:flex gap-5 items-center">
                        <h2 className="text-xl font-semibold text-[#071518] w-full md:w-1/5 mb-3 md:mb-0">
                            Conclusion
                        </h2>
                        <p className="text-base leading-[32px] text-[#323232] w-full md:w-4/5">
                            <span className="text-primary">MyCare App</span>{" "}
                            offers a seamless and efficient platform for
                            managing everyday financial transactions. By
                            integrating features such as Top-up, Paybill, and
                            Shop, it provides users with a versatile and
                            convenient tool for handling various payment needs.
                            The app’s user-friendly interface ensures that even
                            those with minimal technical knowledge can navigate
                            and utilize its services effectively. As digital
                            transactions become increasingly prevalent, the
                            Online Wallet App stands out as a reliable and
                            secure solution for modern financial management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
