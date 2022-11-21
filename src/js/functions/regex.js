export const regex = () => {
    return {
        getAllIds: new RegExp(/id.".*"/, 'gi'),
        getAllClasses: new RegExp(/class.".*"/, 'gi'),
        // getWord: (word) => {
        //     const checkWord = 'bob'
        //     new RegExp(checkWord, 'gi')
        // },
        // getWords: new RegExp(/lorem.bob/i, 'gi'),
    }
}