import Link from 'next/link';

export const metadata = {
  title: 'Garage Door Services Chelsea, AL | Dashiell LLC',
  description: "Professional garage door installation, repair, and maintenance services in Chelsea, AL. Expert technicians, quality products, and reliable service for residential and commercial properties.",
  keywords: 'garage door services Chelsea AL, garage door repair, garage door installation, garage door opener, garage door maintenance, commercial garage doors',
};

export default function GarageDoorsServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Garage Door Services Chelsea, AL</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional garage door installation, repair, and maintenance services for residential and commercial properties.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Garage Door Solutions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide comprehensive garage door services for homeowners and businesses in Chelsea, Alabama. Our experienced technicians deliver reliable solutions for all your garage door needs, from repairs and maintenance to complete installations.
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
              <p className="text-gray-500 dark:text-gray-400 italic">Garage Door Services Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Garage Door Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive garage door solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Garage Door Installation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional installation of high-quality garage doors for new construction or replacement projects. We offer a wide selection of styles, materials, and designs to complement your home.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Steel, aluminum, and wood doors</li>
              <li>Insulated garage doors</li>
              <li>Custom designs and sizes</li>
              <li>Professional installation</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Garage Door Repair</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fast, reliable repair services for all types of garage door issues. Our technicians diagnose and fix problems quickly to restore your garage door's functionality and safety.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Spring replacement</li>
              <li>Cable and track repair</li>
              <li>Panel replacement</li>
              <li>Emergency repair services</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Opener Installation & Repair</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert installation and repair of garage door openers. We offer a variety of models with different features to suit your needs and budget.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Belt, chain, and screw drive openers</li>
              <li>Smart garage door openers</li>
              <li>Battery backup systems</li>
              <li>Keyless entry systems</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preventive Maintenance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Regular maintenance services to keep your garage door operating smoothly and safely. Prevent costly repairs and extend the life of your garage door system.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Lubrication of moving parts</li>
              <li>Hardware tightening and adjustment</li>
              <li>Safety sensor testing</li>
              <li>Spring and cable inspection</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Commercial Garage Doors</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Specialized garage door solutions for commercial and industrial properties. We offer durable, high-performance doors designed for frequent use and security.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Rolling steel doors</li>
              <li>High-speed doors</li>
              <li>Fire-rated doors</li>
              <li>Loading dock equipment</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Garage Door Upgrades</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhance your existing garage door with modern features and improvements. Increase convenience, security, and energy efficiency with our upgrade options.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Insulation installation</li>
              <li>Smart home integration</li>
              <li>Weather sealing</li>
              <li>Decorative hardware</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Garage Door Types */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Garage Door Options</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from a variety of high-quality garage door styles and materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Steel Garage Doors</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Durability</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Maintenance</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★★★★☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Cost</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Steel garage doors offer exceptional durability, security, and low maintenance. Available in various designs and insulation options, they're our most popular choice for Chelsea homes.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Lifespan:</span> 15-30 years with proper maintenance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Wood Garage Doors</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★☆☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Durability</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★☆☆☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Maintenance</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★★☆☆☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Cost</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Wood garage doors provide classic beauty and charm that's unmatched by other materials. They're ideal for traditional and custom home designs where aesthetics are a priority.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Lifespan:</span> 15-20 years with regular maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Garage Door Installation Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a comprehensive process to ensure your garage door project is completed to the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We assess your needs, discuss options, and help you select the perfect garage door for your home or business.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We take precise measurements and prepare the opening for your new garage door installation.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled technicians install your new garage door with precision, ensuring proper alignment and operation.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Testing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We thoroughly test your new garage door system, make final adjustments, and provide usage instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Garage Doors</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier garage door professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Experienced Technicians</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our garage door specialists are factory-trained and certified with years of experience. We stay current with the latest garage door technologies and installation techniques to provide superior service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality Products</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We partner with leading garage door manufacturers to offer premium products that provide reliability, security, and value. We never compromise on quality, ensuring your garage door will perform well for years to come.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Responsive Service</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We understand that garage door issues can disrupt your daily routine. That's why we offer prompt service with flexible scheduling options, including same-day service for emergency repairs in many cases.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our garage door services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does garage door installation take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A standard residential garage door installation typically takes 3-5 hours to complete. This includes removing the old door (if applicable), installing the new door, and setting up the opener. Commercial installations may take longer depending on the size and complexity of the project.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How often should garage door maintenance be performed?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We recommend professional garage door maintenance at least once a year to ensure safe and reliable operation. However, if you use your garage door frequently (multiple times daily), bi-annual maintenance may be beneficial. Regular maintenance helps prevent costly repairs and extends the life of your garage door system.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer warranties on garage door installation?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we provide a 1-year warranty on our workmanship for all garage door installations. Additionally, we pass along all manufacturer warranties, which typically range from 1-10 years for mechanical parts and up to a lifetime limited warranty on certain door components, depending on the manufacturer and model.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Expert Garage Door Service?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and free estimate for your garage door project in Chelsea, AL.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}