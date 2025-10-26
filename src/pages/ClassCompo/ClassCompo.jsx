import {Component} from "react"

export default class ClassCompo extends Component{

    constructor(props)
    {
        super(props);
        console.log("props ==> ",props)
        this.state = {
            flag:true
        }


    }

    toggleFlag()
    {
 
        this.setState((prev)=>{
            return {
                ...prev,
                flag:!prev.flag
            }
        })
    }

    render()
    {
        return(<div>
            <h1>Hello from class component</h1>
            <p>State - {this.state.flag?1:0}</p>
            <button onClick={()=>{this.toggleFlag()}}>Toggle Flag</button>
        </div>)
    }

}