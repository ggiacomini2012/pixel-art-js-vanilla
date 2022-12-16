import f from '.';

export const copyColor = () => {
  const red = 'rgba(255, 137, 127, 0.37)';
  const green = 'rgba(127, 255, 212, 0.37)';
  const copyColorEventKeyC = (event) => {
    const copyColorActivated = f.selectById('copy-color-from-board').style.background == red;
    if (event.key.toLocaleLowerCase() === 'c' && copyColorActivated) {
      f.selectById('copy-color-from-board').classList.remove('shine');
      f.selectById('copy-color-from-board').style.background = green;
    }
    if (event.key.toLocaleLowerCase() === 'c' && !copyColorActivated) {
      f.selectById('copy-color-from-board').classList.add('shine');
      f.selectById('copy-color-from-board').style.background = red;
    }
  };
  document.addEventListener('keydown', copyColorEventKeyC);

  const copyColorEventSelfClick = () => {
    const copyColorActivated = f.selectById('copy-color-from-board').style.background == red;
    if (copyColorActivated) {
      f.selectById('copy-color-from-board').classList.remove('shine');
      f.selectById('copy-color-from-board').style.background = green;
    } else {
      f.selectById('copy-color-from-board').classList.add('shine');
      f.selectById('copy-color-from-board').style.background = red;
    }
  };
  f.selectById('copy-color-from-board').addEventListener('click', copyColorEventSelfClick);

  const copyColorFromBoard = (event) => {
    const copyColorActivated = f.selectById('copy-color-from-board').style.background == red;
    if (event.target.classList.contains('pixel') && copyColorActivated) {
      f.selectById('pencil-color-selector').value = f.rgbToHex(event.target.style.background);
      setTimeout(() => {
        f.selectById('copy-color-from-board').classList.remove('shine');
        f.selectById('copy-color-from-board').style.background = green;
      }, 50);
    }
  };
  document.addEventListener('click', copyColorFromBoard);
};
