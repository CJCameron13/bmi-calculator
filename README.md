# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Live site](https://cjcameron13.github.io/bmi-calculator/)

## My process

Aug 29 - Got started with styling via CSS. Was able to grab the correct color (or close enough) for the background gradient. Decided to add a max-width to the content, I dont think the content will lay out well if allowed to stretch to a really wide screen. I predicted that positioning the calculator box appropriately would be challenging, I find absolutely positioned items to be finicky, but it wasn't too bad. Combining right and margin right seemed to work well.
```css
#calculator-container {
    background-color: var(--white);
    position: absolute;
    right: 0;
    margin-right: 25%;
    top: 200px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px var(--dark-electric-blue);
}
```
Styling the calculator will be tomorrow's primary goal.

Aug 31 - Made good progress on the calculator box. Biggest new thing learned today was the technique for styling radio buttons and setting appearance:none. I predict that my next challenge will be setting the unit labels/tags inside of the textbox.

Sep 1 - Short day today. Just wanted to do something. Did active states for the input boxes. Got started on welcome box. It appears to have a slight gradient so will need to add that. The rest should be fairly simple.

Sep 3 - Got the gradient done pretty easily. For some reason, the text input increase in size when I increase the font-size value. Would like to find a solution to that. Otherwise the calculator box is ready to go minus the labels inside of the textbox.

Sep 4 - This calculator box has been quite the tinker job. I found a way to get the labels "inside" of the input box by containing the input and label in a parent box. One issue remains and that is the wonky sizing of the input boxes. They still dramatically widen when increasing the font size. And it's the only element that doesn't seem to "listen" to its prescribed width.

Sep 5 - By giving the input box a fixed width using px instead of %, I was able to solve the widening issue. Completed more of the layout. Namely the results section and got started with the habits section. Attempted to work on the imperial layout for the calculator box but I will save that for when the page layout is done. Wanted to feel some progress on the page.

Sep 6 - Good progress today. Completed the base desktop layout for all sections. I may need to make some adjustments to ensure that the page is dynamic and will work on different desktop viewport sizes, before moving to a tablet or mobile version. Completed the metic and imperial states for the calculator, along with the Javascript to toggle between the two. Proud of how easily I was able to get that done. Next session we will begin tackling the actual calculator.

Sep 7 - Completed the blue container results layout. It appears once the user selects either metric or imperial, I thought it easier to simply ride it along the existing event listeners. I gathered the formula for calculating BMI. At least for imperial measurements. It will be challenge to work all of that out in JS.

Sep 8 - Learned about 'input' event listeners and did a quick test. Also corrected an oversight where I had several elements using the same ID.

Sep 11 - Learned toFixed() method for setting a specific demical place. The calculator works! Still much work to be done and I only have the imperial version as of now. I also want it work a little smoother, such as waiting until the user has entered all stats before displaying the bmi. So I don't get any nasty NaNs. Very excited this is coming together however.

Sep 12 - Very pleased with where I am. I was able to prevent NaN from appearing as the browser waits for the conditions to be met before it populates the bmi result. Both imperial and metric calculators are now functional. I'd like for the result to reset if the user later decides to select the other measurment system, however they don't seem to overlap so the calculations will still come out proper once the appropriate data is entered. So it's not functionally important, however it just may make for a cleaner user experience. Next task will be populating the results description section that will tell the user whether they are overweight, underweight etc. I believe this will require some asynchronous programming techniques as I don't want it to populate until the bmi has been calculated. Excited to delve into that.

Sep 13 - No code updates today, just some research and thought on how I will have the results description populate after the results have been calculated. I honestly could just run seperate event listeners. I will give that a shot in my next session. A bit out of brain power for today.

Sep 14 - Went with adding seperate event listeners and was able to get weight classifications based on the calculated bmi. Calculates dynamically along with the bmi. Will take some thinking to figure out how to get a calculation for the healthy weight range.

Sep 23 - After a long break I have finally put the finishing touches on the calculator JS. I was able to find a reverse BMI calculator that allowed me to get the lower and upper thresholds for the specific weight that the user entered. I feel like I could have combined code under some of my event listeners, but even if redundant, the code still feels clean. That should be it for JS. Now to go back and make sure the site layout is responsive and to put together the mobile version.

Sep 25 - I'm going to put a bow on this project for now. Outside of the mobile version, it's otherwise done. However I've come upon a new project opportunity that I want to get started on right away. So as this project was for practice purposes, I am going to call it good practice and wrap it up.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Javascript

### Useful resources

- [Modern CSS](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This helped me with styling the radio buttons.
- [Stack Overflow](https://stackoverflow.com/questions/49284045/why-does-font-size-increase-an-inputs-width) - Answer by Kurtis helped me to solve the widening input box issue.
- [Cleveland Clinic](https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi) - BMI formula (Imperial)
- [CDC](https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_1.html#:~:text=With%20the%20metric%20system%2C%20the,by%2010%2C000%2C%20can%20be%20used.) - BMI formula (metric)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) - Input events
- [Calculator Academy](https://calculator.academy/reverse-bmi-calculator/) - Reverse BMI formula

## Author

- Github - [CJCameron13](https://github.com/CJCameron13)
- Frontend Mentor - [@CJCameron13](https://www.frontendmentor.io/profile/CJCameron13)

