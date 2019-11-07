import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MyWord } from './my-word'

import { useMyWord } from './my-word-context'

jest.mock('./my-word-context', () => ({
  useMyWord: jest.fn(() => ({ myWord: '', setWord: jest.fn() })),
}))

test('renders a title, input and a button that is disabled when input has no value', () => {
  const { getByLabelText, getByTestId, getByText } = render(<MyWord />)

  expect(getByText('My Word')).toBeInTheDocument()
  expect(getByLabelText('Enter word...')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()
})

test('disables button when warning is present', () => {
  const { getByLabelText, getByTestId, getByText } = render(<MyWord />)

  userEvent.type(getByLabelText('Enter word...'), 'wood')

  expect(getByText('No duplicates')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByLabelText('Enter word...'), 'word')
  expect(getByTestId('submit_button')).toBeEnabled()
})

test('calls setWord on submit and then hides submit button and disables input', () => {
  const setMyWord = jest.fn()
  useMyWord.mockImplementation(() => ({ setMyWord }))
  const { getByLabelText, getByTestId, queryByTestId, rerender } = render(
    <MyWord />,
  )

  userEvent.type(getByLabelText('Enter word...'), 'word')
  userEvent.click(getByTestId('submit_button'))

  expect(setMyWord).toHaveBeenCalled()
  expect(setMyWord).toHaveBeenCalledTimes(1)
  expect(setMyWord).toHaveBeenCalledWith('word')

  useMyWord.mockImplementation(() => ({ myWord: 'word', setMyWord }))

  rerender(<MyWord />)

  expect(queryByTestId('submit_button')).toBeNull()
  expect(getByLabelText('Enter word...')).toBeDisabled()
})
