export const storage = (element, payLoad = 0) => {
    const checkLocalStorage = localStorage.getItem(element) || 0
    return {
        setItem: () => localStorage.setItem(element, JSON.stringify(payLoad)),
        getItem: () => checkLocalStorage? JSON.parse(localStorage.getItem(element)) : null,
        removeItem: () => localStorage.removeItem(element),
        clear: () => localStorage.clear(),
    }
}