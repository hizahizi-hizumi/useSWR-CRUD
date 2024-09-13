import type { Task } from "../../types/task";
import { get } from "./get";

const tasks: Task[] = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
];

export function getTasks(): Task[] {
  return tasks;
}

export const handlers = [get];