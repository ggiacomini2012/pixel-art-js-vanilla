import f from '.';

export const fixInicialBoardSizeIssues = () => {
  setTimeout(() => {
    f.selectById('board-size-selector').value = 10
    f.selectById('board-size-selector').dispatchEvent(new Event("input"))
  }, 4000)
};
