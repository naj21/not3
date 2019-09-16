import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';

 //images
 import addNote from '../../../../../global/images/addNote.svg';

 //components
import AddNoteModal from './components/AddNoteModal';

 //styles
 import './AddNote.scss';
 
const AddNote = (props) => {    
    const { backdrop, toggleBackdrop } = useContext(ThemeContext);
    const  [ visible, setVisible ] = useState(false);
    const setVisibility = () => {
        setVisible(async () => {
            await toggleBackdrop();
            return !visible
        });
    }
    return(
        <>
            <div className="add-note">
                <p className="large-text bold">Welcome Kayode! Get Started</p>
                <button
                    onClick={setVisibility}
                >
                    <img src={addNote} alt='add note' />
                </button>
                <p className="bold">Add note</p>
            </div>
            <AddNoteModal visible={visible && backdrop} />
        </>
    )
}

export default AddNote;