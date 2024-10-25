import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-white " id="footer">
            <div className="px-5 lg:px-24 pt-16 pb-3 mx-auto max-w-screen-2xl m-auto">
                <div className="mb-4">
                    <div className="max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h5 className="text-xl text-primary leading-[29px] pb-5">
                            Contact
                        </h5>
                        <h2 className="text-3xl lg:text-[40px] font-bold text-black leading-9 lg:leading-[54px]">
                            Let’s Discuss Your
                            <span className="text-primary"> Project</span>
                        </h2>
                        <p className="mt-4 text-[16px] text-[#323433] leading-6 lg:leading-[24px] lg:px-[130px]">
                            Let’s make something new, different and more
                            meaningful or make thing more visual or conceptual
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-2 mb-10">
                    <div className="h-full pt-12 flex flex-col gap-1 lg:gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 border-solid border-t border-t-black py-4 items-center justify-between px-5">
                    <p className="text-sm md:text-base text-black text-left font-medium leading-relaxed lg:leading-8">
                        © 2024 Developed by{" "}
                        <a
                            className="text-primary"
                            href="https://www.mehedihassan.me/"
                            target="_blank"
                        >
                            Md. Mehedi Hassan.
                        </a>
                    </p>

                    <h4 className="text-sm md:text-base leading-[16px] text-black font-medium text-right pt-3 md:pt-0">
                        Designed by Shihab Parves
                    </h4>
                    {/* <div className="hidden md:flex justify-end gap-4">
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
                </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
