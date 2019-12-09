import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Guesser } from './guesser'

import { INPUT_LABEL } from '../constants'

import { useMyWord } from '../../my-word/my-word-context'
jest.mock('../../my-word/my-word-context')
beforeEach(() => {
  jest.resetAllMocks()
})

test('shows placeholder text and disabled submit button when no word is entered', () => {
  useMyWord.mockReturnValue({ myWord: 'word' })
  const { getByLabelText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  expect(getByLabelText(INPUT_LABEL)).toBeInTheDocument()
  expect(getByTestId('letters_input')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByLabelText(INPUT_LABEL), 'word')

  expect(getByTestId('submit_button')).toBeEnabled()
})

test('disables button when warning is present', () => {
  useMyWord.mockReturnValue({ myWord: 'word' })
  const { getByLabelText, getByText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  userEvent.type(getByLabelText(INPUT_LABEL), 'wood')

  expect(getByText('No duplicates')).toBeInTheDocument()
  expect(getByTestId('submit_button')).toBeDisabled()

  userEvent.type(getByLabelText(INPUT_LABEL), 'word')
  expect(getByTestId('submit_button')).toBeEnabled()
})

test('user can only enter numbers between 0 and 4', () => {
  useMyWord.mockReturnValue({ myWord: 'word' })
  const { getByLabelText, getByText, getByTestId, queryByText } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  userEvent.type(getByLabelText(INPUT_LABEL), 'word')

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
  useMyWord.mockReturnValue({ myWord: 'word' })
  const addGuess = jest.fn()

  const { getByLabelText, getByTestId } = render(
    <Guesser addGuess={addGuess} />,
  )

  userEvent.type(getByLabelText(INPUT_LABEL), 'word')
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
  useMyWord.mockReturnValue({ myWord: 'word' })

  const { getByLabelText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} autocomplete />,
  )

  expect(getByTestId('letters_input')).toBeDisabled()

  userEvent.type(getByLabelText(INPUT_LABEL), 'wins')
  expect(getByTestId('letters_input')).toHaveValue(1)

  userEvent.type(getByLabelText(INPUT_LABEL), 'wars')
  expect(getByTestId('letters_input')).toHaveValue(2)

  userEvent.type(getByLabelText(INPUT_LABEL), 'ward')
  expect(getByTestId('letters_input')).toHaveValue(3)

  userEvent.type(getByLabelText(INPUT_LABEL), 'word')
  expect(getByTestId('letters_input')).toHaveValue(4)
})

test('letters correctly match irrespective of case', () => {
  useMyWord.mockReturnValue({ myWord: 'word' })

  const { getByLabelText, getByTestId } = render(
    <Guesser addGuess={jest.fn()} autocomplete />,
  )

  userEvent.type(getByLabelText(INPUT_LABEL), 'WoRd')
  expect(getByTestId('letters_input')).toHaveValue(4)
})

test('clears inputs on submit', () => {
  useMyWord.mockReturnValue({ myWord: 'word' })
  const addGuess = jest.fn()

  const { getByLabelText, getByTestId } = render(
    <Guesser addGuess={addGuess} />,
  )

  userEvent.type(getByLabelText(INPUT_LABEL), 'word')
  userEvent.type(getByTestId('letters_input'), '3')

  expect(getByLabelText(INPUT_LABEL)).toHaveValue('word')
  expect(getByTestId('letters_input')).toHaveValue(3)

  userEvent.click(getByTestId('submit_button'))

  expect(addGuess).toHaveBeenCalled()
  expect(getByLabelText(INPUT_LABEL)).toHaveValue('')
  expect(getByTestId('letters_input')).toHaveValue(0)
})

test('inputs are disabled until a global word is set', () => {
  useMyWord.mockReturnValue({ myWord: '' })
  const { getByLabelText, getByTestId, rerender } = render(
    <Guesser addGuess={jest.fn()} />,
  )

  expect(getByLabelText(INPUT_LABEL)).toBeDisabled()
  expect(getByTestId('letters_input')).toBeDisabled()

  useMyWord.mockReturnValue({ myWord: 'word' })

  rerender(<Guesser addGuess={jest.fn()} />)

  expect(getByLabelText(INPUT_LABEL)).toBeEnabled()
  expect(getByTestId('letters_input')).toBeEnabled()
})
