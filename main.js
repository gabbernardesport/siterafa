/* =============================================
   RAFAEL SD — main.js
   ============================================= */

/* ---------- NAVBAR SCROLL ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------- HAMBURGER ---------- */
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll(
  '.hero-body > *, .method-step, .method-close, .contato-left > *, .contato-right, .metodo-header > *'
);

revealEls.forEach(el => el.classList.add('reveal'));

const ro = new IntersectionObserver((entries) => {
  entries.forEach((entry, _, all) => {
    if (!entry.isIntersecting) return;
    const group = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
    const i = group.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('in'), i * 80);
    ro.unobserve(entry.target);
  });
}, { threshold: 0.08 });

revealEls.forEach(el => ro.observe(el));

/* ---------- ACTIVE NAV LINK ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const ao = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => ao.observe(s));

/* ---------- SMOOTH SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});

/* =============================================
   CHROMATIC LENS FLARE — canvas cursor effect
   ============================================= */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return;

  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed', inset: '0',
    width: '100%', height: '100%',
    pointerEvents: 'none',
    zIndex: '9999',
    mixBlendMode: 'screen',
  });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  let mx = -400, my = -400, cx = -400, cy = -400, idle = 0, alpha = 0;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY; idle = 0;
  }, { passive: true });

  const lerp = (a, b, t) => a + (b - a) * t;

  function fillRad(x, y, r0, r1, stops) {
    const g = ctx.createRadialGradient(x, y, r0, x, y, r1);
    stops.forEach(([o, c]) => g.addColorStop(o, c));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function ring(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function streak(x, y, len, angle, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    const g = ctx.createLinearGradient(-len / 2, 0, len / 2, 0);
    g.addColorStop(0, 'transparent');
    g.addColorStop(0.5, color);
    g.addColorStop(1, 'transparent');
    ctx.strokeStyle = g;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-len / 2, 0);
    ctx.lineTo(len / 2, 0);
    ctx.stroke();
    ctx.restore();
  }

  const ANG = -34 * Math.PI / 180;

  function draw() {
    requestAnimationFrame(draw);
    cx = lerp(cx, mx, 0.10);
    cy = lerp(cy, my, 0.10);
    idle++;
    alpha = lerp(alpha, idle < 6 ? 1 : 0, 0.055);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (alpha < 0.004) return;
    const a = alpha;

    /* central glow */
    fillRad(cx, cy, 0, 140, [
      [0,   `rgba(255,255,255,${0.13 * a})`],
      [0.3, `rgba(79,142,247,${0.07 * a})`],
      [0.7, `rgba(62,207,110,${0.03 * a})`],
      [1,   'transparent'],
    ]);

    /* RGB cores — chromatic aberration */
    fillRad(cx - 7, cy - 5, 0, 30, [[0, `rgba(79,142,247,${0.50 * a})`],  [1, 'transparent']]);
    fillRad(cx,     cy,     0, 24, [[0, `rgba(255,255,255,${0.28 * a})`], [1, 'transparent']]);
    fillRad(cx + 7, cy + 5, 0, 30, [[0, `rgba(247,79,79,${0.45 * a})`],  [1, 'transparent']]);

    /* halo rings */
    ring(cx - 9,  cy - 6, 48,  `rgba(79,142,247,${0.20 * a})`);
    ring(cx,      cy,     42,  `rgba(255,255,255,${0.12 * a})`);
    ring(cx + 9,  cy + 6, 48,  `rgba(247,79,79,${0.18 * a})`);
    ring(cx - 14, cy - 9, 88,  `rgba(62,207,110,${0.09 * a})`);
    ring(cx,      cy,     80,  `rgba(247,162,62,${0.07 * a})`);
    ring(cx + 14, cy + 9, 88,  `rgba(247,79,79,${0.08 * a})`);
    ring(cx,      cy,     140, `rgba(255,255,255,${0.025 * a})`);

    /* diagonal streaks at brand angle */
    streak(cx, cy, 380, ANG,                `rgba(79,142,247,${0.24 * a})`);
    streak(cx, cy, 300, ANG + 0.01,         `rgba(62,207,110,${0.15 * a})`);
    streak(cx, cy, 240, ANG - 0.01,         `rgba(247,79,79,${0.13 * a})`);
    streak(cx, cy, 160, ANG + Math.PI / 2,  `rgba(255,255,255,${0.05 * a})`);

    /* lens ghost reflections */
    const W = canvas.width, H = canvas.height;
    [
      { px: 0.70, py: 0.20, r: 18, col: '79,142,247',  o: 0.28 },
      { px: 0.30, py: 0.78, r: 14, col: '247,79,79',   o: 0.22 },
      { px: 0.55, py: 0.40, r: 10, col: '62,207,110',  o: 0.18 },
      { px: 0.20, py: 0.50, r:  8, col: '247,162,62',  o: 0.14 },
    ].forEach(({ px, py, r, col, o }) => {
      const sx = cx + (W * px - cx) * 0.45;
      const sy = cy + (H * py - cy) * 0.45;
      fillRad(sx, sy, 0, r, [[0, `rgba(${col},${o * a})`], [1, 'transparent']]);
    });
  }

  draw();
})();
