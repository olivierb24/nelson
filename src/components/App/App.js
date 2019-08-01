import React from 'react';
import './App.css';
import {Header} from '../Header/Header';
import banner from './Iceland.jpg';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabsWebsite: ['Home', 'Shop', 'Contact Us', 'About Us', 'Maxime'],
      tabsClient: ['+','+','+']
    }
  }

  render(){
    return(
      <div className='container'>
      <Header tabsClient={this.state.tabsClient} tabsWebsite={this.state.tabsWebsite} />
      <div className='banner'>
        <img src={banner} />
      </div>

      </div>
    )
  }
}

export default App;
