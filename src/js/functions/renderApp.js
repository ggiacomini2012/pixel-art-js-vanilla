import f from '.';

export const renderApp = () => {
  setTimeout(() => {
    f.bodyContent();

    f.openingAction();

    f.changeBoardSize();

    f.setZoomEffect();

    f.createPixelBoard();

    f.savedColor();

    f.paintListener();

    f.grid();

    f.downloadSVG();

    f.downloadPNG();

    f.handleSave();

    f.handleLoad();

    f.clearBoard();

    f.zoomListener();

    f.copyColor();

    f.handleBoardSelection();

    f.changeZoom();

    f.changeScrollHorizontally();
  }, 3000);
};
