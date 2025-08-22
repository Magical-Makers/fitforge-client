import Navbar from "@/components/Navbar";
import StatsCard from "@/components/Dashboard/StatsCard";
import RecentWorkouts from "@/components/Dashboard/RecentWorkouts";
import QuickActions from "@/components/Dashboard/QuickActions";
import { Button } from "@/components/ui/button";
import fitnessHero from "@/assets/fitness-hero.jpg";
import { 
  Activity, 
  Calendar, 
  Flame, 
  Target,
  TrendingUp,
  Users,
  Award,
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fitnessHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Track workouts, monitor progress, and achieve your goals with our comprehensive fitness platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Workout
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Progress
            </Button>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Workouts This Week"
            value="8"
            change="+12% from last week"
            icon={Activity}
            variant="success"
          />
          <StatsCard
            title="Calories Burned"
            value="2,847"
            change="+5% from last week"
            icon={Flame}
            variant="warning"
          />
          <StatsCard
            title="Active Days"
            value="6"
            change="+2 days vs last week"
            icon={Calendar}
            variant="info"
          />
          <StatsCard
            title="Current Streak"
            value="12 days"
            change="Personal best!"
            icon={Award}
            variant="default"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <RecentWorkouts />
            
            {/* Weekly Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatsCard
                title="Weekly Goal Progress"
                value="5/7"
                change="71% complete"
                icon={Target}
                variant="success"
              />
              <StatsCard
                title="Average Session"
                value="42 min"
                change="+3 min vs last week"
                icon={Clock}
                variant="info"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <QuickActions />
            
            {/* Community Stats */}
            <StatsCard
              title="Community Rank"
              value="#247"
              change="↑ 12 positions"
              icon={Users}
              variant="default"
            />
            
            <StatsCard
              title="Monthly Progress"
              value="18.2%"
              change="On track to goal"
              icon={TrendingUp}
              variant="success"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
