import { z } from 'zod/v4';

export const taskSchema = z.object({
    name: z
        .string()
        .min(1, 'Se requiere nombre de la zona')
        .max(200, 'Máximo 200 caracteres'),
    areaId: z.string(),
    duration: z.string().min(1, 'Se requiere escribir una duración'),
    limitDate: z.string(),
});

export type TaskFormValues = z.infer<typeof taskSchema>;