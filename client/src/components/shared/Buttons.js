import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: rgba(0, 0, 0, 1);
	color: white;
	border: 0.3px solid white;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	user-select: none;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	font-size: 1.1em;
	padding: 8px 10px;

	transition: all 0.15s ease-in-out;
	&:hover {
		background-color: rgba(44, 44, 44, 0.1);
		-webkit-box-shadow: 0px 10px 7px 1px rgba(252, 252, 252, 0.1);
		-moz-box-shadow: 0px 1px 7px 1px rgba(252, 252, 252, 0.1);
		box-shadow: 0px 1px 7px 1px rgba(252, 252, 252, 0.1);
	}
`
export const Button = props => <StyledButton {...props}>{props.text}</StyledButton>
