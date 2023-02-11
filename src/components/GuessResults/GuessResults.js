import React from "react";
import {range} from '..//..//utils'
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({wordsArray, answer}) {
  const guessHandler = (userGuess, answer, doesGuessExist) => {
    const answerStatus = checkGuess(userGuess, answer);
    return doesGuessExist
      ? (range(5).map(num => (
        <span className={"cell " + answerStatus[num].status} key={"cell" + num}>{answerStatus[num].letter}</span>
      )))
      : (range(5).map(cellNum => (
        <span className="cell" key={"cell" + cellNum}>
        </span>
      )))
  }

  return (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((rowNum) => (
      <p className="guess" key={"row" + rowNum}>
        {guessHandler(wordsArray[rowNum], answer, wordsArray[rowNum] !== undefined)}
      </p>
    ))}
  </div>
  )
}

export default GuessResults;

/* range(5).map(cellNum => (
  <span className="cell" key={"cell" + cellNum}>
    {(wordsArray[rowNum].charAt(cellNum))}
  </span>)
) */

/* {guessAttempts.map(word => (
  <p className="guess" key={word.value + word.index}>{word.value}</p>
))} */

/*  */