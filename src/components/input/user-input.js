import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  hasDuplicates,
  checkLength,
  anyWarning,
  addWarning,
  removeWarning,
} from './validation'

import { WARNINGS } from './constants'

const UserInput = ({ addGuess, autocomplete, myWord, parentWarning }) => {
  const [word, setWord] = useState('')
  const [letters, setLetters] = useState(0)
  const [warnings, setWarnings] = useState(parentWarning ? [parentWarning] : [])

  const updateWord = event => {
    const newWord = event.target.value

    setWord(newWord)
    updateWarnings(newWord, letters)

    if (autocomplete && myWord) {
      setLetters(lettersInCommon(newWord, myWord))
    }
  }

  const updateLetters = event => {
    const newLetters = event.target.value

    setLetters(newLetters)
    updateWarnings(word, newLetters)
  }

  function updateWarnings(word, letters) {
    let newWarnings = [...warnings]

    if (checkLength(word) === -1) {
      newWarnings = addWarning(newWarnings, WARNINGS.TOO_SHORT)
    } else {
      newWarnings = removeWarning(newWarnings, WARNINGS.TOO_SHORT)
    }

    if (checkLength(word) === 1) {
      newWarnings = addWarning(newWarnings, WARNINGS.TOO_LONG)
    } else {
      newWarnings = removeWarning(newWarnings, WARNINGS.TOO_LONG)
    }

    if (hasDuplicates(word)) {
      newWarnings = addWarning(newWarnings, WARNINGS.NO_DUPLICATES)
    } else {
      newWarnings = removeWarning(newWarnings, WARNINGS.NO_DUPLICATES)
    }

    if (letters < 0 || letters > 4) {
      newWarnings = addWarning(newWarnings, WARNINGS.LETTERS_SIZE)
    } else {
      newWarnings = removeWarning(newWarnings, WARNINGS.LETTERS_SIZE)
    }

    setWarnings(newWarnings)
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
        <input
          placeholder='Enter word...'
          type='text'
          onChange={updateWord}
          value={word}
          aria-label='Enter guess here'
        />
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
          disabled={!word || anyWarning(warnings)}
          aria-label='Submit guess'
        />
      </form>
      {anyWarning(warnings) &&
        warnings.map((warning, index) => <p key={index}>{warning}</p>)}
    </div>
  )
}

UserInput.propTypes = {
  addGuess: PropTypes.func.isRequired,
  autocomplete: PropTypes.bool,
  myWord: PropTypes.string,
  parentWarning: PropTypes.string,
}

export { UserInput }
