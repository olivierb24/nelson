import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabsWebsite: ['Home', 'Shop', 'Contact Us', 'About Us'],
      tabsClient: []
    }
  }
  render(){
    return(
      <div>
      <Banner tabsClient={this.state.tabsClient} tabsWebsite={this.state.tabsWebsite} />
      </div>
    )
  }
}

export default App;
