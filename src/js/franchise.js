(() => {
    const refs = {
      openModalBtn: document.querySelector('[franchise-modal-open]'),
      closeModalBtn: document.querySelector('[franchise-modal-close]'),
      modal: document.querySelector('[franchise-data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('is-hidden');
    }
  })();