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

### Things to look into

- Learn Throttling
- Map
- Set
- LRU
- Recursion
