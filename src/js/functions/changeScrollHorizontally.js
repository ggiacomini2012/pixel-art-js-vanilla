import f from '.';

export const changeScrollHorizontally = () => {
  const change = (event) => {
    if (event.key === 'a') {
      let count = 0;
      const scrollLeft = setInterval(() => {
        count++;
        f.selectById('pixel-board').scrollBy(-3, 0);
        count === 50 && clearInterval(scrollLeft);
      }, 3);
      count = 0;
    }
    if (event.key === 's') {
      let count = 0;
      const scrollRight = setInterval(() => {
        count++;
        f.selectById('pixel-board').scrollBy(3, 0);
        count === 50 && clearInterval(scrollRight);
      }, 3);
      count = 0;
    }
  };
  document.addEventListener('keydown', change);
};
