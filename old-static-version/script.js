// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (remembers your choice)
const root = document.documentElement;
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = isDark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Fade sections in as you scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .card, .timeline-item').forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Highlight the nav link for the section on screen
const navMap = new Map([...links.querySelectorAll('a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navMap.forEach(a => a.classList.remove('active'));
      navMap.get(e.target.id)?.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navMap.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
