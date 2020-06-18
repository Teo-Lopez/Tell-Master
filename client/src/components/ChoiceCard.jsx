import React from "react";
import { Card } from "react-bootstrap";
function ChoiceCard({ choice, idx, toogleCard }) {
  function returnCharacteristic(characteristic) {
    let result;
    switch (characteristic) {
      case "str":
        result = "Fuerza";
        break;
      case "des":
        result = "Destreza";
        break;
      case "agi":
        result = "Agilidad, velocidad";
        break;
      case "con":
        result = "Constitución";
        break;
      case "wis":
        result = "Sabiduría";
        break;
      case "int":
        result = "Inteligencia";
        break;
      case "char":
        result = "Carisma";
        break;
      default:
        throw Error("algo fue mal con la card de la choice");
    }
    return result;
  }

  return (
    <Card>
      <Card.Header onClick={() => toogleCard(idx)}>Editar</Card.Header>
      <Card.Body>
        <p>{choice.description}</p>
        <p>{returnCharacteristic(choice.trial.characteristic)}</p>
        <p>{choice.trial.difficulty}</p>
        <p>{choice.pxGranted}</p>
      </Card.Body>
    </Card>
  );
}

export default ChoiceCard;
