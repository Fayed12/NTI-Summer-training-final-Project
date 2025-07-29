import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with Angular and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🌐',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: 'https://demo-ecommerce.com',
      github: 'https://github.com/yourusername/ecommerce-app',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📱',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveDemo: 'https://task-manager-demo.com',
      github: 'https://github.com/yourusername/task-manager',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Data Dashboard',
      description: 'An interactive dashboard for data visualization with charts, graphs, and real-time data updates. Includes filtering and export capabilities.',
      image: '📊',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveDemo: 'https://dashboard-demo.com',
      github: 'https://github.com/yourusername/data-dashboard',
      category: 'Data Visualization'
    },
    {
      id: 4,
      title: 'Multiplayer Game',
      description: 'A real-time multiplayer game built with WebSocket technology. Features include real-time chat, leaderboards, and custom game rooms.',
      image: '🎮',
      technologies: ['JavaScript', 'Socket.io', 'Express', 'Canvas API'],
      liveDemo: 'https://game-demo.com',
      github: 'https://github.com/yourusername/multiplayer-game',
      category: 'Gaming'
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning. Features natural language processing, context awareness, and integration with external APIs.',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI API'],
      liveDemo: 'https://ai-chat-demo.com',
      github: 'https://github.com/yourusername/ai-chatbot',
      category: 'AI/ML'
    },
    {
      id: 6,
      title: 'Mobile App',
      description: 'A cross-platform mobile application for fitness tracking. Includes workout plans, progress tracking, and social features.',
      image: '📱',
      technologies: ['React Native', 'Redux', 'Firebase', 'Expo'],
      liveDemo: 'https://mobile-app-demo.com',
      github: 'https://github.com/yourusername/fitness-app',
      category: 'Mobile'
    }
  ];

  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Full Stack', 'Frontend', 'Data Visualization', 'Gaming', 'AI/ML', 'Mobile'];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

  // openLiveDemo(url: string): void {
  //   if (url && url !== '#') {
  //     window.open(url, '_blank');
  //   } else {
  //     alert('Live demo link will be available soon!');
  //   }
  // }

  // openGitHub(url: string): void {
  //   if (url && url !== '#') {
  //     window.open(url, '_blank');
  //   } else {
  //     alert('GitHub repository will be available soon!');
  //   }
  // }

  onProjectClick(project: Project): void {
    console.log('Project clicked:', project.title);
  }

  getProjectImageClass(index: number): string {
    return `project-image-${index + 1}`;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
