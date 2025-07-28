import { toast } from 'react-toastify';

export default async function myRequest<T, K>(
    url: string,
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
    data: T
): Promise<K | undefined> {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

    try {
        const response = await fetch(`${baseURL}/${url}`, {
            method: method,
            headers: {
                'Content-type': 'application/json',
            },
            body: data? JSON.stringify(data):undefined,
        });

        const backendData = await response.json();

        if (!response.ok) {
            toast.error(backendData.error);
            return;
        }

        toast.success(backendData.message);
        return backendData.data;
    } catch (error) {
        if (error instanceof Error) toast.error(error.message);
    }
}


