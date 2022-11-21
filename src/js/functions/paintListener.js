import f from ".";

export const paintListener = (restoreKeys, color = "#000") => {
    restoreKeys()
    let mouseDown = false;
    let keyDownD = false;
    let keyDownE = false;
    let keyDownC = false;
    document.onmousedown = () => mouseDown = true;
    document.onmouseup = () => mouseDown = false;
    document.onkeydown = (event) => {
        keyDownD = event.key === 'd' ? true : false
        keyDownE = event.key === 'e' ? true : false
        keyDownC = event.key === 'c' ? true : false
        if (event.key === 'q') {
            if (+f.selectById("board-size-selector").value < 100) {
                f.selectById("board-size-selector").value = (+f.selectById("board-size-selector").value + 1).toString();
            }
            f.createPixelBoard(f.selectById("board-size-selector").value)
        }
        if (event.key === 'c') {
            const red = 'rgba(255, 137, 127, 0.37)';
            f.selectById('copy-color-from-board').style.background = red;
        }

    };
    document.onkeyup = (event) => {
        keyDownD = event.key === 'd' ? false : false
        keyDownE = event.key === 'e' ? false : false
        keyDownC = event.key === 'c' ? false : false
    };
    if (keyDownC) {
        const red = 'rgba(255, 137, 127, 0.37)';
        f.selectById('copy-color-from-board').style.background = red;
    }

    f.selectById('copy-color-from-board').onclick = () => {
        const red = 'rgba(255, 137, 127, 0.37)';
        const green = 'rgba(127, 255, 212, 0.37)';
        const huy = f.selectById('copy-color-from-board').style.background !== red
        if (huy) {
            f.selectById('copy-color-from-board').style.background = red
        } else {
            f.selectById('copy-color-from-board').style.background = green
        };
    }

    document.addEventListener('click', (event) => {
        const red = 'rgba(255, 137, 127, 0.37)';
        const green = 'rgba(127, 255, 212, 0.37)';
        const huy = f.selectById('copy-color-from-board').style.background !== red
        if (event.target.classList.contains('pixel') && huy) {
            event.target.style.background = color
        }
        if (event.target.classList.contains('pixel') && !huy) {
            color = event.target.style.background;
            const rgbToHex = (rgb) => {
                let hex = '#'
                rgb.slice(4, -1).split(',').map((e) => {
                    let kill = e.trim();
                    if (kill.length === 1) hex += Number('0').toString(16)
                    hex += Number(kill).toString(16)
                })
                return hex
            };
            f.selectById('pencil-color-selector').value = rgbToHex(event.target.style.backgroundColor);
            setTimeout(() => f.selectById('copy-color-from-board').style.background = green, 50);
        };
    })

    document.addEventListener('mousemove', (event) => {
        const red = 'rgba(255, 137, 127, 0.37)';
        const green = 'rgba(127, 255, 212, 0.37)';
        const huy = f.selectById('copy-color-from-board').style.background !== red
        if (event.target.classList.contains('pixel')) {
            document.onkeydown = (event) => {
                keyDownD = event.key === 'd' ? true : false
                keyDownE = event.key === 'e' ? true : false
                keyDownC = event.key === 'c' ? true : false
                if (event.key === 'q') {
                    if (+f.selectById("board-size-selector").value < 100) {
                        f.selectById("board-size-selector").value = (+f.selectById("board-size-selector").value + 1).toString();
                    }
                    f.createPixelBoard(f.selectById("board-size-selector").value)
                }
            };
            document.onkeyup = (event) => {
                keyDownD = event.key === 'd' ? false : false
                keyDownE = event.key === 'e' ? false : false
                keyDownC = event.key === 'c' ? false : false
            };
            document.onkeydown = (event) => {
                keyDownD = event.key === 'd' ? true : false
                keyDownE = event.key === 'e' ? true : false
                keyDownC = event.key === 'c' ? true : false
                if (event.key === 'q') {
                    if (+f.selectById("board-size-selector").value < 100) {
                        f.selectById("board-size-selector").value = (+f.selectById("board-size-selector").value + 1).toString();
                    }
                    f.createPixelBoard(f.selectById("board-size-selector").value)
                }
                if (event.key === 'c') {
                    const red = 'rgba(255, 137, 127, 0.37)';
                    f.selectById('copy-color-from-board').style.background = red;
                }

            };
            document.onkeyup = (event) => {
                keyDownD = event.key === 'd' ? false : false
                keyDownE = event.key === 'e' ? false : false
                keyDownC = event.key === 'c' ? false : false
            };
            if (keyDownC) {
                const red = 'rgba(255, 137, 127, 0.37)';
                f.selectById('copy-color-from-board').style.background = red;
            }

            f.selectById('copy-color-from-board').onclick = () => {
                const red = 'rgba(255, 137, 127, 0.37)';
                const green = 'rgba(127, 255, 212, 0.37)';
                const huy = f.selectById('copy-color-from-board').style.background !== red
                if (huy) {
                    f.selectById('copy-color-from-board').style.background = red
                } else {
                    f.selectById('copy-color-from-board').style.background = green
                };
            }
        }
        if ((mouseDown || keyDownD) && huy) {
            if (event.target.classList.contains('pixel')) event.target.style.background = color;
        }
        if (keyDownE) {
            if (event.target.classList.contains('pixel')) event.target.style.background = "#FFF";
        }
        if (keyDownC) {
            if (event.target.classList.contains('pixel')) f.selectById('copy-color-from-board').style.background = red;
        }
    })

    document.addEventListener('touchmove', (e) => {
        let numberOfTouches = Object.keys(e.touches).length
        let horizontalTouch = e.touches[0].clientX;
        let verticalTouch = e.touches[0].clientY;
        if (numberOfTouches === 1) {
            const red = 'rgba(255, 137, 127, 0.37)';
            const green = 'rgba(127, 255, 212, 0.37)';
            const huy = f.selectById('copy-color-from-board').style.background !== red
            if (document.elementFromPoint(horizontalTouch, verticalTouch).classList.contains('pixel') && huy) {
                e.preventDefault()
                document.elementFromPoint(horizontalTouch, verticalTouch).style.background = color;
            }
        }
        // if (numberOfTouches === 2) {
        //     //multi touch
        // }
    }, { passive: false });
}
