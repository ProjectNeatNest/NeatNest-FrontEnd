import CheckboxSquare from '../atoms/CheckboxSquare';
import BodyText from '../typography/BodyText';

interface Props {
    children: string;
}

export default function CheckboxListItem(props: Props) {
    const { children } = props;

    return (
        <li className="flex gap-2 group">
            <CheckboxSquare name={children} />
            <BodyText
                as="span"
                variant="body-large-regular"
                className="list-none text-neutral-primary group-has-checked:text-neutral-tertiary "
            >
                {children}
            </BodyText>
        </li>
    );
}
