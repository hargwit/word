import React from 'react'

import { Letters } from './letters/letters'
import { Player } from './player/player'
import { MyWord } from './my-word/my-word'
import { MyWordProvider } from './my-word/my-word-context'
import { Header } from './header/header'
import { CssBaseline } from '@material-ui/core'

const App = () => (
  <>
    <CssBaseline />
    <div style={styles.root}>
      <Header />
      <div style={styles.content}>
        <Letters />
        <MyWordProvider>
          <Player number={1} />
          <Player number={2} />
          <MyWord />
        </MyWordProvider>
      </div>
    </div>
  </>
)

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    maxWidth: '800px',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '2rem',
  },
}

export { App }
