document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navigation = document.querySelector('.navbar-collapse');
  const year = document.querySelector('#year');
  const scrollNavigation = () => navbar?.classList.toggle('scrolled', window.scrollY > 24);

  scrollNavigation();
  window.addEventListener('scroll', scrollNavigation, { passive:true });
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navigation && window.bootstrap) bootstrap.Collapse.getInstance(navigation)?.hide();
    });
  });
});
