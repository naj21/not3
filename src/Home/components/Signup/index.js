import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';

//images
import logo from '../../../global/images/logo.svg';
import whiteLogo from '../../../global/images/logo-w.svg';
import profile from '../../../global/images/profile.svg';

//components
import Card from '../../../shared/Card';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';

//styles
import './Signup.scss';

const Signup = (props) => {
    const { isDark } = useContext(ThemeContext);
    
    return (
        <div className="signup">
            <header>
                <img src={isDark ? whiteLogo : logo} alt='logo'  className="App-logo" onClick={()=>props.history.push('/')} />
            </header>
            <Card>
                <p className="medium-text bold">Sign Up</p>
                <p>Sign Up for an account so you can write your notes</p>
                <div className="profile-picture">
                    <img src={profile} alt='profile' />
                </div>
                <div className="form-svg">
                    <form>
                        <div className="is-half">
                            <Input placeholder='First Name' />
                            <Input placeholder='Last Name' />
                        </div>
                        <Input placeholder='Username' />
                        <Input placeholder='Email Address' />
                        <Input placeholder='Password' />
                        <Button text='Proceed' />
                        <p>
                            Already have an account?
                            {' '}
                            <Link to='/login'>Log In</Link>
                        </p>
                    </form>
                    <div className="signup-img" />
                </div>
            </Card>
        </div>
    )
}

export default Signup;