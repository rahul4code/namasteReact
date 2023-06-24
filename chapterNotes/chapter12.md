## What is Redux and its use ?
- To manage data layer of app we use redux.
- To avoid prop drilling.
- Instead of creating multiple context(its a central place and any component can read and update the values of that central place) we usually create a Redux store.
- Its used for Data management.

### Cons of redux
- Learning curve
- Setup issue
- Use if you have large scale data handling.
  
## Diff between Redux and Redux Toolkit
- Toolkit is a standard way of writing Redux.
- Toolkit overcome three common concerns.
  - Configuring complicated store
  - Adding lots of packages to make it work.
  - Requires boilerplate setup 

## Redux Store
- Redux store is a big object.
- Store is a central thing and treated as a separate entity.
- In redux we have single store to hold all the data.

## Slices in Redux
- In redux store there is a slices that can be used to create a logical separation of store.
- There can be multple slices within the store kind of small portion of the store. Like UserSlice, CartSlice.
- To modify the store we can not directly do it. Here comes **dispatch** into the picture.

## Dispatch in Redux
- To modify/update the store we need to dispatch the action. 
- Action like : AddItem
- The Action will call a function which calls a **Reducer** function that will update the slice of our redux store.

## Why we can't directly modify the store
- When we have large scale app we can't allow random component to randomly update the store.
- So there must be some process to do it its a separtion of concern.

Process : `When we click on add item button in UI it dispatches an action which calls a reducer function which updates the slice of our redux store`

## How to read data from store "useSelector" or "Subscribing to the store" ?
- To read data from store there is a jargon called "selector"
- So to read the Cart value you have to call the selector that will read the data from the store that will reflect your cart binding value.
- The name selector means to select the slice from the store or portion of the store i.e a slice.
- Selector is hook at the end of the day that is a normal js function. `useSelector`
- Whenever we use seletor it is called `subscribing to the store`.
- Like the cart component is subscribed to the store means this component is reading from the store. Or `in sync` with store so whenever my store will get modify the cart component will automatically modify in the UI.

## Getting started with RTK

![image](https://user-images.githubusercontent.com/42863919/232324254-6b99e6a3-e8a2-485f-a3b3-b692ab66064b.png)

        npm install @reduxjs/toolkit // core of redux

        npm install react-redux // bridge b/w react and redux

### Configuring a store
- configureStore consumes from reduxjs/toolkit
- It contains object that consist slices
- Provided stire to the app using Provider [react-redux] it uses the store and provider passes `store` props
  
        import {configureStore} from "@reduxjs/toolkit"
        import cartSlice from "/utils/cartSlice";

        const store = configureStore({
            reducer:{
                cart: cartSlice,
                user: userSlice
            }
        })

        // reducer looks like one root reducer
        ------------------------------

        import {Provider} from "react-redux";

        const App=()=>{
            return(
                <Provider store={myStore}>
                ......
                </Provider>
            )
        }

### Creating a slice
- Using createSlice [@reduxjs/toolkit] slice we can create slice
- createSlice accepts
  - name
  - initialState
  - reducers

        import {createSlice} from "@reduxjs/toolkit";

        const cartSlice = createSlice({
            name: 'cart',
            initialState:{
                items: []
            },
            reducers:{
                addItem: (state, action) = > {
                    state.items.push(action.payload);
                } 
                <!-- 
                1. addItem is action and ()=> is a reducer func
                2. reducer function takes two params state and action.
                3. state holds the current state value.
                4. action is the data that is coming in. 
                -  -->
            }
        })

        export const {addItem, removeItem} = cartSlice.actions

        export default cartSlice.reducer;

        // This is the way of exporting reducer : This will combine all reducer and make it one then export.

### Subscribing to a store

        import {useSelector} from "react-redux";

        const Header = () => {
            const cartItems = useSelector(store => store.cart.items);

            // bind cartItems
        }

### Updating a store

        import {useDispatch} from "react-redux";
        import {addItem} from "./utils/cartSlice";

        const Menu=()=>{
            const dispatch = useDispatch()

            const handleOnClick=()=>{
                dispatch(addItem("Pizza")); // {payload: "Pizza"}
            }
        }

## Notes about **useSelector**
- useSelector is a function that used to subscribe to the store 
- This is the place you are telling what the component you are subscribing to.
  
            useSelector(store=> store)
            - In this case it is subscribing the whole store.

            useSelector(store=> store.cart.items)
            - In this case it is subscribing to only the cart items

- This is where the performance mistakes happens so in the case 1 whenever the store gets updated the whole component will get re-render. So its not needed you only have to use to subscribe the specific portion of store to avoid this performance issue.
   
## QNA
- Why not using useDispatch directly ?
    - Because the useDispatch will work like this `useDispatch()('SOME_ACTION')`
    - `const dispatch = useDispatch()` provides a more efficient and readable way to access the dispatch function within functional components.
  
