import { PiDresserLight } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

interface Props {
    className?: string;
}

export default function AreaForm(props: Props) {
    const { className } = props;
    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la zona"
                    leftIcon={<PiDresserLight size={24} />}
                    placeholder="El nombre de la zona"
                    required
                />

                <Button buttonVariant="primary" type="submit">
                    Guardar y continuar
                </Button>
            </div>
        </form>
    );
}
