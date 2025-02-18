import { useState } from "react";
import { ViewSelector } from "./ViewSelector";
import { TaskList } from "./TaskList";
import { CalendarView } from "./CalendarView";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

export type ViewType = "list" | "calendar";
export type Priority = "low" | "medium" | "high";
export type Category = "work" | "personal" | "shopping" | "health" | "other";

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  priority: Priority;
  category: Category;
  completed: boolean;
}

const TaskManager = () => {
  const [currentView, setCurrentView] = useState<ViewType>("list");
  
  // Temporary mock data
  const mockTasks: Task[] = [
    {
      id: "1",
      title: "Complete project proposal",
      description: "Write and review the Q4 project proposal",
      dueDate: new Date(2024, 0, 15),
      priority: "high",
      category: "work",
      completed: false,
    },
    {
      id: "2",
      title: "Grocery shopping",
      description: "Buy groceries for the week",
      dueDate: new Date(2024, 0, 10),
      priority: "medium",
      category: "shopping",
      completed: false,
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <Button className="gap-2">
          <PlusCircle className="h-5 w-5" />
          Add Task
        </Button>
      </div>
      
      <div className="mb-6">
        <ViewSelector currentView={currentView} onViewChange={setCurrentView} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        {currentView === "list" ? (
          <TaskList tasks={mockTasks} />
        ) : (
          <CalendarView tasks={mockTasks} />
        )}
      </div>
    </div>
  );
};

export default TaskManager;