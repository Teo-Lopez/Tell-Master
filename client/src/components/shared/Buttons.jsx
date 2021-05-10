import React from 'react'
import styled from 'styled-components'
import { theme } from '../../themeContext'

const StyledButton = styled.a`
	background-color: ${({ theme, color = 'darkGreen' }) => theme.colors[color]};
	width: 100%;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	user-select: none;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;

	font-size: 1.1em;
	padding: 8px 10px;
	transition: all 0.15s ease-in-out;

	box-shadow: 0 5px 0 0 ${theme.colors.darkGreen};
	position: relative;

	&:hover {
		cursor: pointer;
	}
	&:active {
		top: 2px;
		box-shadow: 0 3px 0 0 ${theme.colors.darkGreen};
	}
`
export const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

const MediumButtonStyled = styled.div`
	background-color: ${({ theme, color = 'darkGreen' }) => theme.colors[color]};
	border: 0.5px solid ${theme.colors.darkGreen};
	border-radius: 2px;
	box-shadow: 0 5px 0 0 ${theme.colors.darkGreen};
	position: relative;
	text-align: center;

	.text-wrapper {
		padding: 6px 12px;
	}

	&:hover {
		cursor: pointer;
	}
	&:active {
		top: 2px;
		box-shadow: 0 3px 0 0 ${theme.colors.darkGreen};
	}
`

export const MediumButton = props => (
	<MediumButtonStyled {...props}>
		<span className='text-wrapper'>{props.children}</span>
	</MediumButtonStyled>
)
