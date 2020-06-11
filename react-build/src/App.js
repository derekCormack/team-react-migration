import React, { Component } from 'react';
import Logo from './components/logo.js';
import './App.css';
import logo from './components/logo.svg';
import Accounts from './components/account/accountComp.js';
import Game from './components/tictactoe.js';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      appToRender: <Accounts />,
    }
  }

  logoClick = (parm) => {

    console.log("onclick ", parm.target.getAttribute("todo"));

    switch (parm.target.getAttribute("todo")) {
      case "logo":
        this.setState({ appToRender: <Logo /> });
        break;
      case "tictactoe":
        this.setState({ appToRender: <Game /> }); 
        break;
      case "accounts":
        this.setState({ appToRender: <Accounts /> });
        break;
      default:
        this.setState({ appToRender: <Logo /> });
    }

  }
  render() {
    return (
      <div>
        <div className ="header">
          <div onClick={this.logoClick} todo="logo" className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick} todo="tictactoe" className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick} todo="accounts" className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
          <div onClick={this.logoClick} todo="city" className ="img"><img src={logo} className="App-logo img" alt="logo" /></div>
        </div>
        {this.state.appToRender}
      </div>
    );
  }
}
export default App;
