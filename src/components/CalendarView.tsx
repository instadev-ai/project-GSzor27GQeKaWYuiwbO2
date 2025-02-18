import { Task } from "./TaskManager";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

interface CalendarViewProps {
  tasks: Task[];
}

export const CalendarView = ({ tasks }: CalendarViewProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Create a map of dates to tasks for easier lookup
  const tasksByDate = tasks.reduce((acc, task) => {
    const dateStr = task.dueDate.toDateString();
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  // Custom day content renderer
  const dayContent = (day: Date) => {
    const dateStr = day.toDateString();
    const dayTasks = tasksByDate[dateStr] || [];
    
    return (
      <div className="w-full h-full">
        <div className="text-center">{day.getDate()}</div>
        {dayTasks.length > 0 && (
          <div className="mt-1">
            <div className="h-1.5 w-1.5 bg-primary rounded-full mx-auto" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        components={{
          DayContent: ({ date }) => dayContent(date),
        }}
      />
      
      {date && tasksByDate[date.toDateString()] && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">
            Tasks for {date.toLocaleDateString()}:
          </h3>
          <ul className="space-y-2">
            {tasksByDate[date.toDateString()].map((task) => (
              <li key={task.id} className="text-sm">
                • {task.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};