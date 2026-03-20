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
            "https://www.instagram.com/the_bridge_creative/",
            "https://www.linkedin.com/company/bridge-creative"
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
