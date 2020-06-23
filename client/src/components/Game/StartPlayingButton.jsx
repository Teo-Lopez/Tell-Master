import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Button } from "../Buttons";

function StartPlayingButton(props) {
  const { game, savedGames, loggedInUser } = props;
  return !game ? (
    <p>Loading game</p>
  ) : props.noUser ? (
    <section>
      <article>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        Para jugar, registrate.
      </article>
    </section>
  ) : (
    <section>
      <article>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        {loggedInUser ? (
          savedGames.length === 0 ? (
            <div>
              <p>Haz click en un personaje para empezar a jugar</p>
            </div>
          ) : (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <Button text="Continua la aventura" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {savedGames.map((save) => (
                    <Link to={`/chapter/${save._id}`}>
                      <Dropdown.Item disabled>{save.character.name}</Dropdown.Item>
                    </Link>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </>
          )
        ) : (
          <Button disabled={true}>Continuar la aventura</Button>
        )}
      </article>
    </section>
  );
}

export default StartPlayingButton;
