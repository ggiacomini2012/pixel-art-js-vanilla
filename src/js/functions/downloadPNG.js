import f from '.';

export const downloadPNG = () => {
  const prepareLinkForDownload = () => {
    const canvas = f.selectById('canvas');
    const png = canvas.toDataURL();
    const canvasLink = f.selectById('download-png');
    canvasLink.download = 'pixel-art-amazing-drawing.png';
    canvasLink.href = png;
    canvasLink.dispatchEvent(new MouseEvent('click'));

    canvasLink.innerHTML = `
        <canvas id="canvas"> 
        </canvas>
        `;
  };

  const pixelBoardToPNG = () => {
    const canvas = f.selectById('canvas');
    const ctx = canvas.getContext('2d');
    const table = f.selectById('pixel-board-table');
    let counterLines = 0;
    let pngSize = 50;
    canvas.style.backgroundColor = 'white';

    for (const row of table.rows) {
      pngSize = Array.from(row.cells).length * 20;
    }

    canvas.width = pngSize;
    canvas.height = pngSize;

    for (const row of table.rows) {
      Array.from(row.cells).map((pixel, indexPixelInLine) => {
        const pixelLineSize = (Array.from(row.cells).length - 1);
        const x = (indexPixelInLine * 20);
        const y = (counterLines * 20);
        ctx.fillStyle = `${pixel.style.backgroundColor}`;
        ctx.fillRect(x, y, 20.7, 20.7);
        if (pixelLineSize === indexPixelInLine) {
          counterLines += 1;
        }
      });
    }
  };

  const activateDownloadByClick = () => {
    pixelBoardToPNG();
    prepareLinkForDownload();
  };
  f.selectById('download-drawing-in-png').addEventListener('click', activateDownloadByClick);

  const activateDownloadByKeydown = (event) => {
    if (event.key === 'o') {
      pixelBoardToPNG();
      prepareLinkForDownload();
    }
  };
  document.addEventListener('keydown', activateDownloadByKeydown);
};
