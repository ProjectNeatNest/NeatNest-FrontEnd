import { Outlet } from 'react-router';

import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';
import { ToastContainer } from 'react-toastify';
import UserProvider from '../contexts/UserProvider';

export default function MainLayout() {
    return (
        <UserProvider>
            <div className="flex flex-col min-h-screen bg-neutral-primary">
                <Header />
                <main className="grid p-6 grow lg:px-32 justify-items-center">
                    <Outlet />
                </main>
                <Footer />
                <ToastContainer position="bottom-right" />
            </div>
        </UserProvider>
    );
}
