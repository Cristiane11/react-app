import React, {Component} from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/layout/NavBar';
//import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component{

  state ={
    users:[],
    loading:false
  }
 async componentDidMount(){
   this.setState({loading:true});
    const res = await axios
    .get('https://api.github.com/users');//.then(res=>console.log(res.data))
    this.setState({users: res.data, loading:false})
    
  }
  render(){
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
      <Users loading={this.state.loading} users={this.state.users}/>
      <Home/>
      <Contact/> 
      </div>
  
    </div>
  );
}
}

export default App;