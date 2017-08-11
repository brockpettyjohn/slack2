import React, { Component } from 'react';
import '../Message_Page.css';

class MessageHeader extends Component{
    constructor(){
        super();

        this.state = {
            input: '',
            message: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
        
        
        handleInputChange(event){
            this.setState({ input: (event.target.value) })
        }
        handleClick() {
            this.setState({
                message: this.state.input,
                input: ''
            })
        }
    render(){
        console.log(this.state)
        return (
            <div className='searchbar'>
                <input 
                    name='searchbar' 
                    placeholder='Search'
                    onChange={ event => this.handleInputChange( event )} 
                    value={ this.state.input }/>
                    <button onClick= { this.handleClick }>Add</button>
                <span>{ this.state.message }</span>
            </div>
        )
    }
}
export default MessageHeader