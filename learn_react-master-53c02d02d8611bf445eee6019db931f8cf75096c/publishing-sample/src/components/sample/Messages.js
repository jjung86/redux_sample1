import React, { Component } from 'react';

class Messages extends Component {

    render() {

        return (
            <ul>
                {
                    this.props.messages.map(message => {
                        let emailString = `Email : ${message.email}`;
                        let messageString = `Message : ${message.message}`;
                        return (
                            <li key={message.id}> {emailString} / {messageString}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Messages;
