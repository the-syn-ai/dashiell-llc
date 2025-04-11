import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Home Improvement Services in Chelsea, Alabama | Dashiell LLC',
  description: 'Dashiell LLC provides professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential properties.',
  keywords: 'home improvement Chelsea Alabama, renovation Chelsea, remodeling Chelsea, construction Chelsea, home repair Chelsea, local contractor Chelsea',
};

export default function ChelseaLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Home Improvement Services in Chelsea, Alabama</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted local partner for quality home renovations, remodeling, and repairs in Chelsea.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Chelsea's Premier Home Improvement Company</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Dashiell LLC, we take pride in enhancing the homes and businesses of Chelsea, Alabama with our professional home improvement services. Our team of skilled craftsmen is dedicated to delivering exceptional results that exceed your expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-800 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300">
                    Get a Free Quote
                  </Link>
                  <Link href="/services" className="bg-white text-blue-800 border border-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-80 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 italic">Chelsea Home Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Chelsea Location</h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Address:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                609 Chesser Court<br />
                Chelsea, AL 35043
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact:</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Phone:</span> (205) 576-2470 | (504) 407-4230
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Email:</span> dashiellconstruction22@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Instagram:</span> @dashiellconstruction22
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hours of Operation:</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Area</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              From our Chelsea location, we proudly serve homeowners throughout:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-800 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Chelsea
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-800 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Westover
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-800 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Columbiana
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-800 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Pelham
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-800 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Harpersville
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-800 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Birmingham
              </li>
            </ul>
          </div>
        </div>
        
        <div className="h-full">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Find Us in Chelsea</h2>
          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
            {/* Google Maps Integration */}
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
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Our Chelsea location is conveniently situated to serve the entire community. We're just minutes away from Highway 280, making us easily accessible from all parts of Chelsea and surrounding areas.
          </p>
        </div>
      </section>

      {/* About Chelsea */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Chelsea, Alabama</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A thriving community with small-town charm and modern amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chelsea is one of the fastest-growing cities in Shelby County, Alabama. Located just southeast of Birmingham, Chelsea offers residents a perfect blend of suburban comfort and rural charm, making it an ideal place to call home.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The city has experienced remarkable growth over the past decade, with new residential developments, schools, and businesses enhancing the community while maintaining its friendly, small-town atmosphere.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chelsea is known for its excellent schools, beautiful parks, and convenient access to shopping, dining, and entertainment options. The city's strategic location provides easy access to Birmingham while offering a more relaxed pace of life.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              As Chelsea continues to grow, homeowners are investing in improving and updating their properties. Whether you're in an established neighborhood or a new development, Dashiell LLC is here to help you enhance your Chelsea home with our professional home improvement services.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Chelsea Home Improvement Trends</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-800 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Open Concept Living:</span>
                  <p className="text-gray-600 dark:text-gray-300">Chelsea homeowners are embracing open floor plans that create spacious, multi-functional living areas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-800 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Outdoor Living Spaces:</span>
                  <p className="text-gray-600 dark:text-gray-300">With Chelsea's beautiful surroundings, outdoor kitchens, patios, and decks are increasingly popular additions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-800 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Energy-Efficient Upgrades:</span>
                  <p className="text-gray-600 dark:text-gray-300">Chelsea residents are investing in energy-efficient windows, insulation, and HVAC systems to reduce utility costs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-800 dark:text-blue-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Luxury Bathrooms:</span>
                  <p className="text-gray-600 dark:text-gray-300">Spa-like bathroom renovations with walk-in showers, soaking tubs, and high-end fixtures are trending in Chelsea homes.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Dashiell for Chelsea Homes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Dashiell LLC is Chelsea's Top Choice for Home Improvement</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We understand Chelsea homes and deliver exceptional results tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Local Expertise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              As Chelsea residents ourselves, we understand the unique architectural styles and building requirements of the area. Our deep knowledge of Chelsea homes allows us to provide tailored solutions that enhance your property's value and appeal.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We take pride in our attention to detail and superior workmanship. Our team of skilled professionals is committed to delivering exceptional results that exceed your expectations. We use only the highest quality materials and proven techniques.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community Commitment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're not just contractors; we're your neighbors. Our commitment to Chelsea goes beyond business—we take pride in enhancing our community one home at a time. When you work with Dashiell LLC, you're supporting a local business that reinvests in Chelsea's growth.
            </p>
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