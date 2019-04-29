import React from 'react';

import Nav from "../Nav/Nav";

import './Header.css';

class Header extends React.Component {
    render () {
        return (
            <header className='header'>
                <p className="header__logo">MovieStarter</p>
                <Nav/>
                <button
                    onClick={this.props.toggle()}
                    className='header__button'>Toggle Theme</button>
            </header>
        )
    }
}

export default Header;
