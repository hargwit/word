import React from 'react'

import { Letters } from './letters/letters'
import { Player } from './player/player'
import { MyWord } from './my-word/my-word'
import { MyWordProvider } from './my-word/my-word-context'
import { Header } from './header/header'
import { makeStyles } from '@material-ui/styles'
import { Container, CssBaseline, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <Container maxWidth='md'>
          <Grid
            container
            spacing={3}
            direction='row'
            justify='space-evenly'
            alignItems='flex-start'
          >
            <Grid item>
              <Letters />
            </Grid>
            <MyWordProvider>
              <Grid item>
                <Player number={1} />
              </Grid>
              <Grid item>
                <Player number={2} />
              </Grid>
              <Grid item>
                <MyWord />
              </Grid>
            </MyWordProvider>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export { App }
