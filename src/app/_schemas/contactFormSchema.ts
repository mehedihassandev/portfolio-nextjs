import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email("Please enter a valid email address").refine(
        (value: string) => value.includes("@"),
        {
            message: "Please enter a valid email address",
        }
    ),
    phoneNumber: z.string()
        .min(1, "Please enter a valid phone number")
        .regex(/^\d+$/, "Phone Number must contain only numeric characters")
        .refine(
            (value: string) => value.length >= 11,
            {
                message: "Phone Number must be at least 11 characters",
            }
        ),
    budget: z.string().min(1, "Please enter your budget range"),
    textarea: z.string().min(1, "Tell something about your project"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
