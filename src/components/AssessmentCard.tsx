
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
      case 'Beginner': return 'bg-accent/10 text-accent border-accent/20';
      case 'Intermediate': return 'bg-coral/10 text-coral border-coral/20';
      case 'Advanced': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getGradientClasses = (gradient: string) => {
    const gradientMap: { [key: string]: string } = {
      'bg-gradient-to-br from-blue-600 to-green-600': 'from-primary to-accent',
      'bg-gradient-to-br from-purple-600 to-pink-600': 'from-primary to-coral',
      'bg-gradient-to-br from-green-600 to-blue-600': 'from-accent to-primary',
      'bg-gradient-to-br from-orange-600 to-red-600': 'from-coral to-primary',
      'bg-gradient-to-br from-teal-600 to-blue-600': 'from-accent to-primary',
      'bg-gradient-to-br from-indigo-600 to-purple-600': 'from-primary to-coral'
    };
    return gradientMap[gradient] || 'from-primary to-accent';
  };

  return (
    <Card className={`group hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden bg-gradient-to-br from-white to-purple-light/10 ${comingSoon ? 'opacity-75' : ''}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClasses(gradient)} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      <CardHeader className="pb-4 relative">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-full bg-gradient-to-br ${getGradientClasses(gradient)} shadow-lg mb-3 group-hover:scale-110 transition-transform`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {comingSoon && (
            <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">Coming Soon</Badge>
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
            <div className="p-1 bg-coral/10 rounded-full">
              <Clock className="h-3 w-3 text-coral" />
            </div>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="p-1 bg-accent/10 rounded-full">
              <Users className="h-3 w-3 text-accent" />
            </div>
            <span>{userCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge className={getDifficultyColor(difficulty)} variant="outline">
            {difficulty}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-primary/20 text-primary hover:bg-primary/5">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-primary/20 text-primary hover:bg-primary/5">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        {!comingSoon ? (
          <Link to={`/assessment/${id}`}>
            <Button className={`w-full bg-gradient-to-r ${getGradientClasses(gradient)} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all border-0`}>
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button disabled className="w-full bg-muted text-muted-foreground">
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;
