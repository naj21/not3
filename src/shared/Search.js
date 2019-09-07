import React from 'react';
import styled from 'styled-components';

//components
import Input from './Input';

const N3Search = styled.div`
    border: 2px solid ${props => props.theme.color.grey[0]};
    :focus-within {
        border: 2px solid ${props => props.theme.color.green};
    }
    i {
        color: ${props => props.theme.color.grey[0]};
    }
`

const N3SearchInput = styled(Input)`
    border: none;
    :focus {
        border: none;
    }
`

const Search = (props) => {
    return (
        <N3Search {...props}>
            <i className="fa fa-search" />
            <N3SearchInput
                {...props}
                placeholder='Search'
            />
        </N3Search>
    )
}

export default Search;
