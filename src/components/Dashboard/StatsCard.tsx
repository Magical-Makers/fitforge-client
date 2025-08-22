import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'info';
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  variant = 'default' 
}: StatsCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'border-success/20 bg-success/5';
      case 'warning':
        return 'border-warning/20 bg-warning/5';
      case 'info':
        return 'border-info/20 bg-info/5';
      default:
        return 'border-primary/20 bg-primary/5';
    }
  };

  const getIconClasses = () => {
    switch (variant) {
      case 'success':
        return 'text-success bg-success/10';
      case 'warning':
        return 'text-warning bg-warning/10';
      case 'info':
        return 'text-info bg-info/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  const getBadgeVariant = () => {
    switch (variant) {
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'info':
        return 'bg-info/10 text-info border-info/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <Card className={`shadow-card hover:shadow-primary/10 transition-all duration-300 ${getVariantClasses()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${getIconClasses()}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <Badge 
          variant="secondary" 
          className={`mt-2 ${getBadgeVariant()}`}
        >
          {change}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default StatsCard;