# React File Structure
- It helps to group files according to the features.

# Default vs Named Export and Import

# What is one-way data binding that React uses ?

# What is Hooks ?
- Its just a normal js function.
- Every hook have a specific function for it. 
- Written by FB dev that gives some functionality.
- Hooks examples are useState, useEffect.

# What is state and useState ?
- State is a variable where useState is use to create it.
  - useState comes as a named import from React Library.
  - useState funtion returns an array.
  - First element would be the local variable name.
  - React says we can't directly modify our variables (due to one way data binding that only React supports) so we can only achieve it by using a function as an example `setSearchText` provided by useState hook. This is user defined. 

`const [variableName, functionToUpdateTheValue]=useState("")`

`const [searchText, setSearchText]=useState("")`

- By using useState React reads the value as well as update the value at the same time that being called Two-way binding.

# Why do we need state variables ? - imp

- React has one way bindings that will not keep track your local variables. So if the value gets updated then React will not aware to render the UI. `<h1>{myVar}</h1>`
- React says you have to keep your variables sync with UI so to do that you have to use state variables that Reacts track and uses two way binding to Read and Update it.
- When the state(variable) gets change the only component that holds the value will get updated  with the vlaue (React used reconciliation process that used diff applied diff algo to update the real DOM).
  

#


