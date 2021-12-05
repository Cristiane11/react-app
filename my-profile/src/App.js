import {Component} from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home/>
      <Contact/>
    </div>
  );
}
}

export default App;
