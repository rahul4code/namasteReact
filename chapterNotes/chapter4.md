## JSX Validation
- You should have only one parent element. 
- If you not wrapped inside the parent then it should start complaining.
-  Supports only one root.
  
## What is React.Fragment ?
- It's component which is exported by the React.
- If you want to wrap your component inside div you can use `React.Fragment` instead of `<div>`
- It work as an empty element.
- You can use `<></>` instead of `<React.Fragment>` just a shorthand.

## Styling in React
- Can use style attr and pass the object. like `style={{ backgroundColor:'yellow' }}`

## Props in React ?
- Props are the properties that we use to pass some data to the components.
- Props supports destructuring on the fly just to make it cool.

## Virtual DOM
- A representation of a DOM with us is known as Virtual DOM.

    #### Need of Virtual DOM
  - Need virtual DOM for **Reconciliation** in React.
  - React uses this algorithm to diff one tree from other and it determines what to change in the UI and what does not change.
  - Diff algo find out what needs to be updated and just update that small part of the UI without re-rendering the whole app.
  ![image](https://user-images.githubusercontent.com/42863919/215876981-03620e92-6bb9-400d-b002-09a1f916eaec.png)

  So Diff algo si used by React and the above process is called Reconciliation. 
  - Whenever you have multiple children with same name it will re-render that whole component to avoid you should have to use keys to let the diff algo knows what has changed.
  -  The algo doesn't know the order of the sibbling elements/node in the tree if the key is missing it will re-render the whole parent node whenever any new sibbling/element is added.

# Questions
1. Ques. Can we use my React.Fragment inside the React.Fragment ?
2. Array.join ? 
3. Config-Driven UI ?
4. Optional Chaining ?
5. Read more about diff algo ?
6. React Fiber Architecture ? after React16 the reconciliation engine(for diff) gets updated with some changes. 
7. Is index a valid key if yes why we shouldn't use it ?
     - no key <<< index << unique key (best practice)
