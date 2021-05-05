import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterList, { ColumnedList } from '../../shared/CharacterList'
import CenteredModal from '../../shared/Modal'
import CharacterSummary from '../../Character/CharacterSummary'

const Section = styled.section``

function MyCharacters({ characters }) {
	const [show, setShow] = useState(false)
	const [charShown, setCharShown] = useState(null)

	const openModal = id => {
		const chosedChar = characters.find(char => char._id === id)
		setCharShown(chosedChar)
		setShow(true)
	}

	const closeModal = () => setShow(false)

	return (
		<Section>
			<ColumnedList onClick={openModal} characters={characters} />

			<CenteredModal noHeader onHide={closeModal} show={show}>
				<CharacterSummary character={charShown} />
			</CenteredModal>
		</Section>
	)
}

export default MyCharacters
