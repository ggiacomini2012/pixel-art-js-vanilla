import f from "."

export const onChange = (element, action) =>  {
    f.selectById('pencil-color-selector').addEventListener('click', (event) => {
        const button = event.target.id
        if(button === element) action()
    })
}
