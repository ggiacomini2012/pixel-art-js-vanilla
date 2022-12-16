import f from '.';

export const handleLoad = () => {
  const load = () => {
    const pixelArtSaveMemory = f.storage('pixelboard').getItem() || [];
    f.selectById('pixel-board-panel-load').innerHTML = '';
    if (pixelArtSaveMemory.length > 0) {
      pixelArtSaveMemory.map((eachPixelBoard) => {
        f.selectById('pixel-board-panel-load').innerHTML += eachPixelBoard;
      }).join('');
    } else {
      f.selectById('pixel-board-panel-load').innerHTML = '<p id="no-drawing-load">no saved drawings</p>';
    }
    f.selectById('no-load-menu').style.display = 'none';
    f.selectById('load-menu').style.opacity = '0';
    f.selectById('load-menu').style.transform = 'scale(0)';
    f.selectById('app-container').classList.add('diminish');
    f.selectById('download-drawing-in-svg').classList.add('diminish');
    f.selectById('download-drawing-in-png').classList.add('diminish');
    setTimeout(() => {
      f.selectById('load-menu').style.position = 'relative';
      f.selectById('app-container').classList.add('desapear');
      f.selectById('download-drawing-in-svg').classList.add('desapear');
      f.selectById('download-drawing-in-png').classList.add('desapear');
      f.selectById('load-menu').style.opacity = '1';
      f.selectById('load-menu').style.transform = 'scale(1)';
    }, 1500);
  };
  f.selectById('load').addEventListener('click', load);

  const backToMain = () => {
    f.selectById('load-menu').style.position = 'absolute';
    f.selectById('load-menu').style.opacity = '0';
    f.selectById('load-menu').style.transform = 'scale(0)';
    setTimeout(() => {
      f.selectById('app-container').classList.remove('diminish');
      f.selectById('download-drawing-in-svg').classList.remove('diminish');
      f.selectById('download-drawing-in-png').classList.remove('diminish');
      f.selectById('app-container').classList.remove('desapear');
      f.selectById('download-drawing-in-svg').classList.remove('desapear');
      f.selectById('download-drawing-in-png').classList.remove('desapear');
    }, 1500);
  };
  f.selectById('load-back-main').addEventListener('click', backToMain);

  const loadPixelArt = () => {
    const regexPixelBoard = new RegExp(/saved-boards/, 'gi');
    const regexPixelClass = new RegExp(/class="saved-pixel"/, 'gi');
    if (f.selectByClass('checked-for-load').length) {
      const [loadingPixelArt] = f.selectByClass('checked-for-load');
      loadingPixelArt.classList.remove('checked-for-load');
      loadingPixelArt.classList;
      loadingPixelArt.style.boxShadow = 'none';
      const loaded = loadingPixelArt.outerHTML
        .replace(regexPixelClass, 'class="pixel"')
        .replace(regexPixelBoard, 'pixel-board');
      loadingPixelArt.style.boxShadow = '1px 1px 0px 2vh #41ba4a';
      setTimeout(() => {
        loadingPixelArt.style.boxShadow = '1px 1px 0px 4vh #3f4cba';
      }, 200);
      setTimeout(() => {
        loadingPixelArt.style.boxShadow = '1px 1px 0px 8vh #3f4cba';
      }, 300);
      setTimeout(() => {
        loadingPixelArt.style.boxShadow = 'none';
      }, 400);
      setTimeout(() => {
        loadingPixelArt.style.boxShadow = '1px 1px 0px 2vh #222222';
      }, 1000);
      f.selectById('pixel-board').innerHTML = loaded;
    } else {
      f.selectById('load-menu').style.display = 'none';
      f.selectById('no-load-menu').style.display = 'flex';
    }
  };
  f.selectById('load-pixel-art').addEventListener('click', loadPixelArt);

  const backToLoad = () => {
    f.selectById('load-menu').style.display = 'flex';
    f.selectById('no-load-menu').style.display = 'none';
  };
  f.selectById('load-back-load').addEventListener('click', backToLoad);
};
