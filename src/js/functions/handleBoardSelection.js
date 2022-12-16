import f from '.';

export const handleBoardSelection = () => {
  const boardSelection = (event) => {
    f.selectByName('select-board').filter((e) => e.outerHTML.includes('saved'))
      .map((e) => e.addEventListener('click', f.selectBoardOnClick));
  };
  document.addEventListener('click', boardSelection);
};
