import React, { useContext } from 'react';
import { NoteContext } from '../../../../../contexts/NoteContext';

//components
import Card from '../../../../../shared/Card';
import Dropdown, { N3DropdownListItem } from '../../../../../shared/Dropdown';
import Input from '../../../../../shared/Input';

//styles
import './Office.scss';
import AddNote from '../AddNote';

const getTime = (date) => {
    const minutes = new Date(date).getMinutes();
    const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const hour = hours[new Date(date).getHours()];
    let period;

    (hours >= 0 && hours <12) ? period = 'am' : period = 'pm';

    return `${hour}:${minutes}${period}`;
};

const getDay = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return days[new Date(date).getDay()];
};

const getDate = (date) => {
    return new Date(date).getDate();
};

const getMonth = (date) => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    return months[new Date(date).getMonth()];
};

const getYear = (date) => {
    return `${new Date(date).getFullYear()}`;
};

const Office = () => {
    const {noteState: {notes}, dispatch} = useContext(NoteContext);
    const dropdownRef = React.createRef();
    console.log(dropdownRef)
    const handleDelete = (id) => {
        dispatch({type: 'DELETE_NOTE', id})
    }
    return (
        <>
            <header>
                <p className="large-text bold txt-left">Office</p>
                <div className="sort-search">
                    <Input placeholder='Search notes' className="search" />
                    <div className="sort">
                        <span>Sort by:</span>
                        <Dropdown divided name="alphabetical" icon="fa fa-chevron-down">
                            <N3DropdownListItem>Date</N3DropdownListItem>
                        </Dropdown>
                    </div>
                </div>
            </header>
                <div className="office content">
                    <div className="notes-list">
                        {/* {notes.map(note =>
                            (<Card className="note-preview">
                                <p className="large-text">{note.title}</p>
                                <div className="time">
                                    <div>
                                        <p>{getTime(note.date)}</p>
                                        <p>{getDay(note.date)} {getDate(note.date)}, {getMonth(note.date)} {getYear(note.date)}</p>
                                    </div>
                                    <div className="actions" ref={dropdownRef}>
                                        <i className="fa fa-star-o" />
                                        <Dropdown icon="fa fa-ellipsis-h">
                                            <N3DropdownListItem href="#">
                                                <i className="fa fa-copy" />
                                                <span>Copy</span>
                                            </N3DropdownListItem>
                                            <N3DropdownListItem href="#">
                                                <i className="fa fa-copy" />
                                                <span>Duplicate</span>
                                            </N3DropdownListItem>
                                            <N3DropdownListItem href="#" onClick={() => handleDelete(note.id)}>
                                                <i className="fa fa-trash" />
                                                <span>Delete</span>
                                            </N3DropdownListItem>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Card>)
                        )} */}
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                        <Card className="note-preview">
                            <p className="large-text">Title</p>
                            <div className="time">
                                <div>
                                    <p>5:00 pm</p>
                                    <p>Mon 19, August 2019</p>
                                </div>
                                <div className="actions">
                                    <i className="fa fa-star-o" />
                                    <Dropdown icon="fa fa-ellipsis-h">
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Copy</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-copy" />
                                            <span>Duplicate</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-tag" />
                                            <span>Tag</span>
                                        </N3DropdownListItem>
                                        <N3DropdownListItem href="#">
                                            <i className="fa fa-trash" />
                                            <span>Delete</span>
                                        </N3DropdownListItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
        </>
    )
}

export default Office;