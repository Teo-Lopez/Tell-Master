import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import characterService from "../../services/character.service";

function CharacterForm({ setCharacter, hideForm, setUser, loggedInUser }) {
  const CharacterService = new characterService();
  console.log(characterService);
  const [name, setName] = useState("");
  const [hp] = useState(100);
  const [str, setStr] = useState(10);
  const [des, setDes] = useState(10);
  const [agi, setAgi] = useState(10);
  const [int, setInt] = useState(10);
  const [wis, setWis] = useState(10);
  const [char, setChar] = useState(10);

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
  }

  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId="name">
        <Form.Label>Nombre del personaje</Form.Label>
        <Form.Control onChange={onChange} value={name} name="name" type="text" placeholder="Aragor, hijo de Arathorn" />
      </Form.Group>

      <Form.Group controlId="str">
        <Form.Label>Fuerza</Form.Label>
        <Form.Control onChange={onChange} value={str} name="str" type="number" />
      </Form.Group>
      <Form.Group controlId="des">
        <Form.Label>Destreza</Form.Label>
        <Form.Control onChange={onChange} value={des} name="des" type="number" />
      </Form.Group>
      <Form.Group controlId="agi">
        <Form.Label>Agilidad, velocidad</Form.Label>
        <Form.Control onChange={onChange} value={agi} name="agi" type="number" />
      </Form.Group>
      <Form.Group controlId="int">
        <Form.Label>Inteligencia</Form.Label>
        <Form.Control onChange={onChange} value={int} name="int" type="number" />
      </Form.Group>
      <Form.Group controlId="wis">
        <Form.Label>Sabiduría, astucia</Form.Label>
        <Form.Control onChange={onChange} value={wis} name="wis" type="number" />
      </Form.Group>
      <Form.Group controlId="char">
        <Form.Label>Carisma</Form.Label>
        <Form.Control onChange={onChange} value={char} name="char" type="number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
  );
}

export default CharacterForm;
