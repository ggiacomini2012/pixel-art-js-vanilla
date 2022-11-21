const keyDown = document.onkeydown;
const keyUp = document.onkeyup;

export const restoreKeys = () => {
    document.onkeydown = keyDown;
    document.onkeyup = keyUp;
}