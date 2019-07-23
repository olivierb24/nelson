import React from 'react';
import './Banner.css';
import {TabWebsite} from '../TabListWebsite/TabListWebsite'


export class Banner extends React.Component{


    render(){
        return(
            <div className='banner'>
            <img className='banner-logo' src='./' />
            <TabListWebsite tabItems = {this.props.tabsWebsite} />
            <TabListClient tabItems = {this.props.tabsClient} />
            </div>
        )
    }
}