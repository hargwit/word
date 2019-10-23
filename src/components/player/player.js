import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Guesser } from '../input/guesser/guesser'

const Player = ({ number }) => {
  const [guesses, setGuesses] = useState([])

  const addGuess = guess => {
    setGuesses([...guesses, guess])
  }

  return (
    <div>
      <h2>Player {number}</h2>
      <div>
        {guesses.map((guess, i) => (
          <div key={i}>
            <p>{guess.word}</p>
            <p>{guess.letters}</p>
          </div>
        ))}
      </div>
      <Guesser addGuess={addGuess} autocomplete={number === 2} myWord='word' />
    </div>
  )
}

Player.propTypes = {
  number: PropTypes.number.isRequired,
}

export { Player }
