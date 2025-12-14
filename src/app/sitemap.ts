import { MetadataRoute } from 'next';
import { projects } from '@/app/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.bridgecreative.co.uk';

    // Static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/work',
        '/contact',
        '/services/logo-design',
        '/services/print-design',
        '/services/digital-design',
        '/services/branding',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/work/${project.title}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes];
}
