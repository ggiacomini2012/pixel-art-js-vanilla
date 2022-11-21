import f from "."

let tableCreator = (number = 5) => Array.from({ length: number }, (x, i) => i);
let pallet = [
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
        ${ tableCreator(1).map((e) => {
            return `
            <tr class="color-line">
                ${ tableCreator(14).map((e) => {
                    return `<th class="color"></th>` 
                }).join('')}
            </tr>
            ` 
        }).join('')}
      </table>
    </div>
  `)
  // f.selectById('zoom-selector').value = pixelSize;
  Array.from(document.getElementsByClassName('color')).map((element, index) => {
    const green = 'rgba(127, 255, 212, 0.37)';
    // element.style.height = `${4}vw`;
    // element.style.width = `${4}vw`;
    element.style.backgroundColor = pallet[index];
    element.onclick = () => {
      f.selectById('pencil-color-selector').value = pallet[index];
      f.selectById('copy-color-from-board').style.backgroundColor =  green;
      f.paintListener(f.restoreKeys, pallet[index]);
    }
  })
}
