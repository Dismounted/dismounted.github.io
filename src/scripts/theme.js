/**
 * Theme Toggle Functionality
 * Handles dark mode toggle with localStorage persistence
 */

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

  // Set initial ARIA label
  const currentTheme = document.documentElement.getAttribute('data-theme');
  themeToggle.setAttribute(
    'aria-label',
    `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`
  );
}
