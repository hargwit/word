import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MyWord } from './my-word'

import { useMyWord } from './my-word-context'

jest.mock('./my-word-context', () => ({
  useMyWord: jest.fn(() => ({ myWord: '', setWord: jest.fn() })),
}))

test('renders an input and a button that is disabled when input has no value', () => {
  const { getByPlaceholderText, getByTestId } = render(<MyWord />)

  expect(getByPlaceholderText('Enter word...')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()
})

test('disables button when warning is present', () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<MyWord />)

  userEvent.type(getByPlaceholderText('Enter word...'), 'wood')

  expect(getByText('No duplicates')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  expect(getByTestId('submit_button')).toBeEnabled()
})

test('calls setWord on submit and then hides submit button and disables input', () => {
  const setWord = jest.fn()
  useMyWord.mockImplementation(() => ({ setWord }))
  const { getByPlaceholderText, getByTestId, queryByTestId, rerender } = render(
    <MyWord />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  userEvent.click(getByTestId('submit_button'))

  expect(setWord).toHaveBeenCalled()
  expect(setWord).toHaveBeenCalledTimes(1)
  expect(setWord).toHaveBeenCalledWith('word')

  useMyWord.mockImplementation(() => ({ myWord: 'word', setWord }))

  rerender(<MyWord />)

  expect(queryByTestId('submit_button')).toBeNull()
  expect(getByPlaceholderText('Enter word...')).toBeDisabled()
})
