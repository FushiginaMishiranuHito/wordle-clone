import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import GameResult from '../GameResult/GameResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guessAttempts, setGuessAttempts] = React.useState([])
  const [isWon, setIsWon] = React.useState(false)
  const [isFinished, setIsFinished] = React.useState(false)

  return <>
    <GuessResults wordsArray={guessAttempts.map(word => word.value)} answer={answer} />
    <GuessForm guess={guess} setGuess={setGuess} guessAttempts={guessAttempts} setGuessAttempts={setGuessAttempts} answer={answer} isFinished={isFinished} setIsWon={setIsWon} setIsFinished={setIsFinished}/>
    <GameResult isFinished={isFinished} isWon={isWon} answer={answer} guessAttempts={guessAttempts}/>
  </>;
}

export default Game;
