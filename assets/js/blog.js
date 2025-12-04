/**
 * Blog Page Functionality
 * Handles category filtering and search
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initCategoryFilter();
    initSearch();
  });

  /**
   * Initialize category filtering
   */
  function initCategoryFilter() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const blogPosts = document.querySelectorAll('.blog-post');

    if (!filterButtons.length || !blogPosts.length) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');

        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter blog posts with smooth animation
        let visibleCount = 0;
        blogPosts.forEach(post => {
          const postCategory = post.getAttribute('data-category');
          
          if (category === 'all' || postCategory === category) {
            post.style.display = '';
            post.classList.add('fade-in');
            visibleCount++;
          } else {
            post.style.display = 'none';
            post.classList.remove('fade-in');
          }
        });

        // Scroll to top of blog grid if filtered
        if (category !== 'all') {
          const blogGrid = document.getElementById('blogGrid');
          if (blogGrid) {
            const offsetTop = blogGrid.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  /**
   * Initialize search functionality
   */
  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const blogPosts = document.querySelectorAll('.blog-post');

    if (!searchInput || !blogPosts.length) return;

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();

      blogPosts.forEach(post => {
        const title = post.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const text = post.querySelector('.card-text')?.textContent.toLowerCase() || '';
        const category = post.getAttribute('data-category').toLowerCase();
        const meta = post.querySelector('small')?.textContent.toLowerCase() || '';

        const matches = title.includes(searchTerm) || 
                       text.includes(searchTerm) || 
                       category.includes(searchTerm) ||
                       meta.includes(searchTerm);

        if (matches || searchTerm === '') {
          post.style.display = '';
          post.style.opacity = '1';
        } else {
          post.style.display = 'none';
        }
      });
    });

    // Add search button functionality
    const searchButton = searchInput.nextElementSibling;
    if (searchButton) {
      searchButton.addEventListener('click', function() {
        searchInput.focus();
      });
    }
  }
})();

