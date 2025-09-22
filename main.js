// main.js
(function(){
  // theme
  const THEME_KEY = 'papi-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    const btns = document.querySelectorAll('#theme-toggle, #theme-toggle-2');
    btns.forEach(b => { if (b) b.textContent = theme==='light' ? '☀️' : '🌙'; });
  }

  function initTheme(){
    const stored = localStorage.getItem(THEME_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark');
    applyTheme(stored);
  }

  function toggleTheme(){
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = cur === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    const t = document.getElementById('theme-toggle');
    if (t) t.addEventListener('click', toggleTheme);
    const t2 = document.getElementById('theme-toggle-2');
    if (t2) t2.addEventListener('click', toggleTheme);
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const contact = document.getElementById('contactForm');
    if (contact) {
      contact.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('#contactForm .btn').textContent = 'Sent!';
        setTimeout(()=>{ document.querySelector('#contactForm .btn').textContent = 'Send message'; contact.reset(); }, 900);
      });
    }
  });
})();
