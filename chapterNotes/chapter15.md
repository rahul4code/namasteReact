## HOC (Higher Order Component)

- HOC is a function that takes a component and returns a component
- Takes existing component and return with applied modification

### Debouncing with 200ms

- The difference between two key strokes is <200ms then the API call will not be there

## Debouncing with Youtube API

- Set up search text state and call the API everytime

        useEffect(()=>{

            const timer=setTimeout(()=>{
                  if(searchCache[serchText]) // Apply Caching
                   {
                        setSuggestion(searchCache[serchText])
                   } else
                   {
                        getSearchSuggetionData();
                   } 
                },200)

            return ()=>{
                clearTimeout(timer)
            }
        },[searchText])

        // In function getSearchSuggestion set state for json also the redux cache object

- The above code will run like this
  - Render method will called
  - After initial render and every time when the serchText changes useEffect will get call
  - Once the useEffect call it will register the timeout to call the API after 200ms
  - Once User type any key in <200ms, before calling the useEffect again, first it will unmount the component and clear the timer.
  - Again the new setTimeout will get register and the API will get called after 200 sec if and only if the User do not type any key within 200ms

## Things to look into

### Throttling vs Debouncing
- **Throttling** limits the frequency of function invocations by enforcing a minimum time interval between consecutive calls.
- **Throttling** is useful in scenarios where a function is called rapidly and frequently, such as handling events like scroll or resize, to prevent performance issues or overwhelming the system with excessive computations or requests.
    - Example: This throttled implementation ensures that the handleScroll function is called at most once every 200 milliseconds, regardless of how frequently the scroll event is triggered. Throttling helps reduce unnecessary function invocations and provides better control over resource usage.
- **Debouncing** limits the frequency of function invocations by introducing a delay in invocation before executing the function.
- **Debouncing** also need to take care if the invocation is again within the delay time then clear the timout and register a new setTimeout with the invocation.

`In summary, throttling executes a function regularly at a specified interval, ignoring intermediate invocations, while debouncing delays the function execution until a period of inactivity has passed, discarding intermediate invocations. The choice between throttling and debouncing depends on the specific requirements and desired behavior of the application or use case.`

### Set in ES6
- It provides a collection of values with no duplicates, where each value can occur only once within a Set instance.

        const mySet=new Set();
        // Adding values to the Set
        mySet.add(1);
        mySet.add('Hello');
        mySet.add({ name: 'John' });

        console.log(mySet)

        /* {1,"Hello",// [object Object] 
            {
            "name": "John"
            }} */
        

### LRU
- LRU stands for "Least Recently Used," and it is a cache eviction policy or algorithm used in computer systems, particularly in memory management and caching. The LRU policy aims to remove the least recently used items or elements from a cache or a data structure when it reaches its capacity limit.
- Like removing items from top if inserting from the end
