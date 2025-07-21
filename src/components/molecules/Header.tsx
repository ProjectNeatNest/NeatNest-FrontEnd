import { PiListLight } from 'react-icons/pi';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';

export default function Header() {
    return (
        <>
            <header className="flex justify-between px-6 py-3">
                <Logo />
                <Button
                    buttonVariant="tertiary"
                    className="px-2 py-2 shadow-none aspect-square"
                >
                    <PiListLight size={32} />
                </Button>
            </header>
        </>
    );
}
