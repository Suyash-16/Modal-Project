function showModalMsg(){
  document.querySelector('.modal-msg').classList.add('show-modal-msg')
  document.querySelector('.cover-body').classList.add('show-cover-body')
}
function removeModalMsg(){
  document.querySelector('.modal-msg').classList.remove('show-modal-msg')
  document.querySelector('.cover-body').classList.remove('show-cover-body')
}
function showModalError(){
  document.querySelector('.modal-error').classList.add('show-modal-error')
  document.querySelector('.cover-body').classList.add('show-cover-body')
}
function removeModalError(){
  document.querySelector('.modal-error').classList.remove('show-modal-error')
  document.querySelector('.cover-body').classList.remove('show-cover-body')
}