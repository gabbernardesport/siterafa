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
