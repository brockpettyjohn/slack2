import React, { Component } from 'react';
import '../Message_Page.css';

class MessageHeader extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            message: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.setState({ input: (event.target.value) })
    }

    handleKeyPress() {
        const newMessage = this.state.message.concat(this.state.input) 
         this.setState({
            message: newMessage,
            input: ''
        })
    }

    handleClick() {
        const newMessage = this.state.message.concat(this.state.input)
        // const newMessage = this.state.message
        // newMessage.push(this.state.input)  in this scenario in order to us push you have to set it equal to a variable and push into the var because push modifies the original array and you cannot modify state directly
        this.setState({
            message: newMessage,
            input: ''
        })
    }
    render() {
        return (
            <div className='searchbar'>
                <input
                    name='searchbar'
                    placeholder='Search'
                    onChange={this.handleInputChange}
                    value={this.state.input}
                    onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                            this.handleClick();
                        }
                    }
                    } />
                <button onClick={this.handleClick}>Add</button>
                <div>{
                    this.state.message.map((message, i) => {
                        return <p key={i}>{message}</p>
                    })
                }
                </div>
            </div>
        )
    }
}
export default MessageHeader