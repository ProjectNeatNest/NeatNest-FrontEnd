import { Outlet } from 'react-router';

import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';
import { ToastContainer } from 'react-toastify';

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-primary">
            <Header />
            <main className="p-6 md:px-32 grid place-items-center">
                <Outlet />
            </main>
            <Footer />
            <ToastContainer />
        </div>
    );
}
