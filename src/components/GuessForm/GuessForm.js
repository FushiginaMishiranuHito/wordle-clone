import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessForm({guess, setGuess, guessAttempts, setGuessAttempts, answer, isFinished, setIsWon, setIsFinished}) {

  const submitHandler = (event) => {
    event.preventDefault();
    console.info({guess});

    const newGuessAttempts = [...guessAttempts, {key: crypto.randomUUID() , value: guess}];
    setGuessAttempts(newGuessAttempts);

    if (guess === answer) {
      setIsFinished(true)
      setIsWon(true)
    } else if (guessAttempts.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setIsFinished(true)
    }

    setGuess('');
  }

  return ( 
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isFinished}
        id="guess-input" 
        type="text"
        maxLength="5" 
        value={guess}
        onChange={(event) => {setGuess(event.target.value.toUpperCase())}}
      />
    </form>
  );
}

export default GuessForm;
