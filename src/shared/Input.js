import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

const N3Input = styled.input`
    width: 100%;
    outline: none;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.color.grey[0]};
    color: ${props => props.theme.color.grey[1]};
    font-size: 14px;
    line-height: 35px;
    padding: 0 10px;
    :focus {
        border: 2px solid ${props => props.theme.color.green};
    }

    ${props => props.name && css`
		margin-top: 6px;
	`}
`

const Input = (props) => {
    const { value, placeholder, name } = props;
    return (
        <div>
            {name ?
            (
                <Fragment>
                    <p className="small-text">{name}</p>
                    <N3Input
                        {...props}
                        value={value}
                        placeholder={placeholder}
                    />
                </Fragment>
            )
            :   <N3Input
                    {...props}
                    value={value}
                    placeholder={placeholder}
                    name={name}
                />
            }
        </div>
    )
}

export default Input;