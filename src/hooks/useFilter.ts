import { useState } from "react";
import { FILTERS } from "../constants";
import type { FilterType, Task } from "../types";

export function useFilter(tasks: Task[]) {
  const [filter, setFilter] = useState<FilterType>(FILTERS.ALL);

  const filteredTasks = (currentFilter: FilterType) => {
    switch (currentFilter) {
      case FILTERS.ACTIVE:
        return tasks.filter(task => !task.completed);
      case FILTERS.COMPLETED:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return { filter, setFilter, filteredTasks };
}