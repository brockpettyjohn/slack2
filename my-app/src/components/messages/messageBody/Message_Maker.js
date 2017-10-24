import React, { Component } from 'react'
import { handleInputChange, handleClick } from '../../../ducks/reducer.js'
import { connect } from 'react-redux'
import './Message_Maker.css'

class MessageMaker extends Component {
    
    render() {
        const { handleInputChange, handleClick } = this.props
        return (
            <div className='message-view-window'>
                <input
                    name='searchbar'
                    placeholder='Message'
                    onChange={e => handleInputChange(e.target.value)}
                    value={this.props.input}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            handleClick(this.props.input);
                        }
                    }
                    } />
                <button onClick={e => handleClick(this.props.input)}>Add</button>
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
export default connect(mapStateToProps, { handleInputChange, handleClick })(MessageMaker)