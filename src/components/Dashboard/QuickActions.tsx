import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Plus, 
  Camera, 
  Trophy, 
  Target,
  Calendar
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: Play,
      title: "Start Workout",
      description: "Begin your planned session",
      variant: "hero" as const,
    },
    {
      icon: Plus,
      title: "Log Exercise",
      description: "Add custom activity",
      variant: "default" as const,
    },
    {
      icon: Camera,
      title: "Progress Photo",
      description: "Capture your journey",
      variant: "success" as const,
    },
    {
      icon: Trophy,
      title: "Join Challenge",
      description: "Compete with others",
      variant: "warning" as const,
    },
    {
      icon: Target,
      title: "Set Goal",
      description: "Define new target",
      variant: "info" as const,
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Plan your week",
      variant: "secondary" as const,
    },
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                variant={action.variant}
                className="h-auto p-4 flex flex-col items-center space-y-2 text-center"
              >
                <Icon className="h-6 w-6" />
                <div>
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs opacity-80">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;