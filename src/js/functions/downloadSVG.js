import f from '.';

export const downloadSVG = () => {
  const prepareLinkForDownload = () => {
    const svg = f.selectById('svg');
    const svgToBase64 = btoa(unescape(encodeURIComponent(svg.outerHTML)));
    const svgLink = f.selectById('download-svg');
    svgLink.download = 'pixel-art-amazing-drawing.svg';
    svgLink.href = `data:image/svg+xml;base64,${svgToBase64}`;
    svgLink.dispatchEvent(new MouseEvent('click'));
    svgLink.innerHTML = `
        <svg id="svg"> 
        </svg>
        `;
  };

  const pixelBoardToSVG = () => {
    const table = f.selectById('pixel-board-table');
    let svgRects = '';
    let counterLines = 0;
    let svgSize = 50;
    for (const row of table.rows) {
      Array.from(row.cells).map((pixel, indexPixelInLine) => {
        if (pixel.style.backgroundColor !== 'rgb(255, 255, 255)') {
          svgRects += `<rect x="${(indexPixelInLine * 20)}" y="${(counterLines * 20)}" width="20.7" height="20.7" fill="${pixel.style.backgroundColor}" />\n`;
        }
        if ((Array.from(row.cells).length - 1) === indexPixelInLine) {
          counterLines += 1;
          svgSize += 20;
        }
      });
    }
    // do not undestand why it does render in chrome without xmlns="http://www.w3.org/2000/svg"
    f.selectById('download-svg').innerHTML = `
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" height="${svgSize}px" width="${svgSize}px">
            ${svgRects}
        </svg>
        `;
  };

  const activateDownloadByClick = (event) => {
    pixelBoardToSVG();
    prepareLinkForDownload();
  };
  f.selectById('download-drawing-in-svg').addEventListener('click', activateDownloadByClick);

  const activateDownloadByKeydown = (event) => {
    if (event.key === 'p') {
      pixelBoardToSVG();
      prepareLinkForDownload();
    }
  };
  document.addEventListener('keydown', activateDownloadByKeydown);
};
