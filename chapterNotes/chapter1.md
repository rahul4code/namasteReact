# HTML vs React
 1. React is Library where HTML is a Markup language.
 2. HTML uses different attribute than HTML. eg like class as className because it's a reserved keyword in js and React uses JSX which itself a js extension.
 3. Both looks quite similar but React doing lot of things behind the scene, it does reconciliation (by using diffing algo). It uses React.createElement which returns an object that later on represents a DOM element.
 4. React is better to use while you are managing state while HTML is built of tags that has their own use cases.
 5. React is slow as compare to HTML because it basically do lot of things behind the scene.
 6. React have components reusability where in HTML every time you to write the same piece code(in most of the cases).

# Extensions
1. Better Comments
2. Bracket Pair Colorization Toggler
3. ES7+React
4. GitLense
5. Markdown All in one(.)
6. Prettier - Code formatter
7. vscode-icons

# CDN
- CDN stands for Content Delivery Network. It allows quick transfer contents to the website, contents can be images, text, JavaScript files, stylesheet, videos etc.
- It does help cache content at the n/w edge.

Advantages:
- Improves app performance by reducing load time
- Increase content availability and redundancy(distributed nature).
- Immproves website security by providing DDoS mitigation. 

# React and ReactDOM
- React and ReactDOM are splitted after coming React Native beccause React works with mobile and web app where ReactDOM only works with web app.
- ReactDOM is a glue between React and the DOM(Document Object Model) to render the compoenent to DOM by using ReactDOM.render().

# React.createElement
React.createElement is a decription of what the actual DOM element should look like, React does not use DOM directly it uses Virtual DOM that made up of React elements.

<u>Syntax</u> : `React.createElement(type,{props},children);`

## React.createElement has three arguments
   - **type** of the HTML element (h1, p, button)
   - **props** properties of object ({style:{font: '10px'}}) or className:'customClass'
   - **children** an array [h1_element, h2_element]

`ReactDOM.render(
    demo,
    document.getElementById('root')
)`

#  Defer vs Async in script
## Defer :
- The defer attribute script fetch/download files in parallel with HTML parsing.
- The downloaded scripts are executed only when the browser finishes its HTML parsing.
- Execute in the same sequence it has defined even after the script 2 fetch is completed, it will execute the script1 that is added prior to it. (in case of multiple)
## Async:
- HTML parsing and script fetching/downloading in parallel.
- Once the script available HTML parsing get pause and script get executed.
- Once execution completes the Parsing continues.
- Async attribute scripts are full-independent.
- It doesn't wait for execution wahetever scripts load first will get executed in case of multiple.