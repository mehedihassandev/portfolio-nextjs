import { images } from "@/app/_constant";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <>
            <Image
                src="/assets/shap/square-shape.png"
                alt="ellipse"
                width={36}
                height={132}
                className="relative top-64 right-0 w-[36px] h-[132px] z-10 ml-auto"
            />

            <div className="px-5 lg:px-24 mx-auto max-w-screen-2xl">
                <div className="flex flex-col justify-center text-center mb-5">
                    <h5 className="text-base text-primary">Portfolio</h5>
                    <h3 className="text-[40px] text-primary font-bold leading-[66px]">
                        My <span className="text-black"> Case </span>Studies
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
                    {images.map((image, index) => {
                        const isExternal = image.link.startsWith("http");
                        return (
                            <div
                                key={index}
                                className="relative transition-transform duration-300 ease-in-out hover:-translate-y-4 group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={300}
                                    className="w-full h-auto rounded-md cursor-pointer"
                                />
                                <div className="absolute inset-0 bg-[#0DB760EB] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-start justify-center rounded-md">
                                    <div className="pl-5">
                                        <h2 className="text-white text-base pb-4 font-inter">
                                            {image.header}
                                        </h2>
                                        <h2 className="text-white text-2xl font-bold pb-8 font-inter">
                                            {image.title}
                                        </h2>
                                        <p className="text-white text-lg font-bold font-inter">
                                            {image.subtitle}
                                        </p>
                                    </div>
                                    <button className="flex items-center justify-center text-primary px-5 py-2 rounded-md mt-5 w-full">
                                        <Link
                                            href={image.link}
                                            target={
                                                isExternal ? "_blank" : "_self"
                                            }
                                            rel={
                                                isExternal
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                        >
                                            <Image
                                                src="/assets/project/send2.png"
                                                alt="arrow"
                                                width={64}
                                                height={64}
                                                className="w-[64px] h-[64px]"
                                            />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
