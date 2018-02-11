import Child from './child/child';

import React, { Component } from 'react';

import './parent.css';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : 'initial data...',
    };
    this.changeName = this.changeName.bind(this);
    // this.updateState = this.updateState.bind(this);
    this.updateStatechild = this.updateStatechild.bind(this);
  }
  changeName(event) {
    console.log(event.target.value);
    let temp = event.target.value;
    this.setState({
      data: temp,
    })
    
  }

 updateStatechild(event){
   this.setState({data:event.target.value})
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
         <h2>Parent Component</h2>
          <input type='text' value={this.state.data} onChange={this.changeName} />
          
          {/* <li>{this.state.data}</li> */}
          <Child childProp={this.state.data} 
               updateStatechild1 ={this.updateStatechild} />

              
      </div>
    );
  }
}
  