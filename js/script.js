 // Mobile menu toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      const navLinks = document.querySelector('.nav-links');
      
      mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });
    });