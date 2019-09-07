import React from 'react';

//images
import logo from '../../../global/images/logo.svg';
import profile from '../../../global/images/profile.svg';
import signup from '../../../global/images/signup.svg';

//components
import Card from '../../../shared/Card';
import Input from '../../../shared/Input';
import Button from '../../../shared/Button';

//styles
import './Signup.scss';

const Signup = () => {
    return (
        <div className="signup">
            <header>
                <img src={logo} alt='logo' />
            </header>
            <Card>
                <p className="large-text">Sign Up</p>
                <p className="">Sign Up for an account so you can write your notes</p>
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
                            <a href='#'>Log In</a>
                        </p>
                    </form>
                    <img src={signup} alt='signup' />
                </div>
            </Card>
        </div>
    )
}

export default Signup;