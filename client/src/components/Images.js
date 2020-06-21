import React from "react";
import styled from "styled-components";

const ImageFiltered = styled.img`
  z-index: -9000;
  opacity: 0.5;
  filter: blur(1px);
  filter: contrast(80%);
`;

export const BackgroundImage = (props) => {
  return <ImageFiltered {...props} />;
};
