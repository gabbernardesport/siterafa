/* =============================================
   RAFA SD DESIGNER — main.js
   ============================================= */

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ---------- HAMBURGER ---------- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger siblings
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ---------- PARTICLES ---------- */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 38;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = Math.random() * 14 + 8;
    const delay = Math.random() * 10;
    const opacity = Math.random() * 0.4 + 0.05;

    p.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(201,168,76,${opacity});
      box-shadow: 0 0 ${size * 3}px rgba(201,168,76,${opacity * 0.6});
      animation: particleFloat ${dur}s ease-in-out ${delay}s infinite;
    `;
    container.appendChild(p);
  }

  // Inject keyframes
  if (!document.getElementById('particleKF')) {
    const style = document.createElement('style');
    style.id = 'particleKF';
    style.textContent = `
      @keyframes particleFloat {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: var(--op, 0.2); }
        25% { transform: translate(${rnd()}px, ${rnd()}px) scale(1.2); }
        50% { transform: translate(${rnd()}px, ${rnd()}px) scale(0.8); opacity: 0.05; }
        75% { transform: translate(${rnd()}px, ${rnd()}px) scale(1.1); }
      }
    `;
    document.head.appendChild(style);
  }
}

function rnd() { return Math.random() * 40 - 20; }

createParticles();

/* ---------- SMOOTH SCROLL OFFSET (for fixed navbar) ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---------- ACTIVE NAV LINK ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));

// Style for active nav link
const activeStyle = document.createElement('style');
activeStyle.textContent = `.nav-links a.active { color: var(--gold) !important; }`;
document.head.appendChild(activeStyle);
