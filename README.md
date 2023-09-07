# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Modern CSS](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This helped me with styling the radio buttons.
- [Stack Overflow](https://stackoverflow.com/questions/49284045/why-does-font-size-increase-an-inputs-width) - Answer by Kurtis helped me to solve the widening input box issue.
- [Cleveland Clinic](https://my.clevelandclinic.org/health/articles/9464-body-mass-index-bmi) - BMI formula (Imperial)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
