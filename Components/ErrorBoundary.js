import React from "react";
import { Component } from "react";

export default class MyErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Logging",error, errorInfo)
    }

    render() {
        if(this.state.hasError) {
            return <h2 className="errorMsg"><center>Oops! Something went wrong!!!!</center></h2>
        }
        return this.props.children;
    } 
}
