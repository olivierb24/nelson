import React from 'react';
import './App.css';
import {Header} from '../Header/Header';
import banner from './Iceland.jpg';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navWebsite: ['Home', 'Products', 'Coming Soon', 'Contact Us', 'Shipping', 'About Us'],
    }
  }
  
  render(){
    return(
      <div className='container'>
        <Header navWebsite={this.state.navWebsite} />
        <div className='banner'>
        <img src={banner} />
        </div>
      </div>
    )}
  }
  
  export default App;
  