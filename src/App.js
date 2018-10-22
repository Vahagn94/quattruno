import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  return (
  <div className="App">
     <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
           <div className="container-fluid">
              <div className="navbar-header">
                 <h1 style={{color:"#FFFFFF"}}>CSUNHub</h1>
              </div>

           </div>
        </nav>
     </div>



     <div className="container">
        <div className="row">
           <div className="col-sm-6">
              <div className="card">
                 <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                 </div>
              </div>
           </div>
           <div className="col-sm-6">
              <div className="card">
                 <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
  );
  }
}

export default App;
