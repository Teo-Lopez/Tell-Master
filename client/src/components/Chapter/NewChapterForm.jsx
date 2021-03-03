import React, { useState, useEffect, useCallback } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button } from '../shared/Buttons'
import ChoiceForm from '../Choice/ChoiceForm'
import ChoiceCard from '../Choice/ChoiceCard'
import chapterService from '../../services/chapter.service'
import { withRouter } from 'react-router-dom'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CenteredModal from '../utils/Modal'
import styled, { keyframes } from 'styled-components'
const ChapterService = new chapterService()

//#region styles

const ChapterFormWrapper = styled.div`
	background-color: ${({ theme }) => theme.background.lightOverlay};
	padding: 20px;

	input[name='title'] {
		width: 600px;
	}

	input[type='checkbox'] {
		margin: 0 10px;
	}

	.ck.ck-reset_all,
	.ck.ck-reset_all * {
		background-color: rgb(235, 235, 235);
	}

	.ck.ck-editor__main > .ck-editor__editable {
		background-color: rgb(235, 235, 235);
		color: black;
	}
`

const EditorWrapper = styled.div``
//#endregion styles

function NewChapterForm(props) {
	const { updateLastGames, match, chapter, getAllChapters, closeNewChapterForm, simple } = props
	let gameId = match.params.gameId

	const [description, setDescription] = useState(chapter?.description || '')
	const [choices, setChoices] = useState(chapter?.choices || [])
	const [choicesObj, setChoicesObj] = useState([])
	const [choiceForms, setChoiceForms] = useState([])
	const [title, setTitle] = useState(chapter?.title || '')
	const [last, setLast] = useState(!!chapter?.last)
	const [ready, setReady] = useState(!!chapter)

	const populateThisChapter = chapter => {
		setTitle(chapter.title)
		setDescription(chapter.description)
		setChoicesObj(chapter.choices)
		setChoices(chapter.choices.filter(choice => choice._id))
		setLast(chapter.last)
	}

	//#region Form Manipulation

	function retrieveChoicesIds(id) {
		const choicesCopy = [...choices]
		choicesCopy.push(id)
		setChoices(choicesCopy)
	}

	function createChoiceCard(choiceObj) {
		const choicesObjCopy = [...choicesObj]
		choicesObjCopy.push(choiceObj)
		setChoicesObj(choicesObjCopy)
	}

	function finishChoiceForm(id, idx, choiceObj) {
		retrieveChoicesIds(id, idx)
		createChoiceCard(choiceObj)
		closeChoiceForm(idx)
	}

	function closeChoiceForm(idx) {
		const choiceFormsCopy = [...choiceForms]
		choiceFormsCopy.splice(idx, 1)
		setChoiceForms(choiceFormsCopy)
	}

	function submitForm(e) {
		e.preventDefault()
		if (!description) return
		if (chapter) {
			updateChapter({ _id: chapter._id, description, choices, title, last })
		} else {
			createChapter({ description, choices, gameId, title, last })
		}
		closeNewChapterForm()
	}

	function addChoice() {
		const choiceFormsCopy = [...choiceForms]
		choiceFormsCopy.push(true)
		setChoiceForms(choiceFormsCopy)
	}

	function toogleCard(idx) {
		const choicesObjCopy = [...choicesObj]
		const choiceCopy = { ...choicesObjCopy[idx] }
		choiceCopy.show = !choicesObj[idx].show
		choicesObjCopy.splice(idx, 1, choiceCopy)
		setChoicesObj(choicesObjCopy)
	}

	function onChange(e) {
		const { name, value, checked } = e.currentTarget
		switch (name) {
			case 'title':
				setTitle(value)
				break
			case 'last':
				console.log(checked)
				setLast(checked)
				break
			default:
				throw Error('Error onChange')
		}
	}

	//#endregion Form Manipulation

	function createChapter(chapter) {
		ChapterService.createChapter(chapter)
			.then(createdChapter => {
				getAllChapters()
				updateLastGames()
				populateThisChapter(createdChapter)
			})
			.catch(err => console.log(err))
	}

	function updateChapter(chapter) {
		ChapterService.updateChapter(chapter)
			.then(updatedChapter => {
				updateLastGames()
				populateThisChapter(updatedChapter)
				getAllChapters()
			})
			.catch(err => console.log(err))
	}

	return (
		<ChapterFormWrapper ready={ready}>
			{
				<>
					<label>
						<input onChange={onChange} placeholder='Capítulo #1.0 El comienzo' name='title' value={title} maxLength='230'></input>
					</label>
					<div>
						<label>
							<small>Si es el último capítulo de la aventura, marca esta casilla:</small>
							<input onChange={onChange} name='last' checked={last} type='checkbox' />
						</label>
					</div>
					<div className='.ck-editor'>
						<EditorWrapper>
							<CKEditor
								editor={ClassicEditor}
								data={description}
								placeholder='El texto del capitulo va aquí'
								onInit={editor => {
									// You can store the "editor" and use when it is needed.
									console.log('Editor is ready to use!', editor)
								}}
								onChange={(event, editor) => {
									const data = editor.getData()
									setDescription(data)
								}}
								onBlur={(event, editor) => {
									// console.log('Blur.', editor)
								}}
								onFocus={(event, editor) => {
									// console.log('Focus.', editor)
								}}
							/>
						</EditorWrapper>
						<div style={{ margin: '10px 0' }}>
							<Row>
								{choicesObj.map((eachChoice, idx) => (
									<Col key={idx} lg={3}>
										{!eachChoice.show ? (
											<ChoiceCard toogleCard={toogleCard} choice={eachChoice} idx={idx} simple={simple} />
										) : (
											<CenteredModal noHeader show={true}>
												<ChoiceForm simple={simple} toogleCard={toogleCard} choice={eachChoice} idx={idx} />
											</CenteredModal>
										)}
									</Col>
								))}
							</Row>
							<div style={{ margin: '10px 0' }}>
								<Button text='Añadir elección' style={{ margin: '0 5px' }} onClick={addChoice} />
								<Button text={chapter ? 'Guardar cambios' : 'Crear capítulo'} style={{ margin: '0 5px' }} onClick={submitForm} />
							</div>
						</div>
						{choiceForms.map((eachform, idx) => (
							<div key={idx}>
								{React.cloneElement(
									<CenteredModal noHeader show={true}>
										<ChoiceForm />
									</CenteredModal>,
									{ idx, finishChoiceForm, closeChoiceForm, simple, toogleCard }
								)}
							</div>
						))}
					</div>
				</>
			}
		</ChapterFormWrapper>
	)
}

export default withRouter(NewChapterForm)
