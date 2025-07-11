
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface AssessmentCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  userCount: string;
  tags: string[];
  category: string;
  comingSoon?: boolean;
  gradient: string;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  duration,
  difficulty,
  userCount,
  tags,
  category,
  comingSoon = false,
  gradient
}) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden ${comingSoon ? 'opacity-75' : ''}`}>
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      <CardHeader className="pb-4 relative">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-full ${gradient.replace('bg-gradient-to-br', 'bg')} bg-opacity-10 mb-3`}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
          {comingSoon && (
            <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
          )}
        </div>
        
        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 relative">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{userCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge className={getDifficultyColor(difficulty)} variant="secondary">
            {difficulty}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        {!comingSoon ? (
          <Link to={`/assessment/${id}`}>
            <Button className="w-full group-hover:bg-primary/90 transition-colors">
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button disabled className="w-full">
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;
