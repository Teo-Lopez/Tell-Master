import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { BackgroundImage } from '../shared/Images'
import EasyDice from './assets/d6book.svg'
import D20Dice from './assets/d20.svg'

function ModeSelect(props) {
	const { setMode } = props
	const ModeWrapper = styled(Row)`
		margin-top: 200px;
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
			transform: scale(1.1);
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

	return (
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
	)
}

export default ModeSelect
