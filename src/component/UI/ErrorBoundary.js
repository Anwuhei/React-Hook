import React from "react"
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError:false}
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    /* @componentDidCatch
    componentDidCatch(error,errorInfo){//当捕获到异常时，记录这些异常
        logErrorToMyService(error,errorInfo)
    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }*/
   render(){
    const {children,fallback=<h1>Something went wrong</h1>} = this.props
    return this.state.hasError ? fallback : children
   }
}
export default ErrorBoundary