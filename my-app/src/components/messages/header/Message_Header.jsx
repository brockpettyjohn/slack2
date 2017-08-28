import React, { Component } from 'react';
import '../Message_Page.css';
import { connect } from 'react-redux';
import { handleInputChange, handleClick } from '../../../ducks/reducer.js'

class MessageHeader extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            message: []
        }
        // this.handleClick = this.handleClick.bind(this)
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    // handleInputChange(event) {
    //     this.setState({ input: (event.target.value) })
    // }

    // handleKeyPress() {
    //     const newMessage = this.state.message.concat(this.state.input)
    //     this.setState({
    //         message: newMessage,
    //         input: ''
    //     })
    // }

    // handleClick() {
    //     const newMessage = this.state.message.concat(this.state.input)
    //     // const newMessage = this.state.message
    //     // newMessage.push(this.state.input)  in this scenario in order to us push you have to set it equal to a variable and push into the var because push modifies the original array and you cannot modify state directly
    //     this.setState({
    //         message: newMessage,
    //         input: ''
    //     })
    // }
    render() {
        console.log(this.props)
        const { handleInputChange, handleClick } = this.props
        return (
            <div className='searchbar'>
                <input
                    name='searchbar'
                    placeholder='Search'
                    onChange={e => handleInputChange(e.target.value)}
                    value={this.props.input}
                    onKeyPress={ e => {
                        if (e.key === 'Enter') {
                            handleClick(this.props.input);
                        }
                    }
                    } />
                <button onClick={ e => handleClick(this.props.input)}>Add</button>
                <div>{
                    this.props.message.map((message, i) => {
                        return <p key={i}>{message}</p>
                    })
                }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, { handleInputChange, handleClick })(MessageHeader)