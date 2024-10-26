import { images } from "@/app/_constant";
import Image from "next/image";
import Link from "next/link";

export const CaseStudy = () => {
    return (
        <section>
            <Image
                src="/assets/square-shape.png"
                alt="ellipse"
                width={36}
                height={132}
                className="relative top-64 right-0 w-[36px] h-[132px] z-50 ml-auto"
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
                                className="transition-transform duration-300 ease-in-out hover:-translate-y-4"
                            >
                                <Link
                                    href={image.link}
                                    target={isExternal ? "_blank" : "_self"}
                                    rel={
                                        isExternal
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={300}
                                        height={300}
                                        className="w-full h-auto rounded-md cursor-pointer"
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
