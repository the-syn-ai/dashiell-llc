import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getServiceBySlug, getAllServices } from '@/utils/data';
import { StructuredData, dashiellBusinessData, generateLocalBusinessSchema } from '@/utils/seo';
import { Service } from '@/types';

// Set revalidation period for ISR (24 hours)
export const revalidate = 86400;

// Generate static params for all valid slugs
export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map(service => ({
    slug: service.slug,
  }));
}

// Generate metadata for the page based on the slug
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Get the service data
  const service = await getServiceBySlug(params.slug);
  
  // Check if the service exists
  if (!service) {
    return {
      title: 'Service Not Found | Dashiell LLC',
      description: 'The requested service page could not be found.',
    };
  }

  // Return the metadata for the specific service
  return {
    title: service.title + ' | Dashiell LLC',
    description: service.description,
    keywords: service.keywords?.join(', '),
    alternates: {
      canonical: `https://dashiellllc.com/services/${service.slug}`,
    },
  };
}

// The dynamic page component
// Using a more specific type for the params to fix TypeScript error
type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ServicePage({ params }: PageProps) {
  // Get the service data
  const service = await getServiceBySlug(params.slug);
  
  // Check if the service exists
  if (!service) {
    notFound();
  }

  // Render the service page
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {service.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {service.description}
        </p>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">
            Please visit our dedicated service page for complete information about this service.
          </p>
        </div>
      </div>
      
      {/* Add structured data for SEO */}
      <StructuredData 
        data={generateLocalBusinessSchema({
          ...dashiellBusinessData,
          name: `${dashiellBusinessData.name} - ${service.title}`,
          description: service.description,
        })} 
      />
    </div>
  );
}