import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import choicesService from '../../services/choices.service'
import chapterService from '../../services/chapter.service'
import { withRouter } from 'react-router-dom'
const ChapterService = new chapterService()
const ChoicesService = new choicesService()

function ChoiceForm(props) {
	const { finishChoiceForm, idx, choice, toogleCard, closeChoiceForm, match, simple } = props
	const [choiceObj, setChoiceObj] = useState(
		choice
			? choice
			: {
					description: '',
					trial: { difficulty: simple ? -10 : 10, characteristic: 'str' },
					pxGranted: 0,
					successTargetChapter: null,
					failureTargetChapter: null,
			  }
	)
	const [successTargetChapter, setSuccessTargetChapter] = useState(choice ? choice.successTargetChapter : null)
	const [failureTargetChapter, setFailureTargetChapter] = useState(choice ? choice.failureTargetChapter : null)
	const [chapterList, setChapterList] = useState([])

	useEffect(() => {
		ChapterService.getChaptersFromGame(match.params.gameId).then(chapterList => {
			setChapterList(chapterList)
		})
	}, [match.params.gameId])

	function createChoice(choice) {
		ChoicesService.createChoice(choice).then(createdChoice => {
			finishChoiceForm(createdChoice._id, idx, createdChoice)
		})
	}

	function updateChoice(choice) {
		ChoicesService.updateChoice(choice).then(updatedChoice => {
			toogleCard(idx)
		})
	}
	function submitForm(e) {
		e.preventDefault()
		if (choice) updateChoice(choiceObj)
		else createChoice(choiceObj)
	}

	function onChange(e) {
		const { name, value } = e.currentTarget
		if (name === 'difficulty' || name === 'characteristic') {
			setChoiceObj({ ...choiceObj, trial: { ...choiceObj.trial, [name]: value } })
		} else {
			setChoiceObj({ ...choiceObj, [name]: value })
		}
	}

	return (
		<Card>
			<Form onSubmit={submitForm} className='choiceForm'>
				<Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button
						onClick={() => {
							closeChoiceForm ? closeChoiceForm(idx) : toogleCard(idx)
						}}
						style={{ width: '40px' }}
						variant='danger'
					>
						<i className='fas fa-times'></i>
					</Button>
					<Button type='submit' style={{ width: '40px' }} variant='success'>
						<i className='fas fa-check'></i>
					</Button>
				</Card.Header>
				<Card.Body>
					<Form.Group controlId='choice'>
						<Form.Label>Describe la elección:</Form.Label>
						<Form.Control as='textarea' name='description' onChange={onChange} value={description} placeholder='Fuerzo la puerta' />

						{!simple && (
							<>
								<Form.Label>¿Que dificultad tiene?</Form.Label>
								<Form.Control type='number' name='difficulty' onChange={onChange} value={difficulty} />
								{choice ? null : (
									<Form.Text>
										Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prodígios.
									</Form.Text>
								)}
								<Form.Label>¿Qué caracteristica es necesaria para superarla?</Form.Label>
								<Form.Control onChange={onChange} name='characteristic' as='select' custom>
									<option value='str'>Fuerza</option>
									<option value='des'>Destreza</option>
									<option value='agi'>Agilidad, velocidad</option>
									<option value='con'>Constitución física</option>
									<option value='int'>Inteligencia</option>
									<option value='wis'>Sabiduría</option>
									<option value='char'>Carisma</option>
								</Form.Control>
							</>
						)}
					</Form.Group>
					{!simple && (
						<Form.Group controlId='choice'>
							<Form.Label>Cuanta experiencia da el éxito:</Form.Label>
							<Form.Control name='pxGranted' onChange={onChange} value={pxGranted} placeholder='100' type='number' />
						</Form.Group>
					)}
				</Card.Body>
				<Form.Group controlId='successTargetChapter'>
					<Form.Label>{!simple ? 'Cap de destino con exito:' : 'Cap de destino'}</Form.Label>
					<Form.Control as='select' custom name='successTargetChapter' onChange={onChange}>
						<option value='null'>Ninguno</option>
						{chapterList.map(chapter =>
							chapter._id === successTargetChapter ? (
								<option dangerouslySetInnerHTML={{ __html: chapter.title }} selected value={chapter._id}></option>
							) : (
								<option dangerouslySetInnerHTML={{ __html: chapter.title }} value={chapter._id}></option>
							)
						)}
					</Form.Control>
				</Form.Group>
				{!simple && (
					<Form.Group controlId='failureTargetChapter'>
						<Form.Label>Cap de destino con fracaso:</Form.Label>
						<Form.Control as='select' name='failureTargetChapter' custom onChange={onChange}>
							<option value='null'>Ninguno</option>
							{chapterList.map(chapter =>
								chapter._id === failureTargetChapter ? (
									<option dangerouslySetInnerHTML={{ __html: chapter.title }} selected value={chapter._id}></option>
								) : (
									<option dangerouslySetInnerHTML={{ __html: chapter.title }} value={chapter._id}></option>
								)
							)}
						</Form.Control>
					</Form.Group>
				)}
			</Form>
		</Card>
	)
}

export default withRouter(ChoiceForm)
