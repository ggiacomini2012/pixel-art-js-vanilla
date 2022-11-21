import './cssImporter.js'
import f from './functions'

const app = 'app';
let githubIconHueRotation = 5;
let loadingCount = 0;
let pixelArtSaveMemory = f.storage('pixelboard').getItem() || [];
const keyDown = document.onkeydown;
const keyUp = document.onkeyup;
const restoreKeys = () => {
  document.onkeydown = keyDown;
  document.onkeyup = keyUp;
}
let pixelBoardSize = 20;
let color = '#000'



document.body.innerHTML = `
<div id="loading-container">
<div id="loading" display="none">LOADING</div>
<div id="loading-count">0%</div>
</div>
`

document.body.style.backgroundColor = '#000000'
setTimeout(() => {
  f.selectById('loading').style.color = '#ffffff'
  f.selectById('loading-count').style.color = '#ffffff'
  setTimeout(() => {
    f.selectById('loading-container').style.transform = 'scale(1.1)'
    f.selectById('loading').style.opacity = '0'
    f.selectById('loading-count').style.opacity = '0'
  }, 1000);
}, 50);

const introLoadginCount = setInterval(() => {
  loadingCount += 1;
  f.innerHTML('loading-count', `${loadingCount}%`)
  if (loadingCount === 100) clearInterval(introLoadginCount)
}, 5);



setTimeout(() => {
  document.body.innerHTML = `
<img id="opening-image-one" alt="github Icon" src="./images/black-square.png">
<img id="opening-image-two" alt="github Icon" src="./images/black-square.png">
<img id="opening-image-three" alt="github Icon" src="./images/black-square.png">
<header id="header">Pixel-Art</header>
<main id="app"></main>
<footer id="footer">
  <a href="https://github.com/ggiacomini2012" target="_blank">
    Desenvolvido por Guilherme Giacomini Teixeira
    <img id="github-icon" alt="github Icon" src="./images/github-icon.png">
  </a>
</footer>
`

  f.innerHTML(app, `
      <div id="no-load-menu"></div>
      <div id="no-save-menu"></div>
      <div id="save-menu"></div>
      <div id="erase-save-menu"></div>
      <div id="load-menu"></div>
      <div id="one">
        <div id="debbug"></div>
        <button id="hide-control-panel">hide panel - show panel</button>
        <div id="control-panel">
          <div id="board-size" class="control-panel-children">
            board
            <input type="number" id="board-size-selector" value="20" min="3" max="40" />
          </div>
          <button id="grid" class="control-panel-children">grid</button>
          <div id="zoom" class="control-panel-children">
            zoom
            <input type="number" id="zoom-selector" min="1" max="50" />
          </div>

            <div id="pencil-color-selector-div" class="control-panel-children">
              pencil
              <div id="pencil-color-selector-container">
                <input type="color" id="pencil-color-selector" name="pencil-color-selector" value="#000000" />
              </div>
            </div>
            <div id="copy-color-from-board" class="control-panel-children">copy color</div>
            <div id="saved-color" class="control-panel-children">saved color</div>
          <button id="save" class="control-panel-children">save</button>
          <button id="load" class="control-panel-children">load</button>
          <button id="clear-board" class="control-panel-children">clear</button>
        </div>
        <div id="pixel-board-panel">
          <div id="pixel-board">pixel board</div>
        </div>
      </div>
`)

  f.selectById('pencil-color-selector').oninput = () => {
    color = f.selectById('pencil-color-selector').value;
    f.paintListener(restoreKeys, color)
  };

  f.selectById('board-size-selector').onclick = () => {
    restoreKeys();
  }

  f.selectById('board-size-selector').oninput = (event) => {
    const checkWidth = f.watchZoom().data.screenWidth > 1025;
    console.log(Number(+event.target.value));
    if (!Number(+event.target.value)) {
      setTimeout(() => {
        if (!Number(+event.target.value)) event.target.value = 20     
        pixelBoardSize = f.selectById('board-size-selector').value;
        f.createPixelBoard(pixelBoardSize)
      }, 2000);
    }
    if (event.target.value > 40 && !checkWidth) event.target.value = 40
    if (event.target.value > 100 && checkWidth) event.target.value = 100
    pixelBoardSize = f.selectById('board-size-selector').value;
    f.createPixelBoard(pixelBoardSize)
  };
  
  f.selectById('zoom-selector').onclick = () => {
    restoreKeys();
  }


  f.selectById('zoom-selector').oninput = (event) => {
    if (event.target.value > 50) event.target.value = 50
    const verticalScrollSize = f.selectById('pixel-board').scrollHeight;
    const horizontalScrollSize = f.selectById('pixel-board').scrollWidth;
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${event.target.value}px`;
      element.style.width = `${event.target.value}px`;
    })
    f.selectById('pixel-board').scrollTo(horizontalScrollSize / 3, verticalScrollSize / 3);
  };

  f.createPixelBoard(pixelBoardSize)

  f.savedColor()

  f.paintListener(restoreKeys, color)

  f.selectById('hide-control-panel').addEventListener('click', () => {
    const bob = f.selectById('control-panel').innerHTML;
    if (f.selectById('control-panel').style.display === 'flex' || f.selectById('control-panel').style.display === '') {
      f.selectById('control-panel').style.display = 'none'
    } else {
      f.selectById('control-panel').style.display = 'flex'
    };
  })

  f.selectById('grid').addEventListener('click', () => {
    if (document.getElementsByClassName('pixel')[0].style.boxShadow === 'none') {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.boxShadow = 'inset 0px 0px 0 0.2px #0000007c'
      })
    } else {
      Array.from(document.getElementsByClassName('pixel')).map((element) => {
        element.style.boxShadow = 'none'
      })
    }
  })

  f.selectById('save').onclick = () => {
    f.selectById('no-save-menu').style.display = 'none';
    let regexPixelBoard = new RegExp(/pixel-board/, 'gi')
    let regexPixelClass = new RegExp(/class="pixel"/, 'gi')
    let regexBoxShadow = new RegExp(/box-shadow: none;/, 'gi')
    f.selectById('one').style.display = 'none';
    f.selectById('save-menu').innerHTML = `
    <button id="save-go-back">back</button>
    <button id="save-pixel-art">save</button>
    <button id="erase-save">erase save</button>
    <div id="pixel-board-panel-save"></div>
  `;
    f.selectById('save-menu').style.display = 'flex';

    if (pixelArtSaveMemory.length > 0) {
      f.selectById('pixel-board-panel-save').innerHTML = ''
      pixelArtSaveMemory.map((eachPixelBoard) => {
        f.selectById('pixel-board-panel-save').innerHTML += eachPixelBoard
      }).join('')
    } else {
      f.selectById('pixel-board-panel-save').innerHTML = '<p id="no-drawing-save">no saved drawings</p>'
    }
    f.selectById('save-go-back').onclick = () => {
      f.selectById('one').style.display = 'flex';
      f.selectById('save-menu').style.display = 'none';
    }
    f.selectById('save-pixel-art').onclick = () => {
      let savingPixelArt = f.selectById('pixel-board').outerHTML
        .replace(regexPixelBoard, 'saved-boards')
        .replace(regexPixelClass, 'class="saved-pixel"')
        .replace(regexBoxShadow, '');
      const checkRepetition = pixelArtSaveMemory.some((element) =>
        element.replace(/\s+/g, '') === savingPixelArt.replace(/\s+/g, ''))
      if (!checkRepetition) {
        pixelArtSaveMemory.push(savingPixelArt)
        f.storage('pixelboard').removeItem()
        f.storage('pixelboard', pixelArtSaveMemory).setItem()
      };
      if (pixelArtSaveMemory.length > 0) {
        f.selectById('pixel-board-panel-save').innerHTML = ''
        pixelArtSaveMemory.map((eachPixelBoard) => {
          f.selectById('pixel-board-panel-save').innerHTML += eachPixelBoard
        }).join('')
      }
    }

    f.selectById('erase-save').onclick = () => {
      if (f.selectByClass('checked-for-load').length) {
        f.selectById('erase-save-menu').style.display = 'flex';
        f.selectById('save-menu').style.display = 'none';
        f.selectById('erase-save-menu').innerHTML = `
      <button id="save-cancel">cancel</button>
      <button id="save-confirm">confirm</button>
      `
        f.selectById('save-cancel').onclick = () => {
          f.selectById('save-menu').style.display = 'flex';
          f.selectById('erase-save-menu').style.display = 'none';
        }
        f.selectById('save-confirm').onclick = () => {
          const uncheckedSaves = Array.from(document.getElementById('pixel-board-panel-save').children)
            .map((e) => e.outerHTML)
            .filter((e) => !e.includes('check'))
          pixelArtSaveMemory = uncheckedSaves
          f.storage('pixelboard').removeItem()
          f.storage('pixelboard', pixelArtSaveMemory).setItem()

          if (pixelArtSaveMemory.length > 0) {
            f.selectById('pixel-board-panel-save').innerHTML = ''
            pixelArtSaveMemory.map((eachPixelBoard) => {
              f.selectById('pixel-board-panel-save').innerHTML += eachPixelBoard
            }).join('')
          } else {
            f.selectById('pixel-board-panel-save').innerHTML = '<p id="no-drawing-save">no saved drawings</p>'
          }
          f.selectById('save-menu').style.display = 'flex';
          f.selectById('erase-save-menu').style.display = 'none';
        }
      } else {
        f.selectById('save-menu').style.display = 'none';
        f.selectById('no-save-menu').style.display = 'flex';
        f.selectById('no-save-menu').innerHTML = `
        <div id="no-save-selected">No drawing was selected</div>
        <button id="save-back-save">back</button>
        `
        f.selectById('save-back-save').onclick = () => {
          f.selectById('save-menu').style.display = 'flex';
          f.selectById('no-save-menu').style.display = 'none';
        }
      }
    }
  }

  f.selectById('load').onclick = () => {
    let regexPixelBoard = new RegExp(/saved-boards/, 'gi')
    let regexPixelClass = new RegExp(/class="saved-pixel"/, 'gi')
    let regexCheckedClass = new RegExp(/class="checked-for-load"/, 'gi')
    f.selectById('one').style.display = 'none';
    f.selectById('load-menu').innerHTML = `
    <button id="load-back-main">back</button>
    <button id="load-pixel-art">load</button>
    <div id="pixel-board-panel-load"></div>
  `;
    f.selectById('no-load-menu').style.display = 'none';
    f.selectById('pixel-board-panel-load').innerHTML = '';
    if (pixelArtSaveMemory.length > 0) {

      pixelArtSaveMemory.map((eachPixelBoard) => {
        f.selectById('pixel-board-panel-load').innerHTML += eachPixelBoard
      }).join('')

    } else {
      f.selectById('pixel-board-panel-load').innerHTML = '<p id="no-drawing-load">no saved drawings</p>'
    }
    f.selectById('load-menu').style.display = 'flex';
    f.selectById('load-back-main').onclick = () => {
      f.selectById('one').style.display = 'flex';
      f.selectById('load-menu').style.display = 'none';
    }
    f.selectById('load-pixel-art').onclick = () => {
      if (f.selectByClass('checked-for-load').length) {
        let [loadingPixelArt] = f.selectByClass('checked-for-load');
        loadingPixelArt.classList.remove('checked-for-load');
        loadingPixelArt.classList;
        loadingPixelArt.style.boxShadow = 'none';
        const loaded = loadingPixelArt.outerHTML
          .replace(regexPixelClass, 'class="pixel"')
          .replace(regexPixelBoard, 'pixel-board');;
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
        f.selectById('pixel-board').innerHTML = loaded
      } else {
        f.selectById('load-menu').style.display = 'none';
        f.selectById('no-load-menu').style.display = 'flex';
        f.selectById('no-load-menu').innerHTML = `
        <div id="no-load-selected">No drawing was selected</div>
        <button id="load-back-load">back</button>
        `
        f.selectById('load-back-load').onclick = () => {
          f.selectById('load-menu').style.display = 'flex';
          f.selectById('no-load-menu').style.display = 'none';
        }
      }

    }
  }

  f.selectById('clear-board').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.backgroundColor = '#fff'
    })
  })

  setTimeout(() => {
    f.selectById('opening-image-one').style.left = '100%'
    f.selectById('opening-image-two').style.left = '-100%'
    f.selectById('opening-image-three').style.opacity = '0'
    f.selectById('app').style.opacity = '1'
    f.selectById('header').style.opacity = '1'
    f.selectById('footer').style.opacity = '1'
    setTimeout(() => {
      f.selectById('opening-image-one').style.display = 'none'
      f.selectById('opening-image-two').style.display = 'none'
      f.selectById('opening-image-three').style.display = 'none'
    }, 3000);
  }, 400);

  setInterval(() => {
    githubIconHueRotation += 5
    const red = 'rgba(255, 137, 127, 0.37)';
    f.selectById('github-icon').style.filter = `hue-rotate(${githubIconHueRotation}deg)`;
    if (f.selectById('copy-color-from-board').style.backgroundColor === red) {
      f.selectById('copy-color-from-board').style.filter = `hue-rotate(${githubIconHueRotation}deg)`;
      f.selectById('copy-color-from-board').style.boxShadow = `0px 0px 6px 1px #08f2c4, 1px -1px 0 3px #222222`;
    } else {
      f.selectById('copy-color-from-board').style.filter = `hue-rotate(1deg)`;
      f.selectById('copy-color-from-board').style.boxShadow = `inset 1px 1px 20px #222222, 1px 1px 0 3px #222222`;
    }
    if (githubIconHueRotation >= 355) githubIconHueRotation = 5
    f.selectByName('aqui-oh').filter((e) => e.outerHTML.includes('saved'))
      .map((e) => e.onclick = f.selectBoardOnClick)
  }, 200);

  f.desktopConfig(
    f.selectById('board-size-selector').setAttribute("max",100)
  )
}, 2000);
