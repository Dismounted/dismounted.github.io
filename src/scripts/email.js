/**
 * Email Reveal Functionality
 * Shows email on click and provides copy-to-clipboard
 */

export function initEmail() {
  const emailButton = document.getElementById('email-reveal');
  const email = 'me@hansonwong.com.au';
  let isRevealed = false;

  if (!emailButton) {
    console.warn('Email reveal button not found');
    return;
  }

  // Show toast notification
  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.animation = 'fade-in 200ms ease-out reverse';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 200);
    }, 3000);
  };

  // Copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email:', err);
      showToast('Failed to copy email');
    }
  };

  // Handle email reveal and copy
  emailButton.addEventListener('click', async () => {
    if (!isRevealed) {
      // First click: reveal email
      emailButton.querySelector('span').textContent = email;
      emailButton.setAttribute('aria-label', 'Copy email address to clipboard');
      isRevealed = true;
    } else {
      // Subsequent clicks: copy to clipboard
      await copyToClipboard();
    }
  });

  // Make it clear that revealed email is clickable
  emailButton.addEventListener('mouseenter', () => {
    if (isRevealed) {
      emailButton.style.cursor = 'pointer';
    }
  });
}
