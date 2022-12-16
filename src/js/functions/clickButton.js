export const clickButton = (element, action) => {
  document.addEventListener('click', (event) => {
    const button = event.target.id;
    if (button === element) action();
  });
};
