import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Guesser } from './guesser'

test('shows placeholder text and disabled submit button when no word is entered', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  expect(getByPlaceholderText('Enter word...')).toBeInTheDocument()
  expect(getByTestId('letters_input')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  expect(getByTestId('submit_button')).toBeEnabled()
})

test('disables button when warning is present', () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'wood')

  expect(getByText('No duplicates')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  expect(getByTestId('submit_button')).toBeEnabled()
})

test('user can only enter numbers between 0 and 4', () => {
  const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')

  userEvent.type(getByTestId('letters_input'), '-1')
  expect(getByText('Must be between 0-4')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByTestId('letters_input'), '0')
  expect(queryByText('Must be between 0-4')).toBeNull()
  expect(getByTestId('submit_button')).toBeEnabled()

  userEvent.type(getByTestId('letters_input'), '1')
  expect(queryByText('Must be between 0-4')).toBeNull()
  expect(getByTestId('submit_button')).toBeEnabled()

  userEvent.type(getByTestId('letters_input'), '2')
  expect(queryByText('Must be between 0-4')).toBeNull()
  expect(getByTestId('submit_button')).toBeEnabled()

  userEvent.type(getByTestId('letters_input'), '3')
  expect(queryByText('Must be between 0-4')).toBeNull()
  expect(getByTestId('submit_button')).toBeEnabled()

  userEvent.type(getByTestId('letters_input'), '4')
  expect(queryByText('Must be between 0-4')).toBeNull()
  expect(getByTestId('submit_button')).toBeEnabled()

  userEvent.type(getByTestId('letters_input'), '5')
  expect(getByText('Must be between 0-4')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()
})

test('calls add guess with correct guess format on submit', () => {
  const addGuess = jest.fn()

  const { getByPlaceholderText, getByTestId } = render(
    <Guesser addGuess={addGuess} />,
  )

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  userEvent.type(getByTestId('letters_input'), '1')
  userEvent.click(getByTestId('submit_button'))

  expect(addGuess).toHaveBeenCalledTimes(1)

  const expectedPayload = {
    word: 'word',
    letters: 1,
  }
  expect(addGuess).toHaveBeenCalledWith(expectedPayload)
})

test('letters is auto-populated and not editable if autocomplete is set to true', () => {
  const { getByPlaceholderText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} autocomplete myWord='word' />,
  )

  expect(getByTestId('letters_input')).toBeDisabled()

  userEvent.type(getByPlaceholderText('Enter word...'), 'wins')
  expect(getByTestId('letters_input').value).toEqual('1')

  userEvent.type(getByPlaceholderText('Enter word...'), 'wars')
  expect(getByTestId('letters_input').value).toEqual('2')

  userEvent.type(getByPlaceholderText('Enter word...'), 'ward')
  expect(getByTestId('letters_input').value).toEqual('3')

  userEvent.type(getByPlaceholderText('Enter word...'), 'word')
  expect(getByTestId('letters_input').value).toEqual('4')
})