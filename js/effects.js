/* ═══════════════════════════════════════════════════════════════
   EFFECTS.JS — Argent Liquide · animations & micro-interactions
   · Barre de progression de scroll
   · Boucle du bandeau défilant
   · Compteurs animés (plaques stats)
   · Le titre chrome suit subtilement la souris
   · Entrée en cascade des cartes compétences
   · Transitions de page (fondu avant navigation)
   Respecte prefers-reduced-motion.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduced     = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  /* ===== 1. BARRE DE PROGRESSION ===== */
  var progress = document.querySelector('.scroll-progress');
  if (progress) {
    var ticking = false;
    function updateProgress() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = 'scaleX(' + Math.min(1, Math.max(0, ratio)) + ')';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
    }, { passive: true });
    updateProgress();
  }

  /* ===== 2. BOUCLE DU BANDEAU ===== */
  var marquee = document.getElementById('skills-marquee');
  if (marquee) marquee.innerHTML += marquee.innerHTML;

  /* ===== 3. COMPTEURS ANIMÉS ===== */
  var statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (statNumbers.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        counterObserver.unobserve(entry.target);
        animateCounter(entry.target);
      });
    }, { threshold: 0.4 });

    statNumbers.forEach(function (el) { counterObserver.observe(el); });
  }

  function animateCounter(el) {
    var target = parseInt(el.dataset.count, 10);
    var suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;
    if (reduced) { el.textContent = target + suffix; return; }

    var duration = 1500;
    var start = null;

    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ===== 4. TITRE CHROME — SUIVI SOURIS (métal vivant) ===== */
  var chromeImgs = document.querySelectorAll('.chrome-float img');
  if (chromeImgs.length && !reduced && finePointer) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    document.addEventListener('mousemove', function (e) {
      tx = (e.clientX / window.innerWidth  - 0.5) * 14;
      ty = (e.clientY / window.innerHeight - 0.5) * 8;
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    function tick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      chromeImgs.forEach(function (img) {
        img.style.translate = cx + 'px ' + cy + 'px';
      });
      if (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }
  }

  /* ===== 5. CASCADE DES CARTES COMPÉTENCES ===== */
  var grid = document.getElementById('competences-grid');
  if (grid) {
    function staggerCards() {
      if (reduced) return;
      grid.querySelectorAll('.competence-card:not(.card-enter)').forEach(function (card, i) {
        card.style.animationDelay = (i * 0.07) + 's';
        card.classList.add('card-enter');
      });
    }
    if ('MutationObserver' in window) {
      new MutationObserver(staggerCards).observe(grid, { childList: true });
    }
    staggerCards(); /* rendu initial (competences.js tourne avant) */
  }

  /* ===== 6. TRANSITION DE PAGE (fondu de sortie) ===== */
  if (!reduced) {
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || link.target === '_blank' ||
          /^(https?:|mailto:|tel:)/.test(href) || !/\.html(\?|#|$)/.test(href)) return;

      link.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        document.body.classList.add('page-exit');
        setTimeout(function () { window.location.href = href; }, 220);
      });
    });

    window.addEventListener('pageshow', function () {
      document.body.classList.remove('page-exit');
    });
  }
})();
