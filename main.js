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

  let mx = 100, my = 150, cx = 100, cy = 150, idle = 0, alpha = 0;

  window.addEventListener('scroll', () => {
    // Determine target positions based on scroll percentage
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    
    // Move from left (15%) to right (85%) horizontally, and keep centered vertically with a subtle wave
    mx = window.innerWidth * (0.15 + pct * 0.70);
    my = window.innerHeight * (0.45 + Math.sin(pct * Math.PI) * 0.15);
    
    idle = 0;
  }, { passive: true });

  // Set initial position based on current scroll on load
  setTimeout(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    mx = cx = window.innerWidth * (0.15 + pct * 0.70);
    my = cy = window.innerHeight * (0.45 + Math.sin(pct * Math.PI) * 0.15);
  }, 100);

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
    cx = lerp(cx, mx, 0.08);
    cy = lerp(cy, my, 0.08);
    idle++;
    // Keep it visible for a bit longer when scrolling (idle threshold 15)
    alpha = lerp(alpha, idle < 15 ? 1 : 0, 0.055);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (alpha < 0.004) return;
    const a = alpha;

    /* central glow */
    ctx.filter = 'blur(20px)';
    
    // Draw multiple vertical "varetas" offset horizontally for chromatic aberration
    const varetas = [
      { dx: -20, h: 280, w: 6,  col: 'rgba(79, 142, 247, ' },   // Blue bar
      { dx: -10, h: 320, w: 4,  col: 'rgba(62, 207, 110, ' },   // Green bar
      { dx: 0,   h: 360, w: 10, col: 'rgba(255, 255, 255, ' },  // White core bar
      { dx: 10,  h: 320, w: 4,  col: 'rgba(247, 162, 62, ' },   // Orange bar
      { dx: 20,  h: 280, w: 6,  col: 'rgba(247, 79, 79, ' }     // Red bar
    ];

    varetas.forEach(v => {
      const g = ctx.createLinearGradient(0, cy - v.h/2, 0, cy + v.h/2);
      g.addColorStop(0, 'transparent');
      g.addColorStop(0.5, `${v.col}${0.35 * a})`);
      g.addColorStop(1, 'transparent');

      ctx.fillStyle = g;
      ctx.fillRect(cx + v.dx - v.w/2, cy - v.h/2, v.w, v.h);
    });

    // Reset filter
    ctx.filter = 'none';

    /* diagonal streaks at brand angle (much softer and blurred) */
    ctx.filter = 'blur(15px)';
    streak(cx, cy, 400, ANG,                `rgba(79,142,247,${0.15 * a})`);
    streak(cx, cy, 320, ANG + 0.01,         `rgba(62,207,110,${0.10 * a})`);
    streak(cx, cy, 260, ANG - 0.01,         `rgba(247,79,79,${0.08 * a})`);
    ctx.filter = 'none';
  }

  draw();
})();
