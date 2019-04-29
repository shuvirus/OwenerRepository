import React,{ Component } from 'react'
// import foundation from './components/css/foundation'
class Message extends Component {

    constructor(){
        super();
        this.state={
            message:'Welcome visistor'
        }
    }

    changeMessage(){
            this.setState({
                message:'thsnka for s'
            })
    }


    render() {
        return (
            <div>
            <h1>Welcome {this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Message;