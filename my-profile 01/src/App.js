import React, {Component} from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/layout/NavBar';
//import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import Search from './components/users/Search';
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
    .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);//.then(res=>console.log(res.data))
   
    this.setState({users: res.data, loading:false})
    
  }
  render(){
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Search/>
      <Users loading={this.state.loading} users={this.state.users}/>
      <Home/>
      <Contact/> 
      </div>
  
    </div>
  );
}
}

export default App;
