import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Dashiell LLC',
  description: 'Explore our comprehensive home improvement services in Chelsea, Alabama. From carpentry and painting to water damage restoration and custom closets.',
  keywords: 'home improvement services, Chelsea Alabama, carpentry, painting, drywall, flooring, siding, garage doors, custom closets, water damage',
};

export function generateStaticParams() {
  return [
    { slug: 'carpentry' },
    { slug: 'painting' },
    { slug: 'drywall' },
    { slug: 'flooring' },
    { slug: 'siding' },
    { slug: 'garage-doors' },
    { slug: 'closets' },
    { slug: 'water-damage' },
  ];
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}