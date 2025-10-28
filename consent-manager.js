/**
 * Google Consent Mode v2 Manager
 * Handles user consent for Microsoft Clarity and Google Analytics
 * Compliant with GDPR requirements (October 31, 2025 deadline)
 * Only shows consent banner to EU/EEA/UK/CH visitors
 */

(function() {
    'use strict';

    const CONSENT_STORAGE_KEY = 'phcode_user_consent';
    const CONSENT_EXPIRY_DAYS = 365; // 12 months

    // EU/EEA countries + UK + Switzerland requiring consent
    const EU_COUNTRIES = [
        'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
        'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
        'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', // EU members
        'IS', 'LI', 'NO', // EEA (non-EU)
        'GB', 'UK', // United Kingdom
        'CH' // Switzerland
    ];

    const EU_TIMEZONES = [
        'Europe/Vienna','Europe/Brussels','Europe/Sofia','Europe/Zagreb','Asia/Nicosia',
        'Europe/Prague','Europe/Copenhagen','Europe/Tallinn','Europe/Helsinki','Europe/Paris',
        'Europe/Berlin','Europe/Athens','Europe/Budapest','Europe/Dublin','Europe/Rome',
        'Europe/Riga','Europe/Vilnius','Europe/Luxembourg','Europe/Valletta','Europe/Amsterdam',
        'Europe/Warsaw','Europe/Lisbon','Europe/Bucharest','Europe/Bratislava','Europe/Ljubljana',
        'Europe/Madrid','Europe/Stockholm',
        'Atlantic/Reykjavik', 'Atlantic/Faroe', 'Atlantic/Canary' // EEA/EU territories
    ];

    /**
     * Detect if user is in EU region
     * This runs BEFORE gtag initialization to set correct defaults
     */
    function detectEURegion() {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        const lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        const langCountry = lang.split('-')[1]?.toUpperCase() || '';

        const isEUTimezone = EU_TIMEZONES.includes(tz);
        const isEULang = langCountry && EU_COUNTRIES.includes(langCountry);

        const isEU = isEUTimezone || isEULang;

        console.log('Region detected (initial):', {
            timezone: tz,
            language: lang,
            isEUTimezone,
            isEULang,
            finalDecision: isEU ? 'EU' : 'Non-EU'
        });

        return isEU;
    }

    // Detect region FIRST before initializing consent
    const IS_EU_REGION = detectEURegion();

    // Initialize Google Consent Mode with dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }

    // Set region-specific consent defaults
    if (IS_EU_REGION) {
        // EU visitors: deny by default (GDPR compliant)
        gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500
        });
        console.log('Cookie consent Mode: EU region detected - default DENIED');
    } else {
        // Non-EU visitors: no need to show a cookie popup, default granted
        gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'granted',
            'security_storage': 'granted'
        });
        console.log('Cookie consent Mode: Non-EU region detected');
    }

    // Consent Manager Object
    const ConsentManager = {

        /**
         * Get stored consent from localStorage
         */
        getStoredConsent: function() {
            try {
                const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
                if (!stored) return null;

                const consent = JSON.parse(stored);

                // Check if consent has expired
                const expiryDate = new Date(consent.expiry);
                if (expiryDate < new Date()) {
                    this.clearConsent();
                    return null;
                }

                return consent;
            } catch (e) {
                console.error('Error reading consent:', e);
                return null;
            }
        },

        /**
         * Save consent choice to localStorage
         */
        saveConsent: function(granted) {
            try {
                const expiry = new Date();
                expiry.setDate(expiry.getDate() + CONSENT_EXPIRY_DAYS);

                const consent = {
                    granted: granted,
                    timestamp: new Date().toISOString(),
                    expiry: expiry.toISOString()
                };

                localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
                return true;
            } catch (e) {
                console.error('Error saving consent:', e);
                return false;
            }
        },

        /**
         * Clear stored consent
         */
        clearConsent: function() {
            try {
                localStorage.removeItem(CONSENT_STORAGE_KEY);
            } catch (e) {
                console.error('Error clearing consent:', e);
            }
        },

        /**
         * Update Google Consent Mode
         */
        updateGoogleConsent: function(granted) {
            const consentValue = granted ? 'granted' : 'denied';

            gtag('consent', 'update', {
                'analytics_storage': consentValue,
                'ad_storage': consentValue,
                'functionality_storage': consentValue,
                'personalization_storage': consentValue
            });

            // Trigger a custom event for tracking consent changes
            gtag('event', 'consent_update', {
                'consent_granted': granted,
                'event_category': 'consent',
                'event_label': granted ? 'accepted' : 'rejected'
            });
        },


        /**
         * Handle user accepting all cookies
         */
        acceptAll: function() {
            this.saveConsent(true);
            this.updateGoogleConsent(true);
            this.hideBanner();
            console.log('User consent: All cookies accepted');
        },

        /**
         * Handle user rejecting all cookies
         */
        rejectAll: function() {
            this.saveConsent(false);
            this.updateGoogleConsent(false);
            this.hideBanner();
            console.log('User consent: All cookies rejected');
        },

        /**
         * Handle banner close without choice (keep defaults)
         */
        closeBanner: function() {
            // Close without saving means they'll see it again next visit
            // Keep consent denied (GDPR-compliant default)
            this.hideBanner();
            console.log('User consent: Banner closed without choice');
        },

        /**
         * Show consent banner
         */
        showBanner: function() {
            const banner = document.getElementById('consent-banner');
            if (banner) {
                banner.classList.add('show');
            }
        },

        /**
         * Hide consent banner
         */
        hideBanner: function() {
            const banner = document.getElementById('consent-banner');
            if (banner) {
                banner.classList.remove('show');
            }
        },

        /**
         * Initialize consent manager
         */
        initialize: function() {
            if (!IS_EU_REGION) {
                // Non-EU visitors: no need to show the cookie popup, ga/clarity on by default.
                console.log('Non-EU visitor: No cookie banner needed');
                return;
            }

            // EU visitors: check for stored consent
            const storedConsent = this.getStoredConsent();

            if (storedConsent !== null) {
                // User has previously made a choice
                this.updateGoogleConsent(storedConsent.granted);
                console.log('EU visitor - User consent loaded:', storedConsent.granted ? 'Granted' : 'Denied');
            } else {
                // No stored consent, show banner to EU visitors
                console.log('EU visitor: No stored consent, showing banner');
                this.showBanner();
            }

            // Setup event listeners
            this.setupEventListeners();
        },

        /**
         * Setup button event listeners
         */
        setupEventListeners: function() {
            const acceptBtn = document.getElementById('consent-accept');
            const rejectBtn = document.getElementById('consent-reject');
            const closeBtn = document.getElementById('consent-close');

            if (acceptBtn) {
                acceptBtn.addEventListener('click', () => this.acceptAll());
            }

            if (rejectBtn) {
                rejectBtn.addEventListener('click', () => this.rejectAll());
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeBanner());
            }
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ConsentManager.initialize());
    } else {
        ConsentManager.initialize();
    }

    // Expose ConsentManager globally for manual control if needed
    window.ConsentManager = ConsentManager;

})();
