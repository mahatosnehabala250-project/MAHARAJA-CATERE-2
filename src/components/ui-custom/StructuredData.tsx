export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://maharajacaterer.com/#business',
    name: 'Maharaja Caterer',
    description:
      'Purulia\'s premier catering service offering traditional Bengali, Indian, Chinese, and Tandoori cuisine for weddings, corporate events, and celebrations. Trusted since 2009 with 15+ years of excellence.',
    url: 'https://maharajacaterer.com',
    telephone: '+91-9876543210',
    email: 'info@maharajacaterer.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Purulia',
      addressLocality: 'Purulia',
      addressRegion: 'West Bengal',
      postalCode: '723101',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.3324,
      longitude: 86.3629,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
    hasMenu: {
      '@type': 'Menu',
      name: 'Maharaja Caterer Menu',
      description:
        'Over 100 menu items including traditional Bengali, North Indian, Chinese, and Tandoori cuisine',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Bengali Cuisine',
          description: 'Traditional Bengali dishes crafted with authentic flavors',
        },
        {
          '@type': 'MenuSection',
          name: 'North Indian Cuisine',
          description: 'Rich and aromatic North Indian delicacies',
        },
        {
          '@type': 'MenuSection',
          name: 'Chinese Cuisine',
          description: 'Indo-Chinese favorites for every palate',
        },
        {
          '@type': 'MenuSection',
          name: 'Tandoori Cuisine',
          description: 'Smoky tandoori specialties from our clay oven',
        },
      ],
    },
    image: 'https://maharajacaterer.com/images/hero-bg.png',
    sameAs: [],
  }

  const cateringServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'CateringService',
    '@id': 'https://maharajacaterer.com/#catering',
    name: 'Maharaja Caterer - Catering Service',
    description:
      'Full-service catering in Purulia, West Bengal. Wedding catering, corporate events, birthday parties, and more. FSSAI licensed with expert chef team.',
    url: 'https://maharajacaterer.com',
    telephone: '+91-9876543210',
    email: 'info@maharajacaterer.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Purulia',
      addressLocality: 'Purulia',
      addressRegion: 'West Bengal',
      postalCode: '723101',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'City',
      name: 'Purulia',
      containedInPlace: {
        '@type': 'State',
        name: 'West Bengal',
      },
    },
    serviceType: 'Catering',
    priceRange: '₹350 - ₹850 per plate',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cateringServiceSchema),
        }}
      />
    </>
  )
}
