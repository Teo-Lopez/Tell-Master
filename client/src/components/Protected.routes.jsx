import React from 'react'
import { Redirect } from 'react-router-dom'
function Protected({ condition, children }) {
	return condition ? children : <Redirect to='/signup' />
}

export default Protected
