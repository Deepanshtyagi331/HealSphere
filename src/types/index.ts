export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
  sourcePage?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  keyTakeaways?: string[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  duration: string;
  lessonsCount: number;
  format: string;
  studentsCount: string;
  rating: number;
  price: string;
  originalPrice?: string;
  badge?: string;
  description: string;
  highlights: string[];
  modules: {
    title: string;
    description: string;
    lessons: string[];
  }[];
  whatYouWillLearn: string[];
  prerequisites: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  conditionOrCourse: string;
  feedback: string;
  rating: number;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
