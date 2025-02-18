import { Task } from "./TaskManager";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      {tasks.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No tasks found. Add a new task to get started!
        </div>
      )}
    </div>
  );
};