import { z } from 'zod/v4';

export const housingSchema = z.object({
    housingName: z
        .string()
        .min(1, 'Se requiere nombre de la vivienda')
        .max(20, 'Máximo 20 caracteres'),
    cohabitantEmail: z.email('Email inválido').optional(),
});
