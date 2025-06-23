export type FilterType = (typeof FILTERS)[keyof typeof FILTERS];

export interface Task {
    id: string;
    text: string;
    completed: boolean;
}