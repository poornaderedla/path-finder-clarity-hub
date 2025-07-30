import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface AssessmentCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  rating: number;
  icon: React.ReactNode;
  category: string;
  className?: string;
  onClick?: () => void;
}

export function AssessmentCard({
  title,
  description,
  duration,
  participants,
  rating,
  icon,
  category,
  className,
  onClick,
}: AssessmentCardProps) {
  return (
    <Card 
      className={cn(
        "group hover:shadow-lg-custom transition-all duration-300 cursor-pointer border-0 shadow-card bg-card",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {icon}
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {category}
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3" />
              <span>{participants}</span>
            </div>
          </div>
          <Button 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Start Assessment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}