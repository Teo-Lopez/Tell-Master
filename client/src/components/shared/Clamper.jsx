import React from 'react'
import ClampLines from 'react-clamp-lines'
import styled from 'styled-components'

const StyledClamper = styled(ClampLines)`
	.clamp-lines {
		height: 100%;
	}

	.clamp-lines__button {
		background-color: ${({ theme, buttonColor = 'darkGreen' }) =>
			theme.colors[buttonColor]};
		border: 0.5px solid ${({ theme }) => theme.colors.darkGreen};
		box-shadow: 0 5px 0 0 ${({ theme }) => theme.colors.darkGreen};
		position: relative;
		margin-top: ${({ theme }) => theme.spacings.l};

		.clamp-lines__button:hover {
			cursor: pointer;
		}
		.clamp-lines__button:active {
			top: 2px;
			box-shadow: 0 3px 0 0 ${({ theme }) => theme.colors.darkGreen};
		}
	}
`

function Clamper(props) {
	return <StyledClamper {...props} />
}

export default Clamper
