/*
MIT License

Copyright (c) 2025 Jean Carlos <jeancarlos.ingenieria@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import { TaskItem } from "./TaskItem";

/**
 * Represents a single task.
 */
interface Task {
    id: string;         // Unique identifier for the task
    text: string;       // Task description
    completed: boolean; // Task completion status
}

/**
 * Props for the TaskList component.
 */
interface TaskListProps {
    tasks: Task[];                          // Array of tasks to display
    onToggle: (id: string) => void;         // Handler to toggle task completion
    onDelete: (id: string) => void;         // Handler to delete a task
    onUpdate: (id: string, newText: string) => void; // Optional handler to update a task
}

/**
 * Renders a list of TaskItem components.
 */
export function TaskList({ tasks, onToggle, onDelete, onUpdate }: TaskListProps) {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
}