
export function burger(){

let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (event) => {
  if (hamburger.classList.contains('is-open')) {
    hamburger.classList.remove('is-open');
    hamburger.classList.add('is-closed');
  } else {
    hamburger.classList.remove('is-closed');
    hamburger.classList.add('is-open');
  }
});}