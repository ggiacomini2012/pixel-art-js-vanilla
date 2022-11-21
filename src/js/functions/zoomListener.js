import f from ".";

export const zoomListener = (restoreKeys) => {
    restoreKeys()
    let keyDownZ = false;
    console.log(3);
    document.addEventListener('keydown', (event) => {
        console.log(5);
        f.selectById('zoom-selector').value += 1;
        document.onkeydown = () => keyDownZ = event.key === 'z' ? true : false;
        document.onkeyup = () => { if (event.key === 'z') keyDownZ = false };
        if (keyDownZ) {
            f.selectById('zoom-selector').value += eval(f.selectById('zoom-selector').value + "1");
        }
    })  
}
