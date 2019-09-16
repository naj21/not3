import React from 'react';

//components
import Input from '../../../../../shared/Input';
import Button from '../../../../../shared/Button';

//styles
import './Password.scss';

const Password = () => {
    return (
        <form>
            <div className="password-inputs">
                <div className="description">
                    <p className="medium-text">Password</p>
                    <p>Provide your current password and choose a new one.</p>
                </div>
                <div className="input-group">
                    <Input name='Current Password' />
                    <Input name='New Password' />
                    <Input name='Retype password' />
                </div>
            </div>
            <Button text='Change Password' />
        </form>
    )
}

export default Password;