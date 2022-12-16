import f from '.';

export const paintListener = () => {
  const red = 'rgba(255, 137, 127, 0.37)';
  const green = 'rgba(127, 255, 212, 0.37)';
  let keyDownD = false;
  let keyDownE = false;

  const switcherKeyDKeyE = (event) => {
    if (event.type === 'keydown' && event.key === 'd') {
      keyDownD = true;
      f.selectById('copy-color-from-board').classList.remove('shine');
      f.selectById('copy-color-from-board').style.background = green;
    }
    if (event.type === 'keyup' && event.key === 'd') keyDownD = false;
    if (event.type === 'keydown' && event.key === 'e') {
      keyDownE = true;
      f.selectById('copy-color-from-board').classList.remove('shine');
      f.selectById('copy-color-from-board').style.background = green;
    }
    if (event.type === 'keyup' && event.key === 'e') keyDownE = false;
  };
  document.addEventListener('keydown', switcherKeyDKeyE);
  document.addEventListener('keyup', switcherKeyDKeyE);

  const paintMouseMove = (event) => {
    const isPixel = event.target.classList.contains('pixel');
    if (event.buttons && isPixel) {
      event.target.style.background = f.selectById('pencil-color-selector').value;
    }
    if (keyDownD && isPixel) {
      event.target.style.background = f.selectById('pencil-color-selector').value;
    }
    if (keyDownE && isPixel) {
      event.target.style.background = '#ffffff';
    }
  };
  document.addEventListener('mousemove', paintMouseMove);

  const paintClick = (event) => {
    const copyColorActivated = f.selectById('copy-color-from-board').style.background === red;
    if (event.target.classList.contains('pixel') && !copyColorActivated) {
      event.target.style.background = f.selectById('pencil-color-selector').value;
    }
  };
  document.addEventListener('click', paintClick);

  const paintTouchMove = (event) => {
    const copyColorActivated = f.selectById('copy-color-from-board').style.background === red;
    const numberOfTouches = Object.keys(event.touches).length;
    const horizontalTouch = event.touches[0].clientX;
    const verticalTouch = event.touches[0].clientY;
    if (document.elementFromPoint(horizontalTouch, verticalTouch).classList.contains('pixel') && !copyColorActivated && numberOfTouches === 1) {
      document.elementFromPoint(horizontalTouch, verticalTouch).style.background = f.selectById('pencil-color-selector').value;
    }
  };
  document.addEventListener('touchmove', paintTouchMove, { passive: false });
};
