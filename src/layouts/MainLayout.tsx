import TaskItem from '../components/molecules/TaskItem';

export default function MainLayout() {
    return (
        <>
            <main className="overflow-hidden">
                <TaskItem taskName="Limpiar polvo" />
            </main>
        </>
    );
}
