import React, {Component} from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/layout/NavBar';
import './App.css';

class App extends Component{
  render(){
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Contact/>
    </div>
  );
}
}

export default App;
