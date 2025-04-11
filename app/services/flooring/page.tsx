import Link from 'next/link';

export const metadata = {
  title: 'Reliable Flooring and Tiling Contractors near Chelsea, AL | Dashiell LLC',
  description: 'Expert flooring and tiling services near Chelsea, AL. Professional installation of hardwood, laminate, tile, vinyl, and carpet flooring. Quality craftsmanship guaranteed.',
  keywords: 'flooring contractors Chelsea AL, tile installation, hardwood flooring, laminate flooring, vinyl flooring, carpet installation, floor repair',
};

export default function FlooringServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Reliable Flooring and Tiling Contractors near Chelsea, AL</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your home with beautiful, durable flooring installed by experienced professionals.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Flooring Solutions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide comprehensive flooring services for homeowners and businesses in Chelsea, Alabama and surrounding areas. Our skilled team delivers precise installation, quality materials, and exceptional craftsmanship for all your flooring needs.
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
              <p className="text-gray-500 dark:text-gray-400 italic">Flooring Services Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Flooring Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive flooring solutions for every room in your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Hardwood Flooring</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Beautiful, timeless hardwood flooring installation that adds warmth and value to your home. We offer a variety of wood species, finishes, and installation patterns.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Solid hardwood installation</li>
              <li>Engineered hardwood installation</li>
              <li>Custom patterns and inlays</li>
              <li>Refinishing and restoration</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tile Flooring</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert tile installation for kitchens, bathrooms, entryways, and more. We work with ceramic, porcelain, natural stone, and specialty tiles.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Ceramic and porcelain tile</li>
              <li>Natural stone (marble, granite, travertine)</li>
              <li>Custom tile patterns and designs</li>
              <li>Heated floor systems</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Laminate Flooring</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Affordable, durable laminate flooring that mimics the look of hardwood or tile at a fraction of the cost. Perfect for high-traffic areas and families with children or pets.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Premium laminate installation</li>
              <li>Water-resistant options</li>
              <li>Various styles and finishes</li>
              <li>Proper underlayment installation</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Luxury Vinyl Flooring</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Versatile, waterproof vinyl flooring that combines beauty with exceptional durability. Available in planks (LVP) or tiles (LVT) with realistic wood or stone appearances.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Luxury vinyl plank (LVP) installation</li>
              <li>Luxury vinyl tile (LVT) installation</li>
              <li>Waterproof options</li>
              <li>Click-lock or glue-down methods</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Carpet Installation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional carpet installation that provides comfort, warmth, and sound absorption. We offer a wide selection of carpet styles, colors, and textures.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Wall-to-wall carpet installation</li>
              <li>Carpet tile installation</li>
              <li>Stair carpet installation</li>
              <li>Padding selection and installation</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Floor Repair & Refinishing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert repair and refinishing services to restore the beauty of your existing floors. We address damage, wear, and outdated finishes.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Hardwood floor refinishing</li>
              <li>Board replacement</li>
              <li>Tile repair and replacement</li>
              <li>Subfloor repair</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Flooring Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a detailed process to ensure your flooring project exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We discuss your needs, preferences, and budget while evaluating your space.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Material Selection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We help you select the perfect flooring materials for your lifestyle and design preferences.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prepare the subfloor, remove old flooring, and address any underlying issues.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our skilled technicians install your new flooring with precision and attention to detail.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">5</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We conduct a thorough inspection and clean-up to ensure your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Flooring</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier flooring professionals.
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
              Our flooring specialists bring years of experience and specialized training to every project. We understand the unique challenges of each flooring type and ensure proper installation techniques for lasting results.
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
              We partner with trusted manufacturers and suppliers to offer premium flooring products that provide beauty, durability, and value. We never compromise on quality, ensuring your floors will look great for years to come.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Proper Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that proper subfloor preparation is essential for a successful flooring installation. We take the time to address any issues with the subfloor, ensuring a solid foundation for your new flooring.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our flooring services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does flooring installation take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Installation timelines vary based on the type of flooring and the size of the area. A single room typically takes 1-2 days, while larger projects may take 3-5 days or more. Hardwood flooring generally takes longer than carpet or vinyl. We'll provide a specific timeline during your consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What's the best flooring for homes with pets?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              For homes with pets, we typically recommend luxury vinyl plank (LVP), porcelain tile, or engineered hardwood with a high-quality finish. These options resist scratches, are easy to clean, and stand up well to accidents. We can help you select the best option based on your specific pets and lifestyle.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer warranties on flooring installation?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we provide a comprehensive warranty on all our flooring installations. The specific warranty terms vary by flooring type, but typically include 1-2 years of coverage for installation-related issues. Additionally, we honor all manufacturer warranties for the flooring products we install.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Floors?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and free estimate for your flooring project in Chelsea, AL and surrounding areas.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}