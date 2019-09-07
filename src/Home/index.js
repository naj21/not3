import React, { useState } from 'react';
import logo from '../global/images/logo.svg';
import notes from '../global/images/notes.svg';
import Button from '../shared/Button';

//styles
import './Home.scss'

const Home = (props) => {
    const [mode, setMode] = useState(true);
    return (
        <div className={`home ${mode && ''}`}>
            <header>
                <img src={logo} alt='logo' className="App-logo"/>
                <div>
                    <Button
                        text='Log in'
                        onClick={()=>props.history.push(`/login`)}
                    />
                    <button
                        className="mode"
                        onClick={()=>{setMode(!mode)}}
                    ><i className="fa fa-moon-o" /></button>
                </div>
            </header>
            <div className="home-content">
                <div className="hero">
                    <div className="hero-text">
                        <p className="large-text">Relax and write something beautiful</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="hero-button">
                        <Button
                            text='Add Note'
                            onClick={()=>props.history.push(`/workspace`)}
                        />
                        <Button
                            text='Sign up'
                            onClick={()=>props.history.push(`/signup`)}
                        />
                    </div>
                </div>
                <div className="hero-image">
                    <img src={notes} alt='notes' />
                </div>
            </div>
        </div>
    )
}

export default Home;