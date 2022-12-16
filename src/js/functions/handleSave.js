import f from '.';

export const handleSave = () => {
  const save = () => {
    const pixelArtSaveMemory = f.storage('pixelboard').getItem() || [];
    f.selectById('save-menu').style.opacity = '0';
    f.selectById('save-menu').style.transform = 'scale(0)';
    f.selectById('app-container').classList.add('diminish');
    f.selectById('download-drawing-in-svg').classList.add('diminish');
    f.selectById('download-drawing-in-png').classList.add('diminish');
    setTimeout(() => {
      f.selectById('no-save-menu').style.display = 'none';
      f.selectById('app-container').classList.add('desapear');
      f.selectById('download-drawing-in-svg').classList.add('desapear');
      f.selectById('download-drawing-in-png').classList.add('desapear');
      f.selectById('save-menu').style.position = 'relative';
      f.selectById('save-menu').style.opacity = '1';
      f.selectById('save-menu').style.transform = 'scale(1)';
    }, 1500);

    if (pixelArtSaveMemory.length > 0) {
      f.selectById('pixel-board-panel-save').innerHTML = '';
      pixelArtSaveMemory.map((eachPixelBoard) => {
        f.selectById('pixel-board-panel-save').innerHTML += eachPixelBoard;
      }).join('');
    } else {
      f.selectById('pixel-board-panel-save').innerHTML = '<p id="no-drawing-save">no saved drawings</p>';
    }
  };
  f.selectById('save').addEventListener('click', save);

  const backToMain = () => {
    f.selectById('save-menu').style.position = 'absolute';
    f.selectById('save-menu').style.opacity = '0';
    f.selectById('save-menu').style.transform = 'scale(0)';
    setTimeout(() => {
      f.selectById('app-container').classList.remove('desapear');
      f.selectById('app-container').classList.remove('diminish');
      f.selectById('download-drawing-in-svg').classList.remove('desapear');
      f.selectById('download-drawing-in-png').classList.remove('desapear');
      f.selectById('download-drawing-in-svg').classList.remove('diminish');
      f.selectById('download-drawing-in-png').classList.remove('diminish');
    }, 1500);
  };
  f.selectById('save-go-back').addEventListener('click', backToMain);

  const savePixelArt = () => {
    const panelSize = +f.selectById('pixel-board-panel').offsetWidth + +f.selectById('pixel-board-panel').offsetHeight;
    const boardSize = (panelSize / 680) / (+f.selectById('board-size-selector').value / 200);
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${boardSize}px`;
      element.style.width = `${boardSize}px`;
    });
    f.selectById('zoom-selector').value = (boardSize).toFixed(0);
    const pixelArtSaveMemory = f.storage('pixelboard').getItem() || [];
    const regexPixelBoard = new RegExp(/pixel-board/, 'gi');
    const regexPixelClass = new RegExp(/class="pixel"/, 'gi');
    const regexBoxShadow = new RegExp(/box-shadow: none;/, 'gi');
    const savingPixelArt = f.selectById('pixel-board').outerHTML
      .replace(regexPixelBoard, 'saved-boards')
      .replace(regexPixelClass, 'class="saved-pixel"')
      .replace(regexBoxShadow, '');
    const checkRepetition = pixelArtSaveMemory.map((element) => element.replace(/\s+/g, '') === savingPixelArt.replace(/\s+/g, ''));
    if (!checkRepetition.includes(true)) {
      pixelArtSaveMemory.push(savingPixelArt);
      f.storage('pixelboard').removeItem();
      f.storage('pixelboard', pixelArtSaveMemory).setItem();
    }
    if (pixelArtSaveMemory.length > 0) {
      f.selectById('pixel-board-panel-save').innerHTML = '';
      pixelArtSaveMemory.map((eachPixelBoard) => {
        f.selectById('pixel-board-panel-save').innerHTML += eachPixelBoard;
      }).join('');
    }
  };
  f.selectById('save-pixel-art').addEventListener('click', savePixelArt);
  const eraseSave = () => {
    let pixelArtSaveMemory = f.storage('pixelboard').getItem() || [];
    // console.log(!f.selectByClass('checked-for-load').length)
    if (!f.selectByClass('checked-for-load').length) {
      f.selectById('save-menu').style.display = 'none';
      f.selectById('no-save-menu').style.display = 'flex';
      const backToSave = () => {
        f.selectById('save-menu').style.display = 'flex';
        f.selectById('no-save-menu').style.display = 'none';
      };
      f.selectById('save-back-save').addEventListener('click', backToSave);
    }
    if (f.selectByClass('checked-for-load').length) {
      const uncheckedSaves = Array.from(document.getElementById('pixel-board-panel-save').children)
        .map((e) => e.outerHTML)
        .filter((e) => !e.includes('check'));
      pixelArtSaveMemory = uncheckedSaves;
      f.storage('pixelboard').removeItem();
      f.storage('pixelboard', pixelArtSaveMemory).setItem();
    }
    f.selectById('pixel-board-panel-save').innerHTML = '';
    pixelArtSaveMemory.map((eachPixelBoard) => {
      f.selectById('pixel-board-panel-save').innerHTML += eachPixelBoard;
    }).join('');
    if (!pixelArtSaveMemory.length) {
      f.selectById('pixel-board-panel-save').innerHTML = '<p id="no-drawing-save">no saved drawings</p>';
    }
  };
  f.selectById('erase-save').addEventListener('click', eraseSave);
};
