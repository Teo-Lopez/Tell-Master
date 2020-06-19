import React, { useState, useEffect } from "react";
import gameService from "../../services/games.service";
import NewChapterForm from "../NewChapterForm";
import chapterService from "../../services/chapter.service";
import { ListGroup } from "react-bootstrap";

function EditChapters({ loggedInUser, updateLastGames, match, history }) {
  const ChapterService = new chapterService();
  const GameService = new gameService();
  const [allChapters, setallChapters] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);

  function checkOwnership() {
    GameService.getOneGame(match.params.gameId).then((game) => {
      if (!(game.creator == loggedInUser._id)) history.replace(`/read/${match.params.gameId}`);
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
      <ListGroup>
        {allChapters.map((chapter, idx) => (
          <>
            <ListGroup.Item active={chapter.show} onClick={() => expandChapter(idx)}>
              <div dangerouslySetInnerHTML={{ __html: chapter.description }} />
            </ListGroup.Item>
            {chapter.show ? (
              <ListGroup.Item>
                <NewChapterForm
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
