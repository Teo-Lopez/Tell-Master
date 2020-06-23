import React, { useContext } from "react";

import { withRouter } from "react-router-dom";
import UserContext from "../../UserContext";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function GameBriefing(props) {
  const { game, savedGames } = props;
  const loggedInUser = useContext(UserContext);

  return props.noUser ? (
    !game ? (
      <p>Loading game</p>
    ) : (
      <section>
        <article>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
          <Dropdown>
            <Dropdown.Toggle variant="failure" id="dropdown-basic">
              Para jugar, registrate.
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </article>
      </section>
    )
  ) : !game ? (
    <p>loading game</p>
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
                  Continua la aventura
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
          <button disabled={true}>Continuar la aventura</button>
        )}
      </article>
    </section>
  );
}

export default withRouter(GameBriefing);
