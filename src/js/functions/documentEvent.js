export const documentEvent = (event, element, action) => {
    
    return {
        byName: () => document.addEventListener(event, (e) => {
            if(e.target.getAttribute('name') === element) action(e)
            }),
        byId: () => document.addEventListener(event, (e) => {
            if(e.target.id === element) action(e)
            }),
        byTag: () => document.addEventListener(event, (e) => {
            if(e.target.matches(element)) action(e)
            }),
    }
}