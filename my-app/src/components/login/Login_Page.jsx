import React, { Component } from 'react';
import './Login.css';
import Slack from './../../slack.svg'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        this.switchToSignUp = this.switchToSignUp.bind(this);
        this.switchToMessages = this.switchToMessages.bind(this);
    }
    switchToSignUp(e) {
        e.preventDefault();
        window.location.assign('/sign_up')
    }
    switchToMessages(e) {
        e.preventDefault();
        window.location.assign('/message_page')
    }

render() {
    return (
        <div className='login-page-wrapper'>
            <div className='login-page-header'>
                <img src={Slack} alt="text" />
                <button onClick={this.switchToSignUp}>Sign Up</button>
            </div>
            <div className='login-box-wrapper'>
                <div className='login-box'>
                    <h1>Sign in to Slack</h1>
                    <span>Enter your email address and password</span>
                    <input name='email' placeholder='you@example.com' />
                    <input name='password' placeholder='password' type='password' />
                    <button onClick={this.switchToMessages}>Continue</button>
                </div>
            </div>
        </div>
    )
}
}

export default LoginPage;
