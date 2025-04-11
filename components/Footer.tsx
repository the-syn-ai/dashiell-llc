import Link from 'next/link';
import ContactDetails from './ContactDetails';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Dashiell LLC</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Professional home improvement services in Chelsea, Alabama.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              License #: AL-12345
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h3>
            <ContactDetails layout="vertical" />
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              <span className="font-medium">Hours:</span> Mon-Fri: 8am-5pm
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  Our Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/chelsea" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  Chelsea, AL
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Dashiell LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}