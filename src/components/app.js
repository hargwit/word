import React from 'react'

import { Guesser } from './input/guesser/guesser'

const App = () => <Guesser addGuess={guess => console.log(guess)} />

export { App }
