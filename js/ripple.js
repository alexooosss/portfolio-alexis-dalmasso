(function () {
  'use strict';

  const canvas = document.getElementById('ripple-canvas');
  if (!canvas) return;

  // Respect user preferences & skip when hidden (mobile)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (getComputedStyle(canvas).display === 'none') return;

  const ctx = canvas.getContext('2d');

  // Simulation runs at 1/SCALE resolution for performance
  const SCALE = 4;
  const DAMPING = 0.965;

  let W, H, w, h;
  let buf1, buf2; // ping-pong height buffers

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    w = Math.ceil(W / SCALE);
    h = Math.ceil(H / SCALE);
    // Canvas renders at small size; CSS stretches it to fill viewport
    canvas.width = w;
    canvas.height = h;
    buf1 = new Float32Array(w * h);
    buf2 = new Float32Array(w * h);
  }

  // Add a circular disturbance at screen coordinates (px, py)
  function disturb(px, py, radius, strength) {
    const cx = Math.floor(px / SCALE);
    const cy = Math.floor(py / SCALE);
    const r = Math.floor(radius / SCALE);
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx * dx + dy * dy <= r * r) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx > 0 && nx < w - 1 && ny > 0 && ny < h - 1) {
            buf2[ny * w + nx] += strength * (1 - Math.sqrt(dx * dx + dy * dy) / r);
          }
        }
      }
    }
  }

  // One simulation step using the classic ripple algorithm
  function simulate() {
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const i = y * w + x;
        const val = (buf2[i - 1] + buf2[i + 1] + buf2[i - w] + buf2[i + w]) * 0.5 - buf1[i];
        buf1[i] = val * DAMPING;
      }
    }
    // Swap buffers
    const tmp = buf1; buf1 = buf2; buf2 = tmp;
  }

  // Render the height map as a metallic liquid surface
  function render() {
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    // Base color: dark purple-black (#07000f)
    const BR = 7, BG = 0, BB = 15;

    for (let i = 0; i < w * h; i++) {
      const height = buf2[i];
      // Intensity clamped 0-1; normalize to ripple amplitude range
      const intensity = Math.max(0, Math.min(1, Math.abs(height) / 80));
      const shine = Math.max(0, Math.min(1, height / 60)); // positive = bright ridge

      // Mix bg with silver (positive) and cyan/pink tint (wave front)
      const r = Math.round(BR + (200 - BR) * intensity * 0.35 + (255 - BR) * shine * 0.15);
      const g = Math.round(BG + (195 - BG) * intensity * 0.30 + (242 - BG) * shine * 0.2);
      const b = Math.round(BB + (220 - BB) * intensity * 0.40 + (254 - BB) * shine * 0.35);

      const px = i * 4;
      data[px]     = Math.min(255, r);
      data[px + 1] = Math.min(255, g);
      data[px + 2] = Math.min(255, b);
      data[px + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  // Track mouse for continuous small ripples on movement
  let lastX = -999, lastY = -999;

  document.addEventListener('mousemove', function (e) {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const speed = Math.sqrt(dx * dx + dy * dy);
    if (speed > 3) {
      disturb(e.clientX, e.clientY, 10, Math.min(speed * 1.8, 70));
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });

  // Large splash on click
  document.addEventListener('click', function (e) {
    disturb(e.clientX, e.clientY, 45, 220);
  });

  // Touch support
  document.addEventListener('touchmove', function (e) {
    const t = e.touches[0];
    const dx = t.clientX - lastX;
    const dy = t.clientY - lastY;
    const speed = Math.sqrt(dx * dx + dy * dy);
    if (speed > 3) {
      disturb(t.clientX, t.clientY, 14, Math.min(speed * 2, 90));
      lastX = t.clientX;
      lastY = t.clientY;
    }
  }, { passive: true });

  window.addEventListener('resize', resize);

  resize();

  // Ambient rain: random drops keep the surface alive without input
  let lastDrop = 0;
  function ambientDrop(now) {
    if (now - lastDrop > 1800 + Math.random() * 1700) {
      disturb(
        Math.random() * W,
        Math.random() * H,
        18 + Math.random() * 22,
        60 + Math.random() * 80
      );
      lastDrop = now;
    }
  }

  // Welcome splash in the centre of the screen
  setTimeout(function () { disturb(W / 2, H * 0.4, 60, 240); }, 400);

  // Pause simulation when the tab is hidden
  let running = true;
  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) requestAnimationFrame(loop);
  });

  function loop(now) {
    if (!running) return;
    ambientDrop(now || 0);
    simulate();
    render();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
