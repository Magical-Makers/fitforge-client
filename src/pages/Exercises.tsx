import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Clock, 
  Zap, 
  Target,
  Play,
  BookOpen,
  Dumbbell,
  Heart
} from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  targetMuscles: string[];
  equipment: string;
  calories: number;
}

const mockExercises: Exercise[] = [
  {
    id: "1",
    name: "Push-ups",
    category: "Strength",
    difficulty: "Beginner",
    duration: "10-15 min",
    targetMuscles: ["Chest", "Triceps", "Shoulders"],
    equipment: "None",
    calories: 85
  },
  {
    id: "2",
    name: "Deadlifts",
    category: "Strength",
    difficulty: "Advanced",
    duration: "15-20 min",
    targetMuscles: ["Back", "Hamstrings", "Glutes"],
    equipment: "Barbell",
    calories: 120
  },
  {
    id: "3",
    name: "Running",
    category: "Cardio",
    difficulty: "Intermediate",
    duration: "30-45 min",
    targetMuscles: ["Legs", "Core"],
    equipment: "None",
    calories: 300
  },
  {
    id: "4",
    name: "Yoga Flow",
    category: "Flexibility",
    difficulty: "Beginner",
    duration: "20-30 min",
    targetMuscles: ["Full Body"],
    equipment: "Mat",
    calories: 80
  },
  {
    id: "5",
    name: "Burpees",
    category: "HIIT",
    difficulty: "Advanced",
    duration: "10-15 min",
    targetMuscles: ["Full Body"],
    equipment: "None",
    calories: 150
  },
  {
    id: "6",
    name: "Squats",
    category: "Strength",
    difficulty: "Beginner",
    duration: "10-15 min",
    targetMuscles: ["Quadriceps", "Glutes"],
    equipment: "None",
    calories: 90
  }
];

const categories = ["All", "Strength", "Cardio", "Flexibility", "HIIT"];

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [exercises] = useState(mockExercises);

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.targetMuscles.some(muscle => 
                           muscle.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === "All" || exercise.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strength':
        return Dumbbell;
      case 'Cardio':
        return Heart;
      case 'Flexibility':
        return Target;
      case 'HIIT':
        return Zap;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-primary/5 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Exercise Library</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover hundreds of exercises with detailed instructions, target muscles, and difficulty levels
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search exercises or muscle groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {category !== "All" && (
                  React.createElement(getCategoryIcon(category), { className: "h-4 w-4" })
                )}
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => {
            const CategoryIcon = getCategoryIcon(exercise.category);
            return (
              <Card key={exercise.id} className="shadow-card hover:shadow-primary/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CategoryIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{exercise.name}</CardTitle>
                        <Badge variant="outline">{exercise.category}</Badge>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={getDifficultyColor(exercise.difficulty)}
                    >
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-muted-foreground" />
                      <span>{exercise.calories} cal</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Target Muscles:</p>
                    <div className="flex flex-wrap gap-1">
                      {exercise.targetMuscles.map((muscle) => (
                        <Badge key={muscle} variant="secondary" className="text-xs">
                          {muscle}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium">Equipment: </span>
                    <span className="text-muted-foreground">{exercise.equipment}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No exercises found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Exercises;