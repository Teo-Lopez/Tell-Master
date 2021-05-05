import React from 'react'
import { Spinner } from 'react-bootstrap'

function CustomSpinner({ ready, children }) {
	return !ready ? (
		<Spinner
			style={{ margin: '20% auto', display: 'block' }}
			animation='border'
			role='status'
		>
			<span className='sr-only'>Loading...</span>
		</Spinner>
	) : (
		children
	)
}

export default CustomSpinner
