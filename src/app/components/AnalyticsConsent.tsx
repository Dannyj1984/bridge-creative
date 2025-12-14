'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function AnalyticsConsent() {
    const [consent, setConsent] = useState<boolean | null>(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const storedConsent = localStorage.getItem('analytics-consent');
        if (storedConsent === 'true') {
            setConsent(true);
        } else if (storedConsent === 'false') {
            setConsent(false);
        } else {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('analytics-consent', 'true');
        setConsent(true);
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('analytics-consent', 'false');
        setConsent(false);
        setShowBanner(false);
    };

    return (
        <>
            {consent === true && <Analytics />}

            {showBanner && (
                <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 shadow-lg z-50 animate-slide-up border-t border-neutral-800">
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-neutral-300 text-center sm:text-left">
                            <p>
                                We use cookies to improve your experience and analyze site traffic.
                                By clicking &quot;Accept&quot;, you verify that you are happy for us to use some basic tracking cookies.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-700 rounded-lg hover:border-neutral-500"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-4 py-2 text-sm font-medium bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors shadow-sm"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
