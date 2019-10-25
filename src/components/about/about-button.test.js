import React from 'react'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AboutButton } from './about-button'

test('shows modal with working close button on click', () => {
  const { getByTestId, queryByTestId, getByText, queryByText } = render(
    <AboutButton />,
  )

  expect(queryByTestId('modal_root')).toBeNull()

  userEvent.click(getByText('About'))

  expect(getByTestId('modal_root')).toBeInTheDocument()
  expect(getByText('About Word')).toBeInTheDocument()
  expect(getByTestId('close_button')).toBeInTheDocument()

  userEvent.click(getByTestId('close_button'))

  expect(queryByTestId('modal_root')).toBeNull()
  expect(queryByText('About Word')).toBeNull()
  expect(queryByTestId('close_button')).toBeNull()
})
