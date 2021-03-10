import React, { useState, useEffect } from 'react'
import gameService from '../../../services/games.service'
import NewChapterForm from '../../Chapter/NewChapterForm'
import chapterService from '../../../services/chapter.service'
import styled, { createGlobalStyle } from 'styled-components'
import CustomSpinner from '../../shared/Spinner'
import { Button } from '../../shared/Buttons'
import arrowIcon from '../../shared/arrow.png'
const ChapterService = new chapterService()
const GameService = new gameService()

const List = styled.div`
	background-color: ${props => props.theme.background.modals};
	border-radius: 2px;
	transition: all 2s;
	margin-bottom: 16px;
`

const ListPoint = styled.div`
	border-radius: 3px;
	background-color: ${props => props.theme.background.list};
	padding: ${({ active }) => (active ? '15px 15px 0 15px' : '15px')};

	transition: all 2s;
`

const PointHeader = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	margin: 8px 0;
	.arrow {
		/* transition: rotation 0.3s ease-in-out; */
		margin: 0 10px;
		width: 35px;
		transition: all 0.6s;
		transform: ${props => (props.active ? 'rotate(180deg)' : 'rotate(0)')};
	}

	p {
		margin: 0;
	}
`

const PointBody = styled.div`
	padding: 0px 16px;
`

const isOwner = (creatorId, userId) => creatorId === userId

const getAllChapters = id => ChapterService.getChaptersFromGame(id).then(allChapters => allChapters)

function EditGame({ loggedInUser, match, history }) {
	const [allChapters, setallChapters] = useState(null)
	const [showNewForm, setShowNewForm] = useState(false)
	const [simple, setSimple] = useState(null)
	const [ready, setReady] = useState(true)

	function expandChapter(idx) {
		const allChaptersCopy = [...allChapters]
		const chapterCopy = { ...allChaptersCopy[idx] }
		chapterCopy.show = !allChapters[idx].show
		allChaptersCopy.splice(idx, 1, chapterCopy)
		setallChapters(allChaptersCopy)
	}

	useEffect(() => {
		GameService.getOneGame(match.params.gameId).then(game => {
			!isOwner(game.creator, loggedInUser._id) && history.replace(`/read/${match.params.gameId}`)
			setSimple(game.simple)
		})
	}, [match.params.gameId])

	useEffect(() => {
		getAllChapters(match.params.gameId).then(chapters => {
			console.log('pues me lanzo')
			setallChapters(chapters)
			setReady(!ready)
		})
	}, [match.params.gameId])

	return (
		<>
			{!ready ? (
				<>
					<List>
						{allChapters?.map((chapter, idx) => (
							<ListPoint key={idx}>
								<PointHeader active={chapter.show} onClick={() => expandChapter(idx)}>
									<img className='arrow' src={arrowIcon}></img>
									<p>Capítulo {idx + 1}:</p>
								</PointHeader>
								<PointBody>
									{chapter.show && (
										<NewChapterForm
											simple={simple}
											chapter={chapter}
											getAllChapters={getAllChapters}
											loggedInUser={loggedInUser}
											setallChapters={setallChapters}
										></NewChapterForm>
									)}
								</PointBody>
							</ListPoint>
						))}
					</List>

					<div>
						<div style={{ margin: '10px 0' }}>
							<Button
								onClick={() => setShowNewForm(!showNewForm)}
								text={allChapters ? 'Escribe un nuevo capitulo' : 'Escribe el primer capítulo'}
							/>
						</div>
						{showNewForm && (
							<NewChapterForm
								simple={simple}
								first={!!!allChapters}
								closeNewChapterForm={() => setShowNewForm(false)}
								getAllChapters={getAllChapters}
								loggedInUser={loggedInUser}
								setallChapters={setallChapters}
							></NewChapterForm>
						)}
					</div>
				</>
			) : (
				<CustomSpinner />
			)}
		</>
	)
}

export default EditGame
