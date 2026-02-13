/**
 * Theme Toggle Functionality
 * Handles dark mode toggle with localStorage persistence
 */

/**
 * Update theme-color meta tag for iOS Safari UI
 */
function updateThemeColor(theme) {
  const themeColor = theme === 'dark' ? '#0f172a' : '#e0f2fe';
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', themeColor);
  }
}

export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) {
    console.warn('Theme toggle button not found');
    return;
  }

  // Toggle theme function
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update theme-color meta tag for iOS Safari
    updateThemeColor(newTheme);

    // Update ARIA label
    themeToggle.setAttribute(
      'aria-label',
      `Switch to ${newTheme === 'light' ? 'dark' : 'light'} mode`
    );
  };

  // Listen for theme toggle clicks
  themeToggle.addEventListener('click', toggleTheme);

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  });

  // Set initial ARIA label and theme color
  const currentTheme = document.documentElement.getAttribute('data-theme');
  themeToggle.setAttribute(
    'aria-label',
    `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`
  );

  // Set initial theme-color meta tag
  updateThemeColor(currentTheme);
}
