import f from '.';

export const isDesktop = () => {
  const doNotMultitouch = !window.matchMedia('(pointer: coarse)').matches;
  const hover = window.matchMedia('(hover: hover)').matches;

  if (doNotMultitouch && hover) {
    setTimeout(() => {
      f.selectById('board-size-selector').setAttribute('max', 100);
      f.tutorial();
      console.log('is Desktop');
    }, 3500);
    import('../desktopCssImporter.js');
  }
};
