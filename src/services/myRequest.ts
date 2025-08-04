import { toast } from 'react-toastify';

interface Options<K> {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
    data?: K;
    hasToasts?: boolean;
}

export default async function myRequest<T, K = unknown>(
    url: string,
    options?: Options<K>
    
): Promise<T> {
    const requestOptions = {
        method: options?.method || 'GET',
        hasToasts: options?.hasToasts || true
    }
    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    const token = localStorage.getItem('neat-nest-token');

    const headers: HeadersInit = {'Content-type': 'application/json'}
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    try {
        const response = await fetch(`${baseURL}${url}`, {
            method: requestOptions.method,
            headers: headers,
            body: options?.data ? JSON.stringify(options.data) : undefined,
        });

        const backendData = await response.json();

        if (!response.ok) {
            throw new Error(backendData.error)
        }

        if (requestOptions.hasToasts) toast.success(backendData.message);
        return backendData.data;
    } catch (error) {
        if (error instanceof Error) {
            if (requestOptions.hasToasts) toast.error(error.message);
            throw new Error(error.message);
        }
        throw new Error('An Error occurred');
    }
}


