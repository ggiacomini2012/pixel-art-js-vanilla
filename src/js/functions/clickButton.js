export const clickButton = (element, action) =>  {
    document.addEventListener('click', (event) => {
        const button = event.target.id
        console.log(button)
        if(button === element) action()
    })
}
