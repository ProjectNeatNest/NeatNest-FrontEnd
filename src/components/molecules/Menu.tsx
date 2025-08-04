import {
    PiHouseLineLight,
    PiListChecksLight,
    PiSignOutLight,
    PiUsersLight,
} from 'react-icons/pi';
import useUserContext from '../../hooks/useUserContext';
import CustomNavLink from '../atoms/CustomNavLink';
import Button from '../atoms/Button';
import useHousingContext from '@/hooks/useHousingContext';

interface Props {
    isHidden?: boolean;
    direction?: 'horizontal' | 'vertical';
}

export default function Menu(props: Props) {
    const { user, logoutUser } = useUserContext();
    const { deleteHousing, housing } = useHousingContext();
    const { isHidden = false, direction = 'horizontal' } = props;
    const directionClasses = direction === 'vertical' ? 'flex-col' : '';
    const hiddenClasses = isHidden ? 'hidden md:flex' : 'flex';

    function handleLogOut () {
        logoutUser();
        deleteHousing();
    }

    const classes = `items-center gap-6 ${directionClasses} ${hiddenClasses}`;
    return (
        <nav className={classes}>
            {user && housing && (
                <CustomNavLink
                    to="/my-tasks"
                    leftIcon={<PiListChecksLight size={24} />}
                    className="gap-2"
                >
                    Mis tareas
                </CustomNavLink>
            )}

            {user && housing && (
                <CustomNavLink
                    to="/cohabitants"
                    leftIcon={<PiUsersLight size={24} />}
                >
                    Habitantes
                </CustomNavLink>
            )}

            {user && (
                <CustomNavLink
                    to="/my-housings"
                    leftIcon={<PiHouseLineLight size={24} />}
                >
                    Mis viviendas
                </CustomNavLink>
            )}

            {user && (
                <Button
                    buttonVariant="tertiary"
                    icon={<PiSignOutLight size={24} />}
                    onClick={handleLogOut}
                ></Button>
            )}

            {!user && (
                <CustomNavLink to="/login" appearance="secondaryButton">
                    Iniciar sesión
                </CustomNavLink>
            )}
            {!user && (
                <CustomNavLink to="/register" appearance="primaryButton">
                    Registrarme
                </CustomNavLink>
            )}
        </nav>
    );
}
