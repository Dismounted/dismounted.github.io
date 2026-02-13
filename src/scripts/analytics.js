/**
 * Analytics with Consent Management
 * Handles cookie consent banner and Google Analytics 4 loading
 */

const GA_MEASUREMENT_ID = 'G-L2LE51EBEL';

export function initAnalytics() {
  const consentBanner = document.getElementById('consent-banner');
  const acceptButton = document.getElementById('consent-accept');
  const declineButton = document.getElementById('consent-decline');

  if (!consentBanner || !acceptButton || !declineButton) {
    console.warn('Consent banner elements not found');
    return;
  }

  // Check if user has already made a choice
  const consent = localStorage.getItem('analytics-consent');

  if (consent === 'accepted') {
    // Load analytics immediately
    loadGA4();
  } else if (consent === 'declined') {
    // Do nothing, user has declined
  } else {
    // Show consent banner
    consentBanner.removeAttribute('hidden');
  }

  // Handle accept
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('analytics-consent', 'accepted');
    consentBanner.setAttribute('hidden', '');
    loadGA4();
  });

  // Handle decline
  declineButton.addEventListener('click', () => {
    localStorage.setItem('analytics-consent', 'declined');
    consentBanner.setAttribute('hidden', '');
  });
}

/**
 * Load Google Analytics 4
 */
function loadGA4() {
  // Create and load GA4 script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // Anonymize IP addresses for privacy
    cookie_flags: 'SameSite=None;Secure', // Modern cookie settings
  });

  // Make gtag available globally for debugging
  window.gtag = gtag;

  console.log('Google Analytics loaded with consent');
}
