import React, { useState } from "react";
import characterChoicesService from "../../services/characterChoices.service";
import { withRouter } from "react-router-dom";
import DiceAnimation from "./DiceAnimation";
import ChoicesList from "../Choice/ChoicesList";
import r01 from "./assets/diceSprites/r01.png";
import r02 from "./assets/diceSprites/r02.png";
import r03 from "./assets/diceSprites/r03.png";
import r04 from "./assets/diceSprites/r04.png";
import r05 from "./assets/diceSprites/r01.png";
import r06 from "./assets/diceSprites/r01.png";
import r07 from "./assets/diceSprites/r07.png";
import r08 from "./assets/diceSprites/r08.png";
import r09 from "./assets/diceSprites/r09.png";
import r10 from "./assets/diceSprites/r10.png";
import r11 from "./assets/diceSprites/r11.png";
import r12 from "./assets/diceSprites/r12.png";
import r13 from "./assets/diceSprites/r13.png";
import r14 from "./assets/diceSprites/r14.png";
import r15 from "./assets/diceSprites/r15.png";
import r16 from "./assets/diceSprites/r16.png";
import r17 from "./assets/diceSprites/r17.png";
import r18 from "./assets/diceSprites/r18.png";
import r19 from "./assets/diceSprites/r19.png";
import r20 from "./assets/diceSprites/r20.png";
import rollSound from "./assets/diceRoll.mp3";
const rollSprites = {
  "1": r01,
  "2": r02,
  "3": r03,
  "4": r04,
  "5": r05,
  "6": r06,
  "7": r07,
  "8": r08,
  "9": r09,
  "10": r10,
  "11": r11,
  "12": r12,
  "13": r13,
  "14": r14,
  "15": r15,
  "16": r16,
  "17": r17,
  "18": r18,
  "19": r19,
  "20": r20,
};

function Chapter(props) {
  const CharacterChoiceService = new characterChoicesService();
  const { currentChapter, character } = props.game;
  const [sprite, setSprite] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  function makeChoice(e) {
    CharacterChoiceService.makeChoice(props.game._id, e.currentTarget.id, character._id).then((result) => {
      setSprite(rollSprites[result.roll]);
      setShowAnimation(true);
      // setTimeout(() => {
      props.updateChapterOnSave();
      // }, 6000);
    });
  }

  return (
    <div>
      {showAnimation && <DiceAnimation sprite={sprite} sound={rollSound} hideAnimation={() => setShowAnimation(false)} />}
      <div dangerouslySetInnerHTML={{ __html: currentChapter.description }}></div>
      <ChoicesList makeChoice={makeChoice} choices={currentChapter.choices} />
    </div>
  );
}

export default withRouter(Chapter);
