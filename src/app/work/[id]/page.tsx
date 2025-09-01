import { projects } from '@/app/data/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageLayout from '@/app/components/PageLayout';

export default async function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === parseInt(resolvedParams.id));

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className={`relative h-[${project.imageHeight ?? 430}px] w-full mb-8`}>
            <Image
              src={project.mainImage ?? project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">{project.fullDescription}</p>
          </div>

          {project.additionalSections && project.additionalSections.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">More Details</h2>
              <hr className="border-gray-400" />
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                {project.additionalSections.map((section, index) => (
                  <div 
                    key={section.id} 
                    className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 mb-8`}
                  >
                    <div className={`relative h-[${section.imageSize ?? 300}px] w-full md:w-1/2`}>
                      <Image
                        src={section.image}
                        alt={`${project.title} - ${section.title}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <span className="text-xl font-semibold mb-2">{section.title}</span>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}