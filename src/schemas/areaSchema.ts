import { z } from 'zod/v4';

export const areaSchema = z.object({
    name: z
        .string()
        .min(1, 'Se requiere nombre de la zona')
        .max(20, 'Máximo 20 caracteres'),
});
