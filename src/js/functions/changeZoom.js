import f from '.';

export const changeZoom = () => {
  const change = (event) => {
    const zoomValue = f.selectById('zoom-selector').value;
    if (event.shiftKey && event.deltaX < 0 && zoomValue < 800) {
      f.selectById('zoom-selector').value = (+f.selectById('zoom-selector').value * 1.07).toFixed(0);
      f.selectById('zoom-selector').value = +f.selectById('zoom-selector').value + 1;
    }
    if (event.shiftKey && event.deltaX > 0 && zoomValue > 0) {
      f.selectById('zoom-selector').value = (+f.selectById('zoom-selector').value / 1.07).toFixed(0);
      f.selectById('zoom-selector').value = +f.selectById('zoom-selector').value - 1;
    }
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${f.selectById('zoom-selector').value}px`;
      element.style.width = `${f.selectById('zoom-selector').value}px`;
    });
  };
  document.addEventListener('wheel', change);
};
