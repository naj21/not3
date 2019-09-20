import React, { useContext, useState, useEffect } from 'react';
import { NoteContext } from '../../../../../contexts/NoteContext';

 //components
 import Card from '../../../../../shared/Card';
 import Dropdown, { N3DropdownListItem } from '../../../../../shared/Dropdown';
 import TextArea from '../../../../../shared/TextArea';

//styles
import './Note.scss';

const Note = () => {
    const { noteState: { note }, dispatch} = useContext(NoteContext);
    const [title, setTitle] = useState('Untitled');

    useEffect(() => {
        dispatch({type: 'SET_NOTE', note: {}})
        if (note.title) {
            setTitle(note.title);
        }
    }, []);
        
    const editTitle = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            setTitle(e.target.innerHTML);
            // dispatch({type: 'EDIT_NOTE', note})
        }
    } 

    const editNote = (e) => {
        console.log(e.target.value)
        // dispatch({type: 'EDIT_NOTE', note: {title, content: e.target.value}})
    }

    return (
        <>
            <header>
                <span
                    className="large-text bold txt-left title"
                    on
                    // onInput={editTitle}
                    onKeyDown={editTitle}
                    contentEditable>{title}</span>
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
                <TextArea onBlur={editNote} />
            </div>
        </>
    )
}

export default Note;