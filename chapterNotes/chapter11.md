# State vs Props
- States are treated as local variable of any component.
- Props are the values passed from one component to another component.

## Data Layer vs UI Layer
- UI Layer updates the UI by following reconciliation process but the Data layer stays the same.
- UI Layer is always dependent on the data layer.
- Both works parallerly.

## What is PropDrilling
- The data that is being passed from parent to nested child, this process called Prop Drilling.
  
## What is Lifting the state up ?
- It means making the child state available to get update by moving it to parent so that it will controlled by parent and follow the instructions.
-  It involves moving the state from a lower-level component to a higher-level component so that multiple components can share and manipulate the same state data.

## What is the role of Profiler in React dev tool ?
- It used in optimizing the performance of app.
- It provides you the recording of events with render time and graph that help you to understand your app so that you can optimize it.

## What is context ?
- To provide data that can be accesible accross all your components we have to store it in a central space where React provides you the access to the central space which is know as context.
- React build his own feature called React-context.
- We can use some vars to do this but React would not be able to track this.

## createContext in React
- createContext is a js function provided by React to create context.
- The createContext function takes an optional initial value as its parameter, which is the default value that will be used by all components that consume the context unless they are wrapped by a provider that sets a different value.
        
        import {createContext} from "react";

        const UserContext = createContext(
            user :{
                name:'Rahul',
                email:'rahul4code@gmail.com'
            })

        // or

        const MyContext = createContext('default value');    

            // To assign a name to context fot identification while debugging.
            UserContext.displayName="UserContext"
    
        

## useContext in React functional component
- useContext is a hook provided by React.
- It is used to access the context.
        
        import { useContext } from "react";
        import UserContext from "./utils/UserContext";

        const component=()=>{
            .....
            const {user} = useContext(UserContext)
            return(
                {user.name}
            )
        }

## useContext in React class component
- We don't have hooks in class so instead of using useContext we can use Context.Consumer as component.
- UserContext.Consumer takes a jsx which have a function, example below:
  
        import UserContext from "./utils/UserContext";

        class Test extends React.Component{
            constructor(props){
                super(props)
                this.state....
            }

            render()
            {
                return(<UserContext.Consumer>
                    { 
                        ({user}) => <h1> {user.name} </h1>
                    }
                </UserContext.Consumer/>
                )}
        }

## How to update the context ?
- To update the context we have something called <Context.Provider> that takes the states attribute and using the same we can update the state that is now global.
- Example

        import UserContext from "./utils/UserContext";
        import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";

        const AppLayout=()=>{
            const [user, setUser]= useState({
                name:'Rahul',
                email:'rahul4code@gmail.com'
            })

            return(
                <UserContext.Provider value={{
                        user: user,
                        setUser: setUser
                    }}
                >
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            )

            const appRouter=createBrowserRouter({path:'/', element: <AppLayout /> , errorElement: <Error/>,
            children:[{
                 {
                    path:"/contact",
                    element:<Contact />
                 },
                 { 
                    path:"/restaurantdetails/:id",
                    element:<Restaurant/>
                 }
               }]
            })
            const root=ReactDOM.createRoot(document.getElementById("root"));
            root.render(<RouterProvider router={appRouter}>)
        }

- In next component import UserContext and use `user` and `setUser` to update the value.

## Context.Provider and Context.Consumer
- **Context.Provider** is used to define a context and provide the data to its child components. It accepts a value prop which can be any JavaScript value (such as an object, array, or string) that you want to share with the child components.

        return (
                <MyContext.Provider value={/* data to be shared */}>
                {/* Child components */}
                </MyContext.Provider>
            );
        
- To access the data from the context, you can use Context.Consumer in the child components. It allows you to consume the data and use it within the component.

            <MyContext.Consumer>
                {value => (
                <div>
                    {/* Use the value from the context */}
                    {value}
                </div>
                )}
            </MyContext.Consumer>


## Can be a Context inside other context(Nested context) and how to manage multiple context
- Yes, you can create a context inside another context
  
        <FirstContext.Provider value={/* data for first context */}>
        <SecondContext.Provider value={/* data for second context */}>
          {/* Child components */}
        </SecondContext.Provider>
      </FirstContext.Provider>