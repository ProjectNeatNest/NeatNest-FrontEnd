import Button from "../atoms/Button";

interface Props {
    isShown: boolean;
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode;
}

export default function Modal(props: Props) {
    const { isShown, onClose, onConfirm, children } = props;
    if (!isShown) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="max-w-lg p-6 m-4 rounded-lg shadow-xl md:w-full bg-neutral-primary/10 backdrop-blur-2xl">
                <div className="mb-6">{children}</div>
                <div className="flex justify-end space-x-4">
                    <Button
                        onClick={onClose}
                        buttonVariant="tertiary"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={onConfirm}
                        buttonVariant="tertiary"
                    >
                        Confirmar
                    </Button>
                </div>
            </div>
        </div>
    );
}
