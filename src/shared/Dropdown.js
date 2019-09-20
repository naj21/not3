import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import Card from "./Card";

const N3DropdownButton = styled(Button)`
	padding-left: 10px;
    padding-right: 14px;
    border: 1px solid ${props => props.theme.color.grey[0]};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    ${props => !props.divided && css`
        padding: 0;
        margin: 0;
        border: 0
        height: initial;
	`}
`;

const N3Span = styled.span`
	padding-left: 14px;
    padding-right: 14px;
    color: var(--secondary-color);
    font-size: 14px;
    text-transform: capitalize;
    line-height: 35px;
    border: 1px solid ${props => props.theme.color.grey[0]};
    border-radius: 4px;
    border-right: 0;
	border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const N3Dropdown = styled.div`
	position: relative;
	display: inline-flex;
	
`;

const N3DropdownList = styled(Card)`
	position: absolute;
	top: 30px;
	display: flex;
	flex-direction: column;
    border-radius: 5px;
    padding: 10px 0;
    z-index: 10;
`;

export const N3DropdownListItem = styled.a`
	display: inline-block;
	padding: 5px 30px;
	color: var(--primary-color);
    font-size: 16px;
    line-height: 20px;
	text-decoration: none;
	white-space: nowrap;
    cursor: pointer;
	&:hover {
		background: ${props => props.theme.color.grey[0]};
    }
    i, img {
        margin-right: 15px;
    }
`;
const Dropdown = props => {
	const { name, children, divided } = props;
	const [isVisible, setVisibility] = useState(false);

	const node = useRef();

	useEffect(() => {
		// add when mounted
		// console.log("uy", props.listItems);
		document.addEventListener("mousedown", handleClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);

	const handleClick = e => {
		if (node.current.contains(e.target)) {
			// inside click
			return;
		}
		// outside click
		setVisibility(false);
	};

	return ( 
		<>
			{!divided
			? (<N3Dropdown
					{...props}
					ref={node}
				>
				<N3DropdownButton
					{...props}
					isActive={isVisible}
					onClick={e => {
						setVisibility(!isVisible);
					}}
				/>
				{isVisible && <N3DropdownList>{children}</N3DropdownList>}
			</N3Dropdown>)
			: (<N3Dropdown
					{...props}
					ref={node}
				>
				<N3Span>{name}</N3Span>
				<N3DropdownButton
					{...props}
					isActive={isVisible}
					onClick={e => {
						setVisibility(!isVisible);
					}}
				/>
				{isVisible && <N3DropdownList>{children}</N3DropdownList>}
			</N3Dropdown>)
			}
		</>
	);
};

export default Dropdown;
