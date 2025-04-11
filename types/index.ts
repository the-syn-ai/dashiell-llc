/**
 * Common types and interfaces for the Dashiell LLC website
 */

// Service type definition
export interface Service {
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  icon?: string;
  keywords?: string[];
}

// Location type definition
export interface Location {
  slug: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Contact information type
export interface ContactInfo {
  phones: string[];
  email: string;
  address: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// SEO metadata type
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

// Local business structured data
export interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  serviceArea?: {
    type: string;
    name: string;
  }[];
}

// Component props interfaces
export interface ContactDetailsProps {
  layout?: 'vertical' | 'horizontal' | 'grid';
  showPhone?: boolean;
  showEmail?: boolean;
  showAddress?: boolean;
  showSocial?: boolean;
  className?: string;
}

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}