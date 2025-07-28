import { z } from 'zod/v4';

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(1, 'Se requiere nombre de usuario')
            .min(3, 'Al menos 3 caracteres')
            .max(20, 'Máximo 20 caracteres'),
        email: z
            .email('Email inválido')
            .min(1, 'El email es obligatorio')
            .min(3, 'Al menos 3 caracteres')
            .max(100, 'Máximo 100 caracteres'),
        password: z
            .string('Se requiere una contraseña de tipo string')
            .min(1, 'La contraseña es obligatoria')
            .regex(
                /^[a-zA-Z0-9]{8,16}$/,
                'La contraseña debe tener entre 8-16 caracteres'
            ),
        confirmPassword: z
            .string()
            .min(1, 'Debes volver a escribir tu contraseña'),
        name: z
            .string()
            .min(1, 'El nombre es obligatorio')
            .min(2, 'El nombre debe tener al menos 2 caracteres.')
            .max(35, 'Máximo 35 caracteres')
            .regex(
                /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{1,35}$/,
                'El nombre no puede contener números o caracteres especiales'
            ),
        surname: z
            .string()
            .min(1, 'El apellido es obligatorio')
            .min(2, 'El apellido debe tener al menos 2 caracteres')
            .max(35, 'Máximo 35 caracteres')
            .regex(
                /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{1,35}$/,
                'El primer apellido no puede contener números o caracteres especiales'
            ),
        surname_2: z
            .string()
            .min(2, 'El segundo apellido debe tener al menos 2 caracteres')
            .max(35, 'Máximo 35 caracteres')
            .regex(
                /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{1,35}$/,
                'El segundo apellido no puede contener números o caracteres especiales'
            ),
    })
    .refine((values) => values.password === values.confirmPassword, {
        error: 'Las contraseñas no coinciden',
        path: ['confirmPassword'],
    });

export const loginSchema = registerSchema.pick({ email: true, password: true });

export type RegisterFormValues = z.infer<typeof registerSchema>;
