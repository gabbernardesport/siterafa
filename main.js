/* =============================================
   RAFAEL SD — main.js
   ============================================= */

/* ---------- TRANSLATIONS (i18n) ---------- */
const i18n = {
  pt: {
    "doc-title": "RafaSD — Produtor de Mídia",
    "nav-about": "Sobre",
    "nav-method": "Como eu trabalho",
    "nav-contact": "Contato",
    "nav-cta": "Falar comigo",
    "hero-eyebrow": "PRODUTOR DE MÍDIA · UBERLÂNDIA / UBERABA (MG)",
    "hero-title-b": "PRODUTOR<br/>DE MÍDIA",
    "hero-desc-1": "20 anos, baseado em Uberlândia / Uberaba (MG). Atuando com produção multimídia para marcas e negócios que precisam de presença digital que realmente converte, não só que \"parece bonita\".",
    "hero-desc-2": "Trabalho na ponte entre criação e resultado: fotografia, vídeo, design e social media, sempre com um objetivo claro por trás, atrair atenção, guiar o público e gerar ação.",
    "hero-passage-label": "Parceiros Atendidos",
    "hero-tools-label": "FERRAMENTAS E FRENTES DE TRABALHO",
    "tool-ads": "Mídia paga",
    "tool-ads-desc": "Meta Ads · Arquitetura de funil",
    "tool-social": "Conteúdo e leads",
    "tool-social-desc": "Estratégia de social media · Geração de leads",
    "tool-creative": "Produção criativa",
    "tool-creative-desc": "Fotografia · Audiovisual · Design",
    "hero-btn-1": "Como eu trabalho",
    "hero-btn-2": "Falar comigo ↗",
    "method-eyebrow": "COMO EU TRABALHO",
    "method-title": "IDEIAS<br/>DIFERENTES,<br/>MÉTODO ÚNICO.",
    "method-sub": "Não importa se o projeto é uma foto, um vídeo, uma peça de design ou uma campanha de social media: eu sigo a mesma lógica por trás de tudo o que crio.",
    "step1-title": "ATENÇÃO NOS<br/>PRIMEIROS SEGUNDOS",
    "step1-desc": "Todo conteúdo compete por atenção antes de competir por qualquer outra coisa. O primeiro impacto — visual, de enquadramento ou de mensagem — é pensado pra parar o scroll e prender o olhar antes de qualquer explicação.",
    "step2-title": "DIREÇÃO<br/>VISUAL",
    "step2-desc": "Layout não é decoração, é direção. Hierarquia, cor, movimento e composição existem pra guiar o olho do público exatamente por onde ele precisa passar — na ordem certa, sem esforço.",
    "step3-title": "A JORNADA<br/>DO PÚBLICO",
    "step3-desc": "Penso em quem vai ver aquilo como alguém em um caminho: do primeiro contato até a decisão final. Cada etapa da peça empurra suavemente essa pessoa adiante — seja um vídeo, uma foto ou uma sequência de posts.",
    "step4-title": "CTA<br/>ESTRATÉGICO",
    "step4-desc": "Toda peça termina em uma ação, não em um ponto final. A chamada pra ação é pensada junto com o resto do conteúdo, não colada depois — ela é o destino pra onde tudo foi construído.",
    "flow-1": "Atenção",
    "flow-2": "Direção",
    "flow-3": "Jornada",
    "flow-4": "Ação",
    "method-close-desc": "É esse processo que aplico em cada projeto, independente da área ou do formato.",
    "contact-eyebrow": "CONTATO",
    "contact-title": "QUER CONVERSAR<br/>SOBRE UM<br/>PROJETO?",
    "contact-btn": "Chamar no WhatsApp",
    "contact-note": "Resposta rápida · Sem formulário",
    "footer-tag": "Produção multimídia com propósito.",
    "footer-rights": "© 2024 Rafael SD. Todos os direitos reservados."
  },
  en: {
    "doc-title": "RafaSD — Media Producer",
    "nav-about": "About",
    "nav-method": "How I work",
    "nav-contact": "Contact",
    "nav-cta": "Get in touch",
    "hero-eyebrow": "MEDIA PRODUCER · UBERLÂNDIA / UBERABA (MG)",
    "hero-title-b": "MEDIA<br/>PRODUCER",
    "hero-desc-1": "20 years old, based in Uberlândia / Uberaba (MG). Working with media production for brands and businesses that need a digital presence that actually converts — not just \"looks pretty.\"",
    "hero-desc-2": "I work at the bridge between creation and results: photography, video, design, and social media, always with a clear goal in mind — attracting attention, guiding the audience, and driving action.",
    "hero-passage-label": "Partners Served",
    "hero-tools-label": "TOOLS AND WORK FRONTS",
    "tool-ads": "Paid media",
    "tool-ads-desc": "Meta Ads · Funnel architecture",
    "tool-social": "Content & leads",
    "tool-social-desc": "Social media strategy · Lead generation",
    "tool-creative": "Creative production",
    "tool-creative-desc": "Photography · Audiovisual · Design",
    "hero-btn-1": "How I work",
    "hero-btn-2": "Get in touch ↗",
    "method-eyebrow": "HOW I WORK",
    "method-title": "DIFFERENT<br/>IDEAS,<br/>SINGLE METHOD.",
    "method-sub": "It doesn't matter if the project is a photo, a video, a design piece, or a social media campaign: I follow the exact same logic behind everything I create.",
    "step1-title": "ATTENTION IN THE<br/>FIRST SECONDS",
    "step1-desc": "All content competes for attention before competing for anything else. The first impact — visual, framing, or message — is designed to stop the scroll and catch the eye before any explanation.",
    "step2-title": "VISUAL<br/>DIRECTION",
    "step2-desc": "Layout is not decoration, it's direction. Hierarchy, color, movement, and composition exist to guide the audience's eye exactly where it needs to go — in the right order, effortlessly.",
    "step3-title": "THE AUDIENCE<br/>JOURNEY",
    "step3-desc": "I think of the viewer as someone on a path: from first contact to the final decision. Every stage of the piece gently pushes them forward — whether it is a video, a photo, or a sequence of posts.",
    "step4-title": "STRATEGIC<br/>CTA",
    "step4-desc": "Every piece ends with an action, not a period. The call to action is built in tandem with the rest of the content, not glued on afterward — it is the destination everything was built for.",
    "flow-1": "Attention",
    "flow-2": "Direction",
    "flow-3": "Journey",
    "flow-4": "Action",
    "method-close-desc": "This is the process I apply to every project, regardless of the area or format.",
    "contact-eyebrow": "CONTACT",
    "contact-title": "WANT TO TALK<br/>ABOUT A<br/>PROJECT?",
    "contact-btn": "Message on WhatsApp",
    "contact-note": "Quick reply · No forms",
    "footer-tag": "Purpose-driven multimedia production.",
    "footer-rights": "© 2024 Rafael SD. All rights reserved."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  
  // Translate elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      if (el.tagName === 'TITLE') {
        document.title = i18n[lang][key];
      } else {
        el.innerHTML = i18n[lang][key];
      }
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('preferred-lang', lang);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred-lang') || 'pt';
  setLanguage(savedLang);

  // Click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
});

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
