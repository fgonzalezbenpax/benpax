document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navigation = document.querySelector('.navbar-collapse');
  const menuToggle = document.querySelector('.navbar-toggler');
  const year = document.querySelector('#year');
  const scrollNavigation = () => navbar?.classList.toggle('scrolled', window.scrollY > 24);
  const closeMenu = () => {
    navigation?.classList.remove('show');
    menuToggle?.setAttribute('aria-expanded', 'false');
  };

  scrollNavigation();
  window.addEventListener('scroll', scrollNavigation, { passive:true });
  if (year) year.textContent = new Date().getFullYear();

  menuToggle?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('show') ?? false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('click', (event) => {
    if (navigation?.classList.contains('show') && !navbar?.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle?.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) closeMenu();
  });
});
