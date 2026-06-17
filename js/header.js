(function () {
  'use strict';

  /* ===== SCROLL-HIDE HEADER ===== */
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const current = window.scrollY;
    if (current > 150 && current > lastScroll) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScroll = Math.max(0, current);

    // Back-to-top visibility
    const btn = document.getElementById('back-to-top');
    if (btn) {
      btn.classList.toggle('visible', current > 500);
    }
  }, { passive: true });

  /* ===== BACK TO TOP ===== */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== HAMBURGER MENU ===== */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('nav-open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close when a link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('nav-open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        navMenu.classList.remove('nav-open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ===== SCROLL REVEAL (IntersectionObserver) ===== */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ===== MAGNETIC BUTTONS ===== */
  document.querySelectorAll('.magnetic').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.18) + 'px, ' + (y * 0.18) + 'px)';
    });

    btn.addEventListener('mouseleave', function () {
      btn.style.transform = 'translate(0, 0)';
    });
  });
})();
