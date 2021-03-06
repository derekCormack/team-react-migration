import React, { Component } from 'react';
import Logo from './components/logo.js';
import './App.css';
import logo from './components/logo.svg';
import logoBank from './components/bankx.png';
import logoTTT from './components/ttt.png';
import logoLL from './components/linkx.png';
import logoCity from './components/cityx.png';
import logoFifo from './components/fifox.png';
import Accounts from './components/account/accountsComp.js';
import Game from './components/tictactoe.js';
import Cities from './components/cities/citiesComp.js';
import List from './components/fifolifo/FifoLifoComp.js';
import LinkedList from './components/list/LinkedListComp.js';
class App extends Component {
  constructor() {
    super()
    this.state = {
      appToRender: <List />,
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
      case "city":
        this.setState({ appToRender: <Cities /> });
        break;
      case "linkedlist":
        this.setState({ appToRender: <LinkedList /> });
        break;
      case "list":
        this.setState({ appToRender: <List /> });
        break;
      default:
        this.setState({ appToRender: <List /> });
    }

  }
  render() {
    return (
      <div>
        <div className="header">
          <div onClick={this.logoClick} todo="logo" className="img">
            <img src={logo} className="App-logo img" alt="logo" />
            <span> Splash </span>
          </div>
          <div onClick={this.logoClick} todo="tictactoe" className="img">
            <img src={logoTTT} className="App-logo img" alt="logo" />
            <span> TicTacToe </span>
          </div>
          <div onClick={this.logoClick} todo="accounts" className="img">
            <img src={logoBank} className="App-logo img" alt="logo" />
            <span> Acct Controller</span>
          </div>
          <div onClick={this.logoClick} todo="city" className="img">
            <img src={logoCity} className="App-logo img" alt="logo" />
            <span> City&Community </span>
          </div>
          <div onClick={this.logoClick} todo="linkedlist" className="img">
            <img src={logoLL} className="App-logo img" alt="logo" />
            <span> Link Lists </span>  
          </div>
          <div onClick={this.logoClick} todo="list" className="img">
            <img src={logoFifo} className="App-logo img" alt="logo" />
            <span> FIFO LIFO </span>  
          </div>
          <br></br>
        </div>
        {this.state.appToRender}
      </div>
    );
  }   
} 

export default App;
