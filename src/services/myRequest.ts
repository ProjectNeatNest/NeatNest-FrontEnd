import { toast } from 'react-toastify';

export default async function myRequest<T, K = null>(
    url: string,
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
    data?: K
): Promise<T> {
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

    try {
        const response = await fetch(`${baseURL}${url}`, {
            method: method,
            headers: {
                'Content-type': 'application/json',
            },
            body: data? JSON.stringify(data):undefined,
        });

        const backendData = await response.json();

        if (!response.ok) {
            throw new Error(backendData.error)
        }

        toast.success(backendData.message);
        return backendData.data;
    } catch (error) {
        if (error instanceof Error) {
            toast.error(error.message);
            throw new Error(error.message);
        }
        throw new Error('An Error occurred');
    }
}


