import Script from 'next/script';

export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bridge Creative",
        "alternateName": "The Bridge Creative",
        "url": "https://www.bridgecreative.co.uk",
        "logo": "https://www.bridgecreative.co.uk/logo-tsp.png",
        "description": "Professional graphic designer in Stalybridge specialising in logo design, branding and digital media for local businesses across Greater Manchester.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Stalybridge",
            "addressRegion": "Greater Manchester",
            "addressCountry": "GB"
        },
        "sameAs": [
            // Add social media URLs here when available
            // "https://www.facebook.com/bridgecreative",
            // "https://www.instagram.com/bridgecreative"
        ]
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
