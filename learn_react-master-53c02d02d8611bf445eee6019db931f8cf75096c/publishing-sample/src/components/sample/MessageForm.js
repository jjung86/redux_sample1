import React, { Component } from 'react';
import Messages from './Messages';

class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: {
                email: '',
                message: '',
                reason: 'Option 1'
            },
            // sampleMessages : [

            // ]
        };
        this.selectHandleChange = this.selectHandleChange.bind(this);
    }
    
    // componentWillMount () {
    //     const sampleMessages = [
    //         {id:'121', email:'hihi@gmail.com', message:'test111', reason:'Option 2'},
    //         {id:'2424', email:'1212@gmail.com', message:'4242', reason:'Option 1'},
    //         {id:'1212', email:'2424@gmail.com', message:'1212', reason:'Option 1'},
    //         {id:'12122', email:'1212@gmail.com', message:'tete', reason:'Option 1'},
    //     ];
    //     this.setState({sampleMessages:sampleMessages});
    // }
    
    emailInputHandler(email) {
        let insertingState = this.state.message;
        insertingState.email = email;
        this.setState({ message: insertingState });
    }

    selectHandleChange(event) {
        let insertingState = this.state.message;
        insertingState.reason = event.target.value;
        this.setState({ message: insertingState });
    }

    messageInputHandler(message) {
        let insertingState = this.state.message;
        insertingState.message = message;
        this.setState({ message: insertingState });
    }

    render() {
        
        return (

            <div>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="exampleEmailInput">Your email</label>
                        <input id="exampleEmailInput" className="u-full-width" type="text" placeholder="whatyourname@mailbox.com" onChange={event => this.emailInputHandler(event.target.value)} />
                    </div>
                    <div className="six columns">
                        <label htmlFor="exampleRecipientInput">Reason for contacting</label>
                        <select id="exampleRecipientInput" className="u-full-width" onChange={this.selectHandleChange}>
                            <option value="Option 1">Questions</option>
                            <option value="Option 2">Can I get your number?</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="exampleMessage">Message</label>
                <textarea id="exampleMessage" className="u-full-width" placeholder="Hi…" defaultValue={""} onChange={event => this.messageInputHandler(event.target.value)} />
                <button className="button-primary" type="button" onClick={() => this.props.setMessage(this.state.message)}>Submit</button>
                {/* this is comment */}
                <Messages messages={this.props.loadedMessages}/>
            </div>
        );
    }
}

export default MessageForm;
