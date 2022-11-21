export const consoleLogAll= (firstNumber, secondNumber, operation, memoryResult = 0) => {
    console.log(
        'firstNumber: '+ firstNumber,
        'secondNumber: '+ secondNumber,
        'operation: '+ operation,
        'memoryResult: '+ memoryResult,
        )
    console.log('calculate: ' + firstNumber + operation + secondNumber)
}

// f.consoleLogAll(firstNumber, secondNumber, operation, memoryResult)
