import Image from "next/image";

export const About = () => {
    return (
        <section>
            <Image
                src="/assets/shap/square-shape.png"
                alt="ellipse"
                width={36}
                height={132}
                className="relative top-56 left-0 w-[36px] h-[132px] z-10"
            />
            <div
                className="px-5 lg:px-24 mx-auto max-w-screen-2xl m-auto py-20"
                id="skills"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 lg:row-span-2">
                        <Image
                            src="/assets/about/about2.png"
                            alt="about"
                            width={371}
                            height={500}
                            className="w-full lg:w-[371px] lg:h-[500px]"
                        />
                    </div>

                    <div className="col-span-1 lg:col-span-2 lg:row-span-10 pt-14">
                        <h5 className="text-xl text-primary">About Me</h5>
                        <h2 className="text-[30px] lg:text-[60px] font-bold text-black">
                            Md.Shihab Parves
                        </h2>
                        <h3 className="text-[20px] lg:text-[24px] font-semibold text-black pb-7">
                            UX/UI Designer | Webflow Designer
                        </h3>
                        <p className="text-[16px] text-[#323433] leading-[24px] font-semibold pt-2 pb-5">
                            Self-motivated Mid-Level UX/UI Designer with 4+
                            years of experience in creating digital products
                            across diverse sectors, including POS systems, SaaS,
                            enterprise software, mobile apps, fintech, and
                            crypto websites.
                        </p>
                        <p className="text-[16px] text-[#323433] leading-[24px] pt-2 ">
                            In my role, I have enough knowledge of user
                            experience methods, visual design, innovation,
                            ideation, prototyping, concept visualization, user
                            testing, presentation, and support the developers
                            through the launch process. Values teamwork and
                            brings a growth mindset to every challenge,
                            constantly seeking new knowledge and skills.
                        </p>
                        <div className="absolute">
                            <Image
                                src="/assets/spchanchol.png"
                                alt="ellipse"
                                width={360}
                                height={305}
                                className="relative -top-52 left-20 w-[100px] h-[100px] lg:w-[360px] lg:h-[305px] z-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
