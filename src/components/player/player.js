import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Guesser } from '../input/guesser/guesser'
import { Typography } from '@material-ui/core'

const Player = ({ number }) => {
  const [guesses, setGuesses] = useState([])

  const addGuess = guess => {
    setGuesses([...guesses, guess])
  }

  return (
    <div style={styles.root}>
      <Typography variant='h5'>
        <label htmlFor={`guesser_${number}`}>Player {number}</label>
      </Typography>
      <div id={`guesser_${number}`} style={styles.container}>
        <div style={styles.guesses}>
          {guesses.map((guess, i) => (
            <div key={`${guess}_${i}`} style={styles.guess}>
              <Typography style={styles.word}>{guess.word}</Typography>
              <Typography style={styles.number}>{guess.letters}</Typography>
            </div>
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

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '5px',
  },
  guesses: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  guess: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '52px',
  },
  word: {
    width: '50px',
  },
  number: {
    width: '10px',
  },
}

export { Player }
