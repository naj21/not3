import React from 'react';

//componnets
import SideNav from '../../../../../shared/SideNav';
import Button from '../../../../../shared/Button';

//images
import tag from '../../../../../global/images/tag.svg';
import exit from '../../../../../global/images/exit-r.svg';

//styles
import './Nav.scss';

const Nav = (props) => {
    const { visible } = props;
    return (
        <SideNav visible={visible} className="nav">
            <button
                className="mode"
                // onClick={()=>{setMode(!mode)}}
            ><i className="fa fa-moon-o" /></button>
            <div className="profile-group">
                <div className="profile-picture" id="workspace-profile" />
                <span className="large-text bold">Kayode</span>
                <Button text="EDIT PROFILE" />
            </div>
            <ul className="medium-text">
                <li><i className="fa fa-plus" /> New Note </li>
                <li><img src={tag} alt='tag' /> Tags</li>
                <li className="logout"><img src={exit} alt='tag' /> Logout</li>
            </ul>
        </SideNav>
    )
}

export default Nav;