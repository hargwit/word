import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Player } from './player'

test('renders player number based on prop', () => {
  const { getByText, queryByText, rerender } = render(<Player number={1} />)

  expect(getByText('Player 1')).toBeInTheDocument()

  rerender(<Player number={2} />)

  expect(getByText('Player 2')).toBeInTheDocument()
  expect(queryByText('Player 1')).toBeNull()
})

test('displays guesses correctly', () => {
  const { getByTestId, getByPlaceholderText, getByText } = render(
    <Player number={1} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  userEvent.type(getByTestId('letters_input'), '1')
  userEvent.click(getByTestId('submit_button'))

  expect(getByText('word')).toBeInTheDocument()
  expect(getByText('1')).toBeInTheDocument()

  userEvent.type(getByPlaceholderText('Enter word...'), 'town')
  userEvent.type(getByTestId('letters_input'), '2')
  userEvent.click(getByTestId('submit_button'))

  expect(getByText('word')).toBeInTheDocument()
  expect(getByText('1')).toBeInTheDocument()
  expect(getByText('town')).toBeInTheDocument()
  expect(getByText('2')).toBeInTheDocument()
})

test('turns on autocomplete for player 2', () => {
  const { getByTestId, getByPlaceholderText, getByText } = render(
    <Player number={2} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  userEvent.click(getByTestId('submit_button'))

  expect(getByText('word')).toBeInTheDocument()
  expect(getByText('4')).toBeInTheDocument()
})