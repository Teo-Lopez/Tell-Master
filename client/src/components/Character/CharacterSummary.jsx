import React from 'react'

function CharacterSummary({ character }) {
	return character ? (
		<div>
			<h5>{character.name}</h5>
			<p>Nivel: {character.level}</p>
			<p>Experiencia: {character.px}pts</p>
			<small>
				Fue: {character.stats.str} Des: {character.stats.des} Agi:{' '}
				{character.stats.agi} Int: {character.stats.int} Sab:{' '}
				{character.stats.wis} Car: {character.stats.char}
			</small>
		</div>
	) : null
}

export default CharacterSummary
