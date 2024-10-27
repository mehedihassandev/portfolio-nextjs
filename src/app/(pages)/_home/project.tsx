import { ProjectItem } from "@/app/_components";
import { projectItems } from "@/app/_constant";
import Image from "next/image";

export default function Project() {
    return (
        <>
            <Image
                src="/assets/shap/square-shape.png"
                alt="ellipse"
                width={36}
                height={132}
                className="relative top-56 left-0 w-[36px] h-[132px] z-10"
            />
            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <div className="flex flex-col justify-center text-center mb-5">
                    <h5 className="text-base text-primary">Latest Works</h5>
                    <h3 className="text-[40px] text-primary font-bold leading-[66px] pb-8">
                        Explore
                        <span className="text-black"> My Popular </span>
                        Projects
                    </h3>
                    {/* <a
                        href="portfolio.html"
                        className="flex items-center gap-4 py-3 text-sm font-bold text-center uppercase transition-all rounded-lg text-primary"
                    >
                        See More{" "}
                        <Image
                            src="/assets/arrow-right.png"
                            alt="arrow"
                            width={20}
                            height={20}
                        />
                    </a> */}
                </div>
                <div className="grid grid-cols-1 gap-5">
                    {projectItems.map((item, index) => (
                        <ProjectItem
                            key={index}
                            item={item}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
