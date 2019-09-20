import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

//images
import logo from '../global/images/logo.svg';
import whiteLogo from '../global/images/logo-w.svg';
import lens from '../global/images/lens.png';

//components
import Button from '../shared/Button';

//styles
import './Home.scss'
import SideNav from '../shared/SideNav';

const Home = (props) => {
    const { backdrop, toggleBackdrop, toggleMode, isDark } = useContext(ThemeContext);
    const [visible, setVisible] = useState(backdrop);

    const setVisibiltiy = () => {
        setVisible(async () => {
            await toggleBackdrop();
            return !visible
        });
    }

    return (
        <>
            <SideNav visible={visible && backdrop} className="home-nav">
                <button
                    className="mode"
                    onClick={toggleMode}
                ><i className="fa fa-moon-o" /></button>
                <ul className="medium-text bold">
                    <li onClick={()=>props.history.push(`/signup`)}>Sign Up</li>
                    <li onClick={()=>props.history.push(`/login`)}>Sign In</li>
                    <li onClick={()=>props.history.push(`/workspace/note`)}>New Note</li>
                </ul>
            </SideNav>
            <div className='home'>
                <header>
                    <img src={isDark ? whiteLogo : logo} alt='logo' className="App-logo"/>
                    <div className="nav-actions">
                        <Button
                            text='Log in'
                            onClick={()=>props.history.push(`/login`)}
                        />
                        <button
                            className="mode"
                            onClick={toggleMode}
                        ><i className="fa fa-moon-o" /></button>
                    </div>
                    <i className="fa fa-bars" id="menu" onClick={setVisibiltiy} />
                </header>
                <div className="home-content">
                    <div className="hero">
                        <div className="hero-text">
                            <p className="large-text bold">Relax and write something beautiful</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="hero-button">
                            <Button
                                text='Add Note'
                                onClick={()=>props.history.push(`/workspace/note`)}
                            />
                            <Button
                                text='Sign up'
                                onClick={()=>props.history.push(`/signup`)}
                            />
                        </div>
                    </div>
                    <div className="hero-image" />
    
                    <img src={lens} alt="bg" className="bg" />
                    <img src={lens} alt="bg" className="bg" />
                    <img src={lens} alt="bg" className="bg" />
                    <img src={lens} alt="bg" className="bg" />
                </div>
            </div>
        </>
    )
}

export default Home;