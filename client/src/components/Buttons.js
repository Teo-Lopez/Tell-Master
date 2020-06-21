import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const StyledButton = styled.button`
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border: 0.3px solid white;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    &:hover {
      background-color: rgba(44, 44, 44, 1);
      -webkit-box-shadow: 0px 10px 7px 1px rgba(252, 252, 252, 0.3);
      -moz-box-shadow: 0px 1px 7px 1px rgba(252, 252, 252, 0.3);
      box-shadow: 0px 1px 7px 1px rgba(252, 252, 252, 0.3);
      transform: scale(1.05);
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  `;

  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export const SmallButton = styled(Button)`
  width: 100px;
`;
