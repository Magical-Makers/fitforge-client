import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Flame, ArrowRight } from "lucide-react";

interface Workout {
  id: string;
  name: string;
  date: string;
  duration: string;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: string;
}

const mockWorkouts: Workout[] = [
  {
    id: "1",
    name: "Upper Body Strength",
    date: "Today",
    duration: "45 min",
    calories: 280,
    difficulty: "Medium",
    type: "Strength"
  },
  {
    id: "2", 
    name: "HIIT Cardio Blast",
    date: "Yesterday",
    duration: "30 min",
    calories: 320,
    difficulty: "Hard",
    type: "Cardio"
  },
  {
    id: "3",
    name: "Yoga Flow",
    date: "2 days ago",
    duration: "60 min", 
    calories: 150,
    difficulty: "Easy",
    type: "Flexibility"
  }
];

const RecentWorkouts = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-success/10 text-success border-success/20';
      case 'Medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Hard':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Workouts</CardTitle>
        <Button variant="ghost" size="sm">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-accent/30 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{workout.name}</h4>
                <Badge
                  variant="secondary"
                  className={getDifficultyColor(workout.difficulty)}
                >
                  {workout.difficulty}
                </Badge>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{workout.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Flame className="h-3 w-3" />
                  <span>{workout.calories} cal</span>
                </div>
              </div>
              
              <Badge variant="outline" className="mt-2">
                {workout.type}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentWorkouts;