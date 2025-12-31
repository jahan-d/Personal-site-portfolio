import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-base-200">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default MainLayout;
