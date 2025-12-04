/**
 * Pricing Page Functionality
 * Handles monthly/yearly toggle
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initPricingToggle();
  });

  function initPricingToggle() {
    const monthlyBtn = document.getElementById('monthlyToggle');
    const yearlyBtn = document.getElementById('yearlyToggle');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const yearlyPrices = document.querySelectorAll('.price-yearly');
    const savingsBadges = document.querySelectorAll('.savings-badge');

    if (!monthlyBtn || !yearlyBtn) return;

    // Set default to monthly
    setPricingPeriod('monthly');

    monthlyBtn.addEventListener('click', () => setPricingPeriod('monthly'));
    yearlyBtn.addEventListener('click', () => setPricingPeriod('yearly'));

    function setPricingPeriod(period) {
      if (period === 'monthly') {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
        monthlyPrices.forEach(price => price.style.display = '');
        yearlyPrices.forEach(price => price.style.display = 'none');
        savingsBadges.forEach(badge => badge.style.display = 'none');
      } else {
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        monthlyPrices.forEach(price => price.style.display = 'none');
        yearlyPrices.forEach(price => price.style.display = '');
        savingsBadges.forEach(badge => badge.style.display = '');
      }
    }
  }
})();

