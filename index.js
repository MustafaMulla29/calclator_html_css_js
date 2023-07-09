const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElem = document.querySelector('[data-previous-operand]')
const currentOperandTextElem = document.querySelector('[data-current-operand]')

let operations
const clear = () => {
    currentOperandTextElem.innerText = ''
    previousOperandTextElem.innerText = ''
    operations = undefined
}

const addNumbers = (number) => {
    if (number === '.' && currentOperandTextElem.innerText.includes('.')) return
    currentOperandTextElem.innerText += number
}

// const chooseOperation = (operation) => {
//     if (currentOperandTextElem.innerText === '') return
//     if (currentOperandTextElem.innerText != '') {
//         compute()
//     }
//     operations = operation
// }

const compute = () => {
    // if (isNaN(currentOperandTextElem.innerText)) return
    currentOperandTextElem.innerText = eval(currentOperandTextElem.innerText)
}
const deleteNumbers = () => {
    currentOperandTextElem.innerText = currentOperandTextElem.innerText.toString().slice(0, -1)
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addNumbers(button.innerText)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        addNumbers(button.innerText)
    })
});

allClearButton.addEventListener('click', () => {
    clear()
})

equalsButton.addEventListener('click', () => {
    // currentOperandTextElem.innerText = eval(currentOperandTextElem.innerText)
    compute()
})

deleteButton.addEventListener('click', () => {
    deleteNumbers()
})