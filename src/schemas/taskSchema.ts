import { z } from 'zod/v4';

export const taskSchema = z.object({
    name: z
        .string()
        .min(1, 'Se requiere escribir la tarea')
        .max(200, 'Máximo 200 caracteres'),
    areaId: z.string({error: 'Es obligatorio asignar la tarea a una zona'}),
    userId: z.string({error: 'Es obligatorio asignar la tarea a una persona'}),
    duration: z.string().min(1, 'Se requiere escribir una duración'),
    limitDate: z.string(),
});

export type TaskFormValues = z.infer<typeof taskSchema>;