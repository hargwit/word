import {
  hasDuplicates,
  checkLength,
  addWarning,
  removeWarning,
  anyWarning,
  includesWarning,
} from './validation'

import { WARNINGS } from './constants'

test('includes warning returns true if warning included, false if not', () => {
  let expected = false
  let actual = includesWarning([], WARNINGS.TOO_SHORT)

  expect(actual).toBe(expected)

  expected = true
  actual = includesWarning([WARNINGS.TOO_SHORT], WARNINGS.TOO_SHORT)

  expect(actual).toBe(expected)
})

test('add warning returns the passed list plus the warning', () => {
  let expected = [WARNINGS.TOO_LONG, WARNINGS.TOO_SHORT]
  let actual = addWarning([WARNINGS.TOO_LONG], WARNINGS.TOO_SHORT)

  expect(actual).toEqual(expected)

  expected = [WARNINGS.TOO_SHORT]
  actual = addWarning([WARNINGS.TOO_SHORT], WARNINGS.TOO_SHORT)

  expect(actual).toEqual(expected)
})

test('remove warning returns passed list without the warning', () => {
  let expected = [WARNINGS.TOO_LONG]
  let actual = removeWarning(
    [WARNINGS.TOO_LONG, WARNINGS.TOO_SHORT],
    WARNINGS.TOO_SHORT,
  )

  expect(actual).toEqual(expected)

  expected = [WARNINGS.TOO_LONG]
  actual = removeWarning([WARNINGS.TOO_LONG], WARNINGS.TOO_SHORT)

  expect(actual).toEqual(expected)
})

test('any warning returns true if there is a warning, false if not', () => {
  let expected = true
  let actual = anyWarning([WARNINGS.TOO_SHORT])

  expect(actual).toBe(expected)

  expected = false
  actual = anyWarning([])

  expect(actual).toBe(expected)
})

test('hasDuplicates returns true if there is a duplicate', () => {
  const expected = true
  const actual = hasDuplicates('wood')

  expect(actual).toBe(expected)
})

test('hasDuplicates returns false if there is not a duplicate', () => {
  const expected = false
  const actual = hasDuplicates('word')

  expect(actual).toBe(expected)
})

test('checkLength returns -1 if word too short', () => {
  const expected = -1
  const actual = checkLength('wor')

  expect(actual).toBe(expected)
})

test('checkLength returns 1 if word too long', () => {
  const expected = 1
  const actual = checkLength('wordy')

  expect(actual).toBe(expected)
})

test('checkLength returns 0 if word correct length', () => {
  const expected = 0
  const actual = checkLength('word')

  expect(actual).toBe(expected)
})
