import RINGS from 'vanta/dist/vanta.rings.min';
import content from './content';

const rootElement = document.getElementById('__rdnsan');

rootElement.innerHTML = content;

window.addEventListener('DOMContentLoaded', () => {
  RINGS({
    el: '#bg-animated',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    // backgroundAlpha: 0.0, // make bg transparent
  });

  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = '1';
    main.style.filter = 'blur(0px)';
  }, 1000);
});
