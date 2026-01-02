import Script from 'next/script';

interface LocalBusinessSchemaProps {
    includeServices?: boolean;
}

export default function LocalBusinessSchema({ includeServices = false }: LocalBusinessSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Bridge Creative",
        "description": "Professional graphic designer in Stalybridge specialising in logo design, branding and digital media for local businesses across Greater Manchester.",
        "url": "https://www.bridgecreative.co.uk",
        "logo": "https://www.bridgecreative.co.uk/logo-tsp.png",
        "image": "https://www.bridgecreative.co.uk/logo-tsp.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Stalybridge",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "53.4848",
            "longitude": "-2.0593"
        },
        "priceRange": "££",
        ...(includeServices && {
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Design Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Logo Design",
                            "description": "Professional logo design services creating memorable, scalable, and meaningful logos."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Branding",
                            "description": "Complete brand identity solutions that tell your story and connect with customers."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Digital Design",
                            "description": "Clean, eye-catching designs for websites, social media, and email campaigns."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Print Design",
                            "description": "Printed materials including flyers, posters, brochures, and business cards."
                        }
                    }
                ]
            }
        })
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
