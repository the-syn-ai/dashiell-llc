import Link from 'next/link';
import { Metadata } from 'next';
import { getAllServices } from '@/utils/data';
import { StructuredData, dashiellBusinessData, generateLocalBusinessSchema } from '@/utils/seo';
import { Service } from '@/types';

// Set revalidation period for ISR (24 hours)
export const revalidate = 86400;

// Generate metadata for the page
export const metadata: Metadata = {
  title: 'Our Services | Dashiell LLC',
  description: 'Explore our comprehensive home improvement services in Chelsea, Alabama. From kitchen remodeling to bathroom renovations and home additions.',
  keywords: 'home improvement services, Chelsea Alabama, kitchen remodeling, bathroom renovation, carpentry, painting, drywall, flooring',
  alternates: {
    canonical: 'https://dashiellllc.com/services',
  },
};

// Get data for the page
async function getPageData() {
  const services = await getAllServices();
  return { services };
}

export default async function ServicesPage() {
  // Get data for the page
  const { services: apiServices } = await getPageData();
  const services = [
    {
      id: 'carpentry',
      title: 'Professional Carpentry',
      description: 'Expert carpentry services for custom woodwork, framing, trim work, and more. Quality craftsmanship for all your carpentry needs near Birmingham, AL.',
      features: [
        'Custom cabinetry and built-ins',
        'Trim and finish carpentry',
        'Structural carpentry',
        'Custom woodwork',
        'Deck and outdoor structures',
        'Carpentry repairs',
        'Wood restoration',
      ],
    },
    {
      id: 'painting',
      title: 'Interior & Exterior Painting',
      description: 'Transform your home with professional painting services. Our expert painters deliver beautiful, long-lasting results for interior and exterior surfaces in Chelsea, AL.',
      features: [
        'Interior wall painting',
        'Exterior house painting',
        'Cabinet painting and refinishing',
        'Deck and fence staining',
        'Wallpaper removal and installation',
        'Texture application',
        'Color consultation',
      ],
    },
    {
      id: 'drywall',
      title: 'Drywall Installation & Repair',
      description: 'Professional drywall services with flawless finishes. From new installations to repairs and texturing, we deliver quality results for homes and businesses in Chelsea, Alabama.',
      features: [
        'New drywall installation',
        'Drywall repair and patching',
        'Drywall finishing',
        'Texture application',
        'Ceiling installation and repair',
        'Specialty drywall solutions',
        'Moisture damage restoration',
      ],
    },
    {
      id: 'flooring',
      title: 'Flooring Installation',
      description: 'Update your home with beautiful, durable flooring installed by experienced professionals. We offer a variety of flooring options to suit your style and budget near Chelsea, AL.',
      features: [
        'Hardwood flooring installation',
        'Laminate flooring installation',
        'Tile flooring installation',
        'Vinyl flooring installation',
        'Carpet installation',
        'Floor repair and refinishing',
        'Subfloor preparation and repair',
      ],
    },
    {
      id: 'siding',
      title: 'Siding & Exterior Remodeling',
      description: 'Enhance your home\'s appearance and protection with professional siding installation and exterior remodeling services in Chelsea, AL.',
      features: [
        'Vinyl siding installation',
        'Fiber cement siding',
        'Engineered wood siding',
        'Siding repair and replacement',
        'Trim and accent installation',
        'Insulation and weatherproofing',
        'Exterior makeovers',
      ],
    },
    {
      id: 'garage-doors',
      title: 'Garage Door Services',
      description: 'Professional garage door installation, repair, and maintenance services for residential and commercial properties in Chelsea, AL.',
      features: [
        'Garage door installation',
        'Garage door repair',
        'Opener installation and repair',
        'Preventive maintenance',
        'Commercial garage doors',
        'Garage door upgrades',
        'Emergency service',
      ],
    },
    {
      id: 'closets',
      title: 'Custom Closet Installation',
      description: 'Transform your storage spaces with custom-designed closet solutions tailored to your needs and style in Chelsea, Alabama.',
      features: [
        'Walk-in closet design',
        'Reach-in closet solutions',
        'Pantry organization',
        'Laundry room storage',
        'Garage storage systems',
        'Home office organization',
        'Custom shelving and drawers',
      ],
    },
    {
      id: 'water-damage',
      title: 'Water Damage Restoration',
      description: 'Fast, professional restoration services for homes and businesses affected by water damage in Chelsea, AL.',
      features: [
        'Emergency water extraction',
        'Structural drying',
        'Mold remediation',
        'Sewage cleanup',
        'Content restoration',
        'Reconstruction services',
        '24/7 emergency response',
      ],
    },
    {
      id: 'kitchen',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a beautiful and functional space with our expert remodeling services. We handle everything from cabinet installation to countertop replacement and full kitchen renovations.',
      features: [
        'Custom cabinet design and installation',
        'Countertop replacement and installation',
        'Kitchen island design and construction',
        'Backsplash installation',
        'Lighting upgrades',
        'Flooring installation',
        'Appliance installation',
      ],
    },
    {
      id: 'bathroom',
      title: 'Bathroom Renovation',
      description: 'Upgrade your bathroom with modern fixtures, beautiful tiles, and efficient layouts. Our bathroom renovation services can transform your outdated bathroom into a luxurious retreat.',
      features: [
        'Shower and tub installation',
        'Vanity and cabinet installation',
        'Tile installation',
        'Toilet installation',
        'Lighting and ventilation upgrades',
        'Accessibility modifications',
        'Water-efficient fixture installation',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At Dashiell LLC, we offer a comprehensive range of home improvement services to meet all your needs. Our team of skilled professionals is dedicated to delivering quality craftsmanship and exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What We Offer:</h3>
              <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-300 space-y-1">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link 
                href={`/services/${service.id}`} 
                className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need a Custom Service?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Don't see what you're looking for? We offer custom solutions tailored to your specific needs. Contact us today to discuss your project.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300"
        >
          Contact Us
        </Link>
      </div>
      {/* Add structured data for SEO */}
      <StructuredData
        data={generateLocalBusinessSchema({
          ...dashiellBusinessData,
          name: `${dashiellBusinessData.name} - Services`,
          description: 'Professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential and commercial properties.',
        })}
      />
    </div>
  );
}