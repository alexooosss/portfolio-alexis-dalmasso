(function () {
  'use strict';

  /* ===== STYLE ===== */
  var RATINGS = {
    'BUT 1': {
      'Marketing':         [1, 1, 1, 0.15, 0.15],
      'Vente':             [1, 1, 1, 0.15, 0.15],
      'Communication':     [1, 1, 1, 0.15, 0.15]
    },
    'BUT 2': {
      'Marketing':         [1, 1, 1, 1, 0.15],
      'Vente':             [1, 1, 1, 1, 0.15],
      'Communication':     [1, 1, 1, 1, 0.15],
      'E-Business':        [1, 1, 1, 1, 0.4],
      'Marketing Digital': [1, 1, 1, 0.4, 0.15]
    },
    'BUT 3': {
      'Marketing':         [1, 1, 1, 1, 1],
      'Vente':             [1, 1, 1, 1, 0.4],
      'Marketing Digital': [1, 1, 1, 1, 0.4],
      'E-Business':        [1, 1, 1, 1, 0.4]
    }
  };

  function buildStars(name) {
    var opacities = (RATINGS[selectedYear] && RATINGS[selectedYear][name]) || [1, 1, 1, 1, 1];
    var html = '<div class="competence-stars">';
    for (var i = 0; i < 5; i++) {
      html += '<img src="public/Ranking%20star.png" alt="" aria-hidden="true" class="star-img" style="opacity:' + opacities[i] + '">';
    }
    return html + '</div>';
  }

  /* ===== STATE ===== */
  var YEAR_KEY = 'portfolio_year';
  var selectedYear = localStorage.getItem(YEAR_KEY) || 'BUT 3';

  /* ===== SVG ICONS ===== */
  var SVG_CHEVRON  = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  var SVG_EXTERNAL = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  /* ===== PANEL OPEN / CLOSE ===== */
  function openPanel(el) {
    el.style.maxHeight = el.scrollHeight + 'px';
    el.addEventListener('transitionend', function handler() {
      el.style.maxHeight = 'none';
      el.removeEventListener('transitionend', handler);
    }, { once: true });
  }

  function closePanel(el) {
    el.style.maxHeight = el.scrollHeight + 'px';
    el.offsetHeight; /* force reflow */
    el.style.maxHeight = '0';
  }

  /* ===== BUILD FLIP CARD ===== */
  function buildFlipCard(trace) {
    /* Parse "AC N : Description" */
    var titleMatch = String(trace.title).match(/^(AC\s*\d+)\s*:\s*(.*)/i);
    var acLabel = titleMatch ? titleMatch[1] : 'AC';
    var acDesc  = titleMatch ? titleMatch[2].trim() : trace.title;

    var hasLivrable = trace.livrableUrl && trace.livrableUrl !== '#';
    var livrableHtml = hasLivrable
      ? '<a href="' + escAttr(trace.livrableUrl) + '" target="_blank" rel="noreferrer"'
          + ' class="livrable-card holographic-card" onclick="event.stopPropagation()">'
          + '<div class="holographic-overlay"></div>'
          + SVG_EXTERNAL
          + '<span>Consulter le livrable</span>'
          + '</a>'
      : '<div class="livrable-card livrable-card--empty"><span>Livrable non disponible</span></div>';

    var card = document.createElement('div');
    card.className = 'ac-flip-card';
    card.innerHTML =
      '<div class="ac-flip-inner">'
        /* Face 0 — Titre */
        + '<div class="ac-face ac-face--title active">'
          + '<span class="ac-number">' + escHtml(acLabel) + '</span>'
          + '<p class="ac-title-text">' + escHtml(acDesc) + '</p>'
          + '<span class="ac-click-hint">Cliquer pour découvrir</span>'
        + '</div>'
        /* Face 1 — Projet */
        + '<div class="ac-face ac-face--content">'
          + '<span class="ac-face-label">Le Projet</span>'
          + '<p class="ac-face-text">' + escHtml(trace.projet) + '</p>'
          + '<button class="ac-nav-btn" aria-label="Face suivante">&#x203A;</button>'
        + '</div>'
        /* Face 2 — Bilan */
        + '<div class="ac-face ac-face--content">'
          + '<span class="ac-face-label">Mon Bilan</span>'
          + '<p class="ac-face-text">' + escHtml(trace.bilan) + '</p>'
          + '<button class="ac-nav-btn" aria-label="Face suivante">&#x203A;</button>'
        + '</div>'
        /* Face 3 — Livrable */
        + '<div class="ac-face ac-face--livrable">'
          + livrableHtml
          + '<button class="ac-nav-btn" aria-label="Retour au titre">&#x21BA;</button>'
        + '</div>'
        /* Dots indicator */
        + '<div class="ac-face-dots">'
          + '<span class="ac-face-dot active"></span>'
          + '<span class="ac-face-dot"></span>'
          + '<span class="ac-face-dot"></span>'
          + '<span class="ac-face-dot"></span>'
        + '</div>'
      + '</div>';

    var inner    = card.querySelector('.ac-flip-inner');
    var faces    = card.querySelectorAll('.ac-face');
    var dots     = card.querySelectorAll('.ac-face-dot');
    var current  = 0;
    var flipping = false;

    function goToFace(next) {
      if (flipping || next === current) return;
      flipping = true;

      /* SCÉNARIO 1 : Ouverture (0 -> 1) ou Fermeture (3 -> 0) avec Flip 3D */
      if ((current === 0 && next === 1) || (current === 3 && next === 0)) {
        inner.classList.add('phase-out');
        
        setTimeout(function () {
          // Mise à jour des petits points
          dots[current].classList.remove('active');
          dots[next].classList.add('active');

          if (next === 0) {
            // Fermeture : On remet la face 0 (titre) et on réinitialise les pages lues
            faces[0].classList.add('active');
            for (var i = 1; i < faces.length; i++) {
              faces[i].classList.remove('active', 'past');
            }
          } else {
            // Ouverture : On enlève le titre et on active la face 1
            faces[0].classList.remove('active');
            faces[1].classList.add('active');
          }

          current = next;

          // Reprise du Flip 3D
          inner.classList.remove('phase-out');
          inner.classList.add('phase-reset');
          inner.offsetHeight; /* force reflow */
          inner.classList.remove('phase-reset');
          inner.classList.add('phase-in');

          setTimeout(function () {
            inner.classList.remove('phase-in');
            flipping = false;
          }, 220); // 220ms = durée du flip CSS
        }, 220);
      } 
      
      /* SCÉNARIO 2 : Navigation interne avec glissement 2D */
      else {
        // Mise à jour des petits points
        dots[current].classList.remove('active');
        dots[next].classList.add('active');

        // La page actuelle glisse vers la gauche (ajout de .past)
        faces[current].classList.add('past');
        faces[current].classList.remove('active');

        // La nouvelle page arrive depuis la droite (ajout de .active)
        faces[next].classList.add('active');

        current = next;

        // On libère le clic après l'animation CSS du glissement (environ 350ms)
        setTimeout(function () {
          flipping = false;
        }, 350); 
      }
    }

    /* Click on title face → go to Projet */
    card.addEventListener('click', function (e) {
      if (e.target.closest('.ac-nav-btn') || e.target.closest('a')) return;
      if (current === 0) goToFace(1);
    });

    /* Nav arrows → cycle */
    card.querySelectorAll('.ac-nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        goToFace((current + 1) % 4);
      });
    });

    return card;
  }

  /* ===== BUILD COMPETENCE CARD ===== */
  function buildCompetence(name, traces, index) {
    var count = traces.length;
    var countLabel = count + ' apprentissage' + (count > 1 ? 's' : '') + ' critique' + (count > 1 ? 's' : '');

    // 1. Récupération de l'introduction correspondante (avec une vérification de sécurité)
    var introText = "";
    if (typeof INTROS_COMPETENCES !== 'undefined' && INTROS_COMPETENCES[selectedYear] && INTROS_COMPETENCES[selectedYear][name]) {
      introText = INTROS_COMPETENCES[selectedYear][name];
    }
    
    // 2. Préparation du HTML de l'introduction
    var introHtml = introText ? '<p class="competence-intro">' + escHtml(introText) + '</p>' : '';

    var card = document.createElement('div');
    card.className = 'competence-card';
    card.dataset.name = name;

    // 3. Injection dans la structure HTML (ajout de .competence-body-inner pour correspondre à votre CSS)
    card.innerHTML =
      '<button class="competence-header-btn" aria-expanded="false">'
        + '<div class="comp-bg-gradient"></div>'
        + '<div class="competence-info">'
          + '<div class="competence-title-row">'
            + '<h2 class="competence-name">' + escHtml(name) + '</h2>'
            + buildStars(name)
          + '</div>'
          + '<span class="competence-count">' + countLabel + '</span>'
        + '</div>'
        + '<div class="competence-chevron">' + SVG_CHEVRON + '</div>'
      + '</button>'
      + '<div class="competence-body">'
        + introHtml
        + '<p class="ac-definition-note">* AC = Apprentissage Critique : compétence précise et observable attendue à l\'issue de la formation, définie dans le référentiel national du BUT TC.</p>'
        + '<div class="competence-body-inner">'
          + '<div class="ac-cards-grid" data-count="' + count + '"></div>'
        + '</div>'
      + '</div>';
      

    var grid      = card.querySelector('.ac-cards-grid');
    var headerBtn = card.querySelector('.competence-header-btn');
    var body      = card.querySelector('.competence-body');

    traces.forEach(function (trace) { grid.appendChild(buildFlipCard(trace)); });

    headerBtn.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');

      /* Close other open cards */
      document.querySelectorAll('.competence-card.open').forEach(function (other) {
        if (other !== card) {
          other.classList.remove('open');
          other.querySelector('.competence-header-btn').setAttribute('aria-expanded', 'false');
          closePanel(other.querySelector('.competence-body'));
        }
      });

      if (!isOpen) {
        card.classList.add('open');
        headerBtn.setAttribute('aria-expanded', 'true');
        openPanel(body);
      } else {
        card.classList.remove('open');
        headerBtn.setAttribute('aria-expanded', 'false');
        closePanel(body);
      }
    });

    return card;
  }

  /* ===== RENDER ===== */
  function render() {
    var grid = document.getElementById('competences-grid');
    if (!grid) return;
    grid.innerHTML = '';

    var filtered = TRACES.filter(function (t) { return t.year === selectedYear; });

    if (filtered.length === 0) {
      var empty = document.createElement('div');
      empty.className = 'glass-panel empty-state';
      empty.innerHTML = '<p>Aucune trace disponible pour l\'année sélectionnée&nbsp;: <strong>' + escHtml(selectedYear) + '</strong>.</p>';
      grid.appendChild(empty);
      return;
    }

    var grouped = {};
    var order   = [];
    filtered.forEach(function (t) {
      if (!grouped[t.competence]) { grouped[t.competence] = []; order.push(t.competence); }
      grouped[t.competence].push(t);
    });
    order.sort(function (a, b) { return a.localeCompare(b); });
    order.forEach(function (name, i) { grid.appendChild(buildCompetence(name, grouped[name], i)); });
  }

  /* ===== YEAR SELECTOR ===== */
  document.querySelectorAll('.year-btn').forEach(function (btn) {
    if (btn.dataset.year === selectedYear) btn.classList.add('active');
    btn.addEventListener('click', function () {
      selectedYear = btn.dataset.year;
      localStorage.setItem(YEAR_KEY, selectedYear);
      document.querySelectorAll('.year-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      render();
    });
  });

  render();

  /* ===== HELPERS ===== */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escAttr(str) {
    return String(str).replace(/"/g, '&quot;');
  }

})();
