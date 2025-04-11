import Link from 'next/link';
import { Metadata } from 'next';
import { CarpentryIcon } from '@/components/icons';
import { getServiceBySlug } from '@/utils/data';
import { StructuredData, dashiellBusinessData, generateLocalBusinessSchema } from '@/utils/seo';
import { OptimizedImage } from '@/utils/image';
import { Service } from '@/types';

// Set revalidation period for ISR (24 hours)
export const revalidate = 86400;

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const service = await getServiceBySlug('carpentry');
  
  if (!service) {
    return {
      title: 'Carpentry Services | Dashiell LLC',
      description: 'Professional carpentry services by Dashiell LLC.',
    };
  }
  
  return {
    title: service.title + ' | Dashiell LLC',
    description: service.description,
    keywords: service.keywords?.join(', '),
    alternates: {
      canonical: 'https://dashiellllc.com/services/carpentry',
    },
  };
}

// Get data for the page
async function getPageData() {
  const service = await getServiceBySlug('carpentry');
  return { service };
}

export default async function CarpentryServicePage() {
  const { service } = await getPageData();
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <CarpentryIcon width={64} height={64} className="text-blue-800 dark:text-blue-300" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Carpentry Services near Birmingham, AL</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert craftsmanship and quality woodworking solutions for your home or business.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skilled Carpentry for Every Project</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide exceptional carpentry services throughout the Birmingham area, including Chelsea, AL. Our skilled carpenters combine traditional craftsmanship with modern techniques to deliver beautiful, functional, and lasting results for your home or business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
                    Get a Free Quote
                  </Link>
                  <Link href="/services" className="bg-white text-blue-800 border border-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-80 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Carpentry Services Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Carpentry Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From structural framing to fine finish work, we offer comprehensive carpentry solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Custom Cabinetry</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transform your kitchen, bathroom, or any room with our custom-built cabinetry. We design and craft cabinets that maximize your space while reflecting your personal style.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Kitchen cabinets and islands</li>
              <li>Bathroom vanities</li>
              <li>Built-in shelving and storage</li>
              <li>Entertainment centers</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Trim & Finish Carpentry</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Elevate your home's interior with expert trim and finish carpentry. Our attention to detail brings elegance and character to any space.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Crown molding installation</li>
              <li>Wainscoting and paneling</li>
              <li>Custom door and window trim</li>
              <li>Baseboards and chair rails</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Structural Carpentry</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build a solid foundation for your project with our structural carpentry services. We ensure precision, strength, and code compliance.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Framing for additions and renovations</li>
              <li>Beam and post installation</li>
              <li>Subfloor installation</li>
              <li>Roof framing and repair</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Custom Woodwork</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhance your home with beautiful custom woodwork that adds value and character. Our craftsmen create unique pieces tailored to your vision.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Mantels and fireplace surrounds</li>
              <li>Built-in bookshelves</li>
              <li>Custom furniture pieces</li>
              <li>Decorative wood accents</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Deck & Outdoor Structures</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Extend your living space outdoors with custom-built decks, pergolas, and other outdoor structures designed for both beauty and durability.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Custom deck design and construction</li>
              <li>Pergolas and gazebos</li>
              <li>Outdoor kitchens and living spaces</li>
              <li>Fencing and gates</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Carpentry Repairs</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Restore and maintain your home's woodwork with our expert repair services. We address damage and wear to keep your home looking its best.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Rotted wood replacement</li>
              <li>Door and window repairs</li>
              <li>Staircase and railing repairs</li>
              <li>Structural damage restoration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Carpentry Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a detailed process to ensure your carpentry project exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We meet to discuss your vision, requirements, and budget. Our experts provide guidance and creative solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Design & Planning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We create detailed plans and designs, select materials, and establish a timeline for your project.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Craftsmanship</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled carpenters execute the project with precision, using quality materials and proven techniques.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We thoroughly inspect the completed work to ensure it meets our high standards and your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Carpentry</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with skilled professionals who care about quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Craftsmanship</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our carpenters bring years of experience and a passion for woodworking to every project. We take pride in our attention to detail and commitment to excellence.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality Materials</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use only premium materials that ensure durability and beauty. Our relationships with trusted suppliers allow us to offer the best products at competitive prices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Local Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              As a Birmingham area contractor, we understand the local architectural styles and building requirements. Our knowledge of the region ensures your project complies with all local codes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our carpentry services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does a typical carpentry project take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Project timelines vary based on scope and complexity. Small projects like trim work might take a few days, while custom cabinetry or structural work could take several weeks. During our initial consultation, we'll provide a detailed timeline specific to your project.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Are you licensed and insured for carpentry work?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, Dashiell LLC is fully licensed and insured for all carpentry services we provide. We maintain comprehensive liability insurance and workers' compensation coverage for your protection and peace of mind.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What types of wood do you work with?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We work with a wide variety of woods including oak, maple, cherry, walnut, pine, cedar, and more. We can help you select the best wood type for your project based on appearance, durability, and budget considerations.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you provide warranties on your carpentry work?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we stand behind our craftsmanship with a comprehensive warranty. All our carpentry work comes with a 1-year warranty on workmanship, and we honor all manufacturer warranties on materials used in your project.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Carpentry Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and get a free quote for your carpentry needs in Birmingham, Chelsea, and surrounding areas.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Your Free Quote
        </Link>
      </section>
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