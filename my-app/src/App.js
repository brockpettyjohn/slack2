import React, { Component } from 'react';
import './App.css';
import MessagePage from './components/messages/Message_Page.jsx';
// import LoginPage from './components/login/Login_Page.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<LoginPage />*/}
       <MessagePage />
      </div>
    );
  }
}

export default App;
