import f from '.';

export const resizeBoard = () => {
  const resizeBoardKeyDown = (event) => {
    if (event.key === 'q') {
      if (+f.selectById('board-size-selector').value < 100) {
        f.selectById('board-size-selector').value = (+f.selectById('board-size-selector').value + 1).toString();
      }
      f.createPixelBoard(f.selectById('board-size-selector').value);
    }
    if (event.key === 'w') {
      if (+f.selectById('board-size-selector').value > 1) {
        f.selectById('board-size-selector').value = (+f.selectById('board-size-selector').value - 1).toString();
      }
      f.createPixelBoard(f.selectById('board-size-selector').value);
    }
  };
  document.addEventListener('keydown', resizeBoardKeyDown);
};
