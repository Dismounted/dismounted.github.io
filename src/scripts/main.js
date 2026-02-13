/**
 * Main Application Entry Point
 * Initializes all modules when DOM is ready
 */

import { initTheme } from './theme.js';
import { initEmail } from './email.js';
import { initAnalytics } from './analytics.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle
  initTheme();

  // Initialize email reveal
  initEmail();

  // Initialize analytics with consent
  initAnalytics();

  console.log('Portfolio site initialized');
});
