import React from "react";

function ChoicesList({ choices, makeChoice = () => {} }) {
  return choices.map((choice) => {
    return choice.successTargetChapter && choice.failureTargetChapter ? (
      <button onClick={makeChoice} id={choice._id}>
        {choice.description}
      </button>
    ) : (
      <button disabled onClick={makeChoice} id={choice._id}>
        {choice.description}
      </button>
    );
  });
}

export default ChoicesList;
