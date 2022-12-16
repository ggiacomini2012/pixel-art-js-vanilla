import f from '.';

export const debbug = (arr) => {
  f.selectById('debbug').innerHTML = '';
  arr.map((value) => {
    f.selectById('debbug').innerHTML += `<p>${value}</p></br>`;
  });
  f.selectById('debbug').style.display += 'flex';
};
