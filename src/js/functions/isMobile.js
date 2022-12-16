import f from '.';

export const isMobile = () => {
  const hasMultitouch = window.matchMedia('(pointer: coarse)').matches;
  const doNotHover = !window.matchMedia('(hover: hover)').matches;

  if (hasMultitouch && doNotHover) {
    setTimeout(() => {
      f.selectById('board-size-selector').setAttribute('max', 40);
      console.log('is Mobile');
    }, 3500);
    import('../mobileCssImporter.js');
  }
};
