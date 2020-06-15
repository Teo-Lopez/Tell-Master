import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import choicesService from "../services/choices.service";

function ChoiceForm({ className, retrieveChoicesIds }) {
  const ChoicesService = new choicesService();
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState(10);
  const [characteristic, setCharacteristic] = useState("str");
  const [pxGranted, setPxGranted] = useState(0);

  function submitForm(e) {
    e.preventDefault();
    const trial = { difficulty, characteristic };
    ChoicesService.createChoice({ description, trial, pxGranted }).then((createdChoice) => {
      retrieveChoicesIds(createdChoice._id);
    });
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
      default:
        throw Error("Algo ha ido mal con el formulario");
    }
  }

  return (
    <Card>
      <Form onSubmit={submitForm} className="choiceForm">
        <Card.Body>
          <Form.Group controlId="choice">
            <Form.Label>Describe la elección:</Form.Label>
            <Form.Control name="description" onChange={onChange} value={description} placeholder="Fuerzo la puerta" />

            <Form.Label>¿Que dificultad tiene?</Form.Label>
            <Form.Control type="number" name="difficulty" onChange={onChange} value={difficulty} placeholder="Fuerzo la puerta" />
            <Form.Text>
              Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prodígios.
            </Form.Text>
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
        <Card.Footer>
          <Button type="submit" size="sm">
            Finalizar
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}

export default ChoiceForm;
