function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const burger  = document.getElementById('burgerBtn');
const menu    = document.getElementById('sideMenu');
const overlay = document.getElementById('menu-overlay');
const closeX  = document.getElementById('closeMenu');

function openMenu(){
  burger.classList.add('open');
  menu.classList.add('open');
  overlay.classList.add('visible');
  burger.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
  const firstLink = menu.querySelector('a[href]');
  firstLink && firstLink.focus();
}
function closeMenu(){
  burger.classList.remove('open');
  menu.classList.remove('open');
  overlay.classList.remove('visible');
  burger.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}

burger?.addEventListener('click', () => menu.classList.contains('open') ? closeMenu() : openMenu());
overlay?.addEventListener('click', closeMenu);
closeX?.addEventListener('click', closeMenu);
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
// Fermer après clic sur un lien
document.querySelectorAll('#sideMenu a').forEach(a => a.addEventListener('click', closeMenu));
