import React from 'react'
import { render } from '@testing-library/react'

import { Letters } from './letters'

test('Contains the whole alphabet', () => {
  const { getByText } = render(<Letters />)

  expect(getByText(/a/)).toBeInTheDocument()
  expect(getByText(/b/)).toBeInTheDocument()
  expect(getByText(/c/)).toBeInTheDocument()
  expect(getByText(/d/)).toBeInTheDocument()
  expect(getByText(/e/)).toBeInTheDocument()
  expect(getByText(/f/)).toBeInTheDocument()
  expect(getByText(/g/)).toBeInTheDocument()
  expect(getByText(/h/)).toBeInTheDocument()
  expect(getByText(/i/)).toBeInTheDocument()
  expect(getByText(/j/)).toBeInTheDocument()
  expect(getByText(/k/)).toBeInTheDocument()
  expect(getByText(/l/)).toBeInTheDocument()
  expect(getByText(/m/)).toBeInTheDocument()
  expect(getByText(/n/)).toBeInTheDocument()
  expect(getByText(/o/)).toBeInTheDocument()
  expect(getByText(/p/)).toBeInTheDocument()
  expect(getByText(/q/)).toBeInTheDocument()
  expect(getByText(/r/)).toBeInTheDocument()
  expect(getByText(/s/)).toBeInTheDocument()
  expect(getByText(/t/)).toBeInTheDocument()
  expect(getByText(/u/)).toBeInTheDocument()
  expect(getByText(/v/)).toBeInTheDocument()
  expect(getByText(/w/)).toBeInTheDocument()
  expect(getByText(/x/)).toBeInTheDocument()
  expect(getByText(/y/)).toBeInTheDocument()
  expect(getByText(/z/)).toBeInTheDocument()
})
