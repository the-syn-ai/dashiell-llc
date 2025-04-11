import { SEOMetadata, LocalBusinessData } from '@/types';

/**
 * Generates JSON-LD structured data for a local business
 * @param data Local business data
 * @returns JSON-LD structured data as a string
 */
export function generateLocalBusinessSchema(data: LocalBusinessData): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${data.url}#organization`,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHoursSpecification: data.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1].split('-')[0],
      closes: hours.split(' ')[1].split('-')[1],
    })),
    priceRange: data.priceRange,
    ...(data.serviceArea && {
      areaServed: data.serviceArea.map(area => ({
        '@type': area.type,
        name: area.name,
      })),
    }),
  };

  return JSON.stringify(schema);
}

/**
 * SEO component for adding metadata to pages
 */
export function SEO({ metadata }: { metadata: SEOMetadata }) {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && <meta name="keywords" content={metadata.keywords} />}
      {metadata.canonicalUrl && <link rel="canonical" href={metadata.canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content={metadata.ogType || 'website'} />
      {metadata.canonicalUrl && <meta property="og:url" content={metadata.canonicalUrl} />}
      {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={metadata.twitterCard || 'summary'} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      {metadata.ogImage && <meta name="twitter:image" content={metadata.ogImage} />}
    </>
  );
}

/**
 * Default business data for Dashiell LLC
 */
export const dashiellBusinessData: LocalBusinessData = {
  name: 'Dashiell LLC',
  description: 'Professional home improvement services in Chelsea, Alabama. Specializing in renovations, remodeling, and repairs for residential and commercial properties.',
  url: 'https://dashiellllc.com',
  telephone: '(205) 576-2470',
  address: {
    streetAddress: '609 Chesser Court',
    addressLocality: 'Chelsea',
    addressRegion: 'AL',
    postalCode: '35043',
    addressCountry: 'US',
  },
  geo: {
    latitude: 33.3401,  // Example coordinates - replace with actual
    longitude: -86.6306, // Example coordinates - replace with actual
  },
  openingHours: [
    'Monday 8:00-17:00',
    'Tuesday 8:00-17:00',
    'Wednesday 8:00-17:00',
    'Thursday 8:00-17:00',
    'Friday 8:00-17:00',
  ],
  priceRange: '$$',
  serviceArea: [
    { type: 'City', name: 'Chelsea' },
    { type: 'City', name: 'Birmingham' },
    { type: 'AdministrativeArea', name: 'Shelby County' },
  ],
};

/**
 * Component to add JSON-LD structured data to a page
 */
export function StructuredData({ data }: { data: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}