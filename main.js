/* =============================================
   RAFAEL SD — main.js
   ============================================= */

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ---------- HAMBURGER ---------- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ---------- SCROLL REVEAL (com stagger) ---------- */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 90);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

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
}, { threshold: 0.35 });

sections.forEach(s => activeObserver.observe(s));

/* ---------- SMOOTH SCROLL com offset de navbar ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---------- PARTÍCULAS ---------- */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 2.5 + 0.8;
    const opacity = Math.random() * 0.35 + 0.05;
    const dur = Math.random() * 14 + 8;
    const delay = Math.random() * 12;
    p.style.cssText = `
      position:absolute;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${size}px; height:${size}px;
      border-radius:50%;
      background:rgba(201,168,76,${opacity});
      box-shadow:0 0 ${size*4}px rgba(201,168,76,${opacity*0.5});
      animation:pFloat ${dur}s ease-in-out ${delay}s infinite;
      pointer-events:none;
    `;
    container.appendChild(p);
  }
  if (!document.getElementById('pKF')) {
    const s = document.createElement('style');
    s.id = 'pKF';
    s.textContent = `
      @keyframes pFloat {
        0%,100%{transform:translate(0,0) scale(1);}
        33%{transform:translate(${r()}px,${r()}px) scale(1.15);}
        66%{transform:translate(${r()}px,${r()}px) scale(0.85); opacity:0.03;}
      }
    `;
    document.head.appendChild(s);
  }
}
function r() { return Math.random() * 36 - 18; }
createParticles();
