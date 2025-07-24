import { toast } from 'react-toastify';

import type { RegisterFormValues } from '../schemas/userSchemas';
import type { LogInResponse } from '../config/types';

export default async function registerUserRequest(
    data: RegisterFormValues
): Promise<LogInResponse | undefined> {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const backendData = await response.json();

        if (!response.ok) {
            toast.error(backendData.error);
            return;
        }

        toast.success(backendData.message);
    } catch (error) {
        if (error instanceof Error) toast.error(error.message);
    }
}
