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


import { FILTERS } from "../constants";
import type { FilterType } from "../types";

// Props for the Filters component: current active filter and a handler to change it
interface FiltersProps {
    activeFilter: FilterType;
    onChange: (filter: FilterType) => void;
}

// Readable labels for each filter type
const FILTER_LABELS: Record<FilterType, string> = {
    [FILTERS.ALL]: "All",
    [FILTERS.ACTIVE]: "Active",
    [FILTERS.COMPLETED]: "Completed",
};

/**
 * Filters component for the task list.
 * Allows switching between "All", "Active", and "Completed" tasks.
 * The active filter is visually highlighted.
 */
export function Filters({ activeFilter, onChange }: FiltersProps) {
    return (
        <nav className="filters" aria-label="Task filters">
            {Object.values(FILTERS).map((filter) => (
                <button
                    key={filter}
                    className={`filter-btn${activeFilter === filter ? " active" : ""}`}
                    aria-pressed={activeFilter === filter}
                    onClick={() => onChange(filter)}
                >
                    {FILTER_LABELS[filter]}
                </button>
            ))}
        </nav>
    );
}
