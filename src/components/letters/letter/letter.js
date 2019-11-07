import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Grid, Button } from '@material-ui/core'
import styled from '@emotion/styled'

const Letter = ({ letter }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selected, setSelected] = useState(false)
  const [rejected, setRejected] = useState(false)

  const SubComponent = selected ? SelectedP : rejected ? RejectedP : P

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
      <>
        <Button
          data-testid='select_button'
          onClick={() => toggleSelected()}
          size='small'
        >
          ✓
        </Button>
        <Button
          data-testid='reject_button'
          onClick={() => toggleRejected()}
          size='small'
        >
          ✗
        </Button>
      </>
    ) : null

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item>
        <SubComponent onClick={() => toggleMenu()}>{letter}</SubComponent>
      </Grid>
      <Grid item>
        <Menu />
      </Grid>
    </Grid>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
}

export { Letter }

const P = styled('p')`
  color: black;
`

const RejectedP = styled('p')`
  color: red;
  text-decoration: line-through;
`

const SelectedP = styled('p')`
  color: green;
  font-weight: bold;
`
