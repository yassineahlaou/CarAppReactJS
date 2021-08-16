
import './App.css';
import React, {Component} from 'react'
import Mycars from './Components/Mycars';

class App extends Component  {

  state={
    tit:'Welcome to my Car Gallery'
  }

  /*Change = (e) =>{
    console.log(e.target)

    this.setState({
      tit :'Welcome again'
    })
  }

  Change2 = (newTitle) => {
    this.setState({
      tit : newTitle
    })


  }
  changeInput = (e) =>{
    console.log(e.target.value)
    this.setState({
      tit : e.target.value
    })
  }
*/

  
  render(){
  return  (
    <div className="App">
      
    <Mycars title={this.state.tit}/>

   {/*<button onClick={this.Change}> change title !</button>
    <button onClick={() => this.Change2('Hello')}> change title again !</button>
  <input type="text" onChange={this.changeInput}  value={this.state.tit}/>*/}
      
  </div>
   
  );
}
}
export default App;
