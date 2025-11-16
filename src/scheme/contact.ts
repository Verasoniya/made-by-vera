import { z } from 'zod';

export const contactScheme = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email(),
  message: z.string().min(1, 'Message is required'),
});

export type ContactForm = z.infer<typeof contactScheme>;
