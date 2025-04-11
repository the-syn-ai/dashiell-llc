import Link from 'next/link';

export const metadata = {
  title: 'Custom Closet Installation Chelsea, Alabama | Dashiell LLC',
  description: "Professional custom closet design and installation services in Chelsea, Alabama. Transform your storage spaces with tailored solutions that maximize organization and efficiency.",
  keywords: 'custom closet installation Chelsea Alabama, closet design, walk-in closets, reach-in closets, closet organization, custom storage solutions',
};

export default function ClosetsServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Custom Closet Installation Chelsea, Alabama</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your storage spaces with custom-designed closet solutions tailored to your needs and style.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Closet Solutions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we design and install custom closet systems that maximize your storage space while reflecting your personal style. Our experienced team creates tailored solutions for walk-in closets, reach-in closets, pantries, and other storage areas throughout your home.
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
              <p className="text-gray-500 dark:text-gray-400 italic">Custom Closet Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Custom Closet Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive closet and storage solutions for every room in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Walk-In Closet Design</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transform your walk-in closet into a luxurious, organized space with custom shelving, hanging areas, drawers, and specialty storage designed specifically for your needs and wardrobe.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Double-hang and long-hang sections</li>
              <li>Custom drawer configurations</li>
              <li>Shoe and accessory storage</li>
              <li>Islands and seating options</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reach-In Closet Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Maximize the functionality of smaller closets with space-efficient designs that make the most of every inch. Our reach-in closet solutions provide organized storage while maintaining accessibility.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Adjustable shelving systems</li>
              <li>Multi-level hanging rods</li>
              <li>Pull-out baskets and hampers</li>
              <li>Space-saving accessories</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pantry Organization</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create an organized, efficient pantry with custom shelving, pull-out drawers, and specialized storage solutions designed for food items, small appliances, and kitchen essentials.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Adjustable shelving</li>
              <li>Pull-out drawers and baskets</li>
              <li>Door-mounted storage</li>
              <li>Custom spice racks</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Laundry Room Storage</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhance your laundry room functionality with custom cabinets, shelving, and specialized storage for cleaning supplies, linens, and laundry essentials.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Overhead cabinets</li>
              <li>Sorting hamper systems</li>
              <li>Folding counters</li>
              <li>Ironing board storage</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Garage Storage Systems</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Reclaim your garage space with custom storage solutions including cabinets, shelving, workbenches, and wall organization systems designed for tools, sporting equipment, and seasonal items.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Heavy-duty cabinets</li>
              <li>Wall organization panels</li>
              <li>Overhead storage racks</li>
              <li>Specialized tool storage</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Home Office Organization</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create a productive, organized home office with custom desks, shelving, file storage, and cabinetry designed to accommodate your work style and equipment needs.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Built-in desks and workstations</li>
              <li>File drawer systems</li>
              <li>Bookcase and display shelving</li>
              <li>Technology management solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Custom Closet Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a detailed process to create the perfect storage solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We meet to discuss your storage needs, assess your space, and understand your style preferences and budget.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We create a custom design with 3D renderings to visualize your new storage space before installation begins.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fabrication</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your custom components are precisely cut and prepared according to your approved design specifications.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled installers transform your space with precision, attention to detail, and minimal disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Material & Finish Options</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from a variety of high-quality materials and finishes to match your style and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Melamine Systems</h3>
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
                <span className="text-sm text-gray-600 dark:text-gray-300">Value</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our most popular option, melamine offers excellent durability and value with a wide range of color and texture options. These systems are resistant to scratches, stains, and moisture, making them perfect for everyday use.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Available in:</span> Solid colors, wood grains, and textured finishes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Wood Veneer Systems</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Durability</span>
              </div>
              <div className="flex items-center mr-4">
                <span className="text-yellow-500 mr-1">★★★☆☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Maintenance</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★★★☆☆</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Value</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For a more luxurious look, our wood veneer systems offer the natural beauty of real wood with enhanced stability. These premium systems add warmth and elegance to any closet or storage space.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Available in:</span> Maple, cherry, oak, walnut, and other premium wood species.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Custom Closets</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier custom closet professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Custom Design Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our designers specialize in creating storage solutions that maximize space while reflecting your personal style. We take the time to understand your specific needs and preferences to create a truly customized solution.
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
              We use only premium materials and hardware that ensure durability and longevity. Our closet systems are built to withstand daily use while maintaining their beauty and functionality for years to come.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Professional Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled installers have years of experience and take pride in their craftsmanship. They work efficiently and neatly, ensuring your new storage system is installed perfectly with minimal disruption to your home.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our custom closet services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does a custom closet installation take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The timeline varies based on the size and complexity of your project. A standard reach-in closet typically takes 1 day to install, while larger walk-in closets may take 2-3 days. Custom pantries and garage systems can vary from 1-4 days depending on the scope. We'll provide a specific timeline during your consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do I need to empty my closet before installation?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we ask that you remove all items from the space before our installation team arrives. This allows our installers to work efficiently and protects your belongings from dust or damage during the installation process. We'll provide specific preparation instructions before your scheduled installation date.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer warranties on custom closet installations?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we provide a limited lifetime warranty on all our custom closet systems. This covers defects in materials and workmanship for as long as you own your home. Our hardware components typically come with manufacturer warranties ranging from 5 years to lifetime coverage, depending on the specific items.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Storage Spaces?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a free design consultation for your custom closet project in Chelsea, Alabama.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Schedule Your Free Consultation
        </Link>
      </section>
    </div>
  );
}