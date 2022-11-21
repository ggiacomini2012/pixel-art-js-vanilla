import f from ".";

export const selectBoardOnClick = (event) => {
    f.selectByName('aqui-oh').filter((e) => e.outerHTML.includes('saved'))
    .map((e) => {
      e.style.boxShadow = '1px 1px 0px 2vh #222222';
      e.classList.remove('checked-for-load');
    })
    event.currentTarget.style.boxShadow = '1px 1px 0px 2vh #fdfdfd4d';
    event.currentTarget.classList.add('checked-for-load')
    console.log(event.currentTarget)
  }