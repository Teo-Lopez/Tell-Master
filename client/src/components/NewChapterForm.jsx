import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ChoiceForm from "./ChoiceForm";
import chapterService from "../services/chapter.service";
import ChoiceCard from "./ChoiceCard";
import { withRouter } from "react-router-dom";

function NewChapterForm(props) {
  const { updateLastGames, match, chapterId } = props;

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
    console.log("render");
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
        updateLastGames();
        console.log(createdChapter);
      })
      .catch((err) => console.log(err));
  }

  function updateChapter(chapter) {
    ChapterService.updateChapter(chapter)
      .then((updatedChapter) => {
        updateLastGames();
        populateThisChapter();
        console.log(updatedChapter);
      })
      .catch((err) => console.log(err));
  }

  function submitForm(e) {
    e.preventDefault();
    chapterId ? updateChapter({ _id: chapterId, description, choices }) : createChapter({ description, choices, gameId });
  }

  function onChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      default:
        throw Error("Algo ha ido mal con el formulario");
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
    <div>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="description">
          <Form.Label>Texto</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={onChange}
            value={description}
            placeholder="En un lugar de la Costa de la Espada, de cuyo nombre no quiero acordarme..."
          />
        </Form.Group>
        <Button type="submit">{chapterId ? "Modificar" : "Crear"}</Button>
      </Form>
      <Button onClick={addChoice}>Añadir elección</Button>
      <Row>
        {choicesObj.map((eachChoice, idx) => (
          <Col key={idx} lg={4}>
            {!eachChoice.show ? (
              <ChoiceCard toogleCard={toogleCard} choice={eachChoice} idx={idx} />
            ) : (
              <ChoiceForm toogleCard={toogleCard} choice={eachChoice} idx={idx} />
            )}
          </Col>
        ))}
        {choiceForms.map((eachform, idx) => (
          <Col key={idx} lg={4}>
            {React.cloneElement(<ChoiceForm />, { idx, finishChoiceForm, closeChoiceForm })}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default withRouter(NewChapterForm);
