import { Outlet } from 'react-router';

import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';
import { ToastContainer } from 'react-toastify';
import UserProvider from '../contexts/UserProvider';
import HousingProvider from '../contexts/HousingProvider';

export default function MainLayout() {
    return (
        <UserProvider>
            <HousingProvider>
                    <div className="flex flex-col min-h-screen bg-neutral-primary">
                        <Header />
                        <main className="grid grow">
                            <Outlet />
                        </main>
                        <Footer />
                        <ToastContainer position="bottom-right" />
                    </div>
            </HousingProvider>
        </UserProvider>
    );
}
