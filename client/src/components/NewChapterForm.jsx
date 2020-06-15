import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ChoiceForm from "./ChoiceForm";
import gamesService from "../services/games.service";
import chapterService from "../services/chapter.service";
import choicesService from "../services/choices.service";

import { withRouter } from "react-router-dom";

function NewChapterForm(props) {
  const { loggedInUser, updateLastGames, match, location, history } = props;
  const GamesService = new gamesService();
  const ChapterService = new chapterService();

  const gameId = match.params.gameId;
  const [description, setDescription] = useState("");
  const [choices, setChoices] = useState([]);
  const [choiceForms, setChoiceForms] = useState([]);

  function retrieveChoicesIds(id) {
    const choicesCopy = [...choices];
    if (choicesCopy.includes(id)) {
      const idx = choicesCopy.indexOf(id);
      choicesCopy.splice(idx, 1);
    } else {
      choicesCopy.push(id);
      setChoices(choicesCopy);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    ChapterService.createChapter({ description, choices, gameId })
      .then((createdChapter) => {
        updateLastGames();
        console.log(createdChapter);
      })
      .catch((err) => console.log(err))
      .finally(() => history.push("/"));
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
    choiceFormsCopy.push(<ChoiceForm retrieveChoicesIds={retrieveChoicesIds} />);
    setChoiceForms(choiceFormsCopy);
  }

  return (
    <div>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="description">
          <Form.Label>Escribe tu nuevo capitulo:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            onChange={onChange}
            value={description}
            placeholder="En un lugar de la Costa de la Espada, de cuyo nombre no quiero acordarme..."
          />
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
      <Button onClick={addChoice}>Añadir elección</Button>
      <Row>
        {choiceForms.map((eachform, key) => (
          <Col key={key} lg={4}>
            {eachform}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default withRouter(NewChapterForm);
