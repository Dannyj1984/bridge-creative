import Script from 'next/script';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": name,
        "name": name,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Bridge Creative",
            "url": "https://www.bridgecreative.co.uk",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stalybridge",
                "addressRegion": "Greater Manchester",
                "addressCountry": "GB"
            }
        },
        "areaServed": {
            "@type": "Place",
            "name": "Greater Manchester"
        },
        "url": url,
        ...(image && { "image": image })
    };

    return (
        <Script
            id={`service-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
