import { Link } from 'react-router';
import BodyText from '../typography/BodyText';

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center align-center gap-0.5 py-4 md:py-8">
            <BodyText
                as="span"
                variant="body-small-regular"
                className="text-center text-neutral-secondary"
            >
                Created by{' '}
                <Link
                    to="https://github.com/NastyaRosa"
                    className="text-success-primary"
                >
                    Nasty
                </Link>{' '}
                &{' '}
                <Link
                    to="https://github.com/agomezal96"
                    className="text-success-primary"
                >
                    Andy
                </Link>{' '}
                with 💚
            </BodyText>
            <BodyText
                as="span"
                variant="body-small-regular"
                className="text-center text-neutral-secondary"
            >
                2025
            </BodyText>
        </footer>
    );
}
