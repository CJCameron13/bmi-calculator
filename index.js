const calculatorContainer = document.querySelector('#calculator-container')
const metricBoxes = document.querySelector('#user-entry-metric')
const metricSelector = document.querySelector('#metric')
const imperialSelector = document.querySelector('#imperial')
console.log(metricSelector)

metricSelector.addEventListener('click', () => {
    console.log('item clicked')
    calculatorContainer.classList.add('metric')
    calculatorContainer.classList.remove('imperial')
})

imperialSelector.addEventListener('click', () => {
    calculatorContainer.classList.add('imperial')
    calculatorContainer.classList.remove('metric')
})