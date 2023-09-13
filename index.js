const calculatorContainer = document.querySelector('#calculator-container')
const metricBoxes = document.querySelector('#user-entry-metric')
const metricSelector = document.querySelector('#metric')
const imperialSelector = document.querySelector('#imperial')
const blueContainer = document.querySelector('#blue-container')
const cmInput = document.querySelector('#cm-input')
const kgInput = document.querySelector('#kg-input')
const feetInput = document.querySelector('#ft-input')
const inchesInput = document.querySelector('#in-input')
const lbsInput = document.querySelector('#lbs-input')
const bmiResult = document.querySelector('#bmi-result')

metricSelector.addEventListener('click', () => {
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

// Metric functions

function getCentimeters() {
    let userHeightCentimeters = cmInput.value
    userHeightCentimeters = Number.parseInt(userHeightCentimeters, 10)
    return userHeightCentimeters
}

function getKilograms() {
    let userWeightKilograms = kgInput.value
    userWeightKilograms = Number.parseInt(userWeightKilograms, 10)
    return userWeightKilograms
}

function getBmiMetric () {
    let userBmi = getKilograms() / getCentimeters()
    userBmi /= getCentimeters()
    userBmi *= 10000
    return userBmi.toFixed(1)
}

kgInput.addEventListener('input', () => {
    if (kgInput.value > 0 && cmInput.value > 0) {
        bmiResult.textContent = getBmiMetric()
    }
})

cmInput.addEventListener('input', () => {
    if (kgInput.value > 0 && cmInput.value > 0) {
        bmiResult.textContent = getBmiMetric()
    }
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
    userBmi /= getTotalInches()
    userBmi /= getTotalInches()
    return userBmi.toFixed(1)
}

feetInput.addEventListener('input', () => {
    if (feetInput.value > 0 && lbsInput.value > 0 && inchesInput.value !== "") {
        bmiResult.textContent = getBmiImperial()
    }
})

inchesInput.addEventListener('input', () => {
    if (feetInput.value > 0 && lbsInput.value > 0 && inchesInput.value !== "") {
        bmiResult.textContent = getBmiImperial()
    } 
})

lbsInput.addEventListener('input', () => {
    if (feetInput.value > 0 && lbsInput.value > 0 && inchesInput.value !== "") {
        bmiResult.textContent = getBmiImperial()
    } 
})



