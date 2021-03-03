import React, { useState, useEffect } from 'react'
import choicesService from '../../services/choices.service'
import chapterService from '../../services/chapter.service'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const ChoiceFormWrapper = styled.div`
	border: ${props => '1px solid ' + props.theme.colors.general};
	margin: 15px 0;
	color: ${props => props.theme.colors.light};
	form {
		border-top: 1px solid rgba(200, 200, 200, 1);
		background-color: ${props => props.theme.background.modals};
	}
`

const Row = styled.div`
	display: flex;
	background-color: ${props => props.theme.background.modals};
	padding: 10px;
`

const Col4 = styled.div`
	width: 25%;
	/* background-color: ${props => props.theme.background.modals}; */
`

const IconCross = styled.div`
	border-radius: 5px;
	padding: 2px;
	margin-right: 20px;
	height: 30px;
	width: 30px;
	background-color: red;
	text-align: center;
`

const IconTick = styled.div`
	border-radius: 5px;
	padding: 2px;
	margin-right: 20px;
	height: 30px;
	width: 30px;
	background-color: green;
	text-align: center;
`

function ChoiceFormRow(props) {
	const { finishChoiceForm, idx, choice, toogleCard, closeChoiceForm, match, simple } = props
	const ChapterService = new chapterService()
	const ChoicesService = new choicesService()
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
	}, [match.params.gameId, ChapterService])

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
		<ChoiceFormWrapper>
			<Row>
				<IconCross
					onClick={() => {
						closeChoiceForm ? closeChoiceForm(idx) : toogleCard(idx)
					}}
				>
					<i className='fas fa-times'></i>
				</IconCross>
				<IconTick onClick={submitForm}>
					<i className='fas fa-check'></i>
				</IconTick>
			</Row>
			<form onSubmit={submitForm} className='choiceForm'>
				<Row>
					<Col4>
						<label>
							Describe la elección:
							<textarea
								id='description'
								name='description'
								onChange={onChange}
								value={choiceObj.description}
								placeholder='Fuerzo la puerta'
							/>
						</label>
					</Col4>
					<Col4>
						{!simple && (
							<>
								<label>
									¿Que dificultad tiene?
									<input
										id='difficulty'
										type='number'
										name='difficulty'
										onChange={onChange}
										value={choiceObj.trial.difficulty}
										placeholder='Fuerzo la puerta'
									/>
								</label>
								{choice ? null : (
									<small>
										Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prodígios.
									</small>
								)}
								<label>
									¿Qué caracteristica es necesaria para superarla?
									<select id='characteristic' onChange={onChange} name='characteristic'>
										<option value='str'>Fuerza</option>
										<option value='des'>Destreza</option>
										<option value='agi'>Agilidad, velocidad</option>
										<option value='con'>Constitución física</option>
										<option value='int'>Inteligencia</option>
										<option value='wis'>Sabiduría</option>
										<option value='char'>Carisma</option>
									</select>
								</label>
							</>
						)}
					</Col4>
					<Col4>
						{!simple && (
							<label>
								Cuanta experiencia da el éxito:
								<input id='pxGranted' name='pxGranted' onChange={onChange} value={choiceObj.pxGranted} placeholder='100' type='number' />
							</label>
						)}
					</Col4>
					<Col4>
						<label>
							{!simple ? 'Cap de destino con exito:' : 'Cap de destino'}
							<select id='successTargetChapter' name='successTargetChapter' onChange={onChange}>
								<option value='null'>Ninguno</option>
								{chapterList.map(chapter =>
									chapter._id === successTargetChapter ? (
										<option selected value={chapter._id}>
											{chapter.title}
										</option>
									) : (
										<option value={chapter._id}>{chapter.title}</option>
									)
								)}
							</select>
						</label>

						{!simple && (
							<label>
								Cap de destino con fracaso:
								<select id='failuterTargetChapter' as='select' name='failureTargetChapter' custom onChange={onChange}>
									<option value='null'>Ninguno</option>
									{chapterList.map(chapter =>
										chapter._id === failureTargetChapter ? (
											<option selected value={chapter._id}>
												{chapter.title}
											</option>
										) : (
											<option value={chapter._id}>{chapter.title}</option>
										)
									)}
								</select>
							</label>
						)}
					</Col4>
				</Row>
			</form>
		</ChoiceFormWrapper>
	)
}

export default withRouter(ChoiceFormRow)
