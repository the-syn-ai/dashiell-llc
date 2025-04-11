import Link from 'next/link';

export const metadata = {
  title: 'Expert Siding and Exterior Remodeling in Chelsea, AL | Dashiell LLC',
  description: "Professional siding installation and exterior remodeling services in Chelsea, AL. Enhance your home's curb appeal and protection with quality siding solutions from Dashiell LLC.",
  keywords: 'siding installation Chelsea AL, exterior remodeling, vinyl siding, fiber cement siding, home exterior, siding replacement, siding repair',
};

export default function SidingServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Expert Siding and Exterior Remodeling in Chelsea, AL</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your home's appearance and protection with professional siding installation and exterior remodeling services.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quality Siding Solutions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide expert siding installation and exterior remodeling services for homeowners in Chelsea, Alabama. Our experienced team delivers beautiful, durable siding solutions that enhance your home's appearance while providing essential protection from the elements.
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
              <p className="text-gray-500 dark:text-gray-400 italic">Siding Services Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Siding Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive siding and exterior remodeling solutions for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Vinyl Siding Installation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Affordable, versatile vinyl siding that offers excellent durability and minimal maintenance. Available in a wide range of colors and styles to complement your home's architecture.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Premium vinyl siding products</li>
              <li>Insulated vinyl options</li>
              <li>Multiple profile styles</li>
              <li>Professional installation</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Fiber Cement Siding</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Premium fiber cement siding that combines exceptional durability with the authentic look of wood. Resistant to rot, pests, fire, and severe weather conditions.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>James Hardie® fiber cement products</li>
              <li>Wood-grain and smooth textures</li>
              <li>Factory-applied color options</li>
              <li>50-year warranty options</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Engineered Wood Siding</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Beautiful engineered wood siding that offers the authentic look of real wood with enhanced durability and resistance to moisture, decay, and insects.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>LP SmartSide® products</li>
              <li>Multiple profile options</li>
              <li>Pre-finished and paintable options</li>
              <li>Environmentally friendly materials</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Siding Repair & Replacement</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert repair and replacement services for damaged or deteriorating siding. We address issues promptly to prevent further damage to your home's structure.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Storm damage repair</li>
              <li>Section replacement</li>
              <li>Full siding replacement</li>
              <li>Moisture damage remediation</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Trim & Accent Installation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Complete your home's exterior with custom trim and accent pieces that add architectural interest and curb appeal. Available in various materials to complement your siding.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Decorative trim and moldings</li>
              <li>Fascia and soffit installation</li>
              <li>Shutters and accent pieces</li>
              <li>Custom exterior details</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Insulation & Weatherproofing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhance your home's energy efficiency with proper insulation and weatherproofing during siding installation. Reduce energy costs and improve comfort year-round.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>House wrap installation</li>
              <li>Foam board insulation</li>
              <li>Insulated siding options</li>
              <li>Air sealing and moisture barriers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Siding Installation Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a comprehensive process to ensure your siding project is completed to the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation & Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We assess your home, discuss your goals and preferences, and help you select the ideal siding materials and colors.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We remove old siding, repair any damaged areas, and install proper moisture barriers and insulation.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled technicians install your new siding with precision, ensuring proper alignment, secure fastening, and attention to detail.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Touches</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We install trim, complete finishing details, conduct a thorough inspection, and clean up the work area.
            </p>
          </div>
        </div>
      </section>

      {/* Siding Materials */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Siding Materials We Offer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from a variety of high-quality siding materials to suit your style and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Vinyl Siding</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Durability</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Maintenance</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Cost</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Vinyl siding is our most popular option due to its affordability, versatility, and minimal maintenance requirements. Modern vinyl products offer improved durability and realistic textures that mimic wood.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Lifespan:</span> 20-40 years with proper installation and maintenance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Fiber Cement Siding</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Durability</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Maintenance</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★★★☆☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Cost</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fiber cement siding offers exceptional durability and resistance to fire, rot, and pests. It's an excellent investment for homeowners looking for a premium siding option with the authentic look of wood.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Lifespan:</span> 50+ years with proper installation and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Siding</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier siding professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our siding specialists bring years of experience and specialized training to every project. We understand the unique challenges of siding installation in Alabama's climate and ensure proper techniques for lasting results.
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
              We partner with trusted manufacturers to offer premium siding products that provide beauty, durability, and value. We never compromise on quality, ensuring your home's exterior will look great and perform well for years to come.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive Service</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We provide complete exterior solutions, handling everything from old siding removal to installation of new siding, trim, and accessories. Our attention to detail ensures a beautiful, weather-tight exterior that enhances your home's value.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our siding services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does siding installation take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The timeline for siding installation depends on the size of your home and the type of siding selected. A typical residential project takes 1-2 weeks from start to finish. Factors like weather conditions and the need for repairs to the underlying structure can affect the timeline. We'll provide a specific estimate during your consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What's the best siding for Alabama's climate?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              For Alabama's hot, humid climate with occasional severe weather, we typically recommend fiber cement or vinyl siding. Fiber cement offers superior durability and resistance to moisture, while quality vinyl provides good performance at a more affordable price point. Both options can withstand our climate when properly installed with appropriate moisture barriers.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer warranties on siding installation?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we provide a 5-year workmanship warranty on all our siding installations. This covers any issues related to the installation process. Additionally, we pass along all manufacturer warranties, which typically range from 25 years to lifetime limited warranties depending on the siding material chosen.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home's Exterior?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and free estimate for your siding project in Chelsea, AL.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}