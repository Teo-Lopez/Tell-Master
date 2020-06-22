import React, { useState, useEffect } from "react";
import choicesService from "../../services/choices.service";
import chapterService from "../../services/chapter.service";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const ChoiceFormWrapper = styled.div`
  border: ${(props) => "1px solid " + props.theme.colors.general};
  margin: 15px 0;
  color: ${(props) => props.theme.colors.light};
  form {
    border-top: 1px solid rgba(200, 200, 200, 1);
    background-color: ${(props) => props.theme.background.modals};
  }
`;

const Row = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background.modals};
  padding: 10px;
`;

const Col4 = styled.div`
  width: 25%;
  /* background-color: ${(props) => props.theme.background.modals}; */
`;

function ChoiceFormRow(props) {
  const { finishChoiceForm, idx, choice, toogleCard, closeChoiceForm, match, simple } = props;
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
    if (choice && simple) {
      choice.trial = { difficulty: -10, characteristic: "str" };
      choice.description = description;
      choice.pxGranted = 0;
      choice.successTargetChapter = successTargetChapter;
      choice.failureTargetChapter = successTargetChapter;
      updateChoice(choice);
    } else if (choice) {
      choice.trial = trial;
      choice.description = description;
      choice.pxGranted = pxGranted;
      choice.successTargetChapter = successTargetChapter;
      choice.failureTargetChapter = failureTargetChapter;
      updateChoice(choice);
    } else if (simple) {
      console.log("creación simple");
      const newChoice = {
        description,
        trial: { difficulty: -10, characteristic: "str" },
        pxGranted: 0,
        successTargetChapter,
        failureTargetChapter: successTargetChapter,
      };
      console.log(newChoice, "choice pa tu body");
      createChoice(newChoice);
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
    <ChoiceFormWrapper>
      <Row>
        <div
          onClick={() => {
            closeChoiceForm ? closeChoiceForm(idx) : toogleCard(idx);
          }}
          style={{
            borderRadius: "5px",
            padding: "2px",
            marginRight: "20px",
            height: "30px",
            width: "30px",
            backgroundColor: "red",
            textAlign: "center",
          }}
        >
          <i className="fas fa-times"></i>
        </div>
        <div
          onClick={submitForm}
          style={{
            borderRadius: "5px",
            padding: "2px",
            marginRight: "20px",
            height: "30px",
            width: "30px",
            backgroundColor: "green",
            textAlign: "center",
          }}
        >
          <i className="fas fa-check"></i>
        </div>
      </Row>
      <form onSubmit={submitForm} className="choiceForm">
        <Row>
          <Col4>
            <label>
              Describe la elección:
              <input id="description" name="description" onChange={onChange} value={description} placeholder="Fuerzo la puerta" />
            </label>
          </Col4>
          <Col4>
            {!simple && (
              <>
                <label>
                  ¿Que dificultad tiene?
                  <input
                    id="difficulty"
                    type="number"
                    name="difficulty"
                    onChange={onChange}
                    value={difficulty}
                    placeholder="Fuerzo la puerta"
                  />
                </label>
                {choice ? null : (
                  <small>
                    Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prodígios.
                  </small>
                )}
                <label>
                  ¿Qué caracteristica es necesaria para superarla?
                  <select id="characteristic" onChange={onChange} name="characteristic">
                    <option value="str">Fuerza</option>
                    <option value="des">Destreza</option>
                    <option value="agi">Agilidad, velocidad</option>
                    <option value="con">Constitución física</option>
                    <option value="int">Inteligencia</option>
                    <option value="wis">Sabiduría</option>
                    <option value="char">Carisma</option>
                  </select>
                </label>
              </>
            )}
          </Col4>
          <Col4>
            {!simple && (
              <label>
                Cuanta experiencia da el éxito:
                <input id="pxGranted" name="pxGranted" onChange={onChange} value={pxGranted} placeholder="100" type="number" />
              </label>
            )}
          </Col4>
          <Col4>
            <label>
              {!simple ? "Cap de destino con exito:" : "Cap de destino"}
              <select id="successTargetChapter" name="successTargetChapter" onChange={onChange}>
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
              </select>
            </label>

            {!simple && (
              <label>
                Cap de destino con fracaso:
                <select id="failuterTargetChapter" as="select" name="failureTargetChapter" custom onChange={onChange}>
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
                </select>
              </label>
            )}
          </Col4>
        </Row>
      </form>
    </ChoiceFormWrapper>
  );
}

export default withRouter(ChoiceFormRow);
