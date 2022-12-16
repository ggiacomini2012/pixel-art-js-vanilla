export const rgbToHex = (rgb) => {
  let hex = '#';
  if (!rgb) {
    return '#ffffff';
  }
  rgb.slice(4, -1).split(',').map((e) => {
    const kill = e.trim();
    if (kill.length === 1) hex += Number('0').toString(16);
    hex += Number(kill).toString(16);
  });
  return hex;
};
