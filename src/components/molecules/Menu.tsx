import useUserContext from '../../hooks/useUserContext';
import MenuLink from '../atoms/MenuLink';

interface Props {
    isHidden?: boolean;
    direction?: 'horizontal' | 'vertical';
}

export default function Menu(props: Props) {
    const { user } = useUserContext();
    const { isHidden = false, direction = 'horizontal' } = props;
    const directionClasses = direction === 'vertical' ? 'flex-col' : '';
    const hiddenClasses = isHidden ? 'hidden md:flex' : 'flex';

    const classes = `items-center gap-4 ${directionClasses} ${hiddenClasses}`;
    return (
        <nav className={classes}>
            {user && <MenuLink to="/">Mis tareas</MenuLink>}
            {user && <MenuLink to="/profile">Mi perfil</MenuLink>}
            {!user && (
                <MenuLink to="/login" appearance="secondaryButton">
                    Iniciar sesión
                </MenuLink>
            )}
            {!user && (
                <MenuLink to="/register" appearance="primaryButton">
                    Registrarme
                </MenuLink>
            )}
        </nav>
    );
}
