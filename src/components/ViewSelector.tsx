import { Button } from "./ui/button";
import { ListTodo, Calendar } from "lucide-react";
import { ViewType } from "./TaskManager";

interface ViewSelectorProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const ViewSelector = ({ currentView, onViewChange }: ViewSelectorProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={currentView === "list" ? "default" : "outline"}
        onClick={() => onViewChange("list")}
        className="gap-2"
      >
        <ListTodo className="h-4 w-4" />
        List View
      </Button>
      <Button
        variant={currentView === "calendar" ? "default" : "outline"}
        onClick={() => onViewChange("calendar")}
        className="gap-2"
      >
        <Calendar className="h-4 w-4" />
        Calendar View
      </Button>
    </div>
  );
};