import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    debugger
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    

                    <Route path='/profile'
                           render={ () => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} /> }/>
                </div>
            </div>
        )
}

export default App;