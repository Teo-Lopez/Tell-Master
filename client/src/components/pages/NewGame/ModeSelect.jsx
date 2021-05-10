import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { BackgroundImage } from '../../shared/Images'
import EasyDice from '../../shared/assets/d6book.svg'
import D20Dice from '../../shared/assets/d20.svg'

const Section = styled.section`
	text-align: center;
	padding-top: ${({ theme }) => theme.spacings.xl};

	h1 {
		font-size: 3em;
		letter-spacing: 3px;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.white}DD;
	}
`

const ModeWrapper = styled(Row)`
	position: absolute;
	width: 80%;
	top: 40%;
	left: 10%;
	overflow: hidden;
`
const ModeBox = styled(Col)`
	text-align: center;
	font-size: 3rem;
	transition: all 0.3s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`

const LeftBackgroundImage = styled(BackgroundImage)`
	/* position: absolute; */
	left: 0px;
	top: -40px;
	max-height: 100px;
	max-width: 100px;
	transform: rotate(-15deg);
`

const RightBackgroundImage = styled(BackgroundImage)`
	/* position: absolute; */
	right: 0px;
	top: -40px;
	max-height: 100px;
	max-width: 100px;
	transform: rotate(15deg);
`

function ModeSelect(props) {
	const { setMode } = props

	return (
		<Container fluid>
			<Section>
				<h1>Elige tu modo de juego</h1>
				<Row>
					<ModeWrapper>
						<ModeBox onClick={() => setMode(true)}>
							<LeftBackgroundImage src={EasyDice} />
							<p>Historia simple</p>
						</ModeBox>
						<ModeBox onClick={() => setMode(false)}>
							<p>Aventura de Rol</p>
							<RightBackgroundImage src={D20Dice} />
						</ModeBox>
					</ModeWrapper>
				</Row>
			</Section>
		</Container>
	)
}

export default ModeSelect
