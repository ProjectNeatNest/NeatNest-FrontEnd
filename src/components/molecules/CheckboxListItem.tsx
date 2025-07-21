import type { ReactNode } from 'react';
import CheckboxSquare from '../atoms/CheckboxSquare';
import BodyText from '../typography/BodyText';

interface Props {
    children: ReactNode;
}

export default function CheckboxListItem(props: Props) {
    const { children } = props;

    return (
        <div className="flex gap-2 group">
            <CheckboxSquare />
            <BodyText
                as="li"
                variant="body-large-regular"
                className="list-none text-neutral-primary group-has-checked:text-neutral-tertiary "
            >
                {children}
            </BodyText>
        </div>
    );
}
