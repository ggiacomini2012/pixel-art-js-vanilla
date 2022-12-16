export const makeButtons = (array) => array.map((element) => `<button id="${element || 'hiddenButton'}" type="button">${element}</button>`).join('');
