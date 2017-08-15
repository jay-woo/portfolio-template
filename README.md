# My Portfolio
This website is where I've written about my design decisions for past UX/UI projects. 

See my portfolio in action: www.jay-woo.com

![Portfolio Preview](http://i.imgur.com/R0VsGEG.png)

## How It's Made:

**Tech used:** HTML, CSS, Materialize

In addition to using HTML and CSS, I used the Materialize framework to make my website responsive. I regularly used Google Chrome's Developer Tools to check that my website was usable across a wide range of viewports (from smartphone to desktop computer). I also used Materialize to generate navigation elements, such as the left sidebar. I made sure to hide these elements for smaller window sizes to prioritize more important information. For instance, I made sure to collapse the sidebar into a hamburger menu in the top-left corner for smaller screens, so that mobile users can easily see the main content in each page.

![Responsive GIF](http://i.imgur.com/ItMtHqJ.gif)

For the "Work" section of my portfolio, I made the buttons responsive, as well. As the viewport gets smaller and smaller, each button takes up a greater and greater percentage of horizontal space. That way, the buttons do not become extremely tiny and, thus, difficult to read and press.

![Responsive GIF 2](http://i.imgur.com/ItMtHqJ.gif)

With regards to the visual design, Materialize made it very easy to incorporate [the basic tenets of material design](https://material.io/guidelines/). I used drop shadows throughout my website to convey a sense of depth and tangibility.

## Lessons Learned:

This was the first time I built my portfolio from scratch! Here are the main skills and lessons I learned along the way:

1. **Mobile-first design improves the user experience**: When designing my website, I found it helpful to start with the mobile experience and then work my way up to larger and larger screens. I pushed myself to think about how to reduce the content for smaller viewports, so that mobile users are not overloaded by the amount of information.
2. **Frameworks make your life easy**: Originally, I was a little hesitant to use Materialize because I really wanted to do a barebones implementation of my portfolio using just HTML and CSS. I ultimately changed my mind once I saw how Materialize simplified the process of building responsive websites and making complex media queries. This made the development process a lot quicker, allowing me to get critical feedback a lot sooner.
3. **Err on the side of simple**: In previous iterations of my portfolio, I used all sorts of different colors and fonts, but I learned quickly that those complexities were super distracting and detracted from the user experience. I decided to strip away these visual elements to the barest minimum, in order to prioritize people's ability to navigate through my website and find the information they need.
