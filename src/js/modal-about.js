(() => {
  const mobileMenu = document.querySelector('.about-modal');
  const openMenuBtn = document.querySelector('.about-modal-open');
  const closeMenuBtn = document.querySelector('.about-modal__close');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    // if (!e.matches) return;
    // mobileMenu.classList.remove('is-open');
    // openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  // });
})();