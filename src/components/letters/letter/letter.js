import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: props => (props.showMenu ? 'rgba(0, 0, 0, 0.1)' : ''),
    marginTop: 4,
    marginBottom: 4,
  },
  letter: props => {
    let specificStyling
    if (props.selected) {
      specificStyling = {
        color: 'green',
        fontWeight: 'bold',
      }
    } else if (props.rejected) {
      specificStyling = {
        color: 'red',
        textDecoration: 'line-through',
      }
    } else {
      specificStyling = {
        color: 'black',
      }
    }
    return { marginTop: '0.25rem', marginBottom: '0.25rem', ...specificStyling }
  },
})

const Letter = ({ letter }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selected, setSelected] = useState(false)
  const [rejected, setRejected] = useState(false)
  const classes = useStyles({ showMenu, selected, rejected })

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
    <div className={classes.root}>
      <Typography onClick={() => toggleMenu()} className={classes.letter}>
        {letter}
      </Typography>
      <Menu />
    </div>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
}

export { Letter }
