import React from 'react'

import { render, cleanup } from '@testing-library/react'
import { bindElementToQueries } from '@testing-library/dom'

import { Modal } from './modal'

beforeEach(cleanup)

function renderModal(modal) {
  const renderUtils = render(modal)
  const rootNode = bindElementToQueries(document.body).getByTestId('modal_root')
  return {
    rootNode,
    ...renderUtils,
    ...bindElementToQueries(rootNode),
  }
}

test('renders the children', () => {
  const { getByTestId } = renderModal(
    <Modal>
      <div data-testid='child' />
    </Modal>,
  )
  expect(getByTestId('child')).toBeInTheDocument()
})

test('removes the node from the document when it unmounts', () => {
  const { unmount, rootNode } = renderModal(<Modal />)
  expect(document.body.contains(rootNode)).toBe(true)
  unmount()
  expect(document.body.contains(rootNode)).toBe(false)
})
