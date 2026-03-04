const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.getElementById('navbarMenu');
menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', String(!expanded));  
});