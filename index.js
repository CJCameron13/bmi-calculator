const calculatorContainer = document.querySelector('#calculator-container')
const metricBoxes = document.querySelector('#user-entry-metric')
const metricSelector = document.querySelector('#metric')
const imperialSelector = document.querySelector('#imperial')
const blueContainer = document.querySelector('#blue-container')
const feetInput = document.querySelector('#ft-input')
const inchesInput = document.querySelector('#in-input')
const lbsInput = document.querySelector('#lbs-input')
const bmiResult = document.querySelector('#bmi-result')

metricSelector.addEventListener('click', () => {
    console.log('item clicked')
    calculatorContainer.classList.add('metric')
    calculatorContainer.classList.remove('imperial')
    blueContainer.classList.remove('welcome')
    blueContainer.classList.add('results')
})

imperialSelector.addEventListener('click', () => {
    calculatorContainer.classList.add('imperial')
    calculatorContainer.classList.remove('metric')
    blueContainer.classList.remove('welcome')
    blueContainer.classList.add('results')
})

// Imperial functions

function getInchesFromFeet() {
    let userHeightFeet = feetInput.value
    userHeightFeet = Number.parseInt(userHeightFeet, 10)
    return userHeightFeet * 12
}

function getInches() {
    let userHeightInches = inchesInput.value
    userHeightInches = Number.parseInt(userHeightInches, 10)
    return userHeightInches
}

function getTotalInches() {
    return getInchesFromFeet() + getInches()
}

function getLbs() {
    let userWeightLbs = lbsInput.value
    userWeightLbs = Number.parseInt(userWeightLbs, 10)
    return userWeightLbs
}

function getBmiImperial() {
    let userBmi = getLbs() * 703
    userBmi = userBmi / getTotalInches()
    userBmi = userBmi / getTotalInches()
    return userBmi.toFixed(1)
}

feetInput.addEventListener('input', () => {
    // console.log(getInchesFromFeet() + getInches())
})

inchesInput.addEventListener('input', () => {
    // console.log(getInchesFromFeet() + getInches())
    // console.log(`You weigh ${getLbs()} lbs`)
})

lbsInput.addEventListener('input', () => {
    console.log(getBmiImperial())
    bmiResult.textContent = getBmiImperial()
})

