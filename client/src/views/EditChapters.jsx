import React, { useState, useEffect } from "react";
import gameService from "../services/games.service";
import NewChapterForm from "../components/Chapter/NewChapterForm";
import chapterService from "../services/chapter.service";
import { ListGroup } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

function EditChapters({ loggedInUser, updateLastGames, match, history }) {
  const OverrideScroll = createGlobalStyle`
    html, body {
      overflow: auto
    }
  `;

  const ChapterService = new chapterService();
  const GameService = new gameService();
  const [allChapters, setallChapters] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);
  const [simple, setSimple] = useState(null);
  function checkOwnership() {
    GameService.getOneGame(match.params.gameId).then((game) => {
      setSimple(game.simple);
      if (!(game.creator === loggedInUser._id)) history.replace(`/read/${match.params.gameId}`);
    });
  }

  function getAllChapters() {
    ChapterService.getChaptersFromGame(match.params.gameId).then((allChapters) => {
      setallChapters(allChapters);
    });
  }

  function expandChapter(idx) {
    const allChaptersCopy = [...allChapters];
    const chapterCopy = { ...allChaptersCopy[idx] };
    chapterCopy.show = !allChapters[idx].show;
    allChaptersCopy.splice(idx, 1, chapterCopy);
    setallChapters(allChaptersCopy);
  }

  useEffect(() => {
    checkOwnership();
  }, [loggedInUser]);

  useEffect(() => {
    getAllChapters();
  }, []);

  return (
    <>
      <OverrideScroll />
      <ListGroup>
        {allChapters.map((chapter, idx) => (
          <>
            <ListGroup.Item active={chapter.show} onClick={() => expandChapter(idx)}>
              <div dangerouslySetInnerHTML={{ __html: chapter.description }} />
            </ListGroup.Item>
            {chapter.show ? (
              <ListGroup.Item>
                <NewChapterForm
                  simple={simple}
                  chapterId={chapter._id}
                  getAllChapters={getAllChapters}
                  loggedInUser={loggedInUser}
                  updateLastGames={updateLastGames}
                ></NewChapterForm>
              </ListGroup.Item>
            ) : null}
          </>
        ))}
        <ListGroup.Item onClick={() => setShowNewForm(!showNewForm)}>O escribe un nuevo capitulo</ListGroup.Item>
        {showNewForm ? (
          <NewChapterForm
            simple={simple}
            closeNewChapterForm={() => setShowNewForm(false)}
            getAllChapters={getAllChapters}
            loggedInUser={loggedInUser}
            updateLastGames={updateLastGames}
          ></NewChapterForm>
        ) : null}
      </ListGroup>
    </>
  );
}

export default EditChapters;