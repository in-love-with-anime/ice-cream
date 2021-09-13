(() => {
  const modal = document.querySelector('[data-header-modal]');
  const closeModalBtn = document.querySelector('[data-header-modal-close]');

  const openModalBtns = document.querySelectorAll('[data-header-modal-open]');
  const openModalBtn1 = openModalBtns[0];
  const openModalBtn2 = openModalBtns[1];

  openModalBtn1.addEventListener('click', toggleModal);
  openModalBtn2.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
  }
})();
