import React from 'react';

//components
import Card from '../../../../../shared/Card';
import Dropdown, { N3DropdownListItem } from '../../../../../shared/Dropdown';
import Input from '../../../../../shared/Input';

//styles
import './Office.scss';

const Office = () => {
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