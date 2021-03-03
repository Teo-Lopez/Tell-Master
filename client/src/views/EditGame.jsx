import React, { useState, useEffect } from 'react'
import CustomSpinner from '../components/shared/Spinner'
import gameService from '../services/games.service'
import NewChapterForm from '../components/Chapter/NewChapterForm'
import chapterService from '../services/chapter.service'
import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '../components/shared/Buttons'
const ChapterService = new chapterService()
const GameService = new gameService()

const List = styled.div`
	background-color: ${props => props.theme.background.modals};
	border-radius: 2px;
	transition: all 2s;
`

const ListPoint = styled.div`
	border-radius: 3px;
	background-color: ${props => props.theme.background.list};
	padding: 15px;
	margin-bottom: 15px;
	transition: all 2s;
	&:hover {
	}
`

const PointHeader = styled.div`
	cursor: pointer;
`

const isOwner = (creatorId, userId) => creatorId === userId

const getAllChapters = id => ChapterService.getChaptersFromGame(id).then(allChapters => allChapters)
const RestaurateScroll = createGlobalStyle`
    html, body {
      overflow: auto
    }
  `

function EditGame({ loggedInUser, match, history }) {
	const [allChapters, setallChapters] = useState(null)
	const [showNewForm, setShowNewForm] = useState(false)
	const [simple, setSimple] = useState(null)
	const [fetch, setFetch] = useState(true)

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
			setFetch(!fetch)
		})
	}, [match.params.gameId])

	return (
		<>
			{!fetch ? (
				<>
					<List>
						{allChapters?.map((chapter, idx) => (
							<ListPoint key={idx}>
								<PointHeader active={chapter.show} onClick={() => expandChapter(idx)}>
									Capítulo {idx + 1}:
								</PointHeader>
								{chapter.show && (
									<NewChapterForm
										simple={simple}
										chapter={chapter}
										getAllChapters={getAllChapters}
										loggedInUser={loggedInUser}
										setallChapters={setallChapters}
									></NewChapterForm>
								)}
							</ListPoint>
						))}
					</List>

					<div>
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
					</div>
				</>
			) : (
				<CustomSpinner />
			)}
		</>
	)
}

export default EditGame
