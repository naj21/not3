import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';

 //components
 import Dropdown, { N3DropdownListItem } from '../../../shared/Dropdown';
 import Office from './components/Office';
 import Note from './components/Note';
 import AddNote from './components/AddNote';

 //images
 import logo from '../../../global/images/logo-w.svg';
 import exit from '../../../global/images/exit.svg';

 //styles
 import './WorkSpace.scss';
import Nav from './components/Nav';

 const WorkSpace = (props) => {
    console.log(props)
    const { match } = props;
    const { backdrop, toggleBackdrop } = useContext(ThemeContext);
    const [newNote, setNewNote] = useState(true);
    const [visible, setVisible] = useState(false);

    const setVisibiltiy = () => {
        setVisible(async () => {
            await toggleBackdrop();
            return !visible
        });
    }
    
    return (
        <div className="workspace">
            <div className="sidenav">
                <div className="profile">
                    <div className="profile-picture" id="workspace-profile"></div>
                    <span className="large-text bold" id="color-white">Kayode</span>
                    <Dropdown icon="fa fa-chevron-down" id="actions">
                        <N3DropdownListItem role="button" onClick={()=>props.history.push('/profile/account')}>
                            <i className="fa fa-user-circle" />
                            <span>Account</span>
                        </N3DropdownListItem>
                        <N3DropdownListItem href="#">
                            <i className="fa fa-moon-o" />
                            <span>Dark mode</span>
                        </N3DropdownListItem>
                        <N3DropdownListItem href="#">
                            <img src={exit} alt='log out' />
                            <span>Log out</span>
                        </N3DropdownListItem>
                    </Dropdown>
                </div>
                <hr />
                <ul>
                    <li>New Note <i className="fa fa-plus" /></li>
                    <li>Office</li>
                    <li>School</li>
                    <li>Personal Project</li>
                    <li>Tags</li>
                </ul>
            </div>
            <header id="workspace-header">
                <img src={logo} alt='logo' className="App-logo"/>
                <i className="fa fa-bars" id="workspace-menu" onClick={setVisibiltiy} />
            </header>
            <div className="main">
                <>
                    <Nav visible={visible && backdrop}/>
                    { newNote ?
                        <AddNote />
                    :<>
                        <Route
                            exact
                            from={match.url}
                            to={`${match.url}/office`}
                        />
                        <Route
                            exact
                            path={`${match.url}`}
                            component={Office}
                        />
                        <Route
                            exact
                            path={`${match.url}/note`}
                            component={Note}
                        />
                    </>
                    }
                </>
             </div>
         </div>
     )
 }

 export default WorkSpace;