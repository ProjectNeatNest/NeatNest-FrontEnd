import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from './layouts/MainLayout.tsx';
import UserProvider from './contexts/UserProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UserProvider>
            <MainLayout />
        </UserProvider>
    </StrictMode>
);
