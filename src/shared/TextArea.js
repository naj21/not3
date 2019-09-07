import React from "react";
import styled from 'styled-components';

export const N3TextArea = styled.textarea`
    width: 100%;
    height: 500px;
    border-radius: 4px;
    border: 1px solid #E1E6EB;
    background: ${props => props.disabled ? '#F9FBFC' : '#FFFFFF'};
    font-size: 14px;
    padding: 12px 10px 10px;
    outline: none;
    color: ${props => props.theme.color.grey[1]};
    transition: 0.3s;
    ::placeholder {
        color: #ACB5BB;
    }
    :focus{
        border: 1px solid ${props => props.theme.color.green};
    }
`

const TextArea = props => {
    const { placeholder } = props;
    return (
        <N3TextArea
            {...props}
            placeholder={placeholder}
        />
    )     
}

export default TextArea;