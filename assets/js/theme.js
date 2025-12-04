/**
 * Theme Management System
 * Handles Dark/Light Mode and RTL Support
 */

(function() {
  'use strict';

  // Initialize theme on load
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initRTL();
    setupEventListeners();
  });

  /**
   * Initialize theme from localStorage or system preference
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    
    setTheme(theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /**
   * Set theme
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggleIcon(theme);
  }

  /**
   * Toggle theme
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  /**
   * Update theme toggle icon
   */
  function updateThemeToggleIcon(theme) {
    const toggleButtons = document.querySelectorAll('.theme-toggle');
    toggleButtons.forEach(btn => {
      if (theme === 'dark') {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
        btn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        btn.setAttribute('aria-label', 'Switch to dark mode');
      }
    });
  }

  /**
   * Initialize RTL support
   */
  function initRTL() {
    const savedRTL = localStorage.getItem('rtl');
    if (savedRTL === 'true') {
      document.documentElement.setAttribute('dir', 'rtl');
      updateRTLToggleIcon(true);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      updateRTLToggleIcon(false);
    }
  }

  /**
   * Toggle RTL
   */
  function toggleRTL() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('rtl', newDir === 'rtl' ? 'true' : 'false');
    updateRTLToggleIcon(newDir === 'rtl');
  }

  /**
   * Update RTL toggle icon
   */
  function updateRTLToggleIcon(isRTL) {
    const toggleButtons = document.querySelectorAll('.rtl-toggle');
    toggleButtons.forEach(btn => {
      if (isRTL) {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><path d="M12 3l4 4-4 4M12 21l-4-4 4-4"></path></svg>';
        btn.setAttribute('aria-label', 'Switch to LTR');
      } else {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><path d="M12 21l4-4-4-4M12 3l-4 4 4 4"></path></svg>';
        btn.setAttribute('aria-label', 'Switch to RTL');
      }
    });
  }

  /**
   * Setup event listeners
   */
  function setupEventListeners() {
    // Theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // RTL toggle buttons
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
      btn.addEventListener('click', toggleRTL);
    });
  }

  // Export functions for global access
  window.ThemeManager = {
    toggleTheme: toggleTheme,
    toggleRTL: toggleRTL,
    setTheme: setTheme
  };
})();

