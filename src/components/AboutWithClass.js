import React,{Component} from "react"
import Contact from "./Contact"

class AboutWithClass extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:'Rahul',
            number:'8080808080'
        }
        this.getNumber=this.getNumber.bind(this)
        console.log("Parent constructor")
    }

    getNumber()
    {
       this.setState({number:'123456789'})
    }

    componentDidMount(){
        console.log("Parent did mount")
    }

    componentDidUpdate(){
        console.log("Parent did updated")
    }

    componentWillUnmount(){
        console.log("Parent unmount")
    }

    render(){
        console.log("Parent render")
        return(<><h1>This is me {this.state.name}!! and this is my</h1><Contact getNumber={this.getNumber} number={this.state.number}/>
       
        </>)
    }
}

export default AboutWithClass