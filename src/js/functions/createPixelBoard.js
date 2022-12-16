import f from '.';

const tableCreator = (number = 5) => Array.from({ length: number }, (_x, i) => i);

export const createPixelBoard = (pixelBoardSize = 10) => {
  f.innerHTML('pixel-board', `
    <div id="pixel-board-centralizer" name="select-board" style class>
      <table id="pixel-board-table">
        ${tableCreator(pixelBoardSize).map((e) => `
            <tr class="pixel-line">
                ${tableCreator(pixelBoardSize).map((e) => '<th class="pixel"></th>').join('')}
            </tr>
            `).join('')}
      </table>
    </div>
  `);
  const panelSize = +f.selectById('pixel-board-panel').offsetWidth + +f.selectById('pixel-board-panel').offsetHeight;
  const boardSize = (panelSize / 680) / (pixelBoardSize / 200);
  Array.from(document.getElementsByClassName('pixel')).map((element) => {
    element.style.height = `${boardSize}px`;
    element.style.width = `${boardSize}px`;
    element.style.backgroundColor = '#ffffff';
  });
  f.selectById('zoom-selector').value = (boardSize).toFixed(0);
};
