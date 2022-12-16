import f from '.';

export const grid = () => {
  Array.from(document.getElementsByClassName('pixel')).map((element) => {
    element.style.transform = '0.8s all easy-in-out';
  });
  setTimeout(() => {
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.transform = '0.2s all easy-in-out';
    });
  }, 800);

  const toggleGridOnClick = () => {
    if (document.getElementsByClassName('pixel')[0].style.boxShadow === 'none') {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.boxShadow = 'inset 0px 0px 0 0.2px #0000007c';
      });
    } else {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.boxShadow = 'none';
      });
    }
  };
  f.selectById('grid').addEventListener('click', toggleGridOnClick);

  const toggleGridOnKeyG = (event) => {
    const checkKeyDown = event.key === 'g';
    const checkPixelShadow = document.getElementsByClassName('pixel')[0].style.boxShadow === 'none';
    if (checkKeyDown && checkPixelShadow) {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.boxShadow = 'inset 0px 0px 0 0.2px #0000007c';
      });
    }
    if (checkKeyDown && !checkPixelShadow) {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.boxShadow = 'none';
      });
    }
  };
  document.addEventListener('keydown', toggleGridOnKeyG);
};
