import React from 'react';

//components
import Card from '../../../../../../../shared/Card';
import Button from '../../../../../../../shared/Button';
import Input from '../../../../../../../shared/Input';

//styles
import './AddNoteModal.scss';

const AddNoteModal = (props) => {
    const { visible } = props;
    return (
        <Card className={`addnote-modal ${visible && 'visible'}`} >
            <form>
                <Input name="Note name" />
                <Input name="Date" />
                <Button text="Create Note" />
            </form>
        </Card>
    )
}

export default AddNoteModal;