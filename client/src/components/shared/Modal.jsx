import React, { cloneElement } from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components'

const ThemeModal = styled.div`
	background-color: ${props => props.theme.background.modals};
	width: 40%;
	margin: 10vh auto;
	border-radius: 5px;
	font-size: 1.1em;
	color: white;

	div {
		background-color: ${props => props.theme.background.modals};
	}
`

function CenteredModal(props) {
	const { show, children, onHideCallback, title, noHeader } = props
	return (
		<Modal
			dialogAs={ThemeModal}
			show={show}
			onHideCallback={onHideCallback}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			autoFocus
		>
			{!noHeader && (
				<Modal.Header closeButton onHideCallback={onHideCallback}>
					<Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
				</Modal.Header>
			)}
			<Modal.Body>{cloneElement(children, { ...props })}</Modal.Body>
		</Modal>
	)
}

export default CenteredModal
