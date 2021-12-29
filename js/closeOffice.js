const refs = {
  closeBtn: document.querySelector('.cross-btn'),
  officeContainer: document.querySelector('.office-container'),
  formBtn: document.querySelector('.form-btn')
}

refs.closeBtn.addEventListener('click', onCloseOffice);
refs.formBtn.addEventListener('click', onCloseOffice);

function onCloseOffice() {
  refs.officeContainer.classList.toggle('close');
}