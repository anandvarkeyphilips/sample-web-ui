import { Component } from "react";

export default class Child extends Component{


    constructor(props){
        super();
        this.state = {
            upperCaseName: "",
            greet : "Hello"
        }
        console.log("Child Component Constructor executed, Name received : ", props.name);
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("Child Component getDerivedStateFromProps executed");
        return {
            ...state,
            upperCaseName: state.greet + " " + props.name.toUpperCase()
        }
    
    }

    render(){
        console.log("Child Component Render executed");
        return(
            <div className="child-box">
                <p> Name from parent : { this.props.name}</p>
                <p> Name in Uppercase (Child) : { this.state.upperCaseName}</p>
            </div>
        );
    }

    componentDidMount(){
        //when component is loaded in browser, then we need to load data from backend api
        console.log("Child Component componentDidMount executed");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Child Component shouldComponentUpdate executed");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Child Component getSnapshotBeforeUpdate executed");
        return 
    }

    componentWillUnmount(){
        console.log("Child Component componentWillUnmount executed");
    }
}