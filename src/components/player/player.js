import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Guesser } from '../input/guesser/guesser'
import { FlexBox } from '../layout/flex-box'

const Player = ({ number }) => {
  const [guesses, setGuesses] = useState([])

  const addGuess = guess => {
    setGuesses([...guesses, guess])
  }

  return (
    <div>
      <h2>
        <label htmlFor={`guesser_${number}`}>Player {number}</label>
      </h2>
      <div id={`guesser_${number}`}>
        <div>
          {guesses.map((guess, i) => (
            <FlexBox justifyContent='space-around' key={i}>
              <p>{guess.word}</p>
              <p>{guess.letters}</p>
            </FlexBox>
          ))}
        </div>
        <Guesser
          addGuess={addGuess}
          autocomplete={number === 2}
          myWord='word'
        />
      </div>
    </div>
  )
}

Player.propTypes = {
  number: PropTypes.number.isRequired,
}

export { Player }
