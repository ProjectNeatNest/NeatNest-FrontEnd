import BodyText from '../typography/BodyText';

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center align-center gap-0.5 py-4 md:py-8">
            <BodyText
                as="span"
                variant="body-small-regular"
                className="text-center text-neutral-secondary"
            >
                Created by NARL with 💚
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
