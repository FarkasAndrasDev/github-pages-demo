// Navbar scroll hatás
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Mobil menü
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
}

// Fade-in animáció scroll-on
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.stat-item, .activity-card, .support-card, .info-card, .contact-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Kapcsolat form → mailto megnyitása
function handleSubmit(e) {
  e.preventDefault();
  const f = e.target;
  const name    = f.name.value;
  const email   = f.email.value;
  const subject = f.subject.options[f.subject.selectedIndex].text;
  const message = f.message.value;

  const body = encodeURIComponent(
    `Feladó: ${name}\nEmail: ${email}\n\n${message}`
  );
  const sub = encodeURIComponent(`[SKSZ weboldal] ${subject}`);
  window.location.href = `mailto:speckutatomento@gmail.com?subject=${sub}&body=${body}`;
}

// Aktív navigációs link kiemelése scroll alapján
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
}, { passive: true });
