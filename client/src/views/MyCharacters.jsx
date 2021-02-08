import React, { useState } from 'react'
import CharacterList from '../components/Character/CharacterList'
import CenteredModal from '../components/utils/Modal'
import CharacterSummary from '../components/Character/CharacterSummary'
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
		<>
			<CharacterList onClick={openModal} characters={characters} />
			<CenteredModal noHeader onHide={closeModal} show={show}>
				<CharacterSummary character={charShown} />
			</CenteredModal>
		</>
	)
}

export default MyCharacters
