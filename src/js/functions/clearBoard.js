import f from '.';

export const clearBoard = () => {
  const clear = () => {
    const storeSettings = f.selectById('pixel-board-table').style.transform;
    f.selectById('pixel-board-table').style.transform = 'rotate3d(1, 100, 1, 360deg)';
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.transition = '1s all';
      element.style.backgroundColor = '#ffffff';
    });
    setTimeout(() => {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.transition = 'none';
        element.style.backgroundColor = '#ffffff';
      });
      f.selectById('pixel-board-table').style.transform = storeSettings;
    }, 500);
    setTimeout(() => {
      const zoomValue = f.selectById('zoom-selector').value;
      f.createPixelBoard(f.selectById('board-size-selector').value);
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.height = `${zoomValue}px`;
        element.style.width = `${zoomValue}px`;
      });
    }, 1000);
  };
  f.selectById('clear-board').addEventListener('click', clear);
};
