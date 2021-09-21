function modal() {
    const callTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');



function showModal () {
  modal.classList.add('show');
  modal.classList.remove('hide');

  document.body.style.overflow= 'hidden';
  clearTimeout(openModalByTime);
}

callTrigger.forEach(item => {
  item.addEventListener('click', () => {
      showModal();
  });
});

function closeModal () {
      modal.classList.remove('show');
      modal.classList.add('hide');

      document.body.style.overflow= '';
}

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
  }
});

const openModalByTime = setTimeout(showModal, 500000);

window.addEventListener('scroll',showModalByScroll);

function showModalByScroll () {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal();
      window.removeEventListener('scroll', showModalByScroll);
}
}
}
module.exports = modal;