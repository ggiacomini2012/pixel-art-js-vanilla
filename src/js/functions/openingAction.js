import f from '.';

export const openingAction = () => {
  setTimeout(() => {
    f.selectById('app').style.transform = 'scale(0.5)';
    f.selectById('opening-image-one').style.left = '100%';
    f.selectById('opening-image-two').style.left = '-100%';
    f.selectById('opening-image-three').style.opacity = '0';
    f.selectById('header').style.opacity = '1';
    f.selectById('footer').style.opacity = '1';
    setTimeout(() => {
      f.selectById('app').style.opacity = '1';
      f.selectById('app').style.transform = 'scale(1)';
    }, 1000);
    setTimeout(() => {
      f.selectById('opening-image-one').style.boxShadow = 'none';
      f.selectById('opening-image-two').style.boxShadow = 'none';
    }, 1500);
    setTimeout(() => {
      f.selectById('app').style.opacity = '1';
      f.selectById('opening-image-one').style.display = 'none';
      f.selectById('opening-image-two').style.display = 'none';
      f.selectById('opening-image-three').style.display = 'none';
      document.body.style.backgroundColor = '#222222';
    }, 3000);
  }, 400);
};
