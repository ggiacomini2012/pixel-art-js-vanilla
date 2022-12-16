import f from '.';

export const setZoomEffect = () => {
  const setZoom = (event) => {
    Array.from(document.getElementsByClassName('pixel')).map((element) => {
      element.style.height = `${event.target.value}px`;
      element.style.width = `${event.target.value}px`;
    });
  };
  f.selectById('zoom-selector').addEventListener('input', setZoom);
};
