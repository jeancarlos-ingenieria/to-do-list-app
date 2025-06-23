import { useState, useEffect } from "react";
import type { Task } from "../types";

const TASKS_STORAGE_KEY = "tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem(TASKS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    setTasks(prev => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false }
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (id: string, newText: string) => {
  setTasks(tasks =>
    tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    )
  );
};

  const completedCount = tasks.filter(task => task.completed).length;

  return { tasks, addTask, toggleTask, deleteTask, completedCount ,updateTask};
}