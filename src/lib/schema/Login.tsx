import { z } from "zod";

const loginForm = z.object({
  email: z
    .string()
    .min(1, {
      message: "El email no puede estar vacío",
    })
    .email({
      message: "El email no es válido",
    })
    .max(255, {
      message: "El email no puede tener más de 255 caracteres",
    }),
  password: z
    .string()
    .min(1, {
      message: "La contraseña no puede estar vacía",
    })
    .max(255, {
      message: "La contraseña no puede tener más de 255 caracteres",
    }),
});

export const LoginFormSchema = loginForm;
