import { z } from "zod";

const jobOfferForm = z.object({
  name: z
    .string()
    .min(1, {
      message: "Tienes que introducir un nombre para la oferta de trabajo",
    })
    .max(255, {
      message: "El nombre no puede tener más de 255 caracteres",
    }),
  description: z
    .string()
    .min(1, {
      message:
        "Tienes que introducir una descripción para la oferta de trabajo",
    })
    .max(255, {
      message: "La descripción no puede tener más de 255 caracteres",
    }),
});

export const JobOfferFormSchema = jobOfferForm;
