import { useState } from 'react';

export default function useToggleMenu(initialState = false) {
    const [isShown, setIsShown] = useState(initialState);

    function toggleMenuShown() {
        setIsShown(!isShown);
    }

    return [isShown, toggleMenuShown] as const;
    // cuando retornas un array, para que typescript no se te queje cuando uses la función en los imports, hay que ponerle el const.
}
