import anime from 'animejs';

const scroll = () => {
  const tl = anime.timeline({
  });
  
  tl.add({
    translateY: 270,
    opacity: [0, 1],
    easing: 'spring(1, 80, 10, 0)',
    targets: `.big-name-container .big-name:nth-child(1)`,
    });
  
  for (let i = 2; i < 16; i++) {
    tl.add({
    translateY: 270,
    opacity: [0, 1],
    easing: 'spring(1, 80, 10, 0)',
    targets: `.big-name-container .big-name:nth-child(${i})`,
    }, '-=1600');
  }
  
  anime({
    targets: '.arrow',
    translateY: 30,
    direction: 'alternate',
    duration: 800,
    loop: true,
    easing: 'easeInOutSine',
  });
  
  window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 100) {
      anime({
        targets: '.first-scroll',
        opacity: 0,
        duration: 300,
      });
      anime({
        targets: '.second-scroll',
        opacity: 1,
        duration: 300,
      });
      if (scroll > 300) {
        anime({
          targets: '.second-scroll',
          opacity: 0,
          duration: 300,
        });
        anime({
          targets: '.third-scroll',
          opacity: 1,
          duration: 300,
        });
        if (scroll > 500) {
          anime({
            targets: '.third-scroll',
            opacity: 0,
            duration: 300,
          });
          anime({
            targets: '.fourth-scroll',
            opacity: 1,
            duration: 300,
          });
          if (scroll > 600) {
            anime({
              targets: '.fourth-scroll',
              opacity: 0,
              duration: 300,
            });
            anime({
              targets: '.fifth-scroll',
              opacity: 1,
              duration: 300,
            });
          } else {
            anime({
              targets: '.fifth-scroll',
              opacity: 0,
              duration: 300,
            });
          }
        } else {
          anime({
            targets: '.fourth-scroll',
            opacity: 0,
            duration: 300,
          });
        }
      } else {
        anime({
          targets: '.third-scroll',
          opacity: 0,
          duration: 300,
        });
      }
    } else {
      anime({
        targets: '.first-scroll',
        opacity: 1,
        duration: 300,
      });
      anime({
        targets: '.second-scroll',
        opacity: 0,
        duration: 300,
      });
    }
  })
};

export default scroll;
