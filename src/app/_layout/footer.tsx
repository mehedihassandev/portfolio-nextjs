"use client";

import Image from "next/image";
import { contactInfo, FromDefaultValues } from "@app/_constant";
import { useState, useEffect } from "react";
import { contactFormSchema, ContactFormSchema } from "../_schemas";
import { ErrorMessage } from "@app/_components";

export const Footer = () => {
    const [formData, setFormData] =
        useState<ContactFormSchema>(FromDefaultValues);
    const [errors, setErrors] = useState<Partial<ContactFormSchema>>({});
    const [debounceTimeout, setDebounceTimeout] =
        useState<NodeJS.Timeout | null>(null);

    const validateField = (name: keyof ContactFormSchema, value: string) => {
        console.log("Validating field:", value);
        const result = contactFormSchema.safeParse({
            ...formData,
            [name]: value,
        });
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: fieldErrors[name]?.[0],
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: undefined,
            }));
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timeoutId = setTimeout(() => {
            validateField(name as keyof ContactFormSchema, value);
        }, 1000);

        setDebounceTimeout(timeoutId);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactFormSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            const transformedErrors = Object.fromEntries(
                Object.entries(fieldErrors).map(([key, value]) => [
                    key,
                    value?.[0],
                ])
            );
            setErrors(transformedErrors);
        } else {
            setErrors({});
            // Handle form submission
            console.log("Form data:", formData);
            setFormData(FromDefaultValues);
        }
    };

    useEffect(() => {
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout]);

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
                    <div className="h-full pt-12 flex flex-col gap-10">
                        {contactInfo.map((info) => (
                            <div className="flex" key={info.id}>
                                <div className="flex h-[50px] w-[50px] items-center justify-center bg-[#0DB760] text-black rounded-md">
                                    <Image
                                        src={info.icon}
                                        alt={info.alt}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium leading-6 text-black">
                                        {info.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400 text-base">
                                        {info.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card h-fit mt-5" id="form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div>
                                <div className="flex gap-5 mb-5">
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Full Name"
                                            className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            title={
                                                errors.name ? errors.name : ""
                                            }
                                        />
                                        <ErrorMessage message={errors.name} />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder="Your email"
                                            className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage message={errors.email} />
                                    </div>
                                </div>
                                <div className="flex gap-5 mb-5">
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            placeholder="Phone Number"
                                            className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage
                                            message={errors.phoneNumber}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            id="budget"
                                            placeholder="Budget"
                                            className="mb-2 w-full rounded-md border border-[#BEC0BF] py-3 pl-4 shadow-md"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage message={errors.budget} />
                                    </div>
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
                                    value={formData.textarea}
                                    onChange={handleChange}
                                ></textarea>
                                <ErrorMessage message={errors.textarea} />
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

                <div className="grid grid-cols-1 border-solid border-t border-t-black py-4 items-center justify-center">
                    <p className="text-sm md:text-base text-black text-center font-medium leading-relaxed lg:leading-8">
                        © 2024 All Rights Reserved By Shihab Parves
                    </p>

                    {/* <h4 className="text-sm md:text-base leading-[16px] text-black font-medium text-right pt-3 md:pt-0">
                        Developed by{" "}
                        <a
                            className="text-primary"
                            href="https://www.mehedihassan.me/"
                            target="_blank"
                        >
                            Md. Mehedi Hassan.
                        </a>
                    </h4> */}
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
