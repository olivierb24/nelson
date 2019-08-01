import React from 'react';
import './Header.css';
import { directive } from '@babel/types';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        
        this.navigation = this.navigation.bind(this);
    }
    
    
    navigation() {
        return this.props.navWebsite.map( navItem => {
            return <li key={navItem}>{navItem}</li>;
        })
    }
    
    render(){
        return (
            <header>
                <img src="#" alt="" className='logo'/>
                <div className='social'>
                    <img src='#' alt=''/>
                    <img src='#' alt=''/>
                </div>
                <nav>
                    <ul className='nav'>
                        {this.navigation()}
                    </ul>
                </nav>
                <nav className='icons'>
                    <ul>
                        <img src=''/>
                        <img src=''/>
                    </ul>
                </nav>
            </header>
            )
        }
    }