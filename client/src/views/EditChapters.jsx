import React, { useState, useEffect } from "react";
import gameService from "../services/games.service";
import NewChapterForm from "../components/Chapter/NewChapterForm";
import chapterService from "../services/chapter.service";
import { ListGroup } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const List = styled.div`
  background-color: ${(props) => props.theme.background.modals};
  border-radius: 2px;
  padding: 15px;
`;

const ListPoint = styled.div`
  border-radius: 3px;
  background-color: ${(props) => props.theme.background.list};
  padding: 15px;
  margin-bottom: 15px;
  &:hover {
  }
`;

function EditChapters({ loggedInUser, updateLastGames, match, history }) {
  const RestaurateScroll = createGlobalStyle`
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
      <RestaurateScroll />
      <List>
        {allChapters.length && (
          <div>
            <h1>Edita los capitulos ya creados</h1>
            {allChapters.map((chapter, idx) => (
              <ListPoint>
                <div  active={chapter.show} onClick={() => expandChapter(idx)}>
                  <div dangerouslySetInnerHTML={{ __html: chapter.description }} />
                </div>
                {chapter.show ? (
                  <div>
                    <NewChapterForm
                      simple={simple}
                      chapterId={chapter._id}
                      getAllChapters={getAllChapters}
                      loggedInUser={loggedInUser}
                      updateLastGames={updateLastGames}
                    ></NewChapterForm>
                  </div>
                ) : null}
              </ListPoint>
            ))}
          </div>
        )}
      </List>

      <div>
        <div>
          <h1>Escribe un nuevo capitulo</h1>
          <div onClick={() => setShowNewForm(!showNewForm)}>
            {allChapters.length ? "Escribe un nuevo capitulo" : "Escribe el primer capítulo"}
          </div>
          {showNewForm ? (
            <NewChapterForm
              simple={simple}
              closeNewChapterForm={() => setShowNewForm(false)}
              getAllChapters={getAllChapters}
              loggedInUser={loggedInUser}
              updateLastGames={updateLastGames}
            ></NewChapterForm>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default EditChapters;
