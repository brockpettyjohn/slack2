import React, { Component } from 'react';
import MessageHeader from './header/Message_Header.jsx'
import MessageMaker from './messageBody/Message_Maker.js'

class MessagePage extends Component {
    render() {
        return (
            <div>
                {/*<MessageHeader />*/}
                <MessageMaker />
            </div>
        )
    }
}

export default MessagePage