import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import characterService from "../../services/character.service";

function CharacterForm({ setCharacter, hideForm, setUser, loggedInUser }) {
  const CharacterService = new characterService();
  const [name, setName] = useState("");
  const [hp] = useState(100);
  const [str, setStr] = useState(8);
  const [des, setDes] = useState(8);
  const [agi, setAgi] = useState(8);
  const [con, setCon] = useState(8);
  const [int, setInt] = useState(8);
  const [wis, setWis] = useState(8);
  const [char, setChar] = useState(8);
  const [totalPoints, setTotalPoints] = useState(27);

  function closeForm() {
    setName("");
    hideForm();
  }

  function submitForm(e) {
    e.preventDefault();
    const newCharacter = {
      name,
      hp,
      str,
      des,
      agi,
      con,
      int,
      wis,
      char,
    };

    CharacterService.createCharacter(newCharacter).then((createdCharacter) => {
      CharacterService.assignCharacterToUser(loggedInUser._id, createdCharacter._id).then((updatedUser) => {
        setUser(updatedUser);
      });
      closeForm();
    });
  }

  function onChange(e) {
    const { name, value } = e.currentTarget;
    let newTotal = totalPoints;
    
    if (name !== "name") {
      newTotal = calculatePoints(name, value);
    }
    
    if (newTotal >= 0) {
      switch (name) {
        case "name":
          setName(value);
          break;
        case "str":
          setStr(value);
          break;
        case "des":
          setDes(value);
          break;
        case "agi":
          setAgi(value);
          break;
        case "con":
          setCon(value);
          break;
        case "int":
          setInt(value);
          break;
        case "wis":
          setWis(value);
          break;
        case "char":
          setChar(value);
          break;
        default:
          throw Error("Algo fue mal con el formulario");
      }
      setTotalPoints(newTotal);
    }
  }

  function calculatePoints(name, value) {
    let total = 27;
    const obj = { str, des, agi, con, int, wis, char };
    obj[name] = value;
    for (let key in obj) {
      total = total - (obj[key] - 8);
    }

    return total;
  }

  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId="name">
        <Form.Label>Nombre del personaje</Form.Label>
        <Form.Control onChange={onChange} value={name} name="name" type="text" placeholder="Aragor, hijo de Arathorn" />
      </Form.Group>
      {!totalPoints && (
        <p>
          <em>Has superado el máximo de puntos a repartir</em>
        </p>
      )}
      <Form.Group controlId="str">
        <Form.Label>Fuerza</Form.Label>
        <Form.Control onChange={onChange} value={str} name="str" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(str / 2 - 5)}</Form.Text>
      </Form.Group>
      <Form.Group controlId="des">
        <Form.Label>Destreza</Form.Label>
        <Form.Control onChange={onChange} value={des} name="des" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(des / 2 - 5)}</Form.Text>
      </Form.Group>
      <Form.Group controlId="agi">
        <Form.Label>Agilidad, velocidad</Form.Label>
        <Form.Control onChange={onChange} value={agi} name="agi" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(agi / 2 - 5)}</Form.Text>
      </Form.Group>
      <Form.Group controlId="con">
        <Form.Label>Constitución física, fortaleza</Form.Label>
        <Form.Control onChange={onChange} value={con} name="con" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(con / 2 - 5)}</Form.Text>
      </Form.Group>
      <Form.Group controlId="int">
        <Form.Label>Inteligencia</Form.Label>
        <Form.Control onChange={onChange} value={int} name="int" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(int / 2 - 5)}</Form.Text>
      </Form.Group>
      <Form.Group controlId="wis">
        <Form.Label>Sabiduría, astucia</Form.Label>
        <Form.Control onChange={onChange} value={wis} name="wis" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(wis / 2 - 5)}</Form.Text>
      </Form.Group>
      <Form.Group controlId="char">
        <Form.Label>Carisma</Form.Label>
        <Form.Control onChange={onChange} value={char} name="char" type="number" min={7} max={18} />
        <Form.Text>Bonificación al dado: {parseInt(char / 2 - 5)}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
  );
}

export default CharacterForm;
