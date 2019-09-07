import React from "react";
import styled from "styled-components";

const N3Card = styled.div`
	background: white;
	box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
	color: ${props => props.theme.color.grey[1]};
	border: 1px solid ${props => props.theme.color.grey[0]};
	border-radius: 4px;
	padding: 20px 15px;
`;

const Card = props => {
	return <N3Card {...props}>{props.children}</N3Card>;
};

export default Card;
