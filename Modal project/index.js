let state = "dark";
function showModal(){
  document.querySelector('.sign-in-modal').classList.add('sign-in-add')
}

function removeModal(){
  document.querySelector('.sign-in-modal').classList.remove('sign-in-add')
}
function showMode(){
  if (state == 'dark'){
    document.querySelector('body').classList.add('sign-in-modechange')
    document.querySelector('.sign-in-modal').classList.add('sign-in-modal-light-mode')
    document.querySelector('.nav-bar-left').classList.add('nav-bar-left-light')
    document.querySelector('.mode').classList.add('mode-light')
    state = 'light'
  } else {
    if (state == 'light') {
      document.querySelector('body').classList.remove('sign-in-modechange')
      document.querySelector('.sign-in-modal').classList.remove('sign-in-modal-light-mode')
      document.querySelector('.nav-bar-left').classList.remove('nav-bar-left-light')
      document.querySelector('.mode').classList.remove('mode-light')
      state = 'dark'
    }
  }
}
