import LoginForm from '../components/organisms/LoginForm';
import BodyText from '../components/typography/BodyText';
import rafiki from '/rafiki.svg';

export default function LoginPage() {
    return (
        <div className="flex flex-col gap-6">
            <BodyText
                as="p"
                variant="body-large-regular"
                className="text-center text-neutral-primary"
            >
                Entra en tu cuenta para organizar tu hogar
            </BodyText>
            <LoginForm />
        </div>
    );
}
