import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state={
    products:[]
  }

  // functionOne =async()=>{
  //   await fetch({
  //     protocol: "http",
  //     hostname: "localhost:3000",
  //     path: "/api/products",
  //     toString: function() {
  //       return `${this.protocol}://${this.hostname}${this.path}`;
  //     }
  //   })
  //   .then(res=>{
  //     res.json()
  //   })
  //   .then(data=>{
  //     this.setState({
  //       products:[...data]
  //     })
  //     console.log(this.state.products)
  //   })
  // }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <button onClick={this.functionOne}>dale click</button> */}
        </header>
      </div>
    );
  }
}

export default App;
