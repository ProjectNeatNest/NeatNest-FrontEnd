import { z } from 'zod/v4';

export const housingSchema = z.object({
    name: z
        .string()
        .min(1, 'Se requiere nombre de la vivienda')
        .max(20, 'Máximo 20 caracteres'),
    cohabitantEmail: z.email('Email inválido').optional().or(z.literal('')),
});

export const cohabitantSchema = housingSchema.pick({ cohabitantEmail: true });

export const housingNameSchema = housingSchema.pick({ name: true });

export type HousingFormValues = z.infer<typeof housingSchema>;
export type CohabitantsFormValues = z.infer<typeof cohabitantSchema>;
