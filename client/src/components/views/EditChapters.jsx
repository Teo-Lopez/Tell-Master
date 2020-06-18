import React, { useState, useEffect } from "react";
import NewChapterForm from "../NewChapterForm";
import chapterService from "../../services/chapter.service";
import { ListGroup } from "react-bootstrap";

function EditChapters({ loggedInUser, updateLastGames, match }) {
  const ChapterService = new chapterService();
  const [allChapters, setallChapters] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);

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
    getAllChapters();
  }, []);

  return (
    <>
      <ListGroup>
        {allChapters.map((chapter, idx) => (
          <>
            <ListGroup.Item active={chapter.show} onClick={() => expandChapter(idx)}>
              {chapter.description}
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
          <NewChapterForm getAllChapters={getAllChapters} loggedInUser={loggedInUser} updateLastGames={updateLastGames}></NewChapterForm>
        ) : null}
      </ListGroup>
    </>
  );
}

export default EditChapters;
