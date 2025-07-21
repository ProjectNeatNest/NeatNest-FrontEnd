import { twMerge } from 'tailwind-merge';
import BodyText from '../typography/BodyText';
import Title from '../typography/Title';

interface Props {
    className?: string;
    completed: number;
    total: number;
}

export default function NumberOfTasks(props: Props) {
    const { className, completed, total } = props;

    const classes = twMerge('text-neutral-secondary', className);

    return (
        <>
            <div className={classes}>
                <Title as="span" variant="title-xsmall-semibold">
                    {completed}
                </Title>
                <BodyText as="span" variant="body-small-regular">
                    /{total}
                </BodyText>
            </div>
        </>
    );
}
