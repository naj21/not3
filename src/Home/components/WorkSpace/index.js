import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import AppRoutes from './routes';

 //images
import addNote from '../../../global/images/addNote.svg';
 //components
 import Card from '../../../shared/Card';
 import Input from '../../../shared/Input';
 import Dropdown, { N3DropdownListItem } from '../../../shared/Dropdown';
 import Office from './components/Office'

 //styles
 import './WorkSpace.scss';

 const WorkSpace = () => {
     const [formats, setFormats] = useState(true);
     return (
         <div className="workspace">
             <div className="sidenav">
                 <div className="profile">
                    <div className="profile-picture" id="workspace-profile"></div>
                    <span className="large-text" id="color-white">Kayode</span>
                    <Dropdown icon="fa fa-chevron-down" id="actions">
                        <N3DropdownListItem href="#">
                            <i className="fa fa-user-circle" />
                            <span>Account</span>
                        </N3DropdownListItem>
                        <N3DropdownListItem href="#">
                            <i className="fa fa-moon-o" />
                            <span>Dark mode</span>
                        </N3DropdownListItem>
                        <N3DropdownListItem href="#">
                            <i className="fa fa-sign-out" />
                            <span>Log out</span>
                        </N3DropdownListItem>
                    </Dropdown>
                 </div>
                 <hr />
                 <ul>
                     <li>New Note <i className="fa fa-plus" /></li>
                     <li>Tags</li>
                 </ul>
             </div>
             <div className="main">
                 <header>
                    <p className="large-text txt-left">Office</p>
                    
                    { !formats
                        ? (<>
                            <Input placeholder='Search notes' className="search" />
                            <div className="sort"><span>Sort by:</span><Dropdown divided name="alphabetical" icon="fa fa-chevron-down" /></div>
                        </>)
                    : (<Card className="formats">
                            <Dropdown divided name="airbnb cereal app" icon="fa fa-sort-down">
                                <N3DropdownListItem href="#">
									<span>Dropdown with Link</span>
								</N3DropdownListItem>
                            </Dropdown>
                            <Dropdown divided name="10" icon="fa fa-sort-down" />
                        </Card>)
                    }
                </header>
                 {/* <div className="add-note">
                    <p className="large-text">Welcome Kayode! Get Started</p>
                    <img src={addNote} alt='add note' />
                    <p>Add note</p>
                </div> */}
                <div className="content">
                    <Switch>
                        {AppRoutes}
                    </Switch>
                </div>
             </div>
         </div>
     )
 }

 export default WorkSpace;