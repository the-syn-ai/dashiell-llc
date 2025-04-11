import Link from 'next/link';

export const metadata = {
  title: 'Interior and Exterior Painting Services Chelsea, AL | Dashiell LLC',
  description: 'Professional Interior and Exterior Painting Services Chelsea, AL. Transform your home with expert painters, quality materials, and flawless finishes. Contact us today!',
  keywords: 'painting services Chelsea AL, interior painting, exterior painting, house painters Chelsea, professional painting contractor, residential painting',
};

export default function PaintingServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Interior and Exterior Painting Services Chelsea, AL</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your home with professional painting services that deliver beautiful, long-lasting results.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Painting for Every Surface</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide premium painting services for homeowners and businesses in Chelsea, Alabama. Our experienced painters deliver flawless finishes, using quality materials and proven techniques to enhance and protect your property.
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
              <p className="text-gray-500 dark:text-gray-400 italic">Painting Services Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Painting Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive painting solutions for interior and exterior surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interior Painting</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Refresh your home's interior with expert painting that transforms your living spaces. We deliver smooth, even finishes in any color you choose.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Walls and ceilings</li>
              <li>Trim, baseboards, and crown molding</li>
              <li>Doors and windows</li>
              <li>Cabinets and built-ins</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Exterior Painting</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Protect and beautify your home's exterior with durable, weather-resistant paint that stands up to Chelsea's climate conditions.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Siding and trim</li>
              <li>Doors and windows</li>
              <li>Decks and porches</li>
              <li>Fences and railings</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cabinet Refinishing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transform your kitchen or bathroom with professional cabinet painting and refinishing that delivers a fresh, updated look at a fraction of replacement cost.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Kitchen cabinets</li>
              <li>Bathroom vanities</li>
              <li>Built-in shelving</li>
              <li>Custom color matching</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Specialty Finishes</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Add unique character to your home with decorative and specialty paint finishes that create visual interest and texture.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Faux finishes</li>
              <li>Textured painting</li>
              <li>Accent walls</li>
              <li>Decorative techniques</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Deck & Fence Staining</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Protect your outdoor wooden structures with professional staining and sealing that enhances natural beauty while providing long-lasting protection.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Deck staining and sealing</li>
              <li>Fence staining</li>
              <li>Pergolas and gazebos</li>
              <li>Outdoor furniture</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Prep & Repair</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensure a flawless finish with our thorough preparation and repair services that address surface issues before painting begins.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Drywall repair</li>
              <li>Surface preparation</li>
              <li>Wood repair and replacement</li>
              <li>Caulking and sealing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Painting Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a meticulous process to ensure beautiful, long-lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We discuss your vision, color preferences, and project requirements.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We protect your furnishings, repair surfaces, and prepare areas for painting.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Priming</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We apply high-quality primers to ensure proper adhesion and coverage.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Painting</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We apply paint with precision using professional techniques for a flawless finish.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">5</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We conduct a thorough inspection and clean up to ensure your complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Painting</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier painting professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Experienced Professionals</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our painting team brings years of experience and specialized training to every project. We understand the unique challenges of painting in Chelsea's climate and know how to deliver lasting results.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Premium Materials</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use only high-quality paints and materials from trusted brands like Sherwin-Williams and Benjamin Moore. These premium products ensure better coverage, richer colors, and longer-lasting finishes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Meticulous Preparation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe proper preparation is the foundation of a quality paint job. Our thorough prep work includes cleaning, sanding, patching, and priming to ensure smooth, even coverage and excellent adhesion.
            </p>
          </div>
        </div>
      </section>

      {/* Color Consultation */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Expert Color Consultation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Choosing the right colors for your home can be challenging. Our professional color consultation service helps you select the perfect palette that complements your home's architecture, your personal style, and existing furnishings.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our color experts stay current with the latest trends while understanding timeless color principles. We'll help you:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Select coordinating colors for different rooms</li>
              <li>Choose complementary trim and accent colors</li>
              <li>Create a cohesive color flow throughout your home</li>
              <li>Find the perfect exterior color scheme</li>
              <li>Test colors with sample applications</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              This service is complimentary with our painting projects, ensuring you'll be thrilled with your color choices before we begin painting.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular Color Trends in Chelsea</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Coastal Blues</span>
                  <p className="text-gray-600 dark:text-gray-300">Soft, serene blue tones that create a calm, relaxing atmosphere in living spaces.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-green-100 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Natural Greens</span>
                  <p className="text-gray-600 dark:text-gray-300">Earthy green hues that bring the outdoors in and complement Chelsea's natural surroundings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Warm Neutrals</span>
                  <p className="text-gray-600 dark:text-gray-300">Versatile beiges and warm grays that create a timeless foundation for any style.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-100 mr-3 flex-shrink-0"></div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Sunny Accents</span>
                  <p className="text-gray-600 dark:text-gray-300">Cheerful yellows and golds that add warmth and energy to kitchens and living areas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our painting services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long will my painting project take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Project timelines vary based on the size and complexity of the job. A single room typically takes 1-2 days, while a full interior might take 3-5 days. Exterior painting usually takes 3-7 days depending on the size of your home and weather conditions. We'll provide a specific timeline during your consultation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What type of paint do you use?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use premium paints from trusted manufacturers like Sherwin-Williams and Benjamin Moore. These high-quality paints provide better coverage, more vibrant colors, and longer-lasting finishes. We select the appropriate paint type (latex, oil-based, etc.) and finish (flat, eggshell, semi-gloss, etc.) based on the specific needs of your project.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How do you protect my furniture and belongings during interior painting?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We take extensive precautions to protect your home during the painting process. This includes moving and covering furniture, removing or covering fixtures, using drop cloths to protect floors, and taping off areas not being painted. Our team is trained to work neatly and minimize disruption to your home.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Do you offer warranties on your painting work?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we stand behind our work with a comprehensive 2-year warranty on labor. This covers issues like peeling, flaking, or excessive fading. We also honor all manufacturer warranties on the paint products we use. Our goal is your complete satisfaction with results that last.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home with Fresh Paint?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to schedule a free consultation and estimate for your painting project in Chelsea, AL.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}