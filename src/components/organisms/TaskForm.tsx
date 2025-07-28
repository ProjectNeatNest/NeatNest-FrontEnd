import { twMerge } from 'tailwind-merge';
import InputField from '../atoms/InputField';
import {
    PiCalendarDotLight,
    PiCheckCircleLight,
    PiDresserLight,
    PiTimerLight,
} from 'react-icons/pi';
import Button from '../atoms/Button';
import SelectorField from '../molecules/SelectorField';
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
                    options={DBareas.map(area => area.name)}
                    leftIcon={<PiDresserLight size={24} />}
                    labelText="Zona de trabajo"
                />
                <InputField
                    type="text"
                    label="Duración de la tarea"
                    leftIcon={<PiTimerLight size={24} />}
                    placeholder="Escribe la tarea"
                    required
                />
                <InputField
                    type="text"
                    label="Fecha límite"
                    leftIcon={<PiCalendarDotLight size={24} />}
                    placeholder="Fecha límite de realización"
                    required
                />
            </div>
            <Button buttonVariant="primary">Guardar y continuar</Button>
        </form>
    );
}
