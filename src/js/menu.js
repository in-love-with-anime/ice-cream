 
(() => {
    const el = query => document.querySelector(query);
    const onclick = (elem, callback) => elem.addEventListener('click', callback)

    const toggleModal = () => {
        const modal = el('[data-modal]')
        modal.classList.toggle('is-open')
        modal.classList.toggle('is-hidden')
    };

    onclick(el('[data-modal-open]'), toggleModal)
    onclick(el('[data-modal-close]'), toggleModal)
    onclick(el('[data-menu-mobile]'), toggleModal)

})();