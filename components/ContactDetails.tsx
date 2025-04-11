'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { ContactDetailsProps } from '@/types';

// Interface for the ContactItem component
interface ContactItemProps {
  children: ReactNode;
  icon: ReactNode;
}

export default function ContactDetails({
  layout = 'vertical',
  showPhone = true,
  showEmail = true,
  showAddress = true,
  showSocial = true,
  className = '',
}: ContactDetailsProps) {
  // Define layout classes based on the layout prop
  const layoutClasses = {
    vertical: 'flex flex-col space-y-2',
    horizontal: 'flex flex-wrap gap-4 items-center',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-3',
  };

  // Define contact item wrapper based on layout
  const ContactItem = ({ children, icon }: { children: ReactNode; icon: ReactNode }) => {
    return (
      <div className={`flex items-center ${layout === 'horizontal' ? 'mr-4' : ''}`}>
        <div className="text-blue-800 dark:text-blue-300 mr-2">{icon}</div>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
    );
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {showPhone && (
        <ContactItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        >
          <div>
            <a href="tel:2055762470" className="hover:text-blue-800 dark:hover:text-white transition-colors">
              (205) 576-2470
            </a>
            {' | '}
            <a href="tel:5044074230" className="hover:text-blue-800 dark:hover:text-white transition-colors">
              (504) 407-4230
            </a>
          </div>
        </ContactItem>
      )}

      {showEmail && (
        <ContactItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        >
          <a
            href="mailto:dashiellconstruction22@gmail.com"
            className="hover:text-blue-800 dark:hover:text-white transition-colors"
          >
            dashiellconstruction22@gmail.com
          </a>
        </ContactItem>
      )}

      {showAddress && (
        <ContactItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        >
          <a
            href="https://maps.google.com/?q=609+Chesser+Court,+Chelsea,+AL+35043"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 dark:hover:text-white transition-colors"
          >
            609 Chesser Court, Chelsea, AL 35043
          </a>
        </ContactItem>
      )}

      {showSocial && (
        <>
          <ContactItem
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            }
          >
            <a
              href="https://www.instagram.com/dashiellconstruction22/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 dark:hover:text-white transition-colors"
            >
              @dashiellconstruction22
            </a>
          </ContactItem>

          <ContactItem
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 9.806l-.371 3.493h-2.947v9.637H10.43v-9.637H8.227V9.806H10.43V7.39c0-1.458.702-3.732 3.732-3.732l2.738.01v3.05h-1.988c-.326 0-.785.163-.785.857v2.231h2.782L16 9.806z" />
              </svg>
            }
          >
            <a
              href="https://m.me/dashiellconstruction"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 dark:hover:text-white transition-colors"
            >
              Facebook Messenger
            </a>
          </ContactItem>
        </>
      )}
    </div>
  );
}