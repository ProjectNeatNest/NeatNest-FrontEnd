import Header from '../components/molecules/Header';
import TaskItem from '../components/molecules/TaskItem';

export default function MainLayout() {
    return (
        <>
        <Header/>
            <main className="overflow-hidden">
                <TaskItem taskName="Limpiar polvo" />
            </main>
        </>
    );
}
