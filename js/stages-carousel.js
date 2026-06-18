(function () {
  'use strict';

  /* ── Helpers ── */
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  function img(cls) {
    var i = document.createElement('img');
    if (cls) i.className = cls;
    return i;
  }

  /* ── Site card ── */
  function buildSiteCard(sf) {
    var wrap = el('div', 'real-site-wrap');
    var link = document.createElement('a');
    link.href = sf.href;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.className = 'real-site-link';
    var im = img();
    im.src = sf.src;
    im.alt = sf.alt;
    im.loading = 'lazy';
    link.appendChild(im);
    link.appendChild(el('span', 'real-site-hint', 'Cliquer pour visualiser le site ↗'));
    wrap.appendChild(link);
    return wrap;
  }

  /* ── Standard carousel (+ book = white bg variant) ── */
  function buildCarousel(sf) {
    var isBook = sf.type === 'book';
    var images = sf.images;
    var total = images.length;
    var current = 0;

    var root = el('div', 'real-carousel' + (isBook ? ' real-book' : ''));
    var track = el('div', 'real-carousel-track');

    images.forEach(function (im, idx) {
      var slide = el('div', 'real-carousel-slide' + (idx === 0 ? ' active' : ''));
      var i = document.createElement('img');
      i.alt = im.alt;
      i.loading = idx < 2 ? 'eager' : 'lazy';
      i.dataset.src = im.src;
      if (idx === 0) { i.src = im.src; }
      slide.appendChild(i);
      track.appendChild(slide);
    });
    root.appendChild(track);

    if (total > 1) {
      var nav = el('div', 'real-carousel-nav');
      var prev = el('button', 'real-carousel-btn real-carousel-prev');
      prev.innerHTML = '&#8249;';
      prev.setAttribute('aria-label', 'Précédent');
      var counter = el('span', 'real-carousel-counter', '1 / ' + total);
      var next = el('button', 'real-carousel-btn real-carousel-next');
      next.innerHTML = '&#8250;';
      next.setAttribute('aria-label', 'Suivant');

      function goTo(idx) {
        var slides = track.querySelectorAll('.real-carousel-slide');
        slides[current].classList.remove('active');
        current = (idx + total) % total;
        slides[current].classList.add('active');
        counter.textContent = (current + 1) + ' / ' + total;
        [current, (current + 1) % total].forEach(function (i) {
          var imgEl = slides[i].querySelector('img');
          if (!imgEl.src && imgEl.dataset.src) { imgEl.src = imgEl.dataset.src; }
        });
      }

      prev.addEventListener('click', function () { goTo(current - 1); });
      next.addEventListener('click', function () { goTo(current + 1); });
      var startX = 0;
      track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', function (e) {
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) { goTo(dx < 0 ? current + 1 : current - 1); }
      }, { passive: true });

      nav.appendChild(prev);
      nav.appendChild(counter);
      nav.appendChild(next);
      root.appendChild(nav);
    }
    return root;
  }

  /* ══════════════════════════════════════════════════════════════
     Book Flip — double-page spread avec animation 3D page-tournée
     ══════════════════════════════════════════════════════════════ */
  function buildBookFlip(sf) {
    var images = sf.images;
    var total = images.length;
    /* Proper book layout: front-cover spread (right only) + pairs + back-cover spread (left only) */
    var totalSpreads = Math.floor(total / 2) + 1;
    var currentSpread = 0;
    var isAnimating = false;

    /* Spread 0 : L=null, R=p[0]  (couverture avant, droite seule)
       Spread s  : L=p[2s-1], R=p[2s]
       Spread last (even total) : L=p[n-1], R=null (couverture arrière, gauche seule) */
    function getL(s) {
      if (s === 0) return null;
      var i = 2 * s - 1;
      return i < total ? images[i] : null;
    }
    function getR(s) {
      var i = 2 * s;
      return i < total ? images[i] : null;
    }

    /* Page-range label for the counter */
    function spreadLabel(s) {
      var hasL = getL(s) !== null;
      var hasR = getR(s) !== null;
      var lNum = 2 * s;
      var rNum = 2 * s + 1;
      if (hasL && hasR) return lNum + '–' + rNum + ' / ' + total;
      if (hasR) return rNum + ' / ' + total;
      return lNum + ' / ' + total;
    }

    /* ── DOM ── */
    var root     = el('div', 'bookflip-container');
    var viewport = el('div', 'bookflip-viewport');
    var bookEl   = el('div', 'book-spread');

    /* Static background pages (always visible beneath flipper) */
    var staticLeft  = el('div', 'book-static book-static--left');
    var staticLeftImg  = img('book-page-img');
    staticLeft.appendChild(staticLeftImg);

    var staticRight = el('div', 'book-static book-static--right');
    var staticRightImg = img('book-page-img');
    staticRight.appendChild(staticRightImg);

    /* Visual spine */
    var spine = el('div', 'book-spine');

    /* Shadow hint during flip */
    var shadowOverlay = el('div', 'bookflip-shadow-overlay');

    /* Flipper — the page that animates */
    var flipper   = el('div', 'book-flipper book-flipper--right');
    var frontFace = el('div', 'book-face book-face--front');
    var frontImg  = img('book-page-img');
    frontFace.appendChild(frontImg);
    var backFace  = el('div', 'book-face book-face--back');
    var backImg   = img('book-page-img');
    backFace.appendChild(backImg);
    flipper.appendChild(frontFace);
    flipper.appendChild(backFace);

    bookEl.appendChild(staticLeft);
    bookEl.appendChild(staticRight);
    bookEl.appendChild(spine);
    bookEl.appendChild(flipper);
    viewport.appendChild(bookEl);
    viewport.appendChild(shadowOverlay);
    root.appendChild(viewport);

    /* ── Render spread (no animation) ── */
    function renderSpread(s) {
      var L = getL(s);
      var R = getR(s);
      if (L) { staticLeftImg.src = L.src; staticLeftImg.alt = L.alt; staticLeft.hidden = false; }
      else   { staticLeft.hidden = true; }

      if (R) { staticRightImg.src = R.src; staticRightImg.alt = R.alt;
               frontImg.src = R.src; frontImg.alt = R.alt; flipper.hidden = false; }
      else   { staticRightImg.src = ''; flipper.hidden = true; }

      /* reset flipper to default right position */
      flipper.classList.remove('book-flipper--left');
      flipper.classList.add('book-flipper--right');
      backImg.src = '';
    }

    renderSpread(0);

    /* Preload adjacent spreads */
    function preload(idx) {
      if (idx < 0 || idx >= totalSpreads) return;
      [getL(idx), getR(idx)].forEach(function (p) {
        if (p) { var i = new Image(); i.src = p.src; }
      });
    }
    preload(1);

    /* ── Shadow pulse helper ── */
    function pulseShadow() {
      shadowOverlay.classList.remove('is-active');
      void shadowOverlay.offsetWidth;
      shadowOverlay.classList.add('is-active');
    }

    /* ── Forward: right page flips left around spine ── */
    function goForward() {
      if (isAnimating || currentSpread >= totalSpreads - 1) return;
      isAnimating = true;

      var next = currentSpread + 1;
      var nL = getL(next);
      var nR = getR(next);

      /* Flipper is on right half, origin = left (spine) */
      flipper.classList.remove('book-flipper--left');
      flipper.classList.add('book-flipper--right');
      /* front = current right (already set), back = next left */
      if (nL) { backImg.src = nL.src; backImg.alt = nL.alt; } else { backImg.src = ''; }
      /* next right appears beneath flipper as it rotates away */
      if (nR) { staticRightImg.src = nR.src; staticRightImg.alt = nR.alt; } else { staticRightImg.src = ''; }

      flipper.classList.add('is-flipping-forward');
      pulseShadow();

      flipper.addEventListener('transitionend', function h(e) {
        if (e.propertyName !== 'transform') return;
        flipper.removeEventListener('transitionend', h);
        currentSpread = next;
        updateCounter();
        /* Snap without transition — hide flipper while resetting position/images */
        flipper.style.transition = 'none';
        flipper.style.visibility = 'hidden';
        flipper.classList.remove('is-flipping-forward');
        if (nL) { staticLeftImg.src = nL.src; staticLeftImg.alt = nL.alt; staticLeft.hidden = false; }
        else    { staticLeft.hidden = true; }
        if (nR) { frontImg.src = nR.src; frontImg.alt = nR.alt; flipper.hidden = false; }
        else    { flipper.hidden = true; }
        backImg.src = '';
        flipper.offsetHeight; /* force reflow */
        flipper.style.visibility = '';
        flipper.style.transition = '';
        preload(currentSpread + 1);
        isAnimating = false;
      });
    }

    /* ── Backward: left page flips right around spine ── */
    function goBackward() {
      if (isAnimating || currentSpread <= 0) return;
      isAnimating = true;

      var prev = currentSpread - 1;
      var pL = getL(prev);
      var pR = getR(prev);
      var cL = getL(currentSpread);

      /* Move flipper to left half, origin = right (spine).
         It may have been hidden if the current spread had no right page. */
      flipper.hidden = false;
      flipper.style.visibility = '';
      flipper.classList.remove('book-flipper--right');
      flipper.classList.add('book-flipper--left');
      /* front = current left page */
      if (cL) { frontImg.src = cL.src; frontImg.alt = cL.alt; }
      /* back = prev right (mirrored) */
      if (pR) { backImg.src = pR.src; backImg.alt = pR.alt; } else { backImg.src = ''; }
      /* prev left appears beneath flipper as it opens */
      if (pL) { staticLeftImg.src = pL.src; staticLeftImg.alt = pL.alt; staticLeft.hidden = false; }
      else    { staticLeft.hidden = true; }
      /* right stays showing current right during backward flip */

      flipper.classList.add('is-flipping-backward');
      pulseShadow();

      flipper.addEventListener('transitionend', function h(e) {
        if (e.propertyName !== 'transform') return;
        flipper.removeEventListener('transitionend', h);
        currentSpread = prev;
        updateCounter();
        /* Snap: hide flipper, reset position and images, then show. */
        flipper.style.transition = 'none';
        flipper.style.visibility = 'hidden';
        flipper.classList.remove('is-flipping-backward');
        flipper.classList.remove('book-flipper--left');
        flipper.classList.add('book-flipper--right');
        if (pR) { staticRightImg.src = pR.src; staticRightImg.alt = pR.alt;
                  frontImg.src = pR.src; frontImg.alt = pR.alt; flipper.hidden = false; }
        else    { flipper.hidden = true; }
        backImg.src = '';
        flipper.offsetHeight;
        flipper.style.visibility = '';
        flipper.style.transition = '';
        preload(currentSpread - 1);
        isAnimating = false;
      });
    }

    function updateCounter() {
      counter.textContent = spreadLabel(currentSpread);
    }

    /* ── Navigation ── */
    var nav     = el('div', 'real-carousel-nav');
    var prevBtn = el('button', 'real-carousel-btn real-carousel-prev');
    prevBtn.innerHTML = '&#8249;';
    prevBtn.setAttribute('aria-label', 'Pages précédentes');
    var counter = el('span', 'real-carousel-counter', spreadLabel(0));
    var nextBtn = el('button', 'real-carousel-btn real-carousel-next');
    nextBtn.innerHTML = '&#8250;';
    nextBtn.setAttribute('aria-label', 'Pages suivantes');

    prevBtn.addEventListener('click', goBackward);
    nextBtn.addEventListener('click', goForward);

    var touchX = 0;
    viewport.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) { dx < 0 ? goForward() : goBackward(); }
    }, { passive: true });

    nav.appendChild(prevBtn);
    nav.appendChild(counter);
    nav.appendChild(nextBtn);
    root.appendChild(nav);
    return root;
  }

  /* ── Video card ── */
  function buildVideoCard(sf) {
    var wrap = el('div', 'real-video-wrap');
    var ytMatch = sf.src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    if (ytMatch) {
      var id = ytMatch[1];
      var link = document.createElement('a');
      link.href = 'https://www.youtube.com/watch?v=' + id;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.className = 'real-yt-link';
      var thumb = document.createElement('img');
      thumb.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';
      thumb.alt = sf.title || 'Vidéo YouTube';
      thumb.className = 'real-yt-thumb';
      var overlay = el('div', 'real-yt-overlay');
      /* Play button SVG */
      overlay.innerHTML = '<svg class="real-yt-play" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><path d="M66.5 7.7C65.7 4.8 63.4 2.5 60.5 1.7 55.2 0 34 0 34 0S12.8 0 7.5 1.7C4.6 2.5 2.3 4.8 1.5 7.7 0 13 0 24 0 24s0 11 1.5 16.3c.8 2.9 3.1 5.2 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.7c2.9-.8 5.2-3.1 6-6C68 35 68 24 68 24s0-11-1.5-16.3z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>';
      var hint = el('span', 'real-yt-hint', 'Regarder sur YouTube ↗');
      link.appendChild(thumb);
      link.appendChild(overlay);
      link.appendChild(hint);
      wrap.appendChild(link);
    } else {
      var video = document.createElement('video');
      video.src = sf.src;
      video.controls = true;
      video.preload = 'metadata';
      video.className = 'real-video';
      wrap.appendChild(video);
    }
    return wrap;
  }

  /* ── PDF link card ── */
  function buildPdfCard(sf) {
    var wrap = el('div', 'real-pdf-wrap');
    var link = document.createElement('a');
    link.href = sf.href;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.className = 'real-pdf-link';
    /* SVG document icon */
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', 'real-pdf-icon');
    svg.innerHTML = '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>';
    var label = el('span', 'real-pdf-label', sf.title || 'Ouvrir le document');
    var hint  = el('span', 'real-pdf-hint',  'Cliquer pour ouvrir le PDF ↗');
    link.appendChild(svg);
    link.appendChild(label);
    link.appendChild(hint);
    wrap.appendChild(link);
    return wrap;
  }

  /* ── Render families ── */
  function renderFamilies(data, container) {
    container.innerHTML = '';
    data.families.forEach(function (family) {
      var familyEl = el('div', 'real-family');
      var header = el('div', 'real-family-header');
      header.appendChild(el('p', 'real-family-title', family.name));
      familyEl.appendChild(header);
      var grid = el('div', 'real-subfamily-grid');
      family.subfamilies.forEach(function (sf) {
        var sfEl = el('div', 'real-subfamily');
        sfEl.appendChild(el('p', 'real-subfamily-title', sf.title));
        var content;
        if      (sf.type === 'site')      { content = buildSiteCard(sf); }
        else if (sf.type === 'book-flip') { content = buildBookFlip(sf); }
        else if (sf.type === 'video')     { content = buildVideoCard(sf); }
        else if (sf.type === 'pdf')       { content = buildPdfCard(sf); }
        else                              { content = buildCarousel(sf); }
        sfEl.appendChild(content);
        if (sf.caption) { sfEl.appendChild(el('p', 'real-caption', sf.caption)); }
        grid.appendChild(sfEl);
      });
      familyEl.appendChild(grid);
      container.appendChild(familyEl);
    });
  }

  /* ── Init ── */
  function init() {
    var c3 = document.getElementById('real-panel-but3');
    if (c3 && typeof BUT3_DATA !== 'undefined') { renderFamilies(BUT3_DATA, c3); }
    var c2 = document.getElementById('real-panel-but2');
    if (c2 && typeof BUT2_DATA !== 'undefined') { renderFamilies(BUT2_DATA, c2); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

})();
