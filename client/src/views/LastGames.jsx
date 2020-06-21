import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import playingTable from "./assets/playingTable.png";
import "./LastGames.css";

const MainsSectionWrapper = styled.section`
  background-color: rgba(255, 255, 255, 0.01);
  text-align: center;
  height: 80vh;
  padding-top: 40px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const upwardTransition = keyframes`
    from {
      opacity: 0;
      transform: translateY(1000px)
    }
    
    to {
      opacity: 1;
      transform: translateY(0px)
    }
  `;

const imgTransition = keyframes`
    from {
      transform: translateY(1000px) rotate(0deg)
    }
    
    to {
      rotate(-15deg)
      /* rotate(-15deg) */
      transform: translateY(0px) rotate(-15deg)
    }
    `;

const Background = styled.img`
  position: absolute;
  left: 5%;
  top: 100px;
  z-index: -9000;
  transform: rotate(-15deg);
  opacity: 0.5;
  filter: blur(1px);
  filter: contrast(70%);
  animation: ${imgTransition} 3s cubic-bezier(0.71, 0.57, 0.46, 0.92);
`;

const MainSection = styled.article`
  margin: 20px;
  transform: translateY();
  animation: ${upwardTransition} 4s ease-out;
`;

const appear = keyframes`
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    `;

const Title = styled.h1`
  font-size: 3em;
  animation: ${appear} 5s ease-out;
  color: rgb(200, 200, 200);
  font-weight: 900;
  letter-spacing: 5px;
  text-align: center;
`;

const GameCard = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 2px;

  p {
    font-size: 1.2em;
  }

  &:hover {
    h2 {
      font-size: 1.4em;
    }
    font-size: 1.3em;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function LastGames({ games, loggedInUser }) {
  return (
    <div id="container1" style={{ overflow: "hidden" }}>
      <Title>Últimas historias</Title>
      <MainsSectionWrapper id="container2">
        <Background src={playingTable} />
        <MainSection>
          {games.map((game, idx) => (
            <Link to={loggedInUser && loggedInUser._id === game.creator ? `/modify/${game._id}` : `/read/${game._id}`}>
              <GameCard key={idx}>
                <h2>{game.title}</h2>
                <em>Nivel minimo: {game.minLevel}</em>
                <p>{game.description.slice(0, 350)}</p>
              </GameCard>
            </Link>
          ))}
        </MainSection>
      </MainsSectionWrapper>
    </div>
  );
}

export default LastGames;
