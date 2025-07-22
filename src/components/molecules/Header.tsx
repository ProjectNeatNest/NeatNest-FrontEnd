import { PiListLight } from 'react-icons/pi';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import useToggleMenu from '../../hooks/useToggleMenu';
import { Link } from 'react-router';
import Menu from './Menu';
import { AnimatePresence } from 'motion/react';
import MenuSidebar from './MenuSideBar';

export default function Header() {
    const [isOpenSideBar, toggleSideBar] = useToggleMenu(false);

    return (
        <>
            <header className="flex justify-between px-6 py-3">
                <Link to="/">
                    <Logo />
                </Link>

                <Menu isHidden />

                <AnimatePresence>
                    {isOpenSideBar && <MenuSidebar />}
                </AnimatePresence>

                <Button
                    buttonVariant="tertiary"
                    className="px-2 py-2 shadow-none aspect-square"
                    onClick={toggleSideBar}
                    aria-label="open menu"
                >
                    <PiListLight size={32} />
                </Button>
            </header>
        </>
    );
}
