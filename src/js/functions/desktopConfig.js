import f from '.';

export const desktopConfig = () => {
  f.selectById('board-size-selector').setAttribute('max', 100);
  f.tutorial();
};
