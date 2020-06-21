import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BackgroundImage } from "../Images";
import EasyDice from "./assets/d6book.svg";
import D20Dice from "./assets/d20.svg";

function ModeSelect(props) {
  const { setMode } = props;
  const ModeWrapper = styled(Row)`
    align-items: center;
    height: calc(60vh);
  `;
  const ModeBox = styled(Col)`
    text-align: center;
    font-size: 3rem;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      p {
        text-shadow: 0px 10px 10px white;
        border-top: 1px solid white;
      }
    }
  `;

  const LeftBackgroundImage = styled(BackgroundImage)`
    position: absolute;
    left: 0px;
    top: -40px;
    max-height: 200px;
    max-width: 200px;
    transform: rotate(-15deg);
  `;

  const RightBackgroundImage = styled(BackgroundImage)`
    position: absolute;
    right: 0px;
    top: -40px;
    max-height: 200px;
    max-width: 200px;
    transform: rotate(15deg);
  `;

  return (
    <ModeWrapper>
      <ModeBox onClick={() => setMode(true)}>
        <LeftBackgroundImage src={EasyDice} />
        <p>Historia simple</p>
      </ModeBox>
      <ModeBox onClick={() => setMode(false)}>
        <RightBackgroundImage src={D20Dice} />
        <p>Aventura de Rol</p>
      </ModeBox>
    </ModeWrapper>
  );
}

export default ModeSelect;
