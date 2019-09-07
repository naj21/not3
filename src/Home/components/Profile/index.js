import React from 'react';

//components
import Card from '../../../shared/Card';
import Account from './components/Account';
import Password from './components/Password';

//styles
import './Profile.scss';

const Profile = () => {
    return (
        <div>
            <p className="large-text">Profile</p>
            <div className="sub-links">
                <a href='#' className="section-link" id="active">Account</a>
                <a href='#' className="section-link">Change Password</a>
            </div>
            <Card className="profile-card">
                <Account />
            </Card>
        </div>
    )
}

export default Profile;