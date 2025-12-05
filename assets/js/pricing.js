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
    const toggleSwitch = document.getElementById('pricingToggle');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const yearlyLabel = document.getElementById('yearlyLabel');
    const savingsBadge = document.getElementById('savingsBadge');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const yearlyPrices = document.querySelectorAll('.price-yearly');

    if (!toggleSwitch) return;

    let isMonthly = true;

    // Toggle switch click handler
    toggleSwitch.addEventListener('click', function() {
      isMonthly = !isMonthly;
      setPricingPeriod(isMonthly ? 'monthly' : 'yearly');
    });

    // Label click handlers
    if (monthlyLabel) {
      monthlyLabel.addEventListener('click', function() {
        if (!isMonthly) {
          isMonthly = true;
          setPricingPeriod('monthly');
        }
      });
    }

    if (yearlyLabel) {
      yearlyLabel.addEventListener('click', function() {
        if (isMonthly) {
          isMonthly = false;
          setPricingPeriod('yearly');
        }
      });
    }

    function setPricingPeriod(period) {
      if (period === 'monthly') {
        // Update toggle switch
        toggleSwitch.classList.add('active');
        isMonthly = true;
        
        // Update labels
        if (monthlyLabel) monthlyLabel.classList.add('active');
        if (yearlyLabel) yearlyLabel.classList.remove('active');
        
        // Update prices
        monthlyPrices.forEach(price => price.style.display = '');
        yearlyPrices.forEach(price => price.style.display = 'none');
        
        // Hide savings badge
        if (savingsBadge) savingsBadge.classList.add('hidden');
      } else {
        // Update toggle switch
        toggleSwitch.classList.remove('active');
        isMonthly = false;
        
        // Update labels
        if (monthlyLabel) monthlyLabel.classList.remove('active');
        if (yearlyLabel) yearlyLabel.classList.add('active');
        
        // Update prices
        monthlyPrices.forEach(price => price.style.display = 'none');
        yearlyPrices.forEach(price => price.style.display = '');
        
        // Show savings badge
        if (savingsBadge) savingsBadge.classList.remove('hidden');
      }
    }

    // Set default to monthly
    setPricingPeriod('monthly');
  }
})();

