import f from '.';

export const zoomListener = () => {
  const zoomKeyDown = (event) => {
    let zoomValue = f.selectById('zoom-selector').value;
    if (event.key === 'z') {
      f.selectById('zoom-selector').value = eval(`${zoomValue}+ 1`);
      zoomValue = f.selectById('zoom-selector').value;
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.height = `${zoomValue}px`;
        element.style.width = `${zoomValue}px`;
      });
    }
    if (event.key === 'x' && +zoomValue > 1) {
      f.selectById('zoom-selector').value = eval(`${zoomValue}- 1`);
      zoomValue = f.selectById('zoom-selector').value;
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.height = `${zoomValue}px`;
        element.style.width = `${zoomValue}px`;
      });
    }
  };
  document.addEventListener('keydown', zoomKeyDown);
};
