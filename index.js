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
const bmiRating = document.querySelector('#bmi-rating')
const lowerThreshold = document.querySelector('#lower-threshold')
const upperThreshold = document.querySelector('#upper-threshold')

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

cmInput.addEventListener('input', () => {
    if (getBmiMetric() < 18.5) {
        bmiRating.textContent = 'underweight'
    } else if (getBmiMetric() <= 24.9) {
        bmiRating.textContent = 'a healthy weight'
    } else if (getBmiMetric() <= 29.9) {
        bmiRating.textContent = 'overweight'
    } else bmiRating.textContent = 'obese'
})

kgInput.addEventListener('input', () => {
    if (getBmiMetric() < 18.5) {
        bmiRating.textContent = 'underweight'
    } else if (getBmiMetric() <= 24.9) {
        bmiRating.textContent = 'a healthy weight'
    } else if (getBmiMetric() <= 29.9) {
        bmiRating.textContent = 'overweight'
    } else bmiRating.textContent = 'obese'
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

feetInput.addEventListener('input', () => {
    if (getBmiImperial() < 18.5) {
        bmiRating.textContent = 'underweight'
    } else if (getBmiImperial() <= 24.9) {
        bmiRating.textContent = 'a healthy weight'
    } else if (getBmiImperial() <= 29.9) {
        bmiRating.textContent = 'overweight'
    } else bmiRating.textContent = 'obese'
})

inchesInput.addEventListener('input', () => {
    if (getBmiImperial() < 18.5) {
        bmiRating.textContent = 'underweight'
    } else if (getBmiImperial() <= 24.9) {
        bmiRating.textContent = 'a healthy weight'
    } else if (getBmiImperial() <= 29.9) {
        bmiRating.textContent = 'overweight'
    } else bmiRating.textContent = 'obese'
})

lbsInput.addEventListener('input', () => {
    if (getBmiImperial() < 18.5) {
        bmiRating.textContent = 'underweight'
    } else if (getBmiImperial() <= 24.9) {
        bmiRating.textContent = 'a healthy weight'
    } else if (getBmiImperial() <= 29.9) {
        bmiRating.textContent = 'overweight'
    } else bmiRating.textContent = 'obese'
})

//Healthy weight range

function getLowerThresholdImperial() {
    let userHeight = getTotalInches()
    return 18.5 * Math.pow(userHeight, 2) / 703
}

function getUpperThresholdImperial() {
    let userHeight = getTotalInches()
    return 24.9 * Math.pow(userHeight, 2) / 703
}

function getLowerThresholdMetric() {
    let userHeight = getCentimeters()
    return 18.5 * Math.pow(userHeight, 2) / 10000
}

function getUpperThresholdMetric() {
    let userHeight = getCentimeters()
    return 24.9 * Math.pow(userHeight, 2) / 10000
}

feetInput.addEventListener('input', () => {
    if (feetInput.value > 0 && lbsInput.value > 0 && inchesInput.value !== "") {
        lowerThreshold.textContent = getLowerThresholdImperial().toFixed(0)
        upperThreshold.textContent = getUpperThresholdImperial().toFixed(0)
    }
})

inchesInput.addEventListener('input', () => {
    if (feetInput.value > 0 && lbsInput.value > 0 && inchesInput.value !== "") {
        lowerThreshold.textContent = getLowerThresholdImperial().toFixed(0)
        upperThreshold.textContent = getUpperThresholdImperial().toFixed(0)
    } 
})

lbsInput.addEventListener('input', () => {
    if (feetInput.value > 0 && lbsInput.value > 0 && inchesInput.value !== "") {
        lowerThreshold.textContent = getLowerThresholdImperial().toFixed(0)
        upperThreshold.textContent = getUpperThresholdImperial().toFixed(0)
    } 
})

kgInput.addEventListener('input', () => {
    if (kgInput.value > 0 && cmInput.value > 0) {
        lowerThreshold.textContent = getLowerThresholdMetric().toFixed(0)
        upperThreshold.textContent = getUpperThresholdMetric().toFixed(0)
    }
})

cmInput.addEventListener('input', () => {
    if (kgInput.value > 0 && cmInput.value > 0) {
        lowerThreshold.textContent = getLowerThresholdMetric().toFixed(0)
        upperThreshold.textContent = getUpperThresholdMetric().toFixed(0)
    }
})
