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

In React class-based components, the super() keyword is used to call the constructor of the parent class. This is necessary because the React component class extends the React.Component class, which is a parent class that provides important functionality to the component.

Here are some reasons why you might want to use super() inside the constructor of a React class-based component:

- Props: When a React component is created, it receives props from its parent component. These props can be accessed in the component's constructor using the super() keyword. This allows you to initialize the component's state or perform other actions based on the initial props.

- State: React components can have state, which represents data that can change over time. The super() keyword is used to initialize the component's state in the constructor. This is important because the state should be initialized before the component is rendered for the first time.

- Lifecycle methods: React components have a number of lifecycle methods that are called at different stages of the component's lifecycle. The super() keyword is used to call these lifecycle methods in the parent class, which ensures that the component behaves correctly throughout its lifecycle.

- Inheritance: If you extend a component from another component, you can use super() to call the constructor of the parent component. This is important because the parent component may have functionality that the child component needs to inherit.

`In summary, using super() inside the constructor of a React class-based component is necessary to access props, initialize state, call lifecycle methods, and inherit functionality from parent components.`

# Why I can make componentDidMount async but not useEffect ?
### Here are the reasons:
- `componentDidMount` is a class-based method while the useEffect hook is a function-based component equivalent that allows you to perform side effects (such as fetching data, setting up subscriptions, or manipulating the DOM) in a function component. 
- `componentDidMount` is called once, immediately after the component is mounted, while `useEffect` can be called multiple times throughout the component's lifecycle.
- `componentDidMount` can be made asynchronous because it is a method that can return a Promise. `useEffect` cannot be made asynchronous because it must return either nothing or a cleanup function.

        useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            setData(data);
        }

        fetchData();
        }, []);

However, you can still use async/await inside the function passed to useEffect.



# setState in class component?
- setState is use to update the state.
  
`this.setState({count:1})`

- **We do not mutate the state directly**

`Don't do this: this.state.count = 1`

# **React LifeCycle notes**
![image](https://user-images.githubusercontent.com/42863919/224479759-0fba79ba-de5f-4947-9538-4de4a71d6103.png)

- In RLC, firstly the contructor get called and then render.
- **ComponentDidMount()** : This is the function that being called after my initial render.
  - constructor => render() method => componentDidMount

        Quick Game 1: Sequence of console.log() in one child
        1. Parent Constructor
        2. Parent Render
        3. Child Constructor
        4. Child Render
        5. Child ComponentDidMount
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

`# Disclaimer: useEffect != componentDidMount (never ever compare)`

## Write diff between Mount Update and Unmount
- Refer the RLC image 
## example useCase of componentDidUpdate and with useEffect
![Screenshot 2023-03-11 153737](https://user-images.githubusercontent.com/42863919/224479670-0f9a0e9a-3854-4982-9b23-67858ee805b7.png)


## example useCase of componentWillUnmount and with useEffect
![Screenshot 2023-03-11 155302](https://user-images.githubusercontent.com/42863919/224479657-30a6ecf7-6046-46fd-bd83-d2e89abe5376.png)
![Screenshot 2023-03-11 160045](https://user-images.githubusercontent.com/42863919/224479648-e6710dee-669c-478d-bd40-60f8667cd59d.png)
