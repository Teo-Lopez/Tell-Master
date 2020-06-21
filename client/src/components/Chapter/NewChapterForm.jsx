import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import ChoiceForm from "../Choice/ChoiceForm";
import ChoiceCard from "../Choice/ChoiceCard";
import chapterService from "../../services/chapter.service";
import { withRouter } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function NewChapterForm(props) {
  const { updateLastGames, match, chapterId, getAllChapters, closeNewChapterForm } = props;

  const ChapterService = new chapterService();

  let gameId = match.params.gameId;

  const [description, setDescription] = useState("");
  const [choices, setChoices] = useState([]);
  const [choicesObj, setChoicesObj] = useState([]);
  const [choiceForms, setChoiceForms] = useState([]);
  const [ready, setReady] = useState(false);

  function populateThisChapter() {
    if (chapterId) {
      ChapterService.getChapter(chapterId).then((chapter) => {
        setDescription(chapter.description);
        setChoicesObj(chapter.choices);
        setChoices(chapter.choices.filter((choice) => choice._id));
        setReady(true);
      });
    }
  }

  useEffect(() => {
    populateThisChapter();
  }, []);

  function retrieveChoicesIds(id, idx) {
    const choicesCopy = [...choices];
    choicesCopy.push(id);
    setChoices(choicesCopy);
  }

  function createChoiceCard(choiceObj) {
    const choicesObjCopy = [...choicesObj];
    choicesObjCopy.push(choiceObj);
    setChoicesObj(choicesObjCopy);
  }

  function finishChoiceForm(id, idx, choiceObj) {
    retrieveChoicesIds(id, idx);
    createChoiceCard(choiceObj);
    closeChoiceForm(idx);
  }

  function closeChoiceForm(idx) {
    const choiceFormsCopy = [...choiceForms];
    choiceFormsCopy.splice(idx, 1);
    setChoiceForms(choiceFormsCopy);
  }

  function createChapter(chapter) {
    ChapterService.createChapter(chapter)
      .then((createdChapter) => {
        getAllChapters();
        updateLastGames();
      })
      .catch((err) => console.log(err));
  }

  function updateChapter(chapter) {
    ChapterService.updateChapter(chapter)
      .then((updatedChapter) => {
        updateLastGames();
        populateThisChapter();
        getAllChapters();
      })
      .catch((err) => console.log(err));
  }

  function submitForm(e) {
    e.preventDefault();
    if (chapterId) {
      updateChapter({ _id: chapterId, description, choices });
    } else {
      createChapter({ description, choices, gameId });
      closeNewChapterForm();
    }
  }

  function addChoice() {
    const choiceFormsCopy = [...choiceForms];
    choiceFormsCopy.push(true);
    setChoiceForms(choiceFormsCopy);
  }

  function toogleCard(idx) {
    console.log(idx);
    const choicesObjCopy = [...choicesObj];
    const choiceCopy = { ...choicesObjCopy[idx] };
    choiceCopy.show = !choicesObj[idx].show;
    choicesObjCopy.splice(idx, 1, choiceCopy);
    setChoicesObj(choicesObjCopy);
  }

  return chapterId && !ready ? (
    "loading"
  ) : (
    <div className=".ck-editor">
      <CKEditor
        editor={ClassicEditor}
        data={description || "El texto de tu capitulo va aquí"}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />

      <Button onClick={submitForm}>{chapterId ? "Modificar" : "Crear"}</Button>

      <Button onClick={addChoice}>Añadir elección</Button>
      <Row>
        {choicesObj.map((eachChoice, idx) => (
          <Col key={idx} lg={3}>
            {!eachChoice.show ? (
              <ChoiceCard toogleCard={toogleCard} choice={eachChoice} idx={idx} />
            ) : (
              <ChoiceForm toogleCard={toogleCard} choice={eachChoice} idx={idx} />
            )}
          </Col>
        ))}
        {choiceForms.map((eachform, idx) => (
          <Col key={idx} lg={3}>
            {React.cloneElement(<ChoiceForm />, { idx, finishChoiceForm, closeChoiceForm })}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default withRouter(NewChapterForm);