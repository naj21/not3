import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';

//componnets
import SideNav from '../../../../../shared/SideNav';
import Button from '../../../../../shared/Button';

//images
import exit from '../../../../../global/images/exit-r.svg';

//styles
import './Nav.scss';

const Nav = (props) => {
    const { visible } = props;
    const { toggleMode } = useContext(ThemeContext) 
    return (
        <SideNav visible={visible} className="nav">
            <button
                className="mode"
                onClick={toggleMode}
            ><i className="fa fa-moon-o" /></button>
            <div className="profile-group">
                <div className="profile-picture" id="workspace-profile" />
                <span className="large-text bold">Kayode</span>
                <Button text="EDIT PROFILE" />
            </div>
            <ul className="medium-text">
                <li><i className="fa fa-plus" /> New Note </li>
                <li><i className="fa fa-book" /> Notebooks</li>
                <li><i className="fa fa-sticky-note-o" /> All Notes</li>
                <li className="logout"><img src={exit} alt='tag' /> Logout</li>
            </ul>
        </SideNav>
    )
}

export default Nav;