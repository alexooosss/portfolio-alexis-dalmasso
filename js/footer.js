(function () {
  'use strict';

  var footerMarkup = [
    '<div class="footer-grid">',
    '  <div class="footer-column footer-logo-column">',
    '    <img src="public/chrome-a.png" alt="Logo Alexis Dalmasso" class="footer-logo">',
    '  </div>',
    '  <div class="footer-column footer-identity">',
    '    <h3>Alexis Dalmasso</h3>',
    '    <p class="footer-eyebrow">Portfolio personnel</p>',
    '  </div>',
    '  <div class="footer-column">',
    '    <h4>Navigation</h4>',
    '    <a href="index.html">Accueil</a>',
    '    <a href="competences.html">Compétences</a>',
    '    <a href="skills.html">Mon ADN</a>',
    '    <a href="stages.html">Stages &amp; Expériences</a>',
    '    <a href="contact.html">Contact</a>',
    '  </div>',
    '  <div class="footer-column">',
    '    <h4>Coordonnées</h4>',
    '    <a href="mailto:alexis.dalmasso7@gmail.com">alexis.dalmasso7@gmail.com</a>',
    '    <a href="https://www.linkedin.com/in/alexis-dalmasso/" target="_blank" rel="noreferrer">LinkedIn /alexis-dalmasso</a>',
    '    <span>Toulon &amp; environs, France</span>',
    '  </div>',
    '</div>',
    '<div class="footer-bottom">',
    '  <p>© 2026 Alexis Dalmasso</p>',
    '</div>'
  ].join('');

  document.querySelectorAll('.site-footer').forEach(function (footer) {
    footer.innerHTML = footerMarkup;
  });
})();
