import React from 'react';
import styled from 'styled-components';

const N3SideNav = styled.div`
    position: fixed;
    top: 0;
    width: 70%;
    height: 100vh;
    display: ${props => props.visible ? 'block' : 'none'};
    padding-top: 30px;
    background: var(--background);
    z-index: 100;
    li {
        padding: 15px;
    }
`

const SideNav = (props) => {
    const { children, visible } = props;
    return (
        <N3SideNav
            {...props}
            visible={visible || false}
        >
            {children}
        </N3SideNav>
    )
}

export default SideNav;