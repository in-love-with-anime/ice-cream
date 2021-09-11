// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");

//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);
        
//         mobileMenuRef.classList.toggle("is-open");
//     });
// })()

(() => {
  const mobileMenu = document.querySelector('.mobile-nav');
  const openMenuBtn = document.querySelector('.open-menu');
  const closeMenuBtn = document.querySelector('.close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });

})();