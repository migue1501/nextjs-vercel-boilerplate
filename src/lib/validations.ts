import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  email: z.email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más"),
  lang: z.enum(["es", "en"]).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
