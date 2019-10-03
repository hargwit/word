import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Letter = ({ letter }) => {
  const [selected, setSelected] = useState(false)
  const [rejected, setRejected] = useState(false)

  const SubComponent = selected ? SelectedLi : rejected ? RejectedLi : Li

  function toggleRejected() {
    setRejected(!rejected)
  }

  return <SubComponent onClick={() => toggleRejected()}>{letter}</SubComponent>
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
}

export { Letter }

const Li = styled('li')`
  color: black;
`

const RejectedLi = styled('li')`
  color: red;
  text-decoration: line-through;
`

const SelectedLi = styled('li')`
  color: green;
  font-weight: bold;
`
