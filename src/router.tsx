import { redirect } from 'react-router';
import { createBrowserRouter } from 'react-router';

import type { Housing, User } from './config/types';
import { getItemFromLocalStorage } from './services/getItemFromLocalStorage';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NewHousingPage from './pages/CreationPages/NewHousingPage';
import NewTaskPage from './pages/CreationPages/NewTaskPage';
import NewAreaPage from './pages/CreationPages/NewAreaPage';
import NotFoundPage from './pages/NotFoundPage';
import MyHousingsPage from './pages/MyHousingsPage';
import MyTasksPage from './pages/MyTasksPage';
import CohabitantsPage from './pages/CohabitantsPage';
import AreaPage from './pages/AreaPage';
import TaskPage from './pages/TaskPage';

async function privateRouteLoader() {
    const user = getItemFromLocalStorage<User>('neat-nest-user');

    if (!user) {
        return redirect('/login');
    }
}

async function publicRouteLoader() {
    const user = getItemFromLocalStorage<User>('neat-nest-user');

    if (user) {
        return redirect('/my-housings');
    }
}

async function userHasHousing() {
    const housing = getItemFromLocalStorage<Housing>('neat-nest-housing');

    if (!housing) {
        return redirect('/housings/new');
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
                loader: publicRouteLoader,
                children: [
                    {
                        path: '/login',
                        element: <LoginPage />,
                    },

                    {
                        path: '/register',
                        element: <RegisterPage />,
                    },
                ],
            },

            {
                loader: privateRouteLoader,
                children: [
                    {
                        path: '/my-housings',
                        element: <MyHousingsPage />,
                    },

                    {
                        path: '/my-tasks',
                        element: <MyTasksPage />,
                        loader: userHasHousing
                    },

                    {
                        path: '/cohabitants',
                        element: <CohabitantsPage />,
                        loader: userHasHousing
                    },

                    {
                        path: '/tasks/new',
                        element: <NewTaskPage />,
                    },
                    {
                        path: '/housings/new',
                        element: <NewHousingPage />,
                    },
                    {
                        path: '/areas/new',
                        element: <NewAreaPage />,
                    },

                    {
                        path: '/areas/:areaId',
                        element: <AreaPage />,
                    },

                    {
                        path: 'areas/:areaId/tasks/:taskId',
                        element: <TaskPage />,
                    },
                ],
            },

            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);
