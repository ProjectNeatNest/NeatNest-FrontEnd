import { PiSignOutLight } from 'react-icons/pi';

import Button from '../components/atoms/Button';
import useUserContext from '../hooks/useUserContext';

export default function MyProfilePage() {
    const { logoutUser } = useUserContext();

    return (
        <div className=''>
            <Button
                buttonVariant="secondary"
                icon={<PiSignOutLight size={24} />}
                onClick={logoutUser}
            >
                Cerrar sesión
            </Button>
        </div>
    );
}
