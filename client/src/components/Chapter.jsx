import React, { useContext } from "react";
import UserContext from "../UserContext";
import characterChoicesService from "../services/characterChoices.service";
import { withRouter } from "react-router-dom";

function Chapter(props) {
  const CharacterChoiceService = new characterChoicesService();
  const loggedInUser = useContext(UserContext);
  const { currentChapter, character } = props.game;

  function makeChoice(e) {
    CharacterChoiceService.makeChoice(props.game._id, e.currentTarget.id, character._id).then((result) => {
      console.log(result);
      props.updateChapter();
    });
  }

  return (
    <div>
      <p>{currentChapter.description}</p>
      {currentChapter.choices.map((choice) => {
        return choice.successTargetChapter && choice.failureTargetChapter ? (
          <button onClick={makeChoice} id={choice._id}>
            {choice.description}
          </button>
        ) : (
          <button disabled onClick={makeChoice} id={choice._id}>
            {choice.description}
          </button>
        );
      })}
    </div>
  );
}

export default withRouter(Chapter);
