import React from "react";
import characterChoicesService from "../../services/characterChoices.service";
import { withRouter } from "react-router-dom";

function Chapter(props) {
  const CharacterChoiceService = new characterChoicesService();
  const { currentChapter, character } = props.game;

  function makeChoice(e) {
    CharacterChoiceService.makeChoice(props.game._id, e.currentTarget.id, character._id).then((result) => {
      console.log(result);
      props.updateChapter();
    });
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: currentChapter.description }}></div>
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
