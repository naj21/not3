import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

//components
import Card from '../../../shared/Card';
import Account from './components/Account/index';
import Password from './components/Password/index';

//styles
import './Profile.scss';

const Profile = (props) => {
    const { match } = props;

    const paths = [
        '/profile/account',
        '/profile/password',
      ];
      const redirect = !paths.includes(window.location.pathname);
    
      if (redirect) {
        return <Redirect to={`${match.url}/account`} />;
      }

    return (
        <div className="underlay">
            <p className="large-text bold">Profile</p>
            <div className="sub-links">
                <NavLink
                    exact
                    to={`${match.url}/account`}
                    className="section-link bold"
                    activeClassName="active"
                >Account</NavLink>
                <NavLink
                    exact
                    to={`${match.url}/password`}
                    className="section-link bold"
                    activeClassName="active"
                >Change Password</NavLink>
            </div>
            <Card className="profile-card">
                <Route
                    path={`${match.url}/account`}
                    component={Account}
                />
                <Route
                    path={`${match.url}/password`}
                    component={Password}
                />
            </Card>
        </div>
    )
}

export default Profile;