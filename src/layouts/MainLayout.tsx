import { Outlet } from 'react-router';

import Footer from '../components/molecules/Footer';
import Header from '../components/molecules/Header';

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-primary">
            <Header />
            <main className="flex items-center justify-center px-6 mx-auto overflow-hidden md:px-32 ">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
