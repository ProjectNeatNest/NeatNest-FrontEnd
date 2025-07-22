import { redirect } from 'react-router';
import { createBrowserRouter } from 'react-router';

import type { User } from './config/types';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyProfilePage from './pages/MyProfilePage';
import UserViewPage from './pages/UserViewPage';

import { getItemFromLocalStorage } from './services/getItemFromLocalStorage';

async function privateRouteLoader() {
    const user = getItemFromLocalStorage<User>('user');

    if (!user) {
        return redirect('/login');
    }
}

async function publicRouteLoader() {
    const user = getItemFromLocalStorage<User>('user');

    if (user) {
        return redirect('/profile');
    }
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },

            {
                path: '/login',
                element: <LoginPage />,
                loader: publicRouteLoader,
            },

            {
                path: '/register',
                element: <RegisterPage />,
                loader: publicRouteLoader,
            },

            {
                path: '/profile',
                element: <MyProfilePage />,
                loader: privateRouteLoader,
            },

            {
                path: '/users/:userId/housings/:housingId',
                element: <UserViewPage />,
                loader: privateRouteLoader,
            },
        ],
    },
]);
