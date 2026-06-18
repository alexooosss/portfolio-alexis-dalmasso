(function () {
  'use strict';

  document.querySelectorAll('.stage-real-toggle').forEach(function (btn) {
    var panel = btn.nextElementSibling;
    panel.style.maxHeight = '0';
    panel.style.overflow = 'hidden';
    panel.style.transition = 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)';

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.offsetHeight;
        panel.style.maxHeight = '0';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.addEventListener('transitionend', function handler() {
          if (btn.getAttribute('aria-expanded') === 'true') {
            panel.style.maxHeight = 'none';
          }
          panel.removeEventListener('transitionend', handler);
        }, { once: true });
      }
    });
  });
})();
