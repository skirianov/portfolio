import scroll from './scroll';

const link = document.querySelector('#proj-link');

['load', 'resize'].forEach((event) => {
  window.addEventListener(event, () => {
    if (window.innerWidth < 600) {
      link.addEventListener('click', () => {
        window.scroll(0, 1500);
      })
    } else {
      scroll();
      link.addEventListener('click', () => {
        window.scroll(0, 550);
      })
    }
  })
})
