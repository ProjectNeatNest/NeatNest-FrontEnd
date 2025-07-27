import { PiListChecksLight, PiUserCircleLight } from 'react-icons/pi';
import useUserContext from '../../hooks/useUserContext';
import CustomNavLink from '../atoms/CustomNavLink';

interface Props {
    isHidden?: boolean;
    direction?: 'horizontal' | 'vertical';
}

export default function Menu(props: Props) {
    const { user } = useUserContext();
    const { isHidden = false, direction = 'horizontal' } = props;
    const directionClasses = direction === 'vertical' ? 'flex-col' : '';
    const hiddenClasses = isHidden ? 'hidden md:flex' : 'flex';

    const classes = `items-center gap-6 ${directionClasses} ${hiddenClasses}`;
    return (
        <nav className={classes}>
            {user && (
                <CustomNavLink
                    to="/"
                    leftIcon={<PiListChecksLight size={24} />}
                    className="gap-2"
                >
                    Mis tareas
                </CustomNavLink>
            )}
            {user && (
                <CustomNavLink
                    to="/profile"
                    leftIcon={<PiUserCircleLight size={24} />}
                >
                    Mi perfil
                </CustomNavLink>
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
