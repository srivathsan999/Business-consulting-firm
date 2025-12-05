/**
 * Main JavaScript File
 * Handles common functionality across all pages
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initAnimations();
    initForms();
    initTooltips();
    initScrollToTop();
  });

  /**
   * Initialize Navbar functionality
   */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbar.contains(e.target) && !navbarToggler.contains(e.target)) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        navbar.classList.remove('navbar-scrolled');
        return;
      }
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScroll = currentScroll;
      
      if (currentScroll > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });

    // Set active nav item based on current page
    function getCurrentPageName() {
      const pathname = window.location.pathname;
      const href = window.location.href;
      
      // Get filename from pathname
      let pageName = pathname.split('/').pop();
      
      // If pathname is empty or root, try to get from href
      if (!pageName || pageName === '' || pathname === '/' || pathname.endsWith('/')) {
        const hrefParts = href.split('/');
        pageName = hrefParts[hrefParts.length - 1];
        // Remove query and hash
        pageName = pageName.split('?')[0].split('#')[0];
        
        // If still empty, it's likely index.html
        if (!pageName || pageName === '') {
          pageName = 'index.html';
        }
      } else {
        // Remove query and hash
        pageName = pageName.split('?')[0].split('#')[0];
      }
      
      return pageName.toLowerCase();
    }
    
    function getPageFromHref(href) {
      if (!href || href === '#' || href.startsWith('#')) return null;
      const parts = href.split('/');
      let page = parts[parts.length - 1];
      page = page.split('?')[0].split('#')[0];
      return page.toLowerCase();
    }
    
    const currentPage = getCurrentPageName();
    const currentPath = window.location.pathname;
    const currentHref = window.location.href.toLowerCase();
    
    // Remove existing active classes first to avoid conflicts
    document.querySelectorAll('.navbar-nav .nav-link.active, .dropdown-item.active').forEach(el => {
      el.classList.remove('active');
    });
    
    // Handle dropdown items first (they need special handling)
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href) {
        const itemPage = getPageFromHref(href);
        if (!itemPage) return;
        
        // Check if current page matches dropdown item
        const isMatch = 
          currentPage === itemPage ||
          (currentPage === 'index.html' && itemPage === 'home-1.html') ||
          (currentPage === 'home-1.html' && itemPage === 'index.html') ||
          currentHref.includes(itemPage) ||
          (currentPath === '/' && itemPage === 'index.html') ||
          (currentPath.endsWith('/') && itemPage === 'index.html');
        
        if (isMatch) {
          item.classList.add('active');
          // Mark parent dropdown toggle as active
          const dropdown = item.closest('.dropdown');
          if (dropdown) {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            if (dropdownToggle) {
              dropdownToggle.classList.add('active');
            }
          }
        }
      }
    });
    
    // Handle regular nav links (skip dropdown toggles to avoid double activation)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        const linkPage = getPageFromHref(href);
        if (!linkPage) return;
        
        // Check if current page matches nav link
        const isMatch = 
          currentPage === linkPage ||
          currentHref.includes(linkPage) ||
          (currentPath === '/' && linkPage === 'index.html') ||
          (currentPath.endsWith('/') && linkPage === 'index.html');
        
        if (isMatch) {
          link.classList.add('active');
        }
      }
    });
  }

  /**
   * Initialize smooth scrolling
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for sticky navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Initialize scroll animations
   */
  function initAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.card, .section-title, .fade-in-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * Initialize form validation and handling
   */
  function initForms() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        
        form.classList.add('was-validated');
      }, false);
    });
  }

  /**
   * Initialize tooltips (Bootstrap)
   */
  function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  /**
   * Initialize scroll to top button
   */
  function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (!scrollToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Utility: Debounce function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Export utility functions
  window.AppUtils = {
    debounce: debounce
  };
})();

