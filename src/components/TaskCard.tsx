import { Task, Priority, Category } from "./TaskManager";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";

interface TaskCardProps {
  task: Task;
}

const priorityColors: Record<Priority, string> = {
  high: "bg-red-100 text-red-800 border-red-200",
  medium: "bg-amber-100 text-amber-800 border-amber-200",
  low: "bg-green-100 text-green-800 border-green-200",
};

const categoryColors: Record<Category, string> = {
  work: "bg-blue-100 text-blue-800 border-blue-200",
  personal: "bg-purple-100 text-purple-800 border-purple-200",
  shopping: "bg-pink-100 text-pink-800 border-pink-200",
  health: "bg-teal-100 text-teal-800 border-teal-200",
  other: "bg-gray-100 text-gray-800 border-gray-200",
};

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Checkbox checked={task.completed} />
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium leading-none">{task.title}</h3>
            <div className="flex gap-2">
              <Badge variant="outline" className={priorityColors[task.priority]}>
                {task.priority}
              </Badge>
              <Badge variant="outline" className={categoryColors[task.category]}>
                {task.category}
              </Badge>
            </div>
          </div>
          {task.description && (
            <p className="text-sm text-muted-foreground mt-2">{task.description}</p>
          )}
          <div className="mt-2 text-sm text-muted-foreground">
            Due: {format(task.dueDate, "PPP")}
          </div>
        </div>
      </div>
    </Card>
  );
};