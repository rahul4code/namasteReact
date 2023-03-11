# Why class component is deprecated or not in use ?
- Messy
- Difficult to understand

# render in class
- It returns a jsx 

Note: `You can't create a class base component without render method`

# Constructor in class component ?
- Constructor is a place that is used for initialisation.
- It the best place to create state in class component. Like below
        
        this.state={count:0, count2:0}

- React uses one big object to maintain the state same in functional component(One big object in the backend)
- When you load a class contructor being called first.

# Why to use super inside constructor ?
# Why I can make componentDidMount async but not useEffect ?

# setState in class component?
- setState is use to update the state.
  
`this.setState({count:1})`

- **We do not mutate the state directly**

`Don't do this: this.state.count = 1`

# **React LifeCycle notes**
- In RLC, firstly the contructor get called and then render.
- **ComponentDidMount()** : This is the function that being called after my initial render.
  - constructor => render() method => componentDidMount

        Quick Game 1: Sequence of console.log() in one child
        1. Parent Constructor
        2. Parent Render
        3. Child Constructor
        4. Child Render
        5. Childer ComponentDidMount
        6. Parent ComponentDidMount

        Quick Game 2: Sequence of console.log()  in two childs 
        1. Parent Constructor
        2. Parent Render
        3. First Child Constructor
        4. First Child Render
        5. Second Child Constructor
        6. Second Child Render
        7. First Child ComponentDidMount
        8. Scond Child ComponentDidMount
        9. Parent ComponentDidMount
   

- React LifeCycle have **two phases** or when React renders, it has two phases
    1. **Render Phase** -> Render phase includes constructor and render method.
    2. **Commit Phase** -> In Commit phase React actually modifies your DOM and then componentDidMount will get called.
   
`React finishes your render cycle first then goes to the commit cycle`

    Quick Game 3: Sequence of console.log() in one child when having async componentDidMount with API call

        async componentDidMount(){
            console.log("Before API")
            const data=await fetch("")
            console.log(data)
        }

        1. Parent Constructor
        2. Parent Render
        3. Child Constructor
        4. Child Render
        5. Child componentDidMount// after first render (if there are any console before the API call) or Parent componentDidMount // Meanwhile the data is being fetched 
        6. console json data // Present in child componentDidMount
        7. Child Render // again as the setState get called and the reconciliation process will take place so the update section will get into the picture.
        8. componentDidUpdate // This will get call after every next render
    
   

`React first renders things for you and the API will be called later the method will follow the sequence because of having async in componentDidMount so the API will be delay because of async behaviour`

- **ComponentDidUpdate():** This will get call after every next render.
    - For example after initial render when any data  comes from the API and setStates take place the component will again re-render by following reconciliation process. (so the console will be printed after the update).


- **ComponentWillUnmount():** 
 This will get called when the component is about to unmount/destroy.
    - For example while navigating to some other component, suppose clicking on menu tab, the current component will be unloaded and the method will be called.



*Why useEffect is a great place to call the API ?*

    To make our app first we render it by using default state later on we update it.

    Render => Update

### Disclaimer: useEffect != componentDidMount (never ever compare)

## Write diff between Mount Update and Unmount

# useCase of componentDidUpdate

# useCase of componentWillUnmount and with useEffect

