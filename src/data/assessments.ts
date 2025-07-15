import {
  ArrowRight,
  ArrowRightLeft,
  Award,
  BarChart,
  BookOpen,
  Bot,
  Brain,
  Brush,
  Code,
  Cog,
  Compass,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Monitor,
  Palette,
  Plane,
  Rocket,
  Search,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-react';

export interface Assessment {
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
  featured?: boolean;
}

export const assessments: Assessment[] = [
  // High School & Stream Selection
  {
    id: 'high-school-stream-selector',
    title: 'High School Stream Selector',
    description: 'Find the perfect academic stream (Science, Commerce, Arts) based on your interests, aptitude, and career goals.',
    icon: GraduationCap,
    duration: '8-10 mins',
    difficulty: 'Beginner',
    userCount: '15K+',
    tags: ['Stream Selection', 'Career Planning', 'Academic Path'],
    category: 'High School',
    gradient: 'from-primary to-accent',
    featured: true
  },
  {
    id: 'engineering-branch-explorer',
    title: 'Engineering Branch Explorer',
    description: 'Explore different engineering branches and find the best fit for your skills and interests.',
    icon: Compass,
    duration: '10-12 mins',
    difficulty: 'Intermediate',
    userCount: '12K+',
    tags: ['Engineering', 'Career Guidance', 'Specialization'],
    category: 'High School',
    gradient: 'from-coral to-primary'
  },
  {
    id: 'medical-field-advisor',
    title: 'Medical Field Advisor',
    description: 'Get personalized recommendations for medical specializations based on your strengths and preferences.',
    icon: Heart,
    duration: '12-15 mins',
    difficulty: 'Advanced',
    userCount: '8K+',
    tags: ['Medical', 'Career Planning', 'Specialization'],
    category: 'High School',
    gradient: 'from-accent to-primary'
  },
  {
    id: 'arts-humanities-guide',
    title: 'Arts & Humanities Guide',
    description: 'Discover career paths in arts and humanities that align with your creative talents and intellectual curiosity.',
    icon: Lightbulb,
    duration: '8-10 mins',
    difficulty: 'Beginner',
    userCount: '5K+',
    tags: ['Arts', 'Humanities', 'Career Exploration'],
    category: 'High School',
    gradient: 'from-primary to-coral'
  },

  // Skills & Software Assessments
  {
    id: 'programming-aptitude',
    title: 'Programming Aptitude Test',
    description: 'Discover if programming is right for you and which languages match your thinking style.',
    icon: Code,
    duration: '12-15 mins',
    difficulty: 'Intermediate',
    userCount: '25K+',
    tags: ['Programming', 'Software Development', 'Logic'],
    category: 'Skills & Software',
    gradient: 'from-primary to-coral',
    featured: true
  },

  {
    id: 'design-thinking-assessment',
    title: 'Design Thinking & UX Assessment',
    description: 'Evaluate your design mindset and potential for UX/UI design careers.',
    icon: Palette,
    duration: '10-12 mins',
    difficulty: 'Beginner',
    userCount: '12K+',
    tags: ['Design', 'UX/UI', 'Creative Problem Solving'],
    category: 'Skills & Software',
    gradient: 'from-accent to-primary'
  },

  {
    id: 'data-analysis-readiness',
    title: 'Data Analysis Readiness',
    description: 'Assess your analytical thinking and readiness for data science careers.',
    icon: BarChart,
    duration: '10-12 mins',
    difficulty: 'Intermediate',
    userCount: '18K+',
    tags: ['Data Science', 'Analytics', 'Statistics'],
    category: 'Skills & Software',
    gradient: 'from-coral to-primary'
  },

  {
    id: 'autocad-mechanical-fit',
    title: 'AutoCAD & Mechanical Design Fit',
    description: 'Determine your aptitude for CAD software and mechanical design work.',
    icon: Wrench,
    duration: '8-10 mins',
    difficulty: 'Intermediate',
    userCount: '8K+',
    tags: ['AutoCAD', 'Mechanical Design', 'Engineering'],
    category: 'Skills & Software',
    gradient: 'from-accent to-primary'
  },

  // Career & Role Assessments
  {
    id: 'software-engineer-readiness',
    title: 'Software Engineer Career Fit',
    description: 'Comprehensive assessment for aspiring software engineers covering technical and soft skills.',
    icon: Monitor,
    duration: '15-18 mins',
    difficulty: 'Advanced',
    userCount: '30K+',
    tags: ['Software Engineering', 'Career Planning', 'Technical Skills'],
    category: 'Career & Roles',
    gradient: 'from-primary to-accent',
    featured: true
  },

  {
    id: 'product-manager-assessment',
    title: 'Product Manager Potential',
    description: 'Evaluate your skills for product management roles in tech companies.',
    icon: Target,
    duration: '12-15 mins',
    difficulty: 'Advanced',
    userCount: '14K+',
    tags: ['Product Management', 'Strategy', 'Leadership'],
    category: 'Career & Roles',
    gradient: 'from-coral to-primary'
  },

  {
    id: 'data-scientist-pathway',
    title: 'Data Scientist Career Path',
    description: 'Assess your readiness for data science roles and identify skill gaps.',
    icon: Brain,
    duration: '15-18 mins',
    difficulty: 'Advanced',
    userCount: '22K+',
    tags: ['Data Science', 'Machine Learning', 'Research'],
    category: 'Career & Roles',
    gradient: 'from-accent to-primary'
  },

  // Subject Suitability
  {
    id: 'engineering-branch-selector',
    title: 'Engineering Branch Selector',
    description: 'Find which engineering discipline aligns best with your interests and aptitude.',
    icon: Cog,
    duration: '12-15 mins',
    difficulty: 'Intermediate',
    userCount: '35K+',
    tags: ['Engineering', 'Specialization', 'Career Path'],
    category: 'Subject Suitability',
    gradient: 'from-primary to-coral',
    featured: true
  },

  {
    id: 'commerce-vs-science',
    title: 'Commerce vs Science Stream',
    description: 'Detailed comparison to help you choose between Commerce and Science streams.',
    icon: TrendingUp,
    duration: '10-12 mins',
    difficulty: 'Beginner',
    userCount: '20K+',
    tags: ['Stream Selection', 'Commerce', 'Science'],
    category: 'Subject Suitability',
    gradient: 'from-coral to-primary'
  },

  // Stream Switching & Transitions
  {
    id: 'career-switch-readiness',
    title: 'Career Switch Readiness',
    description: 'Evaluate if you\'re ready to make a major career transition and in which direction.',
    icon: ArrowRight,
    duration: '15-20 mins',
    difficulty: 'Advanced',
    userCount: '16K+',
    tags: ['Career Change', 'Transition Planning', 'Skills Assessment'],
    category: 'Stream Switching',
    gradient: 'from-accent to-primary',
    featured: true
  },

  {
    id: 'mechanical-to-cs',
    title: 'Mechanical to Computer Science',
    description: 'Specific guidance for mechanical engineers looking to transition into CS/IT.',
    icon: ArrowRightLeft,
    duration: '12-15 mins',
    difficulty: 'Intermediate',
    userCount: '9K+',
    tags: ['Career Switch', 'Mechanical to IT', 'Transition'],
    category: 'Stream Switching',
    gradient: 'from-primary to-accent'
  },

  // Creative & Arts
  {
    id: 'creative-career-explorer',
    title: 'Creative Career Explorer',
    description: 'Discover your creative strengths and matching career paths in arts and design.',
    icon: Brush,
    duration: '10-12 mins',
    difficulty: 'Beginner',
    userCount: '11K+',
    tags: ['Creative Arts', 'Design', 'Media'],
    category: 'Creative & Arts',
    gradient: 'from-coral to-primary'
  },

  {
    id: 'digital-art-vs-traditional',
    title: 'Digital Art vs Traditional Art',
    description: 'Find whether digital or traditional art mediums suit your creative style better.',
    icon: Palette,
    duration: '8-10 mins',
    difficulty: 'Beginner',
    userCount: '7K+',
    tags: ['Digital Art', 'Traditional Art', 'Creative Medium'],
    category: 'Creative & Arts',
    gradient: 'from-accent to-primary'
  },

  // Business & Commerce
  {
    id: 'entrepreneurship-readiness',
    title: 'Entrepreneurship Readiness',
    description: 'Assess your entrepreneurial mindset and readiness to start your own business.',
    icon: Rocket,
    duration: '12-15 mins',
    difficulty: 'Intermediate',
    userCount: '13K+',
    tags: ['Entrepreneurship', 'Business', 'Startup'],
    category: 'Business & Commerce',
    gradient: 'from-primary to-coral'
  },

  {
    id: 'finance-career-fit',
    title: 'Finance Career Compatibility',
    description: 'Evaluate your fit for various finance roles from analyst to investment banking.',
    icon: DollarSign,
    duration: '10-12 mins',
    difficulty: 'Intermediate',
    userCount: '15K+',
    tags: ['Finance', 'Banking', 'Investment'],
    category: 'Business & Commerce',
    gradient: 'from-coral to-primary'
  },

  // International & Global
  {
    id: 'study-abroad-readiness',
    title: 'Study Abroad Readiness',
    description: 'Comprehensive assessment of your preparedness for international education.',
    icon: Globe,
    duration: '15-18 mins',
    difficulty: 'Advanced',
    userCount: '12K+',
    tags: ['Study Abroad', 'International Education', 'Global Careers'],
    category: 'International & Global',
    gradient: 'from-accent to-primary'
  },

  {
    id: 'global-career-opportunities',
    title: 'Global Career Opportunities',
    description: 'Explore international career paths and assess your global mobility potential.',
    icon: Plane,
    duration: '12-15 mins',
    difficulty: 'Intermediate',
    userCount: '8K+',
    tags: ['Global Careers', 'International Work', 'Mobility'],
    category: 'International & Global',
    gradient: 'from-primary to-accent'
  },

  // Personality & Learning Style
  {
    id: 'learning-style-optimizer',
    title: 'Learning Style Optimizer',
    description: 'Discover your optimal learning methods and study strategies for better academic performance.',
    icon: BookOpen,
    duration: '8-10 mins',
    difficulty: 'Beginner',
    userCount: '20K+',
    tags: ['Learning Style', 'Study Methods', 'Academic Success'],
    category: 'Personality & Learning',
    gradient: 'from-coral to-primary'
  },

  {
    id: 'leadership-potential',
    title: 'Leadership Potential Assessment',
    description: 'Evaluate your leadership qualities and potential for management roles.',
    icon: Users,
    duration: '12-15 mins',
    difficulty: 'Intermediate',
    userCount: '17K+',
    tags: ['Leadership', 'Management', 'Team Skills'],
    category: 'Personality & Learning',
    gradient: 'from-primary to-accent'
  },

  // Graduate & Professional
  {
    id: 'mba-readiness',
    title: 'MBA Readiness Assessment',
    description: 'Evaluate your readiness for MBA programs and business school applications.',
    icon: Award,
    duration: '15-18 mins',
    difficulty: 'Advanced',
    userCount: '10K+',
    tags: ['MBA', 'Business School', 'Higher Education'],
    category: 'Graduate & Professional',
    gradient: 'from-accent to-primary'
  },

  {
    id: 'research-aptitude',
    title: 'Research Aptitude Test',
    description: 'Assess your potential for research work and academic careers.',
    icon: Search,
    duration: '12-15 mins',
    difficulty: 'Advanced',
    userCount: '9K+',
    tags: ['Research', 'Academia', 'PhD Preparation'],
    category: 'Graduate & Professional',
    gradient: 'from-coral to-primary'
  },

  // Coming Soon
  {
    id: 'ai-ml-specialization',
    title: 'AI/ML Specialization Fit',
    description: 'Assess your readiness for artificial intelligence and machine learning careers.',
    icon: Bot,
    duration: '15-18 mins',
    difficulty: 'Advanced',
    userCount: '0',
    tags: ['AI/ML', 'Technology', 'Future Careers'],
    category: 'Skills & Software',
    gradient: 'from-primary to-accent',
    comingSoon: true
  },

  {
    id: 'medical-career-explorer',
    title: 'Medical Career Explorer',
    description: 'Comprehensive assessment for aspiring medical professionals across all specializations.',
    icon: Heart,
    duration: '18-20 mins',
    difficulty: 'Advanced',
    userCount: '0',
    tags: ['Medical', 'Healthcare', 'NEET Preparation'],
    category: 'Career & Roles',
    gradient: 'from-coral to-primary',
    comingSoon: true
  }
];

export const getFeaturedAssessments = (): Assessment[] => {
  return assessments.filter(assessment => assessment.featured);
};
