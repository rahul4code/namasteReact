## What is custom hook ?
- Hook is normal js function.
- We can wrap a small logic and use it anywhere.
- Supports Modularity
- Makes code more testable because we can write the test cases and test it individually

## Why when why we should build the custom hook ?
- Reusability
- Readability
- Separation of concern
- Maintainable
  
`Can use useState and useEffect inside custom hooks but not in normal function.`

## How to add and remove Event Listners ?

## What is **chunking** or code splitting/ dynamic bundling/ **lazy loading** and how to acheive it ?
- Lazy Loading
- Chunking
- Dynamic Import
- Code Splitting
- On demand loading
- Logical bundling should be there.

#### To achieve all these features that are somewhere same we can use `lazy`. 
-  lazy is a named import comes from react library. This should be in the initial component calling like in routes where we have mapped the routes with elements.
-  lazy takes a callback function where it uses import function and pass it the path of the file that we have chunk.

`const Instamart = lazy(() => import('./instamart'))`

- By doing this now the bundle's js file will not have the code of this component or file.
- It will create a separate bundle file something called `instamart.074468.js?1545`
- This is all called alazy loading, On demand loading, Chunking.....
- When you load the compoenent On-demand this is a different bundle all together so it takes some time to load the script so meanwhile in this process `React suspends the rendering`.
  
  - To handle the suspending from React there is feature called `Suspense`
  - The component need to wrap inside the Suspense provided by React as a named import.
  - Now React will take care the rendering. So React knows that the particular component is lazy loaded. Lazy returns a promise so now it will wait for that promise to be resolved.
  - So meanwhile the compoenent is being loaded after wrapping the suspense we can show the shimmer. 
  - To achieve this Shimmer functionality Shimmer i.e a React component takes a prop which is known as `fallback`.
  - In `fallback` we can pass any component to render.
   
        <Suspense falback={<Shimmer />}> <Instamart/> </Suspense>

`[Not a good practice] : Never ever try to lazy load any component inside another component because it will get lazy loaded after every render cycle instead of doing this do it ouside of the component like right after import.`