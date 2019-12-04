import React from 'react'

import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import { AboutButton } from '../about/about-button'

const Header = () => (
  <AppBar position='static'>
    <Container maxWidth='md'>
      <Toolbar>
        <Typography variant='h4' style={styles.title}>
          Word
        </Typography>
        <AboutButton />
      </Toolbar>
    </Container>
  </AppBar>
)

const styles = {
  title: {
    flexGrow: 1,
  },
}

export { Header }
