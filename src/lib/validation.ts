import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." })
    .max(100, { message: "Full Name must not exceed 100 characters." }),
  email: z
    .string()
    .min(1, { message: "Email Address is required." })
    .email({ message: "Please provide a valid email address." }),
  phone: z
    .string()
    .min(7, { message: "Phone Number must be at least 7 digits." })
    .max(20, { message: "Phone Number must not exceed 20 characters." })
    .regex(/^[+0-9\s\-()]+$/, {
      message: "Please enter a valid phone number (digits, spaces, hyphens, + allowed).",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(3000, { message: "Message cannot exceed 3000 characters." }),
  honeypot: z.string().optional(),
  sourcePage: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
