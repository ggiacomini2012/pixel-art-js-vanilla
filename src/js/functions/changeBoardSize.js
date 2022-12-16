import f from '.';

export const changeBoardSize = () => {
  const changeBoard = (event) => {
    const checkWidth = f.watchZoom().data.screenWidth > 1025;
    event.target.value = Number(event.target.value);
    if (!Number(+event.target.value) || event.target.value <= 1) {
      setTimeout(() => {
        if (!Number(+event.target.value)) event.target.value = 20;
        f.createPixelBoard(f.selectById('board-size-selector').value);
      }, 2000);
    }
    if (event.target.value > 40 && !checkWidth) event.target.value = 40;
    if (event.target.value > 100 && checkWidth) event.target.value = 100;
    if (event.target.value) f.createPixelBoard(f.selectById('board-size-selector').value);
  };
  f.selectById('board-size-selector').addEventListener('input', changeBoard);
};
