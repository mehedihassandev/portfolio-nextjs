import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    budget: z.string().min(1, "Budget is required"),
    textarea: z.string().min(1, "Message is required"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
