export const makeButtons = (array) => {
  return array.map((element) => `<button id="${element || 'hiddenButton'}" type="button">${element}</button>`
  ).join('')
}
