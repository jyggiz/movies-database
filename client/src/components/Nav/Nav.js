import React from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav () {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink className='nav__link' exact activeClassName='active' to='/'>
                        Shows
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' activeClassName='active' to='/search'>
                        Search
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' activeClassName='active' to='/favorites'>
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
