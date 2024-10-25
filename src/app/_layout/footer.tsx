import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <footer
                className="bg-white px-24  pt-16 pb-16 mx-auto max-w-screen-2xl m-auto"
                id="footer"
            >
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h5 className="text-xl text-primary leading-[29px]">
                            Contact
                        </h5>
                        <h2 className="text-[40px] font-bold text-black leading-[54px]">
                            Let’s Discuss Your
                            <span className="text-primary">Project</span>
                        </h2>
                        <p className="mt-4 text-[16px] text-[#323433] leading-[24px] px-[130px]">
                            Let’s make something new, different and more
                            meaningful or make thing more visual or conceptual
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="h-full pt-12 flex flex-row lg:flex-col gap-6">
                        <div className="flex pb-8">
                            <div className="flex h-[50px] w-[50px] items-center justify-center bg-[#0DB760] text-black rounded-md">
                                <Image
                                    src="/assets/phone.png"
                                    alt="location"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-black">
                                    Contact me
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">
                                    +8801771924612
                                </p>
                            </div>
                        </div>

                        <div className="flex pb-8">
                            <div className="flex h-[50px] w-[50px] items-center justify-center bg-[#0DB760] text-black rounded-md">
                                <Image
                                    src="/assets/mail.png"
                                    alt="mail"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-black">
                                    Email me
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">
                                    hellochanchol@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex h-[50px] w-[50px] items-center justify-center bg-[#0DB760] text-black rounded-md">
                                <Image
                                    src="/assets/location.png"
                                    alt="mail"
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-black">
                                    Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">
                                    Mirpur, Dhaka, Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card h-fit mt-5" id="form">
                        <form id="contactForm">
                            <div>
                                <div className="flex gap-5 mb-5">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full Name"
                                        className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                        name="name"
                                    />
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Your email"
                                        className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                        name="name"
                                    />
                                </div>
                                <div className="flex gap-5 mb-5">
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        placeholder="Phone Number"
                                        className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                        name="name"
                                    />
                                    <input
                                        type="text"
                                        id="budget"
                                        placeholder="Budget"
                                        className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <textarea
                                    id="textarea"
                                    name="textarea"
                                    cols={30}
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="w-60 bg-[#0DB760] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>

            <div className="px-24 mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-3 border-solid border-t border-t-black py-4 items-center">
                    <h4 className="text-[16px] leading-[16px] text-black">
                        @ 2024. All Rights Reserved by{" "}
                        <a
                            href="https://www.mehedihassan.me"
                            className="text-primary"
                            target="_blank"
                        >
                            Md. Mehedi Hassan
                        </a>
                    </h4>

                    <h4 className="text-[16px] leading-[16px] text-black text-center">
                        Designed by Shihab Parves
                    </h4>
                    <div className="flex justify-end gap-4">
                        <a
                            href="#"
                            className="text-[16px] leading-[16px] text-black text-right"
                        >
                            <Image
                                src="/assets/facebook.png"
                                alt="facebook"
                                width={25}
                                height={25}
                            />
                        </a>
                        <a
                            href="#"
                            className="text-[16px] leading-[16px] text-black text-right"
                        >
                            <Image
                                src="/assets/twitter.png"
                                alt="facebook"
                                width={25}
                                height={25}
                            />
                        </a>
                        <a
                            href="#"
                            className="text-[16px] leading-[16px] text-black text-right"
                        >
                            <Image
                                src="/assets/linkedin.png"
                                alt="facebook"
                                width={25}
                                height={25}
                            />
                        </a>
                        <a
                            href="#"
                            className="text-[16px] leading-[16px] text-black text-right"
                        >
                            <Image
                                src="/assets/instagram.png"
                                alt="facebook"
                                width={25}
                                height={25}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
