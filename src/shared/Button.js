import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const FiButtonText = styled.span`
	margin-top: 2px;
	display: inline-block;
`;
const FiButton = styled.button`
	font-size: 16px;
	border-radius: 3px;
	font-weight: 600;
	background: ${props => props.theme.color.green};
    padding: 0 48px;
	outline: none;
	border: none;
	cursor: pointer;
	color: white;
	display: inline-block;
	height: 40px;
	transition: all 200ms ease-out;
	i{
		color: ${props => props.theme.color.grey[1]};
		font-size: 14px;
	}
	&:hover{
		svg{
			opacity: 1;
		}
	}
	${props =>
		props.disabled &&
		css`
			background: ${props => props.theme.color.grey[0]};
			border: 1px solid ${props => props.theme.color.grey[0]};
			color: ${props => props.theme.color.grey[1]};
			cursor: default;
		`}
	${props =>
		props.icon &&
		css`
			background: none;
			// border: none;
			padding: 0;
		`}

`;

const Button = props => {
	const { text, isLoading, icon } = props;
	console.log(icon)
	return (
		<Fragment>
			<FiButton {...props}>
				{icon &&
					 (<i className={icon} />)
				}
				{text &&
					(<FiButtonText mx={icon && 10}>{text}</FiButtonText>)
				}
				{isLoading && (
					<i className="fa fa-circle-o" />
				)}
			</FiButton>
		</Fragment>
	);
};

export default Button;
