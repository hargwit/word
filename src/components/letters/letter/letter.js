import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import { FlexBox } from '../../layout/flex-box'

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
      <FlexBox>
        <button data-testid='select_button' onClick={() => toggleSelected()}>
          ✓
        </button>
        <button data-testid='reject_button' onClick={() => toggleRejected()}>
          ✗
        </button>
      </FlexBox>
    ) : null

  return (
    <FlexBox>
      <SubComponent onClick={() => toggleMenu()}>{letter}</SubComponent>
      <Menu />
    </FlexBox>
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
