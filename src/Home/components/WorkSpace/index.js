import React, { useState, useContext } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { NoteContext } from '../../../contexts/NoteContext';

 //components
 import Dropdown, { N3DropdownListItem } from '../../../shared/Dropdown';
 import Office from './components/Office';
 import Note from './components/Note';
 import AddNote from './components/AddNote';
 import AddNoteModal from './components/AddNote/components/AddNoteModal';

 //images
 import logo from '../../../global/images/logo-w.svg';
 import exit from '../../../global/images/exit-r.svg';

 //styles
 import './WorkSpace.scss';
import Nav from './components/Nav';

 const WorkSpace = (props) => {
    const { match } = props;
    const { backdrop, toggleBackdrop, toggleMode } = useContext(ThemeContext);
    const {noteState: {notes}, dispatch} = useContext(NoteContext);
    const [navVisible, setNavVisible] = useState(false);

    const  [ visible, setVisible ] = useState(false);
    const setNavVisibility = () => {
        setNavVisible(async () => {
            await toggleBackdrop();
            return !navVisible
        });
    }

    const paths = [
        '/workspace/office',
        '/workspace/note',
      ];
      const redirect = !paths.includes(window.location.pathname);
    
      if (redirect) {
        return <Redirect to={`${match.url}/office`} />;
      }

    const setVisibiltiy = () => {
        setVisible(async () => {
            await toggleBackdrop();
            return !visible
        });
    }
    
    return (
        <div className="workspace">
            <aside>
                <div className="profile">
                    <div className="profile-picture" id="workspace-profile"></div>
                    <span className="large-text bold" id="color-white">Kayode</span>
                    <Dropdown icon="fa fa-chevron-down" id="actions">
                        <N3DropdownListItem role="button" onClick={()=>props.history.push('/profile')}>
                            <i className="fa fa-user-circle" />
                            <span>Account</span>
                        </N3DropdownListItem>
                        <N3DropdownListItem href="#" onClick={toggleMode}>
                            <i className="fa fa-moon-o" />
                            <span>Dark mode</span>
                        </N3DropdownListItem>
                        <N3DropdownListItem href="#">
                            <img src={exit} alt='log out' />
                            <span className="logout">Log out</span>
                        </N3DropdownListItem>
                    </Dropdown>
                </div>
                <hr />
                <ul>
                    <li>
                        <NavLink
                        to={`${match.url}/note`}
                        activeClassName="active"
                        >
                            New Note <i className="fa fa-plus" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        activeClassName="active"
                        >
                            Notebooks <i className="fa fa-book" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`${match.url}/office`}
                            activeClassName="active"
                        >
                            All Notes <i className="fa fa-sticky-note-o" />
                        </NavLink>
                    </li>
                </ul>
            </aside>
            <header id="workspace-header">
                <img src={logo} alt='logo' className="App-logo"/>
                <i className="fa fa-bars" id="workspace-menu" onClick={setNavVisibility} />
            </header>
            <div className="main">
                <>
                    <Nav visible={navVisible && backdrop}/>
                    <>
                        <Route
                            exact
                            from={match.url}
                            to={`${match.url}/office`}
                        />
                        <Route
                            path={`${match.url}/office`}
                            component={Office}
                        />
                        <Route
                            path={`${match.url}/note`}
                            component={Note}
                        />
                    </>
                    {/* <AddNoteModal visible={visible && backdrop} /> */}
                </>
             </div>
         </div>
     )
 }

 export default WorkSpace;