## Keep Notes 
- Never create a `functional component` inside functional component because it keeps creating the component for each render in this case keep it on the top level.
- Never ever write a useState inside `if else` because React keep tracks their own local state variable so React won't know about the variable. Also never write inside `for loop`. React never like inconsistency it should exactly knows what are the variables.
- useState provides a facility to create a local state for your component and according to the documentation never use useState outside of your component.
  
# Why CDN is best way to store images ?
 CDN to store and serve images can help improve the speed, performance, and security of your website, while also providing cost savings and scalability benefits.

# react-router-dom and diff types of routers ?
- Developed by remix
- React Router DOM is a package that provides a way for developers to handle client-side routing in React applications. It uses the HTML5 history API to create single-page applications with multiple views, allowing users to navigate between different pages without having to reload the entire application.
  
### Different type routers 
1. createBrowserRouter
2. createhashrouter
3. creatememoryrouter
# createBrowserRouter and RouterProvider ?
- **createBrowserRouter** is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
- **RouterProvider** takes a router objects are passed to this component to render your app and enable the rest of the APIs.

## What is wildcard match in Route ?
By including a Route with a path of "*" (i.e., a wildcard), developers can define a catch-all route that matches any path that is not matched by other Routes.

        <Route path="*" component={NotFound} >


# useRouteError hook ?
In the context of React Router, a custom "**useRouteError**" hook might be used to handle errors that occur during route navigation or rendering.


# Single Page Application ?
A single-page application (SPA) is a type of web application that operates within a single web page or view, without requiring the user to load or refresh the page to access different parts of the application. SPAs use client-side technologies such as JavaScript, HTML, and CSS to dynamically update the page content and handle user interactions.

# Client vs Server Side Routing ?
**Client-side** routing refers to a technique where the routing logic is handled on the client-side, typically within the browser.

*Advantages*
1. Faster page rendering and response times since the browser can cache resources and only fetch new data as needed
2. More control over the application's state and behavior since the client-side framework can manage the routing and rendering

**Server-side** routing, on the other hand, refers to a technique where the routing logic is handled on the server-side. In this approach, the web application relies on the server to generate the appropriate HTML, CSS, and JavaScript for each request made by the client.

*Advantages*
1. Better support for SEO since search engines can more easily crawl and index server-rendered pages.
2. Easier to implement and debug since the routing and rendering logic is handled on the server and More secure since sensitive data and logic can be hidden from the client

`Some applications may use a combination of both approaches, such as server-side rendering for the initial page load and client-side routing for subsequent navigation.`


# Link in react-router-dom ?
- This component is used to create links between different pages in the application. It takes a `to` prop, which specifies the URL that the link will navigate to.
- Link uses anchor tag at the end.
- react-router-dom is keeping track of Link 

# What is Outlet in react-router-dom ?
- Act as container for child component to render on basis of routes.
- This allows for complex nested routing structures, where child components can be rendered within parent components without having to manually pass down props or render components conditionally.

`<Header/> <Outlet /> <Footer />`

# useParams hook?
- useParams use to read the dynamic URL params

# Build login form using Formik 
- Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most annoying parts:

1. Getting values in and out of form state
2. Validation and error messages
3. Handling form submission




