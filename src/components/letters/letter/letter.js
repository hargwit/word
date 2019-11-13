import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, ButtonGroup, Typography } from '@material-ui/core'

const Letter = ({ letter }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selected, setSelected] = useState(false)
  const [rejected, setRejected] = useState(false)
  const styles = makeStyles({ showMenu, selected, rejected })

  function toggleMenu() {
    setShowMenu(!showMenu)
  }
  function toggleRejected() {
    setRejected(!rejected)
    setSelected(false)
    setShowMenu(false)
  }
  function toggleSelected() {
    setSelected(!selected)
    setRejected(false)
    setShowMenu(false)
  }

  const Menu = () =>
    showMenu ? (
      <ButtonGroup
        variant='contained'
        size='small'
        aria-label='letter control button group'
      >
        <Button
          color='primary'
          data-testid='select_button'
          onClick={() => toggleSelected()}
        >
          ✓
        </Button>
        <Button
          color='secondary'
          data-testid='reject_button'
          onClick={() => toggleRejected()}
        >
          ✗
        </Button>
      </ButtonGroup>
    ) : null

  return (
    <div style={styles.root}>
      <Typography onClick={toggleMenu} style={styles.letter}>
        {letter}
      </Typography>
      <Menu />
    </div>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
}

const makeStyles = ({ showMenu, rejected, selected }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: showMenu ? 'rgba(0, 0, 0, 0.1)' : 'white',
    marginTop: 4,
    marginBottom: 4,
  },
  letter: {
    color: selected ? 'green' : rejected ? 'red' : 'black',
    fontWeight: selected ? 'bold' : 'normal',
    textDecoration: rejected ? 'line-through' : '',
  },
})

export { Letter }
