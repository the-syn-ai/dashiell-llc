import Link from "next/link";
import { Metadata } from "next";
import { OptimizedImage } from "@/utils/image";
import { getAllServices } from "@/utils/data";
import { StructuredData, dashiellBusinessData, generateLocalBusinessSchema } from "@/utils/seo";
import { Service } from "@/types";

// Set revalidation period for ISR (24 hours)
export const revalidate = 86400;

// Generate metadata for the page
export const metadata: Metadata = {
  title: "Dashiell LLC | Home Improvement Services in Chelsea, Alabama",
  description: "Professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential and commercial properties.",
  keywords: "home improvement, renovation, remodeling, Chelsea, Alabama, construction, home repair",
  alternates: {
    canonical: "https://dashiellllc.com",
  },
};

// Generate static props for the page
async function getPageData() {
  const services = await getAllServices();
  return { services };
}

export default async function Home() {
  // Get data for the page
  const { services } = await getPageData();
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Home Improvement Services in Chelsea, Alabama</h1>
            <p className="text-xl mb-8">Transform your home with our professional renovation and remodeling services.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300">
                Get a Free Quote
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md font-medium transition duration-300">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a wide range of home improvement services to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Kitchen Remodeling</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Transform your kitchen into a beautiful and functional space with our expert remodeling services.
                </p>
                <Link href="/services/kitchen" className="text-blue-800 dark:text-blue-400 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Bathroom Renovation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Upgrade your bathroom with modern fixtures, beautiful tiles, and efficient layouts.
                </p>
                <Link href="/services/bathroom" className="text-blue-800 dark:text-blue-400 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Home Additions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Expand your living space with custom home additions that blend seamlessly with your existing structure.
                </p>
                <Link href="/services/additions" className="text-blue-800 dark:text-blue-400 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to providing exceptional service and quality craftsmanship on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully licensed and insured for your protection and peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Attention to detail and superior workmanship on every project.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clear, detailed estimates with no hidden fees or surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">On-Time Completion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We respect your time and work efficiently to complete projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your home improvement project.
          </p>
          <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
            Contact Us Now
          </Link>
        </div>
      </section>
      {/* Add structured data for SEO */}
      <StructuredData data={generateLocalBusinessSchema(dashiellBusinessData)} />
    </div>
  );
}
