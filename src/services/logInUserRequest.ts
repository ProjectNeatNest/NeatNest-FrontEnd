import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import type { LogInResponse } from '../config/types';

export async function logInUserRequest(
    email: string,
    password: string
): Promise<LogInResponse | undefined> {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    try {
        const response = await axios.post(`${baseURL}/users/login`, {
            email,
            password,
        });

        toast.success(response.data.message);
        return response.data.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast.error(error.response?.data.error);
        } else if (error instanceof Error) toast.error(error.message);
    }
}
