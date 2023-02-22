# What is MONOLITH vs MICROSERVICES (architecture) ?
|Monolith | Microservices |
|:-------------|:-----------------|
| 1. A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. | 1. Microservices architectural method relies on a series of independently deployable services. These services have their own business logic and database with a specific goal.|
| 2. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. | 2. Microservices don’t reduce complexity, but they make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other |
|3. **Pros:** Easy debugging | 3. **Pros:** Continuous deployment  | 
| 4. **Cons:** Barrier to technology adoption | 4. **Cons** Exponential infrastructure costs |

## Advantages of Microservices architecture ?
- Seperation of concern
- Continuous deployment
- Highly maintainable and testable 
- Technology flexibility 
- High reliability 

## How different services communicates/connect with each other ?
- HTTP or HTTPS communication (Different ports but same domain or different domain as well)
- Message communication like AWS SQS 
- Event driven communication with integrated queue service (async pattern)

# What is fetch ?
- Its a browser API you can access it by using `window.fetch`.
- Its prebuilt method in js nothing to import.

## What is useEffect ?
- useEffect is a normal js function that can be use by importing by its name available in react library.
- It can be called by passing a callback and dependency array as an argument.
- useEffect function being called by passing a callback function not immediately but whenever useEffect wants it  to be called.
- We can control the rendering in useEffect by passing a `Dependency Array`
  
``useEffect(()=>{ console.log("call when var x changes")}, [x])``

- In you don't want to be dependent on anything , then we can pass an empty array it will just called once because of no dependency.
  
``useEffect(()=>{ console.log("Only once")}, [])``

- **When you have a callback function with an empty dependency array it will get called just once and after initial render.**
  
- In the same way if it is dependent on any state then it will get call at **once after initial render + everytime when the state value get changes**.

- Different ways of calling API (IInd is the preferred way)
![Screenshot_20230220_172233](https://user-images.githubusercontent.com/42863919/220661726-1eff2127-8477-46ec-8cca-79b4ca6acbc3.png)

### JSON.parse vs somthing.json() ? 
- **JSON.parse()** When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.

- **.json()** The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

### async and await ?
-  Async/Await is the extension of promises.
-  **Async:** It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop.
-  **Async** functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
-  **Await:** Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

# Shimmer UI ?
Shimmer is a loading effect which shows a placeholder that resembles the same structure when the actual data is loaded. 

# Conditional UI
Conditional rendering in React is the practice of rendering different UI components or content based on a certain condition or set of conditions. This allows your components to dynamically display different content based on user input, application state, or other factors.

# Early Return ? Avoid rendering a component ?
When a UI return prior to the actual UI to avoid the rendering is called Early return.

# JSX expression vs statement 
- A statement does something. `if(x) {....} function xyz()`
- An expression evaluates to a value. `(5+2) or a === 10 ? "b" "c"`




