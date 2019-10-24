import React, { useState } from 'react'
import { ValidatedInput } from '../input/validated-input/validated-input'
import { useMyWord } from './my-word-context'

const MyWord = () => {
  const { myWord, setWord } = useMyWord()
  const [word, setLocalWord] = useState('')
  const [valid, setValid] = useState(false)

  const onSubmit = event => {
    if (!myWord && valid) {
      setWord(word)
    }
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <ValidatedInput
        disabled={!!myWord}
        setWord={setLocalWord}
        setValid={setValid}
      />
      {!myWord && (
        <input
          type='submit'
          value='✓'
          data-testid='submit_button'
          disabled={!word || !valid}
          aria-label='Submit guess'
        />
      )}
    </form>
  )
}

export { MyWord }
