import { twMerge } from 'tailwind-merge';
import InputField from '../atoms/InputField';
import { PiCheckCircleLight, PiDresserLight } from 'react-icons/pi';
import Button from '../atoms/Button';
import SelectorField from '../atoms/SelectorField';
import type { Area } from '../../config/types';

interface Props {
    className?: string;
}

const DBareas: Area[] = [
    {
        area_id: 1,
        name: 'Cocina',
        housing_id: 1,
        created_at: '25/07/2025',
    },
    {
        area_id: 2,
        name: 'Baño',
        housing_id: 1,
        created_at: '25/07/2025',
    },
];

export default function TaskForm(props: Props) {
    const { className } = props;

    const classes = twMerge('flex flex-col gap-6', className);

    return (
        <form className={classes}>
            <div className="flex flex-col gap-4">
                <InputField
                    type="text"
                    label="Nombre de la tarea"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                />
                <SelectorField
                    areasDB={DBareas}
                    leftIcon={<PiDresserLight size={24} />}
                    labelText="Zona de trabajo"
                />
                <InputField
                    type="text"
                    label="Duración de la tarea"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                />
                <InputField
                    type="text"
                    label="Fecha límite"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="Fecha límite de realización"
                    required
                />
                <InputField
                    type="text"
                    label="Periodicidad"
                    leftIcon={<PiCheckCircleLight size={24} />}
                    placeholder="¿Cada cuántos días?"
                    required
                />
            </div>
            <Button buttonVariant="primary">Guardar</Button>
        </form>
    );
}
