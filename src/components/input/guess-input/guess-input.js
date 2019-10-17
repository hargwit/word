import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ValidatedInput } from '../validated-input/validated-input'
import { WARNINGS } from '../constants'

const GuessInput = ({ addGuess, autocomplete, myWord }) => {
  const [word, setWord] = useState('')
  const [warning, setWarning] = useState('')
  const [letters, setLetters] = useState(0)

  const setGuess = newWord => {
    setWord(newWord)

    if (autocomplete && myWord) {
      setLetters(lettersInCommon(newWord, myWord))
    }
  }

  const updateLetters = event => {
    const newLetters = event.target.value
    setLetters(newLetters)
    setWarning(getWarning(newLetters))
  }

  function getWarning(letters) {
    if (letters < 0 || letters > 4) {
      return WARNINGS.LETTERS_SIZE
    }
    return warning
  }

  function lettersInCommon(word1, word2) {
    return [...word1].reduce((total, letter) => {
      if (word2.includes(letter)) {
        total++
      }
      return total
    }, 0)
  }

  function onSubmit(event) {
    const payload = {
      word: word,
      letters: parseInt(letters),
    }
    addGuess(payload)

    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ValidatedInput setWarning={setWarning} setGuess={setGuess} />
        <input
          data-testid='letters_input'
          type='number'
          onChange={updateLetters}
          value={letters}
          disabled={autocomplete && myWord}
          aria-label='Number of letters in common'
        />
        <input
          type='submit'
          value='✓'
          data-testid='submit_button'
          disabled={!word || !!warning}
          aria-label='Submit guess'
        />
      </form>
      {warning && <p>{warning}</p>}
    </div>
  )
}

GuessInput.propTypes = {
  addGuess: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
  myWord: PropTypes.string,
}

export { GuessInput }
