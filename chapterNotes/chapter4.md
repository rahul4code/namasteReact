## JSX Validations
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

  So Diff algo is used by React and the above process is called Reconciliation. 
  - Whenever you have multiple children with same name it will re-render that whole component to avoid you should have to use keys to let the diff algo knows what has changed.
  -  The algo doesn't know the order of the sibbling elements/node in the tree if the key is missing it will re-render the whole parent node whenever any new sibbling/element is added.

# QnA
## Can we use my React.Fragment inside the React.Fragment ?
   
   Yes, we can use React.Fragment inside React.Fragment it can also be used as empty angular brackets <></>
   
## Array.join ? 

   Array.join returns a string without changing original array and also it can be use to add extra string b/w the elements like `alpha.join(" and ")=> a and b and c`

## Config-Driven UI ?

   Config-Driven UI is an approach of rendering UI on the basis of config data that can be any object or arr of object   

## Optional Chaining ?

   Optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

## Read more about diff algo ?

   A diff algorithm outputs the set of differences between two inputs/DOM.

## React Fiber Architecture ? after React16 the reconciliation engine(for diff) gets updated with some changes. 

   - It's a plain object with some properties which focuses on animations and responsiveness. Fiber represents work and has the ability to split work into chunks(time-slicing) and prioritize tasks. We can pause work and come back to it later. We can also reuse previously completed work or maybe abort it if it is not needed. As opposed to the old React reconciler, it is asynchronous. Where the old reconciler i.e Stack reconciler is synchronous`

   - React first processes those fibers, those units of work and we end with something called finishwork(). Afterward, it commits this work resulting in visible changes in the DOM. This all happens in two phases. The first is the render phase(asynchronous) and it is during this phase that the processing happens. The second phase is the commit phase i.e always synchronous and cannot be interrupted.

   - If some work has a very high priority like animation; React can schedule it in such a way that it gets handled as soon as possible, but if some work has low priority, for example, a network request React can simply delay it for as long as it needs. It uses a function requestAnimationFrame() - highP and requestIdleCallback() -LowP to do that.
   
   For more visit 
              
          https://www.geeksforgeeks.org/what-is-react-fiber/

## Is index a valid key if yes why we shouldn't use it ?
   - no key <<< index << unique key (best practice)

   Yes index can be a valid key but not recommended to use indexes for keys in case if the order of items may change or like adding or removing items from the list can be a good example why not to use index. This can negatively impact performance and may cause issues with component state
