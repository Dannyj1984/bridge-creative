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
          image: '/work/sutton/business-card.webp'
        },
        {
          id: 4,
          title: 'Stationary',
          description: 'Examples of how the new branding can be used for various applications',
          image: '/work/sutton/stationary.png',
          imageSize: 800
        },
        {
          id: 5,
          title: 'Workwear',
          description: 'Branding rolled out across the business for a an all round professional look.',
          image: '/work/sutton/workwear.webp'
        },
        {
          id: 6,
          title: 'Signage',
          description: 'Showcase your business to a wider audience',
          image: '/work/sutton/wall-sign.webp'
        },
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'Community Netball League',
      description: 'Logo design for a community netball league',
      image: '/work/netball/players-logo.webp',
      mainImage: '/work/netball/players-logo.webp',
      fullDescription: 'A logo design for a community netball league that represents the sport and the community it serves.',
      additionalSections: [
        {
          id: 1,
          title: 'Netball',
          description: 'Check out how the community netball league used the logo for their media posts with the logo placed within a netball hoop.',
          image: '/work/netball/hoop.webp',
        },
        {
          id: 2,
          title: 'Clothing Ideas',
          description: 'The logo design was used on various clothing items such as t-shirts, hoodies, and even a baseball cap.',
          image: '/work/netball/hoody.png'
        },
        {
          id: 3,
          title: 'Alernate clothing ideas',
          description: 'And not forgetting the t-shirt!',
          image: '/work/netball/tshirt.webp'
        },
        {
          id: 4,
          title: 'Administration',
          description: 'The logo design was used on various administrative items such as letterheads, business cards, and even a baseball cap.',
          image: '/work/netball/paper.png',
          imageSize: 800
        },
        {
          id: 5,
          title: 'Mockups',
          description: 'A range of mockups to show how the logo can be used in different scenarios.',
          image: '/work/netball/mockups.webp'
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
    // {
    //   id: 3,
    //   title: 'Clothes Branding',
    //   description: 'Modern branding for sports clothing',
    //   image: '/work/dod.png',
    //   fullDescription: 'A comprehensive branding project for a modern sports clothing line. We developed a complete visual identity that resonates with active lifestyle enthusiasts.',
    //   additionalSections: [],
    //   featured: false,
    // },
    {
      id: 4,
      title: 'AW Logistics',
      description: 'Logistics company Branding',
      imageHeight: 430,
      mainImage: '/work/aw/logo-landscape.png',
      image: '/work/aw/road.webp',
      fullDescription: 'A sophisticated branding solution for a private healthcare provider, focusing on trust, professionalism, and care.',
      additionalSections: [
        {
          id: 1,
          title: 'Initial design',
          description: 'The initial design for the AW Logistics brand, set to guide the company forward. It captures the essence of speed, efficiency and professionalism.',
          image: '/work/aw/logo.png',
        },
        {
          id: 2,
          title: 'Vehicle',
          description: 'A vehicle emblazoned with the distinctive AW Logistics brand.',
          image: '/work/aw/truck.webp',        
        },
        {
          id: 3,
          title: 'Options',
          description: 'From corporate to everyday wear, the AW Logistics brand can be adapted to suit various scenarios.',
          image: '/work/aw/van.webp',        
        },
        {
          id: 4,
          title: 'Concept',
          description: 'From the initial design, we refined the AW Logistics brand to create a more professional and contemporary look.',
          image: '/work/aw/logo-mix.webp',
          imageSize: 800       
        },
      ],
      featured: true,
    },
  ];