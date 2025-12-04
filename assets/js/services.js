/**
 * Services Page Functionality
 * Handles grid/list toggle and category filtering
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initViewToggle();
    initCategoryFilter();
  });

  /**
   * Initialize grid/list view toggle
   */
  function initViewToggle() {
    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');
    const servicesContainer = document.getElementById('servicesContainer');

    if (!gridBtn || !listBtn || !servicesContainer) return;

    // Set default view from localStorage or default to grid
    const savedView = localStorage.getItem('servicesView') || 'grid';
    setView(savedView);

    gridBtn.addEventListener('click', () => setView('grid'));
    listBtn.addEventListener('click', () => setView('list'));
  }

  /**
   * Set view mode
   */
  function setView(view) {
    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');
    const servicesContainer = document.getElementById('servicesContainer');
    const serviceItems = document.querySelectorAll('.service-item');

    if (!servicesContainer || !serviceItems.length) return;

    // Update buttons
    if (gridBtn && listBtn) {
      if (view === 'grid') {
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
      } else {
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
      }
    }

    // Update container and items
    if (view === 'grid') {
      servicesContainer.classList.remove('list-view');
      servicesContainer.classList.add('grid-view');
      serviceItems.forEach(item => {
        item.classList.remove('list-item');
        item.classList.add('grid-item');
      });
    } else {
      servicesContainer.classList.remove('grid-view');
      servicesContainer.classList.add('list-view');
      serviceItems.forEach(item => {
        item.classList.remove('grid-item');
        item.classList.add('list-item');
      });
    }

    // Save preference
    localStorage.setItem('servicesView', view);
  }

  /**
   * Initialize category filtering
   */
  function initCategoryFilter() {
    const filterButtons = document.querySelectorAll('.category-filter');
    const serviceItems = document.querySelectorAll('.service-item');

    if (!filterButtons.length || !serviceItems.length) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter services
        serviceItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (category === 'all' || itemCategory === category) {
            item.style.display = '';
            item.classList.add('fade-in');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
})();

