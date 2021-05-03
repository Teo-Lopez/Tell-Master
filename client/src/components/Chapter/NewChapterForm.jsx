import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button } from '../shared/Buttons'
import ChoiceForm from '../Choice/ChoiceForm'
import ChoiceCard from '../Choice/ChoiceCard'
import chapterService from '../../services/chapter.service'
import { withRouter } from 'react-router-dom'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CenteredModal from '../shared/Modal'
import styled from 'styled-components'
const ChapterService = new chapterService()

//#region styles

const ChapterFormWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.greenish};

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
	const {
		updateLastGames,
		getAllChapters,
		closeNewChapterForm,
		simple,
		match
	} = props
	const providedChapter = props.chapter
	//let gameId = match.params.gameId

	const [chapter, setChapter] = useState({
		description: providedChapter?.description || '',
		choices: providedChapter?.choices || [],
		title: providedChapter?.title || '',
		last: providedChapter?.last || false,
		gameId: match.params.gameId
	})
	const [choicesObj, setChoicesObj] = useState([])
	const [choiceForms, setChoiceForms] = useState([])

	//#region Form Manipulation
	function openNewChoiceForm() {
		const choiceFormsCopy = [...choiceForms]
		choiceFormsCopy.push(true)
		setChoiceForms(choiceFormsCopy)
	}

	function closeChoiceForm(idx) {
		const choiceFormsCopy = [...choiceForms]
		choiceFormsCopy.splice(idx, 1)
		setChoiceForms(choiceFormsCopy)
	}

	function pushChoiceToChapter(id) {
		const chapterCopy = [...chapter]
		chapterCopy.choices.push(id)
		setChapter(chapter)
	}

	function createChoiceCard(choiceObj) {
		const choicesObjCopy = [...choicesObj]
		choicesObjCopy.push(choiceObj)
		setChoicesObj(choicesObjCopy)
	}

	function finishChoiceForm(id, idx, choiceObj) {
		pushChoiceToChapter(id)
		createChoiceCard(choiceObj)
		closeChoiceForm(idx)
	}

	function submitForm(e) {
		e.preventDefault()
		if (!chapter.description || !chapter.title) return
		if (providedChapter) {
			updateChapter(chapter)
		} else {
			createChapter(chapter)
		}
		closeNewChapterForm()
	}

	function toogleCard(idx) {
		const choicesObjCopy = [...choicesObj]
		const choiceCopy = { ...choicesObjCopy[idx] }
		choiceCopy.show = !choicesObj[idx].show
		choicesObjCopy.splice(idx, 1, choiceCopy)
		setChoicesObj(choicesObjCopy)
	}

	function onChange(e, data) {
		const { name, value, checked } = data || e.currentTarget
		const chapterCopy = { ...chapter }
		chapterCopy[name] = name === 'last' ? checked : value
		setChapter(chapterCopy)
	}

	//#endregion Form Manipulation

	function createChapter(chapter) {
		ChapterService.createChapter(chapter)
			.then(createdChapter => {
				getAllChapters()
				updateLastGames()
				setChapter(createdChapter)
			})
			.catch(err => console.log(err))
	}

	function updateChapter(chapter) {
		ChapterService.updateChapter(chapter)
			.then(updatedChapter => {
				updateLastGames()
				setChapter(updatedChapter)
				getAllChapters()
			})
			.catch(err => console.log(err))
	}

	return (
		<ChapterFormWrapper>
			{
				<>
					<label>
						<input
							onChange={onChange}
							placeholder='Capítulo #1.0 El comienzo'
							name='title'
							value={chapter.title}
							maxLength='230'
						></input>
					</label>
					<div>
						<label>
							<small>
								Si es el último capítulo de la aventura, marca esta casilla:
							</small>
							<input
								onChange={onChange}
								name='last'
								checked={chapter.last}
								type='checkbox'
							/>
						</label>
					</div>
					<div className='.ck-editor'>
						<EditorWrapper>
							<CKEditor
								editor={ClassicEditor}
								data={chapter.description}
								placeholder='El texto del capitulo va aquí'
								name='description'
								onInit={editor => {
									// You can store the "editor" and use when it is needed.
									console.log('Editor is ready to use!', editor)
								}}
								onChange={(event, editor) => {
									const data = { name: 'description', value: editor.getData() }
									onChange(event, data)
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
											<ChoiceCard
												toogleCard={toogleCard}
												choice={eachChoice}
												idx={idx}
												simple={simple}
											/>
										) : (
											<CenteredModal noHeader show={true}>
												<ChoiceForm
													simple={simple}
													toogleCard={toogleCard}
													choice={eachChoice}
													idx={idx}
												/>
											</CenteredModal>
										)}
									</Col>
								))}
							</Row>
							<div style={{ margin: '10px 0' }}>
								<Button
									text='Añadir elección'
									style={{ margin: '0 5px' }}
									onClick={openNewChoiceForm}
								/>
								<Button
									text={chapter ? 'Guardar cambios' : 'Crear capítulo'}
									style={{ margin: '0 5px' }}
									onClick={submitForm}
								/>
							</div>
						</div>
						{choiceForms.map((eachform, idx) =>
							React.cloneElement(
								<CenteredModal key={idx} noHeader show={true}>
									<ChoiceForm />
								</CenteredModal>,
								{ idx, finishChoiceForm, closeChoiceForm, simple, toogleCard }
							)
						)}
					</div>
				</>
			}
		</ChapterFormWrapper>
	)
}

export default withRouter(NewChapterForm)
