import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

export default function useRequest<T, K = null>(
    url: string,
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
    data?: K
) {
    const [requestData, setRequestData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const baseURL = import.meta.env.VITE_SERVER_BASE_URL;
    const token = localStorage.getItem('neat-nest-token');


   const headers = useMemo(() => {
        const headers: HeadersInit = { 'Content-type': 'application/json' };

        return headers;

    }, []);

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    
    useEffect(() => {
        async function getRequest() {
            setIsLoading(true);
            try {
                const response = await fetch(`${baseURL}${url}`, {
                    method: method,
                    headers: headers,
                    body: data ? JSON.stringify(data) : undefined,
                });
    
                const backendData = await response.json();
    
                if (!response.ok) {
                    throw new Error(backendData.error);
                }
    
                toast.success(backendData.message);
                setRequestData(backendData.data);
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    setError(error.message);
                }
                setError('An Error occurred');
            } finally {
                setIsLoading(false);
            }
        }
        getRequest()
    }, [baseURL, data, method, url, headers]);




    return { requestData, isLoading, error };
}
