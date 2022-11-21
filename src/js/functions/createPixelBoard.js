import f from "."

let tableCreator = (number = 5) => Array.from({ length: number }, (x, i) => i);

export const createPixelBoard = (pixelBoardSize) => {
  let pixelSize = Math.floor(150 / pixelBoardSize);
  f.innerHTML('pixel-board', `
    <div id="pixel-board-centralizer" name="aqui-oh" style class>
      <table id="pixel-board-table">
        ${ tableCreator(pixelBoardSize).map((e) => {
            return `
            <tr class="pixel-line">
                ${ tableCreator(pixelBoardSize).map((e) => {
                    return `<th class="pixel"></th>` 
                }).join('')}
            </tr>
            ` 
        }).join('')}
      </table>
    </div>
  `)
  f.selectById('zoom-selector').value = pixelSize;
  if(f.watchZoom().data.screenWidth >= 1025){
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${(f.watchZoom().data.screenWidth/6)/pixelBoardSize}px`;
      element.style.width = `${(f.watchZoom().data.screenWidth/6)/pixelBoardSize}px`;
      element.style.backgroundColor = '#ffffff';
    })
  } else if(f.watchZoom().data.screenWidth >= 641){
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${(f.watchZoom().data.screenWidth/4.2)/pixelBoardSize}px`;
      element.style.width = `${(f.watchZoom().data.screenWidth/4.2)/pixelBoardSize}px`;
      element.style.backgroundColor = '#ffffff';
    })
  } else {
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${(f.watchZoom().data.screenWidth/1.9)/pixelBoardSize}px`;
      element.style.width = `${(f.watchZoom().data.screenWidth/1.9)/pixelBoardSize}px`;
      element.style.backgroundColor = '#ffffff';
    })
  }
}
