import React, { useState } from 'react'

const InputWithValidation = () => {
  const [value, setValue] = useState('')
  const [warning, setWarning] = useState('')

  const onChange = event => {
    const newValue = event.target.value

    setValue(newValue)
    setWarning(validateWord(newValue))
  }

  return (
    <div>
      <input
        placeholder='Enter word...'
        type='text'
        onChange={onChange}
        value={value}
      />
      {warning && <p>{warning}</p>}
    </div>
  )
}

export { InputWithValidation }

const WARNINGS = {
  TOO_SHORT: 'Too short',
  TOO_LONG: 'Too long',
}

const validateWord = word => {
  if (!word) {
    return ''
  }
  if (word.length < 4) {
    return WARNINGS.TOO_SHORT
  }
  if (word.length > 4) {
    return WARNINGS.TOO_LONG
  }

  return ''
}
