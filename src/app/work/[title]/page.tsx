import { projects } from '@/app/data/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageLayout from '@/app/components/PageLayout';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ title: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.title?.toLowerCase() === resolvedParams.title?.toLowerCase());

  if (!project) {
    return {
      title: 'Project Not Found | Bridge Creative',
    };
  }

  const title = project.title.replace(/-/g, ' ');

  return {
    title: `${title} | Bridge Creative`,
    description: project.description,
    openGraph: {
      title: `${title} | Bridge Creative`,
      description: project.description,
      images: [project.mainImage ?? project.image],
      type: 'article',
    }
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ title: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.title?.toLowerCase() === resolvedParams.title?.toLowerCase());
  const pageTitle = project?.title?.replace(/-/g, ' ');

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="relative bg-gray-50 min-h-screen py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl text-gray-800 mb-8 tracking-tight">{pageTitle}</h1>

            <div className={`relative h-${project.imageHeight ? '96' : '72'} md:h-[500px] w-full mb-12 shadow-xl rounded-2xl overflow-hidden`}>
              <Image
                src={project.mainImage ?? project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-700"
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw'
                priority={project.mainImage ? true : false}
              />
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-gray-600 leading-relaxed font-light">{project.fullDescription}</p>
            </div>

            {project.additionalSections && project.additionalSections.length > 0 && (
              <div className="mt-16">
                <h2 className="font-display text-4xl mb-8 text-gray-800 text-center">Project Details</h2>
                <div className="w-24 h-1 bg-neutral-900 mx-auto mb-16 rounded-full opacity-20"></div>

                <div className="space-y-24">
                  {project.additionalSections.map((section, index) => (
                    <div
                      key={section.id}
                      className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                    >
                      <div className={`relative h-64 md:h-96 w-full md:w-1/2 shadow-lg rounded-2xl overflow-hidden border border-gray-100 bg-white`}>
                        <Image
                          src={section.image}
                          alt={`${project.title} - ${section.title}`}
                          fill
                          style={{ objectFit: section.orientation === 'vertical' ? 'contain' : 'contain' }}
                          sizes='(max-width: 768px) 100vw, 50vw'
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="font-display text-3xl mb-4 text-gray-800">{section.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{section.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}