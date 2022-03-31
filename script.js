const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.screen')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
    }

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber   
    }
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = (prevNumber) - (currentNumber)
            break
        case "*":
            result = (prevNumber) * (currentNumber)
            break
        case "/":
            result = (prevNumber) / (currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
const delBtn = document.querySelector('.delete')

delBtn.addEventListener('click', () => {
    del()
    updateScreen(currentNumber)
})

const del = () => {
    currentNumber = currentNumber.slice(0,-1)
}

const plusminBtn = document.querySelector('.plusmin')

plusminBtn.addEventListener('click', () => {
    plusmin()
    updateScreen(currentNumber)
})
const plusmin = () => {
    currentNumber = - (currentNumber)
}

const percentBtn = document.querySelector('.percent')

percentBtn.addEventListener('click', () => {
    percent()
    updateScreen(currentNumber)
})
const percent = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = (currentNumber) / 100
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    } 
    currentNumber  += dot
}
