import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { playAgain } from "./actions";
import "./GameOver.scss";

function GameOver({ player, opponent, match, playAgain, game }) {
  const [ email, setEmail ] = useState("");

  useEffect(() => {
    if (game.state !== "stopped") {
      return;
    }

    checkForWinner();
  }, [ game ]);

  async function checkForWinner() {
    const response = await fetch("")
      .catch(err => console.log(err));

    if (!response) {
      return;
    }
    
    const data = await response.json();
  }

  function emailSubmitHandler(event) {
    event.preventDefault();
    const data = {
      email
    };

    fetch("", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  return (
    <div className="game-over screen">
      <h1 className="game-over__title">Game Over</h1>
      { game.state !== "stopped" && 
        <>
        { match.winner === player.uuid
          ? <>
              <h2 className="game-over__sub-title">Congrats, { player.username }!<br />
              You beat { opponent.username }!</h2>
            </>
          : <>
              <h2 className="game-over__sub-title">Oh no, { player.username }!<br />
              You lost to { opponent.username }!</h2>
            </>
        }
        <button className="game-over__action" onClick={ playAgain }>Play again</button>
        </>
      }
      { game.state === "stopped" &&
        <>
          <h2 className="game-over__sub-title">I hope you had fun. See ya next year!</h2>
          <h3>Congratulations, you've made it into the top 10!</h3>
          <a href="#" className="game-over__action">Claim your prize</a>
        </>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    playAgain: () => {
      dispatch(playAgain());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);