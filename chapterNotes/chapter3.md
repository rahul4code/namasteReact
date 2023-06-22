## Parcel Treeshaking ?
- Remove unused code

 `bable-plugin-transform-remove-console` is a package to remove consoles in project.

## What is JSX ?
- JSX is a HTML like syntax but it is not HTML it is HTML inside javascript.
- Babel understands JSX i.e it reads your code line by line and compile it.
- It used React.createElement behind the scene and then it converts to object and then objects converts to HTML. (with the help of babel)
- **Babel** is a compiler that also create polyfills for you.

**JSX Expression**

`const element=(<h1 title="test" key="tag1">Hi There</h1>)`

## Advantages of JSX
- Readability
- Dev Exp
- Syntactical Sugar
- JSX sanetizes your code like prevent XSS and lot more (Cross side scripting)

## React Components
1. Functional Component (Latest way of writing code)
2. Class Component (Old way)

**Functional Component**
- It's a JavaScript function that returns a JSX or returns a composition of react element.
- Names of functional component starts with capital letter. (Not mandatory) -- Good practice/convention
- For multiple line wrap it with (parenthesis)
- You can skip the return it will be the same.
  
  `const HelloElement =()=>{ return <h1>Hi There</h1>}`

- To render `root.render(<HelloElement />)`;

## What is component composition in react ?
Component inside component (nested component).
