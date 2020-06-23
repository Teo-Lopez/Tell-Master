import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import useSound from "use-sound";
import styled from "styled-components";

const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  height: 360px;
  left: calc(50% - 360px);
  top: 50%;
`;

function DiceAnimation(props) {
  const { hideAnimation, sprite, sound } = props;
  const [playDice] = useSound(sound);

  return (
    <AnimationWrapper>
      <Spritesheet
        className={`my-element__class--style`}
        image={sprite}
        widthFrame={320}
        heightFrame={180}
        steps={12}
        fps={10}
        autoplay={true}
        loop={false}
        endAt={12}
        backgroundSize="cover"
        backgroundPosition="center center"
        onPlay={(spritesheet) => {
          console.log("init");
          playDice();
        }}
        onPause={(spritesheet) => {
          setTimeout(() => {
            hideAnimation();
          }, 1000);
        }}
      />
    </AnimationWrapper>
  );
}

export default DiceAnimation;
