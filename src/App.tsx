import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import { useFilter } from "./hooks/useFilter";

export function App() {
  const { tasks, addTask, toggleTask, deleteTask, completedCount,updateTask } = useTasks();
  const { filter, setFilter, filteredTasks } = useFilter(tasks);

  return (
    <main>
      <header>
        <h1>ToDoList</h1>
      </header>
      <Form onAdd={addTask} />
      <section className="tasks" aria-label="Task list">
        <TaskList
          tasks={filteredTasks(filter)}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
        <Filters activeFilter={filter} onChange={setFilter} />
      </section>
      <Footer completed={completedCount} total={tasks.length} />
    </main>
  );
}

