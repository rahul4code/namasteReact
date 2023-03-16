import React,{Component} from "react"

class Contact extends Component{
    constructor(props){
        super(props)
        
        console.log("Child constructor")
    }

    componentDidMount(){
        console.log("Child compoenentDidMount")
        this.props.getNumber()
    }

    componentDidUpdate(){
        console.log("Child componenetDidUpdate")
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount")
    }

    render(){
        console.log("Child render")
        return(<>
        <h2>Contact {this.props.number}</h2>
         <button onClick={()=>this.props.getNumber()}>Test</button>
         </>)
    }

}

export default Contact;

// const Contact=(props)=>{
//     const {number='NaN'}=props;

//     useEffect(()=>{
//         console.log("This is useEffect with empty array")
//     },[number])

//     useEffect(()=>{
//         return()=>{
//             console.log("This is useEffect with return")
//         }
//     })

//     console.log("From render")

//     return(<h1>Contact {number}</h1>)
// }
// export default Contact;