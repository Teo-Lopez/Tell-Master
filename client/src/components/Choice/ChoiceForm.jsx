import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import choicesService from "../../services/choices.service";
import chapterService from "../../services/chapter.service";
import { withRouter } from "react-router-dom";

function ChoiceForm({ finishChoiceForm, idx, choice, toogleCard, closeChoiceForm, match }) {
  const ChapterService = new chapterService();
  const ChoicesService = new choicesService();
  const [description, setDescription] = useState(choice ? choice.description : "");
  const [difficulty, setDifficulty] = useState(choice ? choice.trial.difficulty : 10);
  const [characteristic, setCharacteristic] = useState(choice ? choice.trial.characteristic : "str");
  const [pxGranted, setPxGranted] = useState(choice ? choice.pxGranted : 0);
  const [successTargetChapter, setSuccessTargetChapter] = useState(choice ? choice.successTargetChapter : null);
  const [failureTargetChapter, setFailureTargetChapter] = useState(choice ? choice.failureTargetChapter : null);
  const [chapterList, setChapterList] = useState([]);

  useEffect(() => {
    ChapterService.getChaptersFromGame(match.params.gameId).then((chapterList) => {
      setChapterList(chapterList);
    });
  }, [match.params.gameId]);

  function createChoice(choice) {
    ChoicesService.createChoice(choice).then((createdChoice) => {
      finishChoiceForm(createdChoice._id, idx, createdChoice);
    });
  }

  function updateChoice(choice) {
    ChoicesService.updateChoice(choice).then((updatedChoice) => {
      toogleCard(idx);
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const trial = { difficulty, characteristic };
    if (choice) {
      choice.trial = trial;
      choice.description = description;
      choice.pxGranted = pxGranted;
      choice.successTargetChapter = successTargetChapter;
      choice.failureTargetChapter = failureTargetChapter;
      updateChoice(choice);
    } else {
      const newChoice = { description, trial, pxGranted, successTargetChapter, failureTargetChapter };
      createChoice(newChoice);
    }
  }

  function onChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "difficulty":
        setDifficulty(value);
        break;
      case "characteristic":
        console.log(value);
        setCharacteristic(value);
        break;
      case "pxGranted":
        console.log(value);
        setPxGranted(value);
        break;
      case "successTargetChapter":
        console.log(value);
        setSuccessTargetChapter(value);
        break;
      case "failureTargetChapter":
        console.log(value);
        setFailureTargetChapter(value);
        break;
      default:
        throw Error("Algo ha ido mal con el formulario");
    }
  }

  return (
    <Card>
      <Form onSubmit={submitForm} className="choiceForm">
        <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => {
              closeChoiceForm ? closeChoiceForm(idx) : toogleCard(idx);
            }}
            style={{ width: "40px" }}
            variant="danger"
          >
            <i className="fas fa-times"></i>
          </Button>
          <Button type="submit" style={{ width: "40px" }} variant="success">
            <i className="fas fa-check"></i>
          </Button>
        </Card.Header>
        <Card.Body>
          <Form.Group controlId="choice">
            <Form.Label>Describe la elección:</Form.Label>
            <Form.Control name="description" onChange={onChange} value={description} placeholder="Fuerzo la puerta" />

            <Form.Label>¿Que dificultad tiene?</Form.Label>
            <Form.Control type="number" name="difficulty" onChange={onChange} value={difficulty} placeholder="Fuerzo la puerta" />
            {choice ? null : (
              <Form.Text>
                Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prodígios.
              </Form.Text>
            )}
            <Form.Label>¿Qué caracteristica es necesaria para superarla?</Form.Label>
            <Form.Control onChange={onChange} name="characteristic" as="select" custom>
              <option value="str">Fuerza</option>
              <option value="des">Destreza</option>
              <option value="agi">Agilidad, velocidad</option>
              <option value="con">Constitución física</option>
              <option value="int">Inteligencia</option>
              <option value="wis">Sabiduría</option>
              <option value="char">Carisma</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="choice">
            <Form.Label>Cuanta experiencia da el éxito:</Form.Label>
            <Form.Control name="pxGranted" onChange={onChange} value={pxGranted} placeholder="100" type="number" />
          </Form.Group>
        </Card.Body>
        <Form.Group controlId="successTargetChapter">
          <Form.Label>Cap de destino con exito:</Form.Label>
          <Form.Control as="select" custom name="successTargetChapter" onChange={onChange}>
            <option value="null">Ninguno</option>
            {chapterList.map((chapter) =>
              chapter._id === successTargetChapter ? (
                <option selected value={chapter._id}>
                  {chapter.description}
                </option>
              ) : (
                <option value={chapter._id}>{chapter.description}</option>
              )
            )}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="failureTargetChapter">
          <Form.Label>Cap de destino con fracaso:</Form.Label>
          <Form.Control as="select" name="failureTargetChapter" custom onChange={onChange}>
            <option value="null">Ninguno</option>
            {chapterList.map((chapter) =>
              chapter._id === failureTargetChapter ? (
                <option selected value={chapter._id}>
                  {chapter.description}
                </option>
              ) : (
                <option value={chapter._id}>{chapter.description}</option>
              )
            )}
          </Form.Control>
        </Form.Group>
      </Form>
    </Card>
  );
}

export default withRouter(ChoiceForm);
