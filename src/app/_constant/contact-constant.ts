import { IContactForm } from "../_models/contact";

export const contactInfo = [
    {
        id: 1,
        icon: "/assets/contact/phone.png",
        alt: "phone",
        title: "Contact me",
        description: "+8801771924612",
    },
    {
        id: 2,
        icon: "/assets/contact/mail.png",
        alt: "mail",
        title: "Email me",
        description: "hellochanchol@gmail.com",
    },
    {
        id: 3,
        icon: "/assets/contact/location.png",
        alt: "location",
        title: "Address",
        description: "Mirpur, Dhaka, Bangladesh.",
    },
];

export const FromDefaultValues: IContactForm = {
    name: "",
    email: "",
    phoneNumber: "",
    budget: "",
    textarea: "",
};
