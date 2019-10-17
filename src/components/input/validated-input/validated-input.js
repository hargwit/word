import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { hasDuplicates, checkLength } from '../validated-input/validation'
import { WARNINGS } from '../constants'

const ValidatedInput = ({ setWarning, setGuess }) => {
  const [word, setWord] = useState('')

  const updateWord = event => {
    const newWord = event.target.value
    setWord(newWord)

    const warning = getWarning(newWord)
    setWarning(warning)

    if (!warning) {
      setGuess(newWord)
    }
  }

  function getWarning(word) {
    if (!word) {
      return ''
    }
    if (checkLength(word) === -1) {
      return WARNINGS.TOO_SHORT
    }
    if (checkLength(word) === 1) {
      return WARNINGS.TOO_LONG
    }
    if (hasDuplicates(word)) {
      return WARNINGS.NO_DUPLICATES
    }

    return ''
  }

  return (
    <>
      <input
        placeholder='Enter word...'
        type='text'
        onChange={updateWord}
        value={word}
        aria-label='Enter guess here'
      />
    </>
  )
}

ValidatedInput.propTypes = {
  setWarning: PropTypes.func,
  setGuess: PropTypes.func,
}

export { ValidatedInput }
