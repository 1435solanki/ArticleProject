import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './Collapse.css';
import { Accordion, AccordionItem } from 'react-sanfona';
import {Collapse} from 'react-collapse';


class Collapsable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: 'something.............',
      inputDataH2: '',
      visible:true,
      nextHeader:false,
      valueInput:'',
    };
    this.changeName = this.changeName.bind(this);
    this.saveNext = this.saveNext.bind(this);
    this.inputbox1 = this.inputbox1.bind(this);
  }
  changeName() {
    console.log(this.state.inputData);
    if(this.state.visible){
      this.setState({
        inputData: 'Something.....',
        visible:!this.state.visible
      });
    }else{
      this.setState({
        inputData: '',
        visible:!this.state.visible
      });
    }
    
  }

  saveNext(){
    this.setState({
      inputData: '',  
      nextHeader:true,
      inputDataH2:'something for header 2 .........'
    });
  }
  update(event){
   this.setState({inputData:event.target.value})
 }
 onSave(){

 }
 inputbox1(value){

 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1> */}
        </header>
        <Collapse isOpened={true || false}>
        <div className="collapse">
        <div>
          <h4 className="panel-title">
          <a role="button" onClick={this.changeName} data-toggle="collapse" data-parent="#accordion" 
             href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
          </a>
        </h4>
        </div>
        <div className="section">
              {this.state.inputData}
              </div >
              <div className='buttons'>
              <button type="button" onClick={this.saveNext}>save</button>
              <button type="button">cancel</button>
              </div>
        </div>
        </Collapse>
          {/* {this.state.nextHeader ? <CollapseHelper/> : null} */}
          <Collapse isOpened={true || false}>
          <div className="collapse">
          <div>
            <h4 className="panel-title">
            <a role="button" onClick={this.changeName} data-toggle="collapse" data-parent="#accordion" 
               href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #2
            </a>
          </h4>
          </div>
          <div className="section">
                {this.state.inputDataH2}
                </div >
                <div className='buttons'>
                <button type="button">save</button>
                <button type="button">cancel</button>
                </div>
          </div>
          </Collapse>

          <div>
          <input value='i' className='text-input' type='text'  onChange={this.inputbox1} />
<div className='none' onClick={() =>  this.onSave()}>
<svg fill='#000000' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M0 0h24v24H0z' fill='none'/>
    <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'/>
</svg>
</div>
            </div>
      </div>
    );
  }
};

export default Collapsable;

class CollapseHelper extends Component {

  render(){
    return(
      <div className="collapse2"> 
       <h4 className="panel-title">
         <a role="button" onClick={this.changeName} data-toggle="collapse" data-parent="#accordion" 
            href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Collapsible Group Item #2
         </a>
         <button type="button">save</button>
         <button type="button">cancel</button>
         {/* {this.state.inputData} */}
       </h4>
      </div> 
    );
  }
};




// App.propTypes = {
// 	inputData: PropTypes.number.required
// };
// render() {
//   return (
//     <Accordion>
//       {[1, 2, 3, 4, 5].map(item => {
//         return (
//           <AccordionItem title={`Item ${item}`} expanded={item === 1}>
//             <div>
//               {`Item ${item} content`}
//               <button type="button">save</button>
//               <button type="button">cancel</button>
//             </div>
//           </AccordionItem>
//         );
//       })}
//     </Accordion>
//   );
// }