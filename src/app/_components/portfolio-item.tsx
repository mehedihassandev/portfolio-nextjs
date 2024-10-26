import Image from "next/image";
import { FC } from "react";
import { IItem } from "@app/_models";

interface IPortfolioItemProps {
    item: IItem;
    isReversed: boolean;
}

export const PortfolioItem: FC<IPortfolioItemProps> = ({
    item,
    isReversed,
}) => {
    return (
        <div
            className={`flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
            } gap-10 md:gap-36 overflow-hidden`}
        >
            <div className="w-full md:w-1/2">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-lg"
                />
            </div>
            <div className="flex flex-col align-middle m-auto">
                <h2 className="text-sm font-semibold text-primary pb-5">
                    {item.category}
                </h2>
                <h3 className="text-2xl font-bold text-black pb-3">
                    {item.title}
                </h3>
                <p className="text-lg font-inter text-text_color">
                    {item.description}
                </p>
                <a href="#" className="pt-10" target="_blank">
                    <Image
                        src="/assets/project/send.png"
                        alt="arrow"
                        width={64}
                        height={64}
                        className="w-[44px] h-[44px]"
                    />
                </a>
            </div>
        </div>
    );
};

export default PortfolioItem;
