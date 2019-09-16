import React from 'react';

//images
import profile from '../../../../../global/images/profile.svg';

//components
import Input from '../../../../../shared/Input';
import Button from '../../../../../shared/Button';

//styles
import './Account.scss';

const Account = () => {
    return (
        <form>
            <div className="account-inputs">
                <div className="">
                    <div className="description dp">
                        <p className="medium-text">Profile Picture</p>
                        <p>Your current avatar.</p>
                    </div>
                    <div className="profile-picture dp">
                        <img src={profile} alt='profile' />
                    </div>
                </div>
                <div className="">
                    <div className="description">
                        <p className="medium-text">Full name</p>
                        <p>Edit full name.</p>
                    </div>
                    <div className="is-half">
                        <Input name='First Name' />
                        <Input name='Last Name' />
                    </div>
                </div>
                <div className="">
                    <div className="description">
                        <p className="medium-text">Email Address</p>
                        <p>Confirm your email address for possible updates.</p>
                    </div>
                    <div>
                        <Input name='Email Address' />
                    </div>
                </div>
            </div>
            <Button text='Update Profile' />
        </form>
    )
}

export default Account;