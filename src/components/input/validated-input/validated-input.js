import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  hasDuplicates,
  checkLength,
  addWarning,
  anyWarning,
} from './validation'

import { WARNINGS } from '../constants'

const ValidatedInput = ({ setWord, setValid, parentWarning, disabled }) => {
  const [warnings, setWarnings] = useState([])

  const onUpdate = event => {
    const newWord = event.target.value

    const warnings = getWarnings(newWord)

    setValid(!anyWarning(warnings))
    setWarnings(warnings)
    setWord(newWord)
  }

  function getWarnings(word) {
    let newWarnings = []

    if (checkLength(word) === -1) {
      newWarnings = addWarning(newWarnings, WARNINGS.TOO_SHORT)
    }

    if (checkLength(word) === 1) {
      newWarnings = addWarning(newWarnings, WARNINGS.TOO_LONG)
    }

    if (hasDuplicates(word)) {
      newWarnings = addWarning(newWarnings, WARNINGS.NO_DUPLICATES)
    }

    return newWarnings
  }

  return (
    <>
      <input
        placeholder='Enter word...'
        type='text'
        onChange={onUpdate}
        disabled={disabled}
        aria-label='Enter word here'
      />
      {anyWarning(warnings) &&
        warnings.map((warning, index) => <p key={index}>{warning}</p>)}
      {parentWarning && <p>{parentWarning}</p>}
    </>
  )
}

ValidatedInput.propTypes = {
  setWord: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired,
  parentWarning: PropTypes.string,
  disabled: PropTypes.bool,
}

export { ValidatedInput }
