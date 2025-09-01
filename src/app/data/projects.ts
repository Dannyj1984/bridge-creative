export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    mainImage?: string;
    imageHeight?: number;
    fullDescription?: string;
    additionalSections?: ProjectDetail[];
    featured: boolean;
  }

  export interface ProjectDetail {
    id: number;
    title: string;
    description: string;
    image: string;
    imageSize?: number;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Sutton Healthcare',
      description: 'Healthcare logo design',
      image: '/work/sutton/logo-portrait.png',
      mainImage: '/work/sutton/logo-landscape.png',
      fullDescription: 'A sophisticated branding solution for a private healthcare provider, focusing on trust, professionalism, and care.',
      additionalSections: [
        {
          id: 1,
          title: 'Design Process',
          description: 'As part of the design process, we work with you to get the perfect design for your business. Using our expertise, we will create a range of options and work with you to choose the best fit for you.',
          image: '/work/sutton/typography.png',
          imageSize: 700,
        },
        {
          id: 2,
          title: 'Refining',
          description: 'After initial design, we refine and perfect the final design to ensure it meets your expectations.',
          image: '/work/sutton/refining.png',
          imageSize: 800,
        },
        {
          id: 3,
          title: 'Business Cards',
          description: 'A set of custom business cards that represent your brand and make a lasting impression.',
          image: '/work/sutton/business-card.png'
        },
        {
          id: 4,
          title: 'Stationary',
          description: 'Examples of how the new branding can be used for various applications',
          image: '/work/sutton/stationary.png'
        },
        {
          id: 5,
          title: 'Workwear',
          description: 'Branding rolled out across the business for a an all round professional look.',
          image: '/work/sutton/workwear.png'
        },
        {
          id: 6,
          title: 'Signage',
          description: 'Showcase your business to a wider audience',
          image: '/work/sutton/wall-sign.png'
        },
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'Community Netball League',
      description: 'Logo design for a community netball league',
      image: '/work/netball/players-logo.png',
      mainImage: '/work/netball/players-logo.png',
      fullDescription: 'A logo design for a community netball league that represents the sport and the community it serves.',
      additionalSections: [
        {
          id: 1,
          title: 'Netball',
          description: '',
          image: '/work/netball/hoop.png',
        },
        {
          id: 2,
          title: 'Clothing Ideas',
          description: '',
          image: '/work/netball/hoody.png'
        },
        {
          id: 3,
          title: 'Stationary',
          description: '',
          image: '/work/netball/tshirt.png'
        },
        {
          id: 4,
          title: 'Administration',
          description: '',
          image: '/work/netball/paper.png'
        },
        {
          id: 5,
          title: 'Mockups',
          description: '',
          image: '/work/netball/mockups.png'
        },
        {
          id: 6,
          title: 'Lanyards',
          description: 'Showcase your business to a wider audience',
          image: '/work/netball/lanyard.png'
        },
      ],
      featured: true,
    },
    {
      id: 3,
      title: 'Clothes Branding',
      description: 'Modern branding for sports clothing',
      image: '/work/dod.png',
      fullDescription: 'A comprehensive branding project for a modern sports clothing line. We developed a complete visual identity that resonates with active lifestyle enthusiasts.',
      additionalSections: [],
      featured: false,
    },
    {
      id: 4,
      title: 'AW Logistics',
      description: 'Logistics company Branding',
      imageHeight: 430,
      mainImage: '/work/aw/logo-landscape.png',
      image: '/work/aw/road.png',
      fullDescription: 'A sophisticated branding solution for a private healthcare provider, focusing on trust, professionalism, and care.',
      additionalSections: [
        {
          id: 1,
          title: 'Netball',
          description: '',
          image: '/work/aw/logo.png',
        },
        {
          id: 2,
          title: 'Clothing Ideas',
          description: '',
          image: '/work/aw/truck.png',        
        },
        {
          id: 3,
          title: 'Stationary',
          description: '',
          image: '/work/aw/van.png',        
        },
      ],
      featured: true,
    },
  ];