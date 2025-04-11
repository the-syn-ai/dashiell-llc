import Link from 'next/link';

export const metadata = {
  title: 'Best Drywall Installation and Repair Chelsea, Alabama | Dashiell LLC',
  description: 'Professional drywall installation and repair services in Chelsea, Alabama. Expert contractors for residential and commercial drywall projects. Quality workmanship guaranteed.',
  keywords: 'drywall installation Chelsea Alabama, drywall repair, drywall contractors, sheetrock installation, drywall finishing, texture application, drywall patching',
};

export default function DrywallServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Best Drywall Installation and Repair Chelsea, Alabama</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional drywall services with flawless finishes for your home or business.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Drywall Solutions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide comprehensive drywall services for residential and commercial properties in Chelsea, Alabama. Our skilled team delivers precise installation, seamless repairs, and perfect finishes that stand the test of time.
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
              <p className="text-gray-500 dark:text-gray-400 italic">Drywall Services Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Drywall Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive drywall solutions for new construction, renovations, and repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">New Drywall Installation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Complete drywall installation for new construction, additions, and renovations. We handle every step from hanging to finishing for flawless results.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Residential and commercial installation</li>
              <li>Precise measuring and cutting</li>
              <li>Proper fastening techniques</li>
              <li>Seamless joint taping</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Drywall Repair</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expert repair services for damaged drywall, from small holes and cracks to large sections. We match existing textures for a seamless finish.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Hole patching and repair</li>
              <li>Water damage restoration</li>
              <li>Crack repair</li>
              <li>Texture matching</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Drywall Finishing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional finishing services that create smooth, ready-to-paint surfaces. Our multi-step process ensures a flawless result.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Joint compound application</li>
              <li>Precision sanding</li>
              <li>Corner bead installation</li>
              <li>Final inspection and touch-ups</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Texture Application</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Custom texture application to match existing finishes or create new decorative effects for your walls and ceilings.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Knockdown texture</li>
              <li>Orange peel texture</li>
              <li>Popcorn ceiling removal and application</li>
              <li>Smooth finish</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Ceiling Installation & Repair</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Specialized ceiling services including installation, repair, and texture application for all ceiling types.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Flat ceiling installation</li>
              <li>Tray and coffered ceilings</li>
              <li>Water damage repair</li>
              <li>Popcorn ceiling removal</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Specialty Drywall</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Installation and finishing of specialty drywall products for specific applications and environments.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Moisture-resistant drywall</li>
              <li>Fire-resistant drywall</li>
              <li>Soundproof drywall</li>
              <li>Impact-resistant drywall</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Drywall Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a meticulous process to ensure superior results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Assessment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We evaluate your project needs, take precise measurements, and develop a detailed plan.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our team hangs drywall with precision, ensuring proper alignment and secure fastening.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Finishing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We apply joint compound, tape seams, and sand surfaces for a smooth, seamless finish.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Touches</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We apply textures if desired, conduct a thorough inspection, and prepare surfaces for painting.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Drywall</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier drywall professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Skilled Craftsmen</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our drywall specialists bring years of experience and specialized training to every project. We take pride in our attention to detail and commitment to excellence in every aspect of drywall installation and finishing.
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
              We use only premium drywall products and materials from trusted manufacturers. These high-quality materials ensure durability, better sound insulation, and superior fire resistance for your home or business.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Clean Workmanship</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We understand that drywall work can be messy. Our team takes extra precautions to protect your home and minimize dust. We use professional dust containment systems and thoroughly clean up after each day's work.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Drywall */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Types of Drywall We Install</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a variety of drywall options to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Standard Drywall</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              The most common type used for walls and ceilings in dry areas of homes and businesses. Available in various thicknesses to suit different applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Best for:</span> Living rooms, bedrooms, offices, and other dry areas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Moisture-Resistant Drywall</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Also known as "green board," this drywall contains special materials that resist moisture and prevent mold growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Best for:</span> Bathrooms, laundry rooms, kitchens, and basements.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fire-Resistant Drywall</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Contains glass fibers and other non-combustible materials to improve fire resistance and slow the spread of fire.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Best for:</span> Garages, furnace rooms, kitchens, and areas near fireplaces.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soundproof Drywall</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Specially designed with multiple layers to reduce sound transmission between rooms, creating a quieter environment.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Best for:</span> Home theaters, music rooms, bedrooms, and shared walls.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our drywall services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does drywall installation take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The timeline varies based on the size and complexity of the project. A single room typically takes 2-3 days from installation to finishing, while larger projects like a whole house may take 1-2 weeks. We'll provide a specific timeline during your consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How do you minimize dust during drywall work?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use professional dust containment systems, including plastic barriers, air scrubbers, and vacuum-attached sanders. We also seal off work areas from the rest of your home and perform thorough cleanup daily to minimize dust spread.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Can you match my existing wall texture?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, our experienced drywall professionals are skilled at matching existing textures. We can replicate knockdown, orange peel, popcorn, and other common textures to ensure repairs blend seamlessly with your existing walls.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer warranties on drywall work?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we stand behind our work with a 1-year warranty on all drywall installation and repairs. This covers issues like nail pops, seam cracks, and other defects related to our workmanship. We're committed to your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Professional Drywall Services?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and free estimate for your drywall project in Chelsea, Alabama.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}