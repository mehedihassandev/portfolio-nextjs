import { portfolioItems } from "@/app/_constant/portfolio-constant";
import { PortfolioItem } from "@/app/components/portfolio-item";
import Image from "next/image";

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <Image
                src="/assets/square-shape.png"
                alt="ellipse"
                width={36}
                height={132}
                className="relative top-56 left-0 w-[36px] h-[132px] z-50"
            />
            <div className="px-24 mx-auto max-w-screen-2xl">
                <div className="flex justify-between">
                    <h3 className="text-[40px] text-black font-bold leading-[66px] pb-8">
                        My <span className="text-primary">Portfolio</span>
                    </h3>
                    <a
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
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem
                            key={index}
                            item={item}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;