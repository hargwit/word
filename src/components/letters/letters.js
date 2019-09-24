import React from 'react'

const Letters = () => {
  function getLetters() {
    const letters = []
    for (let i = 0; i < 26; i++) {
      letters.push(<li key={i}>{String.fromCharCode(97 + i)}</li>)
    }
    return letters
  }

  return <ul>{getLetters()}</ul>
}

export { Letters }
