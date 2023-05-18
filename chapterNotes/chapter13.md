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
        - Search for property called 

## Unit Testing of Header
- render function

##



### Diff between JSON vs Javascript Object 
### JSDOM ?

