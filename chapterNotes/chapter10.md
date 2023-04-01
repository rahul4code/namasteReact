# Why Tailwind ?
- Minification
- Time Saving

## Ways of writing css some brief ?
- inline css
- internal css 
- scss and sass
- bootstrap
- Libraries like mui, chakra, ant
- styled--component
- Tailwind framework

# What is sass and scss and its pros and cons ?
- SCSS and SASS is a modern way of writing css.
- Povides mixins, variables, nesting etc.
- The main difference between Sass and SCSS is in their syntax. Sass uses a more concise syntax with significant whitespace and indentation to define nested selectors and properties. On the other hand, SCSS uses the same syntax as regular CSS with curly braces and semicolons.

### Who maintains MUI ?
- Maintained by an active community of developers on GitHub. The project was created by a company called Call-Em-

### Cons of using UI library ?
- Bundle size
- Hard to Personlise
  
## Tailwind CSS framework PROS
- CSS on the go(in the same file)
- Reusability
- Less bundle size
- Flexible UI(customizable)
- Tailwind make sure that the classes that you have used only those will be shipped to the production.
- Removed the unused classes added by some other devs. 
- No duplicate css

## Tailwind CSS framework CONS
- High learning curve
- Less Readability like made class bit ugly
  
## Work with Tailwind
- After applying or adding packages it changed the default behaviour of tags. Like it removed the color of anchor and underline behaviour.
- Every style that you write will be a new class in Tailwind.
  
## What is postcss ?
- PostCSS is a tool for transforming CSS with JavaScript. It is a modular tool that works by processing CSS code through a series of plugins. Each plugin performs a specific transformation on the CSS, such as adding vendor prefixes, removing unused CSS, or optimizing the code.
- Transformation like: Autoprefixing: Adds vendor prefixes to CSS properties to ensure cross-browser compatibility.
- Minification: Reduces the size of the CSS file by removing unnecessary whitespace and comments.
- Custom properties: Enables the use of custom properties in CSS code, which can be useful for theming or managing design tokens.
- Media Queries: Allows for managing responsive design via automated media query manipulation.

## Explain tailwind.config.css

## postcssrc file 
- Configure to tell bundler that we will be going to use Tailwind so compile the Tailwind to normal css. 

### []Notation
- className="w-[200px]"

### before after in css ?
- before and after are pseudo-elements in CSS that allow you to insert content before or after an element's content.
    - .box::after {
  content: " after";
}   

### media query
- sm:bg-blue-50

## CSS Positions:
- Static: This is the default position for HTML elements. In this position, the element is placed in the normal flow of the document.
- Relative: In this position, the element is positioned relative to its normal position.
- Absolute: In this position, the element is positioned relative to its nearest positioned ancestor element. If there is no positioned ancestor element, the element is positioned relative to the body element.
- Fixed: In this position, the element is positioned relative to the browser window, and it remains in the same place even when the page is scrolled.
- Sticky: In this position, the element is positioned based on the user's scroll position. It acts like a combination of the relative and fixed positions. 
`You can use the top, bottom, left, and right properties to move the element `