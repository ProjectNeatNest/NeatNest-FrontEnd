import { redirect } from 'react-router';
import { createBrowserRouter } from 'react-router';

import type { User } from './config/types';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserViewPage from './pages/UserViewPage';
import { getItemFromLocalStorage } from './services/getItemFromLocalStorage';
import NewHousingPage from './pages/CreationPages/NewHousingPage';
import NewTaskPage from './pages/CreationPages/NewTaskPage';
import NewAreaPage from './pages/CreationPages/NewAreaPage';
import NotFoundPage from './pages/NotFoundPage';
import MyHousingsPage from './pages/MyHousingsPage';
import MyTasksPage from './pages/MyTasksPage';

async function privateRouteLoader() {
    const user = getItemFromLocalStorage<User>('neat-nest-user');

    if (!user) {
        return redirect('/login');
    }
}

async function publicRouteLoader() {
    const user = getItemFromLocalStorage<User>('neat-nest-user');

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
                path: '/my-housings',
                element: <MyHousingsPage />,
                loader: privateRouteLoader,
            },

                        {
                path: '/my-tasks',
                element: <MyTasksPage />,
                loader: privateRouteLoader,
            },

            {
                path: '/users/:userId/housings/:housingId',
                element: <UserViewPage />,
                loader: privateRouteLoader,
            },

            {
                path: '/tasks/new',
                element: <NewTaskPage />,
                loader: privateRouteLoader,
            },
            {
                path: '/housings/new',
                element: <NewHousingPage />,
                loader: privateRouteLoader,
            },
            {
                path: '/areas/new',
                element: <NewAreaPage />,
                loader: privateRouteLoader,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
