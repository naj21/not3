import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';

import logo from '../../../global/images/logo.svg';
import whiteLogo from '../../../global/images/logo-w.svg';

//components
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';

//styles
import './Login.scss';

const Login = (props) => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className="login">
            <header>
                <img src={isDark ? whiteLogo : logo} alt='logo'  className="App-logo" onClick={()=>props.history.push('/')} />
            </header>
            <div className="login-section">
                <p className="medium-text bold">Welcome back!</p>
                <p className="large-text">Please login</p>
                <form>
                    <Input placeholder='Email Address' />
                    <Input placeholder='password' />
                    <Button text='Log In' />
                    <p>
                        Forgot your password?
                        {' '}
                        <Link>Reset it</Link>
                    </p>
                    <p>
                        Don't have an account?
                        {' '}
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login