import { Service, Location } from '@/types';

/**
 * Services data with proper typing
 */
export const services: Service[] = [
  {
    slug: 'carpentry',
    title: 'Professional Carpentry Services near Birmingham, AL',
    description: 'Expert Professional Carpentry Services near Birmingham, AL. Quality craftsmanship for custom woodwork, framing, trim work, and more. Contact Dashiell LLC today!',
    shortDescription: 'Expert craftsmanship and quality woodworking solutions for your home or business.',
    keywords: ['carpentry services Birmingham AL', 'professional carpenter Chelsea', 'custom woodwork', 'trim carpentry', 'framing contractor Birmingham'],
  },
  {
    slug: 'painting',
    title: 'Interior and Exterior Painting Services Chelsea, AL',
    description: 'Professional Interior and Exterior Painting Services Chelsea, AL. Transform your home with expert painters, quality materials, and flawless finishes. Contact us today!',
    shortDescription: 'Transform your home with expert painters, quality materials, and flawless finishes.',
    keywords: ['painting services Chelsea AL', 'interior painting Birmingham', 'exterior house painting', 'professional painters', 'residential painting contractor'],
  },
  {
    slug: 'drywall',
    title: 'Best Drywall Installation and Repair Chelsea, Alabama',
    description: 'Professional drywall installation and repair services in Chelsea, Alabama. Expert contractors for residential and commercial drywall projects. Quality workmanship guaranteed.',
    shortDescription: 'Expert drywall installation, repair, and finishing for residential and commercial spaces.',
    keywords: ['drywall installation Chelsea AL', 'drywall repair Birmingham', 'drywall contractors', 'sheetrock installation', 'drywall finishing services'],
  },
  {
    slug: 'flooring',
    title: 'Reliable Flooring and Tiling Contractors near Chelsea, AL',
    description: 'Expert flooring and tiling services near Chelsea, AL. Professional installation of hardwood, laminate, tile, vinyl, and carpet flooring. Quality craftsmanship guaranteed.',
    shortDescription: 'Professional installation of hardwood, laminate, tile, vinyl, and carpet flooring.',
    keywords: ['flooring installation Chelsea AL', 'hardwood flooring Birmingham', 'tile installation', 'vinyl flooring contractors', 'carpet installation services'],
  },
  {
    slug: 'siding',
    title: 'Expert Siding and Exterior Remodeling in Chelsea, AL',
    description: "Professional siding installation and exterior remodeling services in Chelsea, AL. Enhance your home's curb appeal and protection with quality siding solutions from Dashiell LLC.",
    shortDescription: "Enhance your home's curb appeal and protection with quality siding solutions.",
    keywords: ['siding installation Chelsea AL', 'vinyl siding Birmingham', 'exterior remodeling', 'fiber cement siding', 'siding replacement services'],
  },
  {
    slug: 'garage-doors',
    title: 'Garage Door Services Chelsea, AL',
    description: "Professional garage door installation, repair, and maintenance services in Chelsea, AL. Expert technicians, quality products, and reliable service for residential and commercial properties.",
    shortDescription: "Expert garage door installation, repair, and maintenance for residential and commercial properties.",
    keywords: ['garage door installation Chelsea AL', 'garage door repair Birmingham', 'commercial garage doors', 'garage door opener installation', 'garage door maintenance'],
  },
  {
    slug: 'closets',
    title: 'Custom Closet Installation Chelsea, Alabama',
    description: "Professional custom closet design and installation services in Chelsea, Alabama. Transform your storage spaces with tailored solutions that maximize organization and efficiency.",
    shortDescription: "Transform your storage spaces with tailored solutions that maximize organization and efficiency.",
    keywords: ['custom closet installation Chelsea AL', 'walk-in closet design Birmingham', 'closet organization systems', 'custom storage solutions', 'closet remodeling'],
  },
  {
    slug: 'water-damage',
    title: 'Water Damage Restoration Chelsea, AL',
    description: "Professional water damage restoration services in Chelsea, AL. Fast response, thorough cleanup, and complete restoration for homes and businesses affected by water damage.",
    shortDescription: "Fast response, thorough cleanup, and complete restoration for homes and businesses affected by water damage.",
    keywords: ['water damage restoration Chelsea AL', 'flood cleanup Birmingham', 'water extraction services', 'mold remediation', 'water damage repair'],
  },
];

/**
 * Locations data with proper typing
 */
export const locations: Location[] = [
  {
    slug: 'chelsea',
    name: 'Chelsea',
    address: '609 Chesser Court, Chelsea, AL 35043',
    phone: '(205) 576-2470',
    email: 'dashiellconstruction22@gmail.com',
    coordinates: {
      lat: 33.3401,
      lng: -86.6306,
    },
  },
];

/**
 * Get all services with ISR caching
 * @returns Array of services
 */
export async function getAllServices(): Promise<Service[]> {
  // In a real application, this might fetch from an API or CMS
  // For now, we'll return the static data
  return services;
}

/**
 * Get a service by slug with ISR caching
 * @param slug Service slug
 * @returns Service or null if not found
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // In a real application, this might fetch from an API or CMS
  const service = services.find(s => s.slug === slug);
  return service || null;
}

/**
 * Get all locations with ISR caching
 * @returns Array of locations
 */
export async function getAllLocations(): Promise<Location[]> {
  // In a real application, this might fetch from an API or CMS
  return locations;
}

/**
 * Get a location by slug with ISR caching
 * @param slug Location slug
 * @returns Location or null if not found
 */
export async function getLocationBySlug(slug: string): Promise<Location | null> {
  // In a real application, this might fetch from an API or CMS
  const location = locations.find(l => l.slug === slug);
  return location || null;
}