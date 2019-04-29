import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import ShowsPage from '../Pages/ShowsPage/ShowsPage';
import ShowPage from '../Pages/ShowPage/ShowPage';
import Header from '../Header/Header';
import FavoritesPage from "../Pages/FavouritesPage/FavoritesPage";
import SearchPage from "../Pages/SearchPage/SearchPage";

class Container extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: 'light'
        };

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme () {
        const theme = this.state.theme === "light" ? "dark" : "light";
        document.documentElement.classList.add("color-theme-in-transition");
        this.setState(() => ({ theme }));
        document.documentElement.setAttribute("data-theme", theme);
        window.setTimeout(() => {
            document.documentElement.classList.remove("color-theme-in-transition");
        }, 1000);
    };

    render () {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header toggle={() => this.toggleTheme}/>
                    <Switch>
                        <Route exact path='/' component={ShowsPage}/>
                        <Route path='/show/:id' component={ShowPage} />
                        <Route path='/favorites' component={FavoritesPage} />
                        <Route path='/search' component={SearchPage} />
                        <Route render={() => <p>Not Found</p>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Container;
