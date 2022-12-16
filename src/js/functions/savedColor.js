import f from '.';

const tableCreator = (number = 5) => Array.from({ length: number }, (_x, i) => i);
const pallet = [
  '#000000',
  '#ffff00',
  '#48ff00',
  '#1d7900',
  '#2aafaf',
  '#0001ff',
  '#7408a5',
  '#ba00ff',
  '#cc00af',
  '#f90f00',
  '#f94601',
  '#fa8001',
  '#fcb300',
  '#ffffff',
];

export const savedColor = () => {
  f.innerHTML('saved-color', `
    <div id="saved-color-centralizer">
      <table id="saved-color-table">
        ${tableCreator(1).map(() => `
            <tr class="color-line">
                ${tableCreator(14).map(() => '<th class="color"></th>').join('')}
            </tr>
            `).join('')}
      </table>
    </div>
  `);
  Array.from(document.getElementsByClassName('color')).map((element, index) => {
    const green = 'rgba(127, 255, 212, 0.37)';
    element.style.backgroundColor = pallet[index];
    const selectColor = () => {
      f.selectById('pencil-color-selector').value = pallet[index];
      f.selectById('copy-color-from-board').style.backgroundColor = green;
      f.selectById('copy-color-from-board').classList.remove('shine');
    };
    element.addEventListener('click', selectColor);
  });
};
