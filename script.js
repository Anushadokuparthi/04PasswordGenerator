const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    if(resultEl.innerText.length > 0){
        navigator.clipboard.writeText(resultEl.innerText);
        alert('Copied:' +resultEl.innerText)
    }else{
        alert('Please generate Password before Copying!!!')
    }
})

generateEl.addEventListener('click', () => {   
    let str = ''
    let lower = lowercaseEl.checked
    let upper = uppercaseEl.checked
    let number = numbersEl.checked
    let symbol = symbolsEl.checked
    let length = lengthEl.value
    str = generatePassword(lower, upper, number, symbol, length)
    resultEl.innerText = str
})

function generatePassword(lower, upper, number, symbol, length) {
    let randomPswd = ''
    while(length > 0){
        if(upper){
            randomPswd += randomFunc.upper()
            length--
        }
        if(lower){
            randomPswd += randomFunc.lower()
            length--
        }
        if(number){
            randomPswd += randomFunc.number()
            length--
        }
        if(symbol){
            randomPswd += randomFunc.symbol()
            length--
        }     
    }
    return randomPswd
}

function getRandomLower() {
    const lowerArr = ['a','b','c','d','e','f','g',
                    'h','i','j','k','l','m','n',
                    'o','p','q','r','s','t','u',
                    'v','w','x','y','z']
    return lowerArr[Math.floor(Math.random()*lowerArr.length)]
}

function getRandomUpper() {
    const upperArr = ['A','B','C','D','E','F','G',
                    'H','I','J','K','L','M','N',
                    'O','P','Q','R','S','T','U',
                    'V','W','X','Y','Z']
    return upperArr[Math.floor(Math.random()*upperArr.length)]
}

function getRandomNumber() {
    const numArr = [0,1,2,3,4,5,6,7,8,9]
    return numArr[Math.floor(Math.random()*numArr.length)]
}

function getRandomSymbol() {
    const symbArr = ['~','!','@','#','$','%',
                    '^','&','*','(',')',
                    '-','=','_','+','[',']',
                    '{','}',';',':',',','<',
                    '>','.','/','?']
    return symbArr[Math.floor(Math.random()*symbArr.length)]   
}