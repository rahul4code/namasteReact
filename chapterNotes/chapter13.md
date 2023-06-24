# Different types of testing ?
- **Manual Testing**: Requires individual
- **Automated Testing** : Code testing a code
  - **E2E Testing**: Testing the whole flow and covers entire users journey using selenium or ciphress [This part is offloaded to QA Team and there is a Testing Team who writes the Test cases for them or who writes selenium testing]
    - **Headless browser**: Kind of actual browser but it does not show anything like browser i.e without UI.
      - The test cases execute faster because it doesn't have to paint on the browser i.e called headless.
    - But there will be Virtual DOM, diff algo and everything
- **Unit Testting**: Testing of small units.
  - Done by developer
- **Integration Testing**: Testing integration of components
  - Also done by dev
- **Regression Testing:** It aims to verify that previously working features still function correctly after modifications have been made.
- **Smoke Testing**: Smoke testing, also known as "Build Verification Testing" or "Confidence Testing," is a type of software testing that aims to quickly evaluate whether the major functionalities of an application are working correctly after a new build or release. The term "smoke testing" originates from the idea of testing a system to see if it catches fire or not, indicating whether it is safe to proceed with further testing.
  - Smoke tests are generally designed as positive tests, focusing on expected and valid inputs. They aim to verify that basic functions are working as intended rather than searching for specific issues or defects.
- **Performance Testing**: Evaluates the performance, responsiveness, scalability, and stability of a system or application under specific workload conditions. 
  - Load Testing
  - Stress Testing
  - Soak or Endurance Testing: Soak testing involves running the system under a sustained workload for an extended period to identify performance issues that may arise over time.
  - Performance Metrics
  - Test Environment: setting up hardware, software, network configurations, and test data that closely resemble the production environment.
  - Tools and Monitoring: Specialized tools and monitoring solutions to simulate user loads, capture performance metrics, analyze results, and monitor system resources in real-time. 
    - Popular performance testing tools include JMeter, Gatling, Apache Bench, and LoadRunner.

## Why needed test cases ?
- To validate exisiting feature will not going to break.
- Maintainability
- Performance 

## TDD ?
- Writing test cases even before writing the code.

## React Testing Library
- RTL focuses on testing user interactions with your components. It encourages testing your components in a way that closely resembles how a user would interact with them.
- RTL is a part of Testing library and this library is a replacement of enzyme.
- Key features:
  - **Querying DOM elements:** React Testing Library provides a set of utility functions for querying DOM elements based on their text content, labels, role, and other attributes.
  - **Simulating user interactions:** It allows you to simulate user interactions such as clicking, typing, and submitting forms to test how your components respond.
  - **Accessibility testing:** React Testing Library encourages writing tests that ensure your components are accessible to users with disabilities.
  - **Component rendering and lifecycle testing:** You can render React components in a test environment and test their lifecycle methods and behavior.
  - **Integration with Jest:** React Testing Library is often used in conjunction with Jest for writing tests, but it can also be used with other testing frameworks.

## What is Jest ?
- Jest is javascript test runner that helps in writing test cases and can be used to test any JavaScript code, not just React components.
- Key features
  - **Automatic mocking:** Jest automatically mocks dependencies, allowing you to isolate components and test them in isolation.
  - **Snapshot testing:** Jest allows you to create snapshots of component renderings and compare them against the expected output, making it easier to detect unintended changes.
  - **Built-in assertions:** Jest provides a set of built-in assertions and matchers that make it easy to write test expectations.
  - **Parallel test execution:** Jest can run tests in parallel, making the testing process faster and more efficient.
  - **Code coverage reporting:** Jest can generate code coverage reports, helping you identify areas of your code that are not adequately covered by tests.

### Steps to setup RTL
- Install testing librarty `npm i -D @testing-library/react`
- Intall Jest `npm i -D jest`
- Configure Jest
  - create jest.config.js file or `npx jest --init` : npx because we only have to use it once without installing it.
  - It will ask some ques related to configs 
- Now you will get errors if you run `npm run test` to fix that
  - Error : As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately. 
  - Now we have to install this package `npm i -D jest-environment-jsdom`.
- Now create folder and test files under `__test__` all the files will be considered as testing files by jest.
  - **NOTE:** `__xyz__` means dunder or double underscore from both ends
  - You can write acb.test.js or abc.spec.js upto you.
- Create your first test.
- **Configure babel** because you will get an error while using import statement in test or js file as we know normal js don't know the import keyword.
    - To make it work configure babel just go to the document jest babel config
    - Jest requires some babel packages. `npm install --save-dev babel-jest @babel/core @babel/preset-env`
    - Now create babel.config.js or you already have .babelrc both can be used to configure babel.
      - Add `"presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]` and run it will work.
  -  **Error:** Support for experimental syntax: JSX is not currently enabled
      - To make it work you have to config babel again by adding one more property: `["@babel/preset-react", {"runtime": automatic}]`
        - runtime is a place where it is running so it will set automatically as per the property
    - While writing test cases if anything breaks in the asset or data part we basically mock it.
      - Suppose for .png file it will break to make it work configure the property in jest.config.js
        - Search for property called moduleNameMapper in jest.config.js and add "\\.(png|jpg)$":"../mocks/imgHandler.js" -> where the handler file will be exporting an empty string.

## Unit Testing of Header
- render function
- store import
- StaticRouter to overcome href error that occurs due to absence of createBrowserRouter Link (react-router-dom) and we can not configure this in js-dom or within render ; This router works without browser. `import { StaticRouter } from "react-router-dom/server";`
- Best practice to use `data-testid={""}`

## Intrgation testing for Search functionality
- render body
- Follow all the prev step to render the component
- Now you will get an error for fetch : `fetch is not defined for js-dom as it is a browser thing`, to fix it
  - We have to use `global.fetch=jest.fn(()=>{})` jest provides a dummy function called jest.fn().
  - fetch at the end returns a promise that provides a readble stream further we convrets that stream to json data so we have handle the same in the dummy function.

        global.fetch=jest.fn(()=>{
          Promise.resolve({
            json: Promise.resolve({}) // Promise to handle await data.json() and can pass the mock data

          })
        })
- **Fix the warning : async await**
- toBeInTheDocument : Not a good practice to use
- If you have to wait for some component to load on screen after some loader you can use a superpower function called `waitFor()` provided by jest.
- This function will wait till the info component is not properly loaded then "after" code will execute.

         await waitFor(()=>expect(bodyComponent.getAllByTestId('someCompId_afterloadingShimmer'))) // Since its awaiting so need to make the function async

## Testing for input Search and firing event to get the search results
- Get the text box id using getByTestId
- Now to fire the event there is a function called fireEvent provided by `@testing-library/react`
  
      fireEvent.change(input, {target:{value:"food"}}) // mocking event.target.value inside it

- Now fire the click event by using the fireEvent function and expect the result by counting its no of restaurant card or its children

### Diff between JSON vs Javascript Object 
- JSON (JavaScript Object Notation) and JavaScript objects are related but distinct concepts
  - JSON has a stricter syntax compared to JavaScript objects. JSON syntax requires property names to be wrapped in double quotes, while JavaScript objects allow property names to be unquoted or wrapped in single quotes.
  - JSON is primarily used as a data interchange format. It is a standardized format for exchanging data between systems and languages. JavaScript objects, on the other hand, are native data structures within the JavaScript programming language and are used for representing and manipulating data within JavaScript applications.
  - Serialization and Deserialization: JSON can be serialized into a string representation using JSON.stringify(), and deserialized back into a JavaScript object using JSON.parse(). This enables the transmission and storage of data in a portable and standardized format. JavaScript objects, being native to JavaScript, don't require serialization or deserialization.
  - JavaScript objects can contain functions as properties, allowing for behavior and logic to be encapsulated within objects. JSON, being a data format, doesn't support functions
  - 
### JSDOM ?
- jsdom is a JavaScript library that provides a virtual implementation of the web browser's Document Object Model (DOM) within Node.js or a browser-like environment. 
- It allows you to create and manipulate a DOM tree, simulate browser behavior, and perform various tasks related to web scraping, testing, and server-side rendering.
- With jsdom, you can programmatically create a virtual DOM environment, similar to what you would find in a web browser, complete with HTML, CSS, and JavaScript support. This enables you to interact with HTML elements, modify their content, add event listeners, execute JavaScript code, and perform other operations as if you were working with a real web page.
- Some common use cases for jsdom include:
    - Testing: jsdom is often used in JavaScript testing frameworks, such as Jest, Mocha, or Karma, to provide a simulated DOM environment for running unit tests on components or code that depend on the DOM. It allows you to write tests that interact with the DOM without the need for an actual browser.
    - Web scraping : loading HTML documents, accessing elements, extracting information, and performing DOM-based operations
    - **Server-side rendering: jsdom is used in server-side rendering frameworks, like Next.js or Gatsby, to render React or other JavaScript-based components into HTML on the server. It allows you to generate pre-rendered HTML pages that can be sent to the client for faster initial page loads and improved search engine optimization (SEO).**
### What is Static Router
- The StaticRouter is a component provided by React Router that allows server-side rendering (SSR) of a React application.
-  It is specifically designed for rendering React components on the server and is commonly used in conjunction with frameworks like Express or Next.js.
- The purpose of the StaticRouter is to match the current URL path with a set of predefined routes and render the corresponding React components based on that match.
- It provides a way to perform SSR without relying on browser history or client-side routing.

      const App = (
        <StaticRouter location={req.url} context={context}>
          {/* Your React application */}
        </StaticRouter>
      );

1. location: Specifies the current URL path received from the server. This allows the router to match the path and render the corresponding components.

2. context: An optional object that holds information about the router's state during rendering. It can be used to capture redirects, handle error scenarios, or pass data to the rendered components.

**Note :** 
It's worth noting that on the client-side, React Router typically uses the BrowserRouter, which relies on browser history and handles routing based on changes in the URL path. The StaticRouter, on the other hand, is specifically designed for server-side rendering and doesn't rely on browser history.