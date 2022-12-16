import f from '.';

export const watchZoom = (element = window) => {
  const zoomScale = element.visualViewport.scale.toFixed(2);
  const screenWidth = element.outerWidth;
  const widthZoom = element.outerWidth / element.visualViewport.scale;
  const screenHeight = element.outerHeight;
  const heightZoom = element.outerHeight / element.visualViewport.scale;
  return {
    debbug: () => f.debbug([
      `zoomScale: ${zoomScale}`,
      `screenWidth: ${screenWidth}`,
      `widthZoom: ${widthZoom.toFixed(0)}`,
      `screenHeight: ${screenHeight}`,
      `heightZoom: ${heightZoom.toFixed(0)}`,
    ]),
    data: {
      zoomScale, screenWidth, widthZoom, screenHeight, heightZoom,
    },
  };
};
