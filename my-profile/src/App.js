import React, {Component} from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/layout/NavBar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component{
 
  render(){
  return (
    <div className="App">
      <NavBar/>
      <UserItem/>
      <Home/>
      <Contact/>
    </div>
  );
}
}

export default App;
