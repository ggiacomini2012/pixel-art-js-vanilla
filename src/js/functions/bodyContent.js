import f from '.';

export const bodyContent = () => {
  document.body.innerHTML = `
    <img id="opening-image-one" alt="intro one" src="./images/black-square.png">
    <img id="opening-image-two" alt="intro two" src="./images/black-square.png">
    <img id="opening-image-three" alt="intro three" src="./images/black-square.png">
    <header id="header">Pixel-Art</header>
    <main id="app" class="app"></main>
    <footer id="footer">
      <a href="https://github.com/ggiacomini2012" target="_blank">
        Desenvolvido por Guilherme Giacomini Teixeira
        <img id="github-icon" alt="github Icon" src="./images/github-icon.png">
      </a>
    </footer>
  `;

  f.innerHTML('app', `
  <div id="no-load-menu">
    <div id="no-load-selected">No drawing was selected</div>
    <button id="load-back-load">back</button>
  </div>
  <div id="no-save-menu">
    <div id="no-save-selected">No drawing was selected</div>
    <button id="save-back-save">back</button></div>
  <div id="save-menu">
    <button id="save-go-back">back</button>
    <button id="save-pixel-art">save</button>
    <button id="erase-save">erase save</button>
    <div id="pixel-board-panel-save"></div>
  </div>
  <div id="erase-save-menu"></div>
  <div id="load-menu">
    <button id="load-back-main">back</button>
    <button id="load-pixel-art">load</button>
    <div id="pixel-board-panel-load"></div>
  </div>
  <div id="debbug"></div>
  <div id="app-container" class="app-container">
  <div id="tutorial">
    <div id="hide-tutorial-container">
      <button id="hide-tutorial">x</button>
    </div>
    <div id="info">
      press "T" to toggle tutorial guide
      <br />
      press "D" to draw
      <br />
      press "E" to erase
      <br />
      press "C" to to copy a color from the board
      <br />
      press "Z" or "X" to change zoom
      <br />
      press "G" to toggle grid
      <br />
      press "Shift and role the mouse wheel" to change zoom
      <br />
      press "A" or "S" to scroll horizontally
      <br />
      press "O" to download as png
      <br />
      press "P" to download as svg
      <br />
    </div>
  </div>
    <a id="download-svg" class="download-svg" style="display:none;">
      <svg id="svg"></svg>
    </a>
    <a id="download-png" class="download-svg" style="display:none;">
      <canvas id="canvas" width="3000" height="3000"></canvas>
    </a>
    <div id="download-drawing-in-svg" class="download-drawing-in-svg">
      download drawing in SVG
    </div>
    <div id="download-drawing-in-png" class="download-drawing-in-png">
      download drawing in PNG
    </div>
    <div id="control-panel">
      <div id="board-size" class="control-panel-children">
        board size:
        <input type="number" id="board-size-selector" value="10" min="1" max="40" />
      </div>
      <button id="grid" class="control-panel-children">grid</button>
      <div id="zoom" class="control-panel-children">
        zoom:
        <input type="number" id="zoom-selector" min="1" />
      </div>
      <div id="pencil-color-selector-div" class="control-panel-children">
        edit color:
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
  `);
};
