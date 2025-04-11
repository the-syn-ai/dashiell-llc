import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Dashiell LLC',
  description: 'Learn about Dashiell LLC, a trusted home improvement company serving Chelsea, Alabama and surrounding areas.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Company Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Dashiell LLC</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for quality home improvement services in Chelsea, Alabama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2010, Dashiell LLC has been providing exceptional home improvement services to homeowners in Chelsea, Alabama and surrounding areas for over a decade. What started as a small family business has grown into a trusted name in the local construction industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our founder, John Dashiell, began his career as a carpenter and built the company on the principles of quality craftsmanship, attention to detail, and exceptional customer service. These values continue to guide our work today.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Over the years, we've expanded our services to include kitchen and bathroom remodeling, home additions, flooring installation, painting, and general home repairs. Our team has grown to include skilled professionals in various trades, all committed to delivering the highest quality work.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 h-80 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 italic">Company Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 py-12 px-6 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            To transform houses into dream homes through quality craftsmanship, innovative design, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're committed to delivering the highest quality workmanship on every project, no matter the size.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Integrity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We operate with honesty, transparency, and respect in all our client and business relationships.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Focus</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize our clients' needs and satisfaction throughout every phase of the project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the skilled professionals who make your home improvement dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Team Member Photo</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">John Dashiell</h3>
              <p className="text-blue-800 dark:text-blue-400 mb-4">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300">
                With over 25 years of experience in construction and home improvement, John leads our team with expertise and passion.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Team Member Photo</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Sarah Johnson</h3>
              <p className="text-blue-800 dark:text-blue-400 mb-4">Project Manager</p>
              <p className="text-gray-600 dark:text-gray-300">
                Sarah ensures that every project runs smoothly, on time, and within budget while maintaining our high quality standards.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Team Member Photo</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Mike Rodriguez</h3>
              <p className="text-blue-800 dark:text-blue-400 mb-4">Lead Carpenter</p>
              <p className="text-gray-600 dark:text-gray-300">
                Mike's attention to detail and craftsmanship are evident in every project he works on, from custom cabinetry to full renovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your home improvement project and schedule a free consultation.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}