
import { 
  Target, Brain, Compass, Lightbulb, GraduationCap, Briefcase, 
  Globe, BookOpen, Award, TrendingUp, Users, Heart, Palette,
  Calculator, Microscope, Stethoscope, Scale, Camera, Music,
  Code, Database, Smartphone, Laptop, Wrench, Cog, PenTool,
  MessageSquare, BarChart, PieChart
} from "lucide-react";
import { AssessmentCardProps } from "../components/AssessmentCard";

export const assessmentCategories = [
  {
    id: "engineering-tech",
    title: "Engineering & Technology",
    description: "Technical skills, programming, and engineering assessments",
    color: "from-blue-500 to-cyan-500",
    assessments: [
      {
        id: "programming-languages",
        title: "Programming Language Fit",
        description: "Discover which programming languages match your thinking style and career goals",
        icon: Code,
        duration: "8-10 mins",
        difficulty: "Intermediate" as const,
        userCount: "15K+ taken",
        tags: ["Python", "JavaScript", "Java", "C++", "React"],
        category: "Skills & Software",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
      },
      {
        id: "software-tools",
        title: "Software & Tools Assessment",
        description: "Find the right design and development tools for your workflow",
        icon: Laptop,
        duration: "6-8 mins",
        difficulty: "Beginner" as const,
        userCount: "12K+ taken",
        tags: ["Figma", "AutoCAD", "MATLAB", "Photoshop", "Blender"],
        category: "Skills & Software",
        gradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
      },
      {
        id: "engineering-specialization",
        title: "Engineering Specialization",
        description: "Determine the best engineering branch based on your interests and aptitude",
        icon: Cog,
        duration: "12-15 mins",
        difficulty: "Advanced" as const,
        userCount: "25K+ taken",
        tags: ["Mechanical", "Electrical", "Computer", "Civil", "Chemical"],
        category: "Stream Selection",
        gradient: "bg-gradient-to-br from-gray-600 to-blue-600"
      }
    ]
  },
  {
    id: "career-guidance",
    title: "Career & Professional Development",
    description: "Career paths, role fit, and professional growth assessments",
    color: "from-green-500 to-emerald-500",
    assessments: [
      {
        id: "career-personality",
        title: "Career Personality Match",
        description: "Align your personality type with the perfect career path",
        icon: Briefcase,
        duration: "10-12 mins",
        difficulty: "Intermediate" as const,
        userCount: "30K+ taken",
        tags: ["Leadership", "Analytics", "Creative", "Technical", "People"],
        category: "Career Guidance",
        gradient: "bg-gradient-to-br from-green-500 to-emerald-500"
      },
      {
        id: "job-role-fit",
        title: "Job Role Compatibility",
        description: "Find specific job roles that match your skills and interests",
        icon: Target,
        duration: "8-10 mins",
        difficulty: "Intermediate" as const,
        userCount: "18K+ taken",
        tags: ["Data Analyst", "Product Manager", "UX Designer", "Developer"],
        category: "Career Guidance",
        gradient: "bg-gradient-to-br from-teal-500 to-green-500"
      },
      {
        id: "career-pivot",
        title: "Career Change Readiness",
        description: "Assess your readiness and potential for a successful career transition",
        icon: TrendingUp,
        duration: "15-20 mins",
        difficulty: "Advanced" as const,
        userCount: "8K+ taken",
        tags: ["Career Switch", "Upskilling", "Industry Change", "Growth"],
        category: "Professional Development",
        gradient: "bg-gradient-to-br from-orange-500 to-red-500"
      }
    ]
  },
  {
    id: "academic-subjects",
    title: "Academic Subjects & Streams",
    description: "Subject compatibility and academic stream selection",  
    color: "from-purple-500 to-pink-500",
    assessments: [
      {
        id: "subject-affinity",
        title: "Subject Affinity Test",
        description: "Discover which academic subjects align with your natural strengths",
        icon: BookOpen,
        duration: "10-12 mins",
        difficulty: "Intermediate" as const,
        userCount: "22K+ taken",
        tags: ["Mathematics", "Physics", "Chemistry", "Biology", "Literature"],
        category: "Academic Guidance",
        gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
      },
      {
        id: "stream-selection",
        title: "Stream Selection Guide",
        description: "Choose the right academic stream for higher secondary education",
        icon: Compass,
        duration: "12-15 mins",
        difficulty: "Beginner" as const,
        userCount: "35K+ taken",
        tags: ["Science", "Commerce", "Arts", "Vocational", "PCM", "PCB"],
        category: "Stream Selection",
        gradient: "bg-gradient-to-br from-violet-500 to-purple-500"
      },
      {
        id: "research-aptitude",
        title: "Research Aptitude Assessment",
        description: "Evaluate your potential for research and higher studies",
        icon: Microscope,
        duration: "15-18 mins",
        difficulty: "Advanced" as const,
        userCount: "6K+ taken",
        tags: ["PhD", "Masters", "Research", "Academia", "Innovation"],
        category: "Higher Education",
        gradient: "bg-gradient-to-br from-indigo-600 to-blue-600"
      }
    ]
  },
  {
    id: "entrance-exams",
    title: "Entrance Exam Preparation",
    description: "Guidance for competitive exams and entrance tests",
    color: "from-amber-500 to-orange-500",
    assessments: [
      {
        id: "jee-readiness",
        title: "JEE Preparation Strategy",
        description: "Assess your readiness and get personalized JEE preparation guidance",
        icon: Calculator,
        duration: "10-12 mins",
        difficulty: "Advanced" as const,
        userCount: "40K+ taken",
        tags: ["JEE Main", "JEE Advanced", "Physics", "Chemistry", "Math"],
        category: "Entrance Exams",
        gradient: "bg-gradient-to-br from-amber-500 to-orange-500"
      },
      {
        id: "neet-assessment",
        title: "NEET Preparation Guide",
        description: "Medical entrance exam strategy based on your learning style",
        icon: Stethoscope,
        duration: "10-12 mins",
        difficulty: "Advanced" as const,
        userCount: "25K+ taken",
        tags: ["NEET", "Biology", "Chemistry", "Physics", "Medical"],
        category: "Entrance Exams",
        gradient: "bg-gradient-to-br from-red-500 to-pink-500"
      },
      {
        id: "gate-preparation",
        title: "GATE Exam Strategy",
        description: "Optimize your GATE preparation based on your engineering background",
        icon: Award,
        duration: "8-10 mins",
        difficulty: "Advanced" as const,
        userCount: "15K+ taken",
        tags: ["GATE", "PSU", "M.Tech", "Engineering", "Technical"],
        category: "Entrance Exams",
        gradient: "bg-gradient-to-br from-blue-600 to-indigo-600"
      }
    ]
  },
  {
    id: "creative-arts",
    title: "Creative Arts & Design",
    description: "Creative skills, artistic abilities, and design aptitude",
    color: "from-pink-500 to-rose-500",
    assessments: [
      {
        id: "design-aptitude",
        title: "Design Thinking Assessment",
        description: "Evaluate your creative problem-solving and design thinking abilities",
        icon: Palette,
        duration: "12-15 mins",
        difficulty: "Intermediate" as const,
        userCount: "12K+ taken",
        tags: ["UI/UX", "Graphic Design", "Product Design", "Creative"],
        category: "Creative Skills",
        gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
      },
      {
        id: "artistic-medium",
        title: "Artistic Medium Finder",
        description: "Discover which artistic mediums best suit your creative expression",
        icon: PenTool,
        duration: "8-10 mins",
        difficulty: "Beginner" as const,
        userCount: "8K+ taken",
        tags: ["Digital Art", "Traditional Art", "Photography", "Sculpture"],
        category: "Creative Skills",
        gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
      },
      {
        id: "music-aptitude",
        title: "Musical Talent Assessment",
        description: "Explore your musical abilities and potential career paths in music",
        icon: Music,
        duration: "10-12 mins",
        difficulty: "Intermediate" as const,
        userCount: "5K+ taken",
        tags: ["Composition", "Performance", "Production", "Theory"],
        category: "Creative Skills",
        gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
        comingSoon: true
      }
    ]
  },
  {
    id: "business-commerce",
    title: "Business & Commerce",
    description: "Business acumen, entrepreneurship, and commerce skills",
    color: "from-emerald-500 to-teal-500",
    assessments: [
      {
        id: "business-acumen",
        title: "Business Aptitude Test",
        description: "Assess your potential for business leadership and entrepreneurship",
        icon: BarChart,
        duration: "12-15 mins",
        difficulty: "Intermediate" as const,
        userCount: "10K+ taken",
        tags: ["Leadership", "Strategy", "Finance", "Marketing", "Operations"],
        category: "Business Skills",
        gradient: "bg-gradient-to-br from-emerald-500 to-teal-500"
      },
      {
        id: "entrepreneurship",
        title: "Entrepreneur Readiness",
        description: "Evaluate your readiness to start and run your own business",
        icon: TrendingUp,
        duration: "15-18 mins",
        difficulty: "Advanced" as const,
        userCount: "7K+ taken",
        tags: ["Startup", "Innovation", "Risk Management", "Vision"],
        category: "Entrepreneurship",
        gradient: "bg-gradient-to-br from-green-600 to-emerald-600",
        comingSoon: true
      },
      {
        id: "finance-aptitude",
        title: "Finance Career Fit",
        description: "Discover your potential in various finance and investment roles",
        icon: PieChart,
        duration: "10-12 mins",
        difficulty: "Intermediate" as const,
        userCount: "9K+ taken",
        tags: ["Investment", "Banking", "Financial Analysis", "Risk"],
        category: "Finance",
        gradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
        comingSoon: true
      }
    ]
  },
  {
    id: "international-global",
    title: "International & Global Opportunities",
    description: "Study abroad, global careers, and international assessments",
    color: "from-cyan-500 to-blue-500",
    assessments: [
      {
        id: "study-abroad",
        title: "Study Abroad Readiness",
        description: "Assess your preparedness for international education opportunities",
        icon: Globe,
        duration: "15-20 mins",
        difficulty: "Intermediate" as const,
        userCount: "12K+ taken",
        tags: ["USA", "UK", "Canada", "Germany", "Australia", "Scholarships"],
        category: "International",
        gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
        comingSoon: true
      },
      {
        id: "global-career",
        title: "Global Career Opportunities",
        description: "Explore international career paths and remote work opportunities",
        icon: Users,
        duration: "12-15 mins",
        difficulty: "Advanced" as const,
        userCount: "6K+ taken",
        tags: ["Remote Work", "International", "Cross-cultural", "Global"],
        category: "International",
        gradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
        comingSoon: true
      }
    ]
  },
  {
    id: "personality-psychology",
    title: "Personality & Psychology",
    description: "Personality tests, learning styles, and psychological assessments",
    color: "from-rose-500 to-pink-500",
    assessments: [
      {
        id: "learning-style",
        title: "Learning Style Assessment",
        description: "Discover how you learn best and optimize your study methods",
        icon: Brain,
        duration: "8-10 mins",
        difficulty: "Beginner" as const,
        userCount: "28K+ taken",
        tags: ["Visual", "Auditory", "Kinesthetic", "Reading", "Study Tips"],
        category: "Learning",
        gradient: "bg-gradient-to-br from-rose-500 to-pink-500"
      },
      {
        id: "personality-big5",
        title: "Big Five Personality Test",
        description: "Comprehensive personality assessment based on the Big Five model",
        icon: Heart,
        duration: "15-20 mins",
        difficulty: "Intermediate" as const,
        userCount: "20K+ taken",
        tags: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness"],
        category: "Personality",
        gradient: "bg-gradient-to-br from-pink-500 to-rose-500",
        comingSoon: true
      }
    ]
  }
];

export const getAllAssessments = (): AssessmentCardProps[] => {
  return assessmentCategories.flatMap(category => 
    category.assessments.map(assessment => ({
      ...assessment,
      category: category.title
    }))
  );
};

export const getFeaturedAssessments = (): AssessmentCardProps[] => {
  return [
    assessmentCategories[0].assessments[0], // Programming Languages
    assessmentCategories[1].assessments[0], // Career Personality
    assessmentCategories[2].assessments[1], // Stream Selection
    assessmentCategories[6].assessments[0], // Learning Style
  ].map((assessment, index) => ({
    ...assessment,
    category: assessmentCategories[Math.floor(index / 3)].title
  }));
};
