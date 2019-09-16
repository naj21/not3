import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Card from '../../../shared/Card';
import Account from './components/Account/index';
import Password from './components/Password/index';

//styles
import './Profile.scss';

const Profile = (props) => {
    let path = props.location.pathname.split('/');
    path = path[path.length-1];
    console.log(path)
    return (
        <div className="underlay">
            <p className="large-text bold">Profile</p>
            <div className="sub-links">
                <a href='/profile/account' className="section-link bold" id={path === 'account' && 'active'}>Account</a>
                <a href='/profile/password' className="section-link bold" id={path === 'password' && 'active'}>Change Password</a>
            </div>
            <Card className="profile-card">
                <Switch>
                    <Route
                        path='/profile/account'
                        component={Account}
                    />,
                    <Route
                        path='/profile/password'
                        component={Password}
                    />
                </Switch>
            </Card>
        </div>
    )
}

export default Profile;