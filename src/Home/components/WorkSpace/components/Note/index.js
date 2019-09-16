import React from 'react';

 //components
 import Card from '../../../../../shared/Card';
 import Dropdown, { N3DropdownListItem } from '../../../../../shared/Dropdown';
 import TextArea from '../../../../../shared/TextArea';

//styles
import './Note.scss';

const Note = () => {
    return (
        <>
            <header>
                <p className="large-text bold txt-left">Office</p>
                <Card className="formats">
                    <Dropdown divided name="airbnb cereal app" icon="fa fa-sort-down">
                        <N3DropdownListItem href="#">
                            <span>Dropdown with Link</span>
                        </N3DropdownListItem>
                    </Dropdown>
                    <Dropdown divided name="10" icon="fa fa-sort-down" />
                    <div className="text-styles">
                        <button>B</button>
                        <button>/</button>
                        <div className="style-group">
                            <button>U</button>
                            <Dropdown icon="fa fa-sort-down"></Dropdown>
                        </div>
                        <button>abc</button>
                        <button>X</button>
                        <button>X</button>
                    </div>
                </Card>
            </header>
            <div className="content">
                <TextArea />
            </div>
        </>
    )
}

export default Note;