import f from '.';

export const fixMobileResizeIssues = () => {
  const correctBoardSizeAndAnimate = () => {
    const hasMultitouch = window.matchMedia('(pointer: coarse)').matches;
    const doNotHover = !window.matchMedia('(hover: hover)').matches;

    if (hasMultitouch && doNotHover) {
      const panelSize = +f.selectById('pixel-board-panel').offsetWidth + +f.selectById('pixel-board-panel').offsetHeight;
      const boardSize = (panelSize / 680) / (f.selectById('board-size-selector').value / 200);
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.height = `${boardSize}px`;
        element.style.width = `${boardSize}px`;
      });
      f.selectById('app-container').classList.add('one-first-step');
      setTimeout(() => {
        f.selectById('app-container').classList.add('one-second-step');
      }, 200);
      setTimeout(() => {
        f.selectById('app-container').classList.remove('one-second-step');
        f.selectById('app-container').classList.remove('one-first-step');
      }, 250);
    }
  };
  window.addEventListener('resize', correctBoardSizeAndAnimate, true);
};
