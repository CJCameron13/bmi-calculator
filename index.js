const calculatorContainer = document.querySelector('#calculator-container')
const metricBoxes = document.querySelector('#user-entry-metric')
const metricSelector = document.querySelector('#metric')
const imperialSelector = document.querySelector('#imperial')
const blueContainer = document.querySelector('#blue-container')
const feetInput = document.querySelector('#ft-input')

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

feetInput.addEventListener('input', () => {
    console.log(feetInput.value)
})
