import React, { useState } from 'react'
import { ValidatedInput } from '../input/validated-input/validated-input'
import { useMyWord } from './my-word-context'

const MyWord = () => {
  const { myWord, setMyWord } = useMyWord()
  const [word, setLocalWord] = useState('')
  const [valid, setValid] = useState(false)

  const onSubmit = event => {
    if (!myWord && valid) {
      setMyWord(word)
    }
    event.preventDefault()
  }

  return (
    <div>
      <h2>
        <label htmlFor='my_word_form'>My Word</label>
      </h2>
      <form onSubmit={onSubmit} id='my_word_form'>
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
    </div>
  )
}

export { MyWord }
