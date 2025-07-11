export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    credit?: string;
    fullDescription?: string;
    additionalImages?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Clothes Branding',
      description: 'Modern branding for sports clothing',
      image: '/work/dod.png',
      fullDescription: 'A comprehensive branding project for a modern sports clothing line. We developed a complete visual identity that resonates with active lifestyle enthusiasts.',
      additionalImages: []
    },
    {
      id: 2,
      title: 'Healthcare Branding',
      description: 'Private healthcare branding',
      image: '/work/shc.png',
      fullDescription: 'A sophisticated branding solution for a private healthcare provider, focusing on trust, professionalism, and care.',
      additionalImages: []
    }
  ];