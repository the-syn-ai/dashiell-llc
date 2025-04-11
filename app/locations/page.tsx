import Link from 'next/link';

export const metadata = {
  title: 'Our Locations | Dashiell LLC | Chelsea, Alabama',
  description: 'Dashiell LLC provides professional home improvement services in Chelsea, Alabama. Serving the local community with quality renovations, remodeling, and repairs.',
  keywords: 'home improvement, Chelsea Alabama, renovation, remodeling, construction, home repair, local contractor',
};

export default function LocationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Locations</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Proudly serving Chelsea, Alabama and surrounding areas with quality home improvement services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Chelsea, Alabama</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our main office is located in the heart of Chelsea, Alabama, allowing us to quickly respond to all your home improvement needs in the area.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Address:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                609 Chesser Court<br />
                Chelsea, AL 35043
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                (205) 576-2470 | (504) 407-4230
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                dashiellconstruction22@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Hours:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Social Media:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instagram: @dashiellconstruction22
              </p>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        
        <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          {/* Google Maps will be integrated here */}
          <div className="w-full h-full" id="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.5762036493694!2d-86.6301492!3d33.3401232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888919e8e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2s609%20Chesser%20Ct%2C%20Chelsea%2C%20AL%2035043!5e0!3m2!1sen!2sus!4v1617293323345!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* About Chelsea Section */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 py-12 px-6 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Chelsea, Alabama</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A growing community with small-town charm and big opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chelsea is a rapidly growing city located in Shelby County, Alabama, just southeast of Birmingham. With its blend of suburban comfort and rural charm, Chelsea has become one of the most desirable places to live in the Birmingham metropolitan area.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The city has experienced significant growth over the past decade, with new residential developments, schools, and businesses enhancing the community while maintaining its friendly, small-town atmosphere.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Chelsea offers residents excellent schools, beautiful parks, and convenient access to shopping, dining, and entertainment options. The city's strategic location provides easy access to Birmingham while offering a more relaxed pace of life.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Chelsea Quick Facts:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Founded in 1908 and incorporated as a city in 1996</li>
              <li>Located in Shelby County, approximately 20 miles southeast of Birmingham</li>
              <li>Home to top-rated schools in the Shelby County School District</li>
              <li>Features beautiful outdoor spaces including Chelsea Park and Hargis Retreat</li>
              <li>Hosts community events throughout the year, including the Chelsea Fest & The Big Kaboom</li>
              <li>Growing population with a strong sense of community</li>
              <li>Diverse housing options from established neighborhoods to new developments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Dashiell in Chelsea */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dashiell LLC for Home Improvement in Chelsea?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your local experts committed to enhancing Chelsea homes with quality craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Local Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              As Chelsea residents ourselves, we understand the unique architectural styles, building requirements, and preferences of the local community. Our deep knowledge of Chelsea homes allows us to provide tailored solutions that enhance your property's value and appeal.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community Commitment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're not just contractors; we're your neighbors. Our commitment to Chelsea goes beyond business—we take pride in enhancing our community one home at a time. When you work with Dashiell LLC, you're supporting a local business that reinvests in Chelsea's growth and prosperity.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Trusted Reputation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our reputation in Chelsea speaks for itself. We've built a strong network of satisfied clients throughout the area who trust us for their home improvement needs. From historic home renovations to modern upgrades in new developments, our portfolio showcases our versatility and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="mb-16 bg-white dark:bg-gray-900 py-12 px-6 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Areas We Serve Around Chelsea</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            While our main office is in Chelsea, we proudly serve the following surrounding areas:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Westover</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Columbiana</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Pelham</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Harpersville</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Wilsonville</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Sterrett</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Hoover</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="font-medium text-gray-900 dark:text-white">Birmingham</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Chelsea Home?</h2>
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