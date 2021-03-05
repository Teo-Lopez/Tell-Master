import React from 'react'
import { Card } from 'react-bootstrap'
import arrow from './arrow.png'
const charsDict = {
	str: 'Fuerza',
	des: 'Destreza',
	agi: 'Agilidad, velocidad',
	con: 'Constitución',
	wis: 'Sabiduría',
	int: 'Inteligencia',
	char: 'Carisma',
}

function ChoiceCard({ choice, idx, toogleCard, simple }) {
	return (
		<Card>
			<Card.Header onClick={() => toogleCard(idx)}>Editar</Card.Header>
			<image src={arrow}></image>
			<Card.Body
				style={{
					color: 'black',
					backgroundColor: choice.successTargetChapter && choice.failureTargetChapter ? 'rgba(0,255,127, 0.3)' : 'rgba(255,165,0, 0.5)',
				}}
			>
				<p>{choice.description}</p>
				{!simple && (
					<>
						<p>{charsDict[choice.trial.characteristic]}</p>
						<p>{choice.trial.difficulty}</p>
						<p>{choice.pxGranted}</p>
					</>
				)}
			</Card.Body>
		</Card>
	)
}

export default ChoiceCard
