import Link from 'next/link';

export const metadata = {
  title: 'Water Damage Restoration Chelsea, AL | Dashiell LLC',
  description: "Professional water damage restoration services in Chelsea, AL. Fast response, thorough cleanup, and complete restoration for homes and businesses affected by water damage.",
  keywords: 'water damage restoration Chelsea AL, flood cleanup, water extraction, mold remediation, storm damage, leak repair, water damage repair',
};

export default function WaterDamageServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Water Damage Restoration Chelsea, AL</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fast, professional restoration services for homes and businesses affected by water damage.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Emergency Water Damage Solutions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we provide comprehensive water damage restoration services for homeowners and businesses in Chelsea, Alabama. Our experienced team responds quickly to minimize damage, thoroughly clean and dry affected areas, and restore your property to its pre-damage condition.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
                    24/7 Emergency Response
                  </Link>
                  <Link href="/services" className="bg-white text-blue-800 border border-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-80 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Water Damage Restoration Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Water Damage Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive water damage restoration solutions for any situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Emergency Water Extraction</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Rapid response water removal services to minimize damage after flooding, burst pipes, or other water emergencies. We use professional-grade equipment to quickly extract standing water from your property.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>24/7 emergency response</li>
              <li>High-powered extraction equipment</li>
              <li>Thorough water removal</li>
              <li>Initial damage assessment</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Structural Drying</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional drying services using industrial dehumidifiers, air movers, and moisture detection equipment to thoroughly dry walls, floors, and structural elements of your property.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Industrial-grade dehumidifiers</li>
              <li>High-velocity air movers</li>
              <li>Moisture mapping and monitoring</li>
              <li>Thermal imaging inspection</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mold Remediation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive mold detection and removal services to address mold growth that often follows water damage. We safely eliminate mold and prevent future growth to protect your health and property.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Mold inspection and testing</li>
              <li>Safe mold removal</li>
              <li>Antimicrobial treatment</li>
              <li>Preventative measures</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sewage Cleanup</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Specialized cleanup services for sewage backups and contaminated water. We safely remove hazardous waste, thoroughly sanitize affected areas, and restore your property to a safe, clean condition.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Hazardous waste removal</li>
              <li>Professional sanitization</li>
              <li>Odor elimination</li>
              <li>Structural drying and cleaning</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Restoration</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Specialized cleaning and restoration services for water-damaged furniture, documents, electronics, and personal belongings. We work to salvage and restore your valuable possessions whenever possible.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Furniture and upholstery cleaning</li>
              <li>Document drying and recovery</li>
              <li>Electronics restoration</li>
              <li>Pack-out and storage services</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reconstruction Services</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Complete rebuilding and restoration services to repair structural damage caused by water. From drywall replacement to complete room reconstruction, we restore your property to its pre-damage condition.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Drywall repair and replacement</li>
              <li>Flooring restoration</li>
              <li>Cabinet and trim replacement</li>
              <li>Complete room reconstruction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Water Damage Restoration Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a comprehensive process to ensure your property is fully restored after water damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Emergency Response</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We respond quickly to your call, arriving with specialized equipment to begin immediate water extraction.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Assessment & Planning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We thoroughly assess the damage, identify the water source, and create a detailed restoration plan.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Water Removal & Drying</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We extract standing water and implement professional drying techniques to thoroughly dry all affected areas.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cleaning & Sanitizing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We clean, sanitize, and deodorize all affected areas and materials to eliminate contaminants and odors.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">5</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Restoration & Reconstruction</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We repair and rebuild damaged areas, restoring your property to its pre-damage condition or better.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Water Damage */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Types of Water Damage We Handle</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're equipped to address all categories of water damage to ensure proper restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Category 1: Clean Water</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Damage from clean water sources that pose no substantial health risk, such as broken water supply lines, tub or sink overflows, or appliance malfunctions involving water supply lines.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Examples:</span> Broken pipes, overflowing sinks, malfunctioning appliances, rainwater.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Category 2: Gray Water</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Damage from water that contains significant contamination and has the potential to cause discomfort or illness if contacted or consumed. This water contains microorganisms and nutrients for microorganisms.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Examples:</span> Dishwasher or washing machine overflow, toilet overflow with urine, sump pump failures.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Category 3: Black Water</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Damage from water that is grossly contaminated and contains pathogenic agents. This water can cause serious illness or death if ingested or exposed to humans. Special handling and PPE are required.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Examples:</span> Sewage backups, flooding from rivers or streams, toilet backflows with feces, stagnant water with bacterial growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Water Damage Restoration</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the difference of working with Chelsea's premier water damage restoration professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Rapid Response</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We understand that water damage worsens with time. Our 24/7 emergency response team arrives quickly with the equipment needed to begin immediate water extraction and damage mitigation.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Certified Technicians</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our restoration specialists are IICRC certified with extensive training in water damage restoration techniques. We stay current with the latest industry standards and technologies to provide superior service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Advanced Equipment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We utilize professional-grade water extraction, drying, and monitoring equipment to ensure thorough water removal and complete drying. Our advanced technology helps us detect hidden moisture and prevent secondary damage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our water damage restoration services.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How quickly should I address water damage?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Water damage should be addressed immediately. Within minutes, water can spread throughout your property, saturating everything in its path. Within 24 hours, drywall begins to swell and break down, metal surfaces begin to tarnish, and furniture begins to warp and mold can begin to grow. The longer you wait, the more extensive and expensive the damage becomes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Will my insurance cover water damage restoration?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Most homeowners insurance policies cover sudden and accidental water damage, such as burst pipes or appliance malfunctions. However, coverage varies by policy, and damage from flooding typically requires separate flood insurance. We work directly with insurance companies and can help you navigate the claims process, providing detailed documentation and working with your adjuster to maximize your coverage.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How long does the water damage restoration process take?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The timeline varies based on the extent of the damage and the affected materials. The water extraction and initial drying typically takes 3-5 days. However, complete restoration, including repairs and reconstruction, can take anywhere from a few days to several weeks depending on the severity of the damage. We'll provide a specific timeline after our initial assessment of your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Water Damage? We're Here to Help!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us for 24/7 emergency water damage restoration services in Chelsea, AL and surrounding areas.
        </p>
        <Link href="/contact" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300">
          Get Emergency Assistance
        </Link>
      </section>
    </div>
  );
}