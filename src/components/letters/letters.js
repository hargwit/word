import React from 'react'

import { Letter } from './letter/letter'

const Letters = () => {
  function getLetters() {
    const letters = []
    for (let i = 0; i < 26; i++) {
      letters.push(<Letter key={i} letter={String.fromCharCode(97 + i)} />)
    }
    return letters
  }

  return (
    <>
      <h2>Letters</h2>
      <ul>{getLetters()}</ul>
    </>
  )
}

export { Letters }
