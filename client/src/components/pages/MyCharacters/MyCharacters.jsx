import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ColumnedList } from '../../shared/CharacterList'
import CharacterSummary from '../../Character/CharacterSummary'
import ModalContext from '../../../ModalContext'
const Section = styled.section``

function MyCharacters({ characters }) {
	const setModal = useContext(ModalContext)
	const openCharInfo = char =>
		setModal({
			show: true,
			component: <CharacterSummary showName={false} character={char} />,
			title: char.name
		})

	return (
		<Section>
			<ColumnedList onClick={openCharInfo} characters={characters} />
		</Section>
	)
}

export default MyCharacters
