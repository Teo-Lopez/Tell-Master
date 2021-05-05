import React, { cloneElement } from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components'

const ThemeModal = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGreen};
	width: 40%;
	margin: 10vh auto;
	border-radius: 5px;
	font-size: 1.1em;
	color: ${({ theme }) => theme.colors.white};
`

function CenteredModal(props) {
	const { show, children, onHide, title } = props

	return (
		<Modal
			dialogAs={ThemeModal}
			show={show}
			onHide={onHide}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			autoFocus
		>
			{title && (
				<Modal.Header closeButton onHide={onHide}>
					<Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
				</Modal.Header>
			)}
			<Modal.Body>{children && cloneElement(children, { onHide })}</Modal.Body>
		</Modal>
	)
}

export default CenteredModal
