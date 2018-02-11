import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

const textAreaStyles = {
	color:"red",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [], // array of objects
      inputData: ''
    };
    this.changeName = this.changeName.bind(this);
    this.update = this.update.bind(this);
  }
  changeName(event) {
    console.log(this.state.toDoList);
    let arrayTemp = this.state.toDoList;
    arrayTemp.push({'value': this.state.inputData, 'checked': false});
    this.setState({
      toDoList: arrayTemp,
    });
    
  }
 update(event){
   this.setState({inputData:event.target.value})
 }
 deleteItem(index, event){
   let arrayTemp = this.state.toDoList;
   delete arrayTemp[index];
   this.setState({
      toDoList: arrayTemp,
   });
 }
 checkBoxItem(index, event){
  let arrayTemp = this.state.toDoList;
  arrayTemp[index].checked=!arrayTemp[index].checked; 
  this.setState({
     toDoList: arrayTemp,
  });
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
         {/* <h2>@Solanki</h2> */}
         <input
					onChange={this.update}
					value={this.state.userInput}
					placeholder="Enter Item here" /> 
         <button onClick={this.changeName}>Create List</button>
          <ul className="ulList">
           {
             // item = {value: 'hello', checked: false}
             this.state.toDoList.map((item, index)=>{
              return (
              <li key={index}><input type="checkbox" onClick={this.checkBoxItem.bind(this, index)}/><label className={item.checked? 'checked':null}> {item.value} </label>
              <button onClick={this.deleteItem.bind(this,index)}>x</button> </li>
              )
             })
           }
           </ul>
      </div>
    );
  }
}

// App.propTypes = {
// 	inputData: PropTypes.number.required
// };
  
export default App;
/*
 parent child componet
 2way binding
 */
