import React from 'react';
import './Header.css';

export class Header extends React.Component{
    constructor(props) {
        super(props);

        this.tabItemsWebsite = this.tabItemsWebsite.bind(this);
        this.tabItemsClient = this.tabItemsClient.bind(this);
    }


    tabItemsWebsite() {
        return this.props.tabsWebsite.map( tabItem => {
            return <li className='tab-website' key={tabItem}>{tabItem}</li>;
        })
    }

    tabItemsClient() {
        return this.props.tabsClient.map( tabItem => {
            return <li className='tab-client' key={tabItem}>{tabItem}</li>;
        })
    }
    
    render(){
        return(
            <div className='header'>
            <div className='logo-header'>
            </div>
            <div className='tabs-box-website'>
                <ul className='tabs-website'>
                {this.tabItemsWebsite()}
                </ul>
            </div>
            <div className='tabs-box-client'>
                <ul className='tabs-client'>
                    {this.tabItemsClient()}
                </ul>
            </div>
            </div>
            )
        }
    }